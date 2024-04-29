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
    department: "",
    semester: 1,
    courses: [],
    profilePicture:
      "https://www.rainbowschoolnellore.com/images/student-profile-1.jpg",
  });
  const handleDataChange = (e) => {
    setStudentData({
      ...studentData,
      [e.target.id]: e.target.value,
    });
  };

  useEffect(() => {}, [studentData.department]);

  return (
    <div className="md:pl-64 p-7  overflow-hidden">
      <h1 className="text-3xl font-semibold mb-8">Add Student Details</h1>
      <form className="flex flex-col lg:flex-row gap-16">
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
            <div className="w-full flex gap-5 items-start">
              <div className="w-full">
                <Label value="Department" />
                <Select
                  value={studentData.department}
                  onChange={handleDataChange}
                  id="department"
                >
                  <option value="">Select Department</option>
                  {Object.keys(coursesDetails).map((department) => (
                    <option key={department} value={department}>
                      {department}
                    </option>
                  ))}
                </Select>
              </div>
              <div className="flex w-full flex-col gap-4">
                {studentData.department &&
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
                                        id={faculty}
                                        name={courseCode}
                                        value={faculty}
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
                  )}
              </div>
              <div className="w-full"></div>
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
          <Button className="mt-4 w-full" gradientDuoTone={"greenToBlue"}>
            Add Student
          </Button>
        </div>
      </form>
    </div>
  );
}
