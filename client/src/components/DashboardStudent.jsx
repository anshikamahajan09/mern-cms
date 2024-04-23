import { Card } from "flowbite-react";
import { PiMathOperationsBold } from "react-icons/pi";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { AiFillDatabase } from "react-icons/ai";
import { MdComputer } from "react-icons/md";
import { GiArtificialHive } from "react-icons/gi";

export default function DashboardStudent() {
  return (
    <div className="p-7 w-full flex flex-col md:flex-row gap-14">
      {/* right */}
      <div className="flex flex-col w-2/3 gap-10 ">
        {/* top */}
        <div>
          <h1 className=" font-bold text-3xl ">Attendance</h1>
          <div className="flex w-full justify-between gap-5 py-5">
            <Card className="w-1/4 rounded-3xl flex flex-col gap-2 shadow-2xl border-0">
              <PiMathOperationsBold className="bg-indigo-600 text-white rounded-full text-5xl p-3 shadow-lg" />
              <h1 className="text-lg font-bold">Mathematical Engineering</h1>
              <h1 className="text-2xl font-bold">15/25</h1>
              <CircularProgressbar
                
                className="h-28"
                value={60}
                text={`${60}%`}
              />
            </Card>
            <Card className="w-1/4 rounded-3xl flex flex-col gap-2 shadow-2xl border-0">
              <AiFillDatabase className="bg-red-500 text-white rounded-full text-5xl p-3 shadow-lg" />
              <h1 className="text-lg font-bold">Database Management</h1>
              <h1 className="text-2xl font-bold">12/14</h1>
              <CircularProgressbar
                className="h-28"
                value={86}
                text={`${86}%`}
              />
            </Card>
            <Card className="w-1/4 rounded-3xl flex flex-col gap-2 shadow-2xl border-0">
              <MdComputer className="bg-lime-600 text-white rounded-full text-5xl p-3 shadow-lg" />
              <h1 className="text-lg font-bold">Object Oriented Programming</h1>
              <h1 className="text-2xl font-bold">27/29</h1>
              <CircularProgressbar
                className="h-28"
                value={93}
                text={`${93}%`}
              />
            </Card>
            <Card className="w-1/4 rounded-3xl flex flex-col gap-2 shadow-2xl border-0">
              <GiArtificialHive className="bg-teal-600 text-white rounded-full text-5xl p-3 shadow-lg" />
              <h1 className="text-lg font-bold">Artificial Intelligence</h1>
              <h1 className="text-2xl font-bold">27/30</h1>
              <CircularProgressbar
                className="h-28"
                value={81}
                text={`${81}%`}
              />
            </Card>
          </div>
        </div>
        {/* bottom */}
        <div>
          <h1 className="font-bold text-3xl">Time Table</h1>

          <div className="overflow-x-auto mt-5">
            <Table>
              <TableHead>
                <TableHeadCell>Time</TableHeadCell>
                <TableHeadCell>Room No.</TableHeadCell>
                <TableHeadCell>Subject</TableHeadCell>
                <TableHeadCell>Type</TableHeadCell>
              </TableHead>
              <TableBody className="divide-y">
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    10-11 AM
                  </TableCell>
                  <TableCell>309</TableCell>
                  <TableCell>DBMS130</TableCell>
                  <TableCell>Lecture</TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    11-12 AM
                  </TableCell>
                  <TableCell>101</TableCell>
                  <TableCell>CS200</TableCell>
                  <TableCell>Lecture</TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    01-02 PM
                  </TableCell>
                  <TableCell>111</TableCell>
                  <TableCell>MTH166</TableCell>
                  <TableCell>Lecture</TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    02-03 PM
                  </TableCell>
                  <TableCell>111</TableCell>
                  <TableCell>AIML105</TableCell>
                  <TableCell>Lecture</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      {/* left */}
      <div className="w-1/3 flex flex-col gap-10">
        {/* top */}
        <div>
          <h1 className=" font-bold text-3xl ">Announcements</h1>
          <div className="w-full my-5 bg-[#232c4e] rounded-3xl p-5 flex flex-col gap-5">
            <div>
              <span className="font-bold">Academic </span>
              <span className="text-gray-300">
                Summer training internship with Live Projects.
              </span>
              <p className="text-xs italic mt-1 text-gray-400">2 Minutes Ago</p>
            </div>
            <div>
              <span className="font-bold">Co-curricular </span>
              <span className="text-gray-300">
                Global internship oportunity by Student organization.
              </span>
              <p className="text-xs italic mt-1 text-gray-400">
                10 Minutes Ago
              </p>
            </div>
            <div>
              <span className="font-bold">Examination </span>
              <span className="text-gray-300">
                Instructions for Mid Term Examinations.
              </span>
              <p className="text-xs italic mt-1 text-gray-400">Yesterday</p>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div >
          <h1 className="font-bold text-3xl">Subject Teachers</h1>
          <div className="mt-5 flex flex-col gap-3">
            <Card className="w-full rounded-3xl shadow-2xl border-0 h-24">
              <div className="flex items-center gap-5">
                <div>
                  <img
                    src="https://tse2.mm.bing.net/th?id=OIP.Dn-8K_TiXbuob_1fMEFurQHaE7&pid=Api&P=0&h=180"
                    alt=""
                    className="rounded-full w-14 h-14 object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-lg font-bold">Mr. John Doe</h1>
                  <h1 className="text-sm text-gray-400">
                    Mathematical Engineering
                  </h1>
                </div>
              </div>
            </Card>
            <Card className="w-full rounded-3xl shadow-2xl border-0 h-24">
              <div className="flex items-center gap-5">
                <div>
                  <img
                    src="https://tse2.mm.bing.net/th?id=OIP.Dn-8K_TiXbuob_1fMEFurQHaE7&pid=Api&P=0&h=180"
                    alt=""
                    className="rounded-full w-14 h-14 object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-lg font-bold">Mr. John Doe</h1>
                  <h1 className="text-sm text-gray-400">
                    Mathematical Engineering
                  </h1>
                </div>
              </div>
            </Card>
            <Card className="w-full rounded-3xl shadow-2xl border-0 h-24">
              <div className="flex items-center gap-5">
                <div>
                  <img
                    src="https://tse2.mm.bing.net/th?id=OIP.Dn-8K_TiXbuob_1fMEFurQHaE7&pid=Api&P=0&h=180"
                    alt=""
                    className="rounded-full w-14 h-14 object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-lg font-bold">Mr. John Doe</h1>
                  <h1 className="text-sm text-gray-400">
                    Mathematical Engineering
                  </h1>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
