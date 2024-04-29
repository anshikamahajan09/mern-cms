import React, { useState, useEffect } from "react";
import { Button, Label, Radio, Select, TextInput } from "flowbite-react";
import { Table } from "flowbite-react";
import { useSelector } from "react-redux";
import { FileInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Students() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="md:pl-64 p-7  overflow-hidden">
      {currentUser.isAdmin && (
        <Link to="/admin?tab=add-student">
        <Button
          className="mb-14"
          outline
          gradientDuoTone="greenToBlue"
        >
          + Add Student
        </Button>
        </Link>
      )}
      
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
    </div>
  );
}
