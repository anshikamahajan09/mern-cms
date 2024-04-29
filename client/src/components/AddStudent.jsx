import React, { useEffect, useState } from "react";
import {
  Button,
  FileInput,
  Label,
  Radio,
  Select,
  TextInput,
} from "flowbite-react";
import { coursesDetails } from "../utils";

export default function AddStudent() {
  const [studentData, setStudentData] = useState({
    fName: "",
    lName: "",
    gender: "male",
    email: "",
    password: "",
    rollno: "",
    parentEmail: "",
    phone: "",
    address: "",
    department: "",
    semester: 1,
    courses: {},
    profilePicture:
      "https://www.rainbowschoolnellore.com/images/student-profile-1.jpg",
  });
  const [loading, setLoading] = useState(false);
  const handleDataChange = (e) => {
    const { id, value, type } = e.target;
    if (type === "radio") {
      const courseCode = e.target.name;
      setStudentData({
        ...studentData,
        courses: {
          ...studentData.courses,
          [courseCode]: value,
        },
      });
    } else {
      setStudentData({
        ...studentData,
        [id]: value,
      });
    }
  };

  useEffect(() => {
    if (studentData.department && coursesDetails[studentData.department]) {
      const defaultCourses = {};
      Object.keys(coursesDetails[studentData.department]).forEach(
        (courseCode) => {
          const course = coursesDetails[studentData.department][courseCode];
          if (course.faculty && course.faculty.length > 0) {
            defaultCourses[courseCode] = course.faculty[0];
          }
        }
      );
      setStudentData((prevData) => ({
        ...prevData,
        courses: defaultCourses,
      }));
    }
  }, [studentData.department]);

  const handleStudentSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/admin/add-student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studentData),
      });
      const data = await res.json();
      if (data.success === false) {
        console.log("Error adding student:", data.message);
        setLoading(false);
        return;
      } 
      console.log("Student added successfully");
      setLoading(false);
    } catch (error) {
      console.log("Error adding student right now:", error);
      setLoading(false);
    }
  };

  return (
    <div className="md:pl-64 p-7  overflow-hidden">
      <h1 className="text-3xl font-semibold mb-8">Add Student Details</h1>
      <form
        className="flex flex-col lg:flex-row gap-16"
        onSubmit={handleStudentSubmit}
      >
        <div className="lg:w-4/6 w-full">
          <div className=" flex-wrap flex gap-y-8 gap-x-5 ">
            <div className="w-full flex gap-5">
              <div className="w-full">
                <Label value="First name" />
                <TextInput
                  id="fName"
                  required
                  value={studentData.fName}
                  onChange={handleDataChange}
                  placeholder="Enter First Name"
                />
              </div>
              <div className="w-full">
                <Label value="Last name" />
                <TextInput
                  id="lName"
                  required
                  value={studentData.lName}
                  onChange={handleDataChange}
                  placeholder="Enter Last Name"
                />
              </div>
            </div>
            <div className="w-full flex gap-5">
              <div className="w-full">
                <Label value="Gender" />
                <Select
                  required
                  value={studentData.gender}
                  onChange={handleDataChange}
                  id="gender"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Select>
              </div>
              <div className="w-full">
                <Label value="Email" />
                <TextInput
                  value={studentData.email}
                  onChange={handleDataChange}
                  required
                  id="email"
                  placeholder="Enter Email"
                />
              </div>
              <div className="w-full">
                <Label value="Password" />
                <TextInput
                  required
                  onChange={handleDataChange}
                  value={studentData.password}
                  id="password"
                  placeholder="Enter Password"
                />
              </div>
            </div>
            <div className="w-full flex gap-5">
              <div className="w-full">
                <Label value="Roll Number" />
                <TextInput
                  id="rollno"
                  required
                  value={studentData.rollno}
                  onChange={handleDataChange}
                  placeholder="Enter Roll Number"
                />
              </div>
              <div className="w-full">
                <Label value="Parent Email" />
                <TextInput
                  id="parentEmail"
                  required
                  onChange={handleDataChange}
                  value={studentData.parentEmail}
                  placeholder="Enter Parent Email"
                />
              </div>
              <div className="w-full">
                <Label value="Phone Number" />
                <TextInput
                  required
                  id="phone"
                  onChange={handleDataChange}
                  value={studentData.phone}
                  placeholder="Enter Phone Number"
                />
              </div>
            </div>

            <div className="w-full flex gap-5">
              <div className="w-1/3">
                <Label value="Department" />
                <Select
                  value={studentData.department}
                  onChange={handleDataChange}
                  id="department"
                  required
                >
                  <option value="">Select Department</option>
                  {Object.keys(coursesDetails).map((department) => (
                    <option key={department} value={department}>
                      {department}
                    </option>
                  ))}
                </Select>
              </div>
              <div className="w-2/3">
                <Label value="Address" />
                <TextInput
                  id="address"
                  required
                  value={studentData.address}
                  onChange={handleDataChange}
                  placeholder="Enter Address"
                />
              </div>
            </div>

            <div className="flex w-full flex-col gap-4">
              {/* {studentData.department &&
                  Object.keys(coursesDetails[studentData.department]).map(
                    (courseCode, index) => {
                      const course =
                        coursesDetails[studentData.department][courseCode];
                      return (
                        <div key={index} className="flex flex-col">
                          <table className="w-full">
                            <thead>
                              {index === 0 && (
                                <tr>
                                  <th className="text-left">Course</th>
                                  <th className="pr-10">Faculty</th>
                                </tr>
                              )}
                            </thead>
                            <tbody>
                              {course.faculty && course.faculty.map((faculty, facultyIndex) => (
                                <tr key={facultyIndex}>
                                  {facultyIndex === 0 && (
                                    <td
                                      className="w-[100px]"
                                      rowSpan={course.faculty.length}
                                    >
                                      {course.title}
                                    </td>
                                  )}
                                  <td>
                                    <span className="pr-3">
                                      <Radio
                                        defaultChecked={facultyIndex === 0}
                                        id={faculty}
                                        name={courseCode}
                                        value={faculty}
                                        onChange={handleDataChange}
                                      />
                                    </span>
                                    {faculty}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      );
                    }
                  )} */}
              {studentData.department && (
                <table className="w-full">
                  <thead>
                    <tr>
                      <th>Course</th>
                      <th>Faculty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(coursesDetails[studentData.department]).map(
                      (courseCode, index) => {
                        const course =
                          coursesDetails[studentData.department][courseCode];
                        return (
                          <tr key={courseCode}>
                            <td>{course.title}</td>
                            <td className="flex w-full">
                              {course.faculty &&
                                course.faculty.map((faculty, facultyIndex) => {
                                  return (
                                    <span
                                      className="w-[150px] flex gap-2 items-center"
                                      key={facultyIndex}
                                    >
                                      <Radio
                                        id={faculty}
                                        defaultChecked={facultyIndex === 0}
                                        name={courseCode}
                                        value={faculty}
                                        onChange={handleDataChange}
                                      />
                                      {faculty}
                                    </span>
                                  );
                                })}
                            </td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
        <div className="w-full sm:w-2/6">
          <div className="w-full h-[400px] bg-slate-800 rounded-lg">
            <div
              className="bg-slate-700 h-1/3 rounded-t-lg  flex items-center justify-center  w-full relative
          "
            >
              {" "}
              <img
                className="h-36 w-36 object-cover rounded-full absolute top-1/2 "
                src="https://www.rainbowschoolnellore.com/images/student-profile-1.jpg"
              />
            </div>

            <div className="p-4 pt-28 rounded-lg flex flex-col justify-center">
              <h1 className="font-semibold text-lg mb-2">
                Select profile photo
              </h1>
              <div>
                <div>
                  <Label
                    htmlFor="file-upload-helper-text"
                    value="Upload file"
                  />
                </div>
                <FileInput
                  id="file-upload-helper-text"
                  helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)."
                />
              </div>
            </div>
          </div>
          <Button
            className="mt-4 w-full"
            gradientDuoTone={"greenToBlue"}
            type="submit"
          >
            Add Student
          </Button>
        </div>
      </form>
    </div>
  );
}
