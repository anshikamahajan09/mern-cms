import React, { useState, useEffect } from "react";
import { Button, Label, Radio, Select, TextInput } from "flowbite-react";
import { Table } from "flowbite-react";
import { useSelector } from "react-redux";
import { departmentCourses, departmentCoursesFaculty } from "../utils";
import { FileInput } from "flowbite-react";

export default function Students() {
  const { currentUser } = useSelector((state) => state.user);
  const [addButton, setAddButton] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  return (
    <div className="md:pl-64 p-7  overflow-hidden">
      {currentUser.isAdmin && !addButton && (
        <Button
          className="mb-14"
          outline
          gradientDuoTone="greenToBlue"
          onClick={() => setAddButton(true)}
        >
          + Add Student
        </Button>
      )}
      {addButton ? (
        <div>
          <h1 className="text-3xl font-semibold mb-8">Add Student Details</h1>
          <form className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-4/6 w-full">
              <div className=" flex-wrap flex gap-y-8 gap-x-5 ">
                <div className="w-full flex gap-5">
                  <div className="w-full">
                    <Label value="First name" />
                    <TextInput id="fname" placeholder="Enter First Name" />
                  </div>
                  <div className="w-full">
                    <Label value="Last name" />
                    <TextInput id="lname" placeholder="Enter Last Name" />
                  </div>
                </div>
                <div className="w-full flex gap-5">
                  <div className="w-full">
                    <Label value="Gender" />
                    <Select id="gender">
                      <option value="female">Female</option>
                      <option value="female">Male</option>
                      <option value="female">Other</option>
                    </Select>
                  </div>
                  <div className="w-full">
                    <Label value="Email" />
                    <TextInput id="email" placeholder="Enter Email" />
                  </div>
                  <div className="w-full">
                    <Label value="Password" />
                    <TextInput id="password" placeholder="Enter Password" />
                  </div>
                </div>
                <div className="w-full flex gap-5">
                  <div className="w-full">
                    <Label value="Roll Number" />
                    <TextInput id="roll-no" placeholder="Enter Roll Number" />
                  </div>
                  <div className="w-full">
                    <Label value="Parent Email" />
                    <TextInput
                      id="parent-email"
                      placeholder="Enter Parent Email"
                    />
                  </div>
                  <div className="w-full">
                    <Label value="Phone Number" />
                    <TextInput id="phone" placeholder="Enter Phone Number" />
                  </div>
                </div>
                <div className="w-full flex gap-5 items-start">
                  <div className="w-full">
                    <Label value="Department" />
                    <Select id="department" onChange={handleDepartmentChange}>
                      <option value="">Select Department</option>
                      <option value="CSE">CSE</option>
                      <option value="BBA">BBA</option>
                      <option value="PHARMA">PHARMA</option>
                    </Select>
                  </div>
                  <div className="flex w-full flex-col gap-4">
                    {selectedDepartment &&
                      departmentCourses[selectedDepartment].map(
                        (course, index) => (
                          <div key={course} className="flex flex-col">
                            <table className="w-full ">
                              <thead>
                                {index === 0 && (
                                  <tr>
                                    <th className="text-left">Course</th>
                                    <th className="pr-10">Faculty</th>
                                  </tr>
                                )}
                              </thead>
                              <tbody className="">
                                {departmentCoursesFaculty[course].map(
                                  (faculty, facultyIndex) => (
                                    <tr key={faculty}>
                                      {/* Render course name only for the first faculty member */}
                                      {facultyIndex === 0 && (
                                        <td
                                          className="w-[100px]"
                                          rowSpan={
                                            departmentCoursesFaculty[course]
                                              .length
                                          }
                                        >
                                          {course}
                                        </td>
                                      )}
                                      {/* Render faculty name */}
                                      <td>
                                        <span span className="pr-3">
                                          <Radio
                                            id={faculty}
                                            name={course}
                                            value={faculty}
                                          />
                                        </span>
                                        {faculty}
                                      </td>
                                    </tr>
                                  )
                                )}
                              </tbody>
                            </table>
                          </div>
                        )
                      )}
                  </div>
                  <div className="w-full"></div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/6 w-full">
              <div className="w-full bg-slate-800 rounded-lg">
                <div className="h-2/3">
                  {/* top div */}
                  <div
                    className="bg-slate-700 rounded-t-lg h-2/5 flex justify-center w-full 
            "
                  >
                    {" "}
                    <img
                      src="https://thumbs.dreamstime.com/z/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg"
                      className="h-40 w-40 object-cover rounded-full  top-1/2"
                    />
                  </div>
                </div>
                <div className="h-1/3 p-4 rounded-lg flex flex-col gap-2 justify-center">
                  <h1 className="font-semibold text-lg mb-2">
                    Select profile photo
                  </h1>
                  <div>
                    <div className="mb-1">
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
              <Button className="mt-5 w-full" type="submit" gradientDuoTone="greenToBlue">
                Add Student
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <div className="flex flex-col gap-10">
          <form className="flex flex-wrap items-center gap-8">
            <div className="">
              <label className="whitespace-nowrap font-semibold">
                Roll Number :
              </label>
              <TextInput placeholder="Search..." id="rollno" type="text" />
            </div>
            <div className="">
              <label className="whitespace-nowrap font-semibold">
                Department :
              </label>
              <Select className="w-[170px]" id="department">
                <option value="cse">CSE</option>
                <option value="ece">ECE</option>
                <option value="eee">EEE</option>
                <option value="mech">MECH</option>
                <option value="civil">CIVIL</option>
              </Select>
            </div>
            <div className="">
              <label className="whitespace-nowrap font-semibold">
                Courses :
              </label>
              <Select className="w-[170px]" id="courses">
                <option value="cse">CSE100</option>
                <option value="ece">MTH100</option>
                <option value="eee">AIML100</option>
                <option value="mech">MECH100</option>
              </Select>
            </div>
            <div className="">
              <label className="whitespace-nowrap font-semibold">
                Semester :
              </label>
              <Select className="w-[170px]" id="semester">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Select>
            </div>
            <div className="">
              <label className="whitespace-nowrap font-semibold">CGPA :</label>
              <Select className="w-[170px]" id="cgpa">
                <option value="8">8 above</option>
                <option value="9">9 above</option>
                <option value="10">10</option>
              </Select>
            </div>
            <Button
              className="mt-5"
              type="submit"
              outline
              gradientDuoTone="greenToBlue"
            >
              Search
            </Button>
          </form>
          <div className=" overflow-x-scroll scrollbar lg:overflow-x-hidden dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
            <Table hoverable className="shadow-md min-w-full">
              <Table.Head>
                <Table.HeadCell>Roll No.</Table.HeadCell>
                <Table.HeadCell>Profile Picture</Table.HeadCell>
                <Table.HeadCell>Name</Table.HeadCell>
                <Table.HeadCell>Email</Table.HeadCell>
                <Table.HeadCell>Department</Table.HeadCell>
                <Table.HeadCell>CGPA</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>101</Table.Cell>
                  <Table.Cell>
                    <img
                      className="h-10 w-10"
                      src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
                    ></img>
                  </Table.Cell>
                  <Table.Cell>Anuj Kumar</Table.Cell>
                  <Table.Cell>anuj@campusflow.edu.in</Table.Cell>
                  <Table.Cell>CSE</Table.Cell>
                  <Table.Cell>9.7</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>101</Table.Cell>
                  <Table.Cell>
                    <img
                      className="h-10 w-10"
                      src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
                    ></img>
                  </Table.Cell>
                  <Table.Cell>Anuj Kumar</Table.Cell>
                  <Table.Cell>anuj@campusflow.edu.in</Table.Cell>
                  <Table.Cell>CSE</Table.Cell>
                  <Table.Cell>9.7</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>101</Table.Cell>
                  <Table.Cell>
                    <img
                      className="h-10 w-10"
                      src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
                    ></img>
                  </Table.Cell>
                  <Table.Cell>Anuj Kumar</Table.Cell>
                  <Table.Cell>anuj@campusflow.edu.in</Table.Cell>
                  <Table.Cell>CSE</Table.Cell>
                  <Table.Cell>9.7</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>101</Table.Cell>
                  <Table.Cell>
                    <img
                      className="h-10 w-10"
                      src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
                    ></img>
                  </Table.Cell>
                  <Table.Cell>Anuj Kumar</Table.Cell>
                  <Table.Cell>anuj@campusflow.edu.in</Table.Cell>
                  <Table.Cell>CSE</Table.Cell>
                  <Table.Cell>9.7</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>101</Table.Cell>
                  <Table.Cell>
                    <img
                      className="h-10 w-10"
                      src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
                    ></img>
                  </Table.Cell>
                  <Table.Cell>Anuj Kumar</Table.Cell>
                  <Table.Cell>anuj@campusflow.edu.in</Table.Cell>
                  <Table.Cell>CSE</Table.Cell>
                  <Table.Cell>9.7</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>101</Table.Cell>
                  <Table.Cell>
                    <img
                      className="h-10 w-10"
                      src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
                    ></img>
                  </Table.Cell>
                  <Table.Cell>Anuj Kumar</Table.Cell>
                  <Table.Cell>anuj@campusflow.edu.in</Table.Cell>
                  <Table.Cell>CSE</Table.Cell>
                  <Table.Cell>9.7</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>101</Table.Cell>
                  <Table.Cell>
                    <img
                      className="h-10 w-10"
                      src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
                    ></img>
                  </Table.Cell>
                  <Table.Cell>Anuj Kumar</Table.Cell>
                  <Table.Cell>anuj@campusflow.edu.in</Table.Cell>
                  <Table.Cell>CSE</Table.Cell>
                  <Table.Cell>9.7</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
}
