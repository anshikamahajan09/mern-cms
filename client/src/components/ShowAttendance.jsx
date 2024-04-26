import { Table, Label, Select, Button, Datepicker } from "flowbite-react";
import { FaCheck, FaTimes } from "react-icons/fa";
import {
  HiAcademicCap,
  HiCheckCircle,
  HiOutlineEmojiSad,
} from "react-icons/hi";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { coursesDetails } from "../utils";

export default function ShowAttendance() {
  const { currentUser } = useSelector((state) => state.user);
  const [attendanceData, setAttendanceData] = useState([]);
  const [searchQuery, setSearchQuery] = useState({
    rollno: currentUser.rollno,
    sessionId: new Date().getFullYear() ,
    courseId: "all",
    month: new Date().toLocaleString("default", { month: "short" }), 
  });

  const handleChange = (e) => {
    setSearchQuery({ ...searchQuery, [e.target.id]: e.target.value });
  };

  useEffect(()=>{
    const fetchAttendance = async() => {
      try {
        const response = await fetch("/api/faculty/fetchAttendance", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(searchQuery),
        });
        const data = await response.json();
        setAttendanceData(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchAttendance();
  }, []);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/faculty/fetchAttendance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(searchQuery),
      });
      const data = await response.json();
      setAttendanceData(data);
    } catch (err) {
      console.error(err);
    }
  };
  console.log(attendanceData);

  const [enrolledCourses, setEnrolledCourses] = useState([]);
  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        const response = await fetch("/api/student/fetchEnrolledCourses", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ rollno: currentUser.rollno }),
        });
        const data = await response.json();
        setEnrolledCourses(data.courses);
      } catch (error) {
        console.error("Error fetching enrolled courses:", error);
      }
    };
    if (currentUser.rollno) {
      fetchEnrolledCourses();
    }
  }, [currentUser.rollno]);

  

  return (
    <div className="p-7 md:pl-64 w-full ">
      <h1 className="text-3xl font-semibold">Your Attendance</h1>
      <div className="w-full flex flex-col md:flex-row gap-10">
        {/* left */}
        <div className=" w-full sm:w-3/4 mt-5 flex flex-col gap-8">
          {/* top */}
          <div>
            <form onSubmit={handleSearchSubmit} className="flex px-6  justify-start gap-6 sm:gap-12 bg-[#1f2937] items-center py-5 rounded-xl">
              {currentUser.userType != "student" && (
                <div>
                  <Label
                    className="dark:text-gray-300 dark:pl-1"
                    value="Department"
                  />
                  <Select>
                    <option>Computer Science</option>
                    <option>Electronics</option>
                    <option>Electrical</option>
                  </Select>
                </div>
              )}
              <div>
                <Label
                  className="dark:text-gray-300 dark:pl-1"
                  value="Session"
                />
                <Select
                  id="sessionId"
                  defaultValue="2024"
                  onChange={handleChange}
                >
                  <option value="2022">2021-2022</option>
                  <option value="2023">2022-2023</option>
                  <option value="2024">2023-2024</option>
                </Select>
              </div>
              <div>
                <Label
                  className="dark:text-gray-300 dark:pl-1"
                  value="Subject"
                />
                <Select
                  id="courseId"
                  onChange={handleChange}
                  defaultValue={"all"}
                >
                  <option value="all" key="all">
                    All
                  </option>
                  {enrolledCourses.map((course) => (
                    <option value={course} key={course}>
                      {coursesDetails[course].title}
                    </option>
                  ))}
                </Select>
              </div>
              <div>
                <Label className="dark:text-gray-300 dark:pl-1" value="Month" />
                <Select
                  id="month"
                  onChange={handleChange}
                  defaultValue={new Date().toLocaleString("default", {
                    month: "short",
                  })}
                >
                  <option value="all">All</option>
                  <option value="Jan">January</option>
                  <option value="Feb">February</option>
                  <option value="Mar">March</option>
                  <option value="Apr">April</option>
                  <option value="May">May</option>
                  <option value="Jun">June</option>
                  <option value="Jul">July</option>
                  <option value="Aug">August</option>
                  <option value="Sep">September</option>
                  <option value="Oct">October</option>
                  <option value="Nov">November</option>
                  <option value="Dec">December</option>
                </Select>
              </div>
              <div>
                <Button
                  type="submit"
                  className="px-4 mt-6"
                  gradientDuoTone="greenToBlue"
                >
                  Search
                </Button>
              </div>
            </form>
          </div>
          {/* bottom */}
          <div>
            <Table hoverable className="shadow-md">
              <Table.Head>
                <Table.HeadCell>Date</Table.HeadCell>
                <Table.HeadCell>Subject</Table.HeadCell>
                <Table.HeadCell>Present</Table.HeadCell>
                <Table.HeadCell>Absent</Table.HeadCell>
                <Table.HeadCell>DL</Table.HeadCell>
                <Table.HeadCell>ML</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>{new Date().toLocaleDateString()}</Table.Cell>
                  <Table.Cell>Chemistry</Table.Cell>
                  <Table.Cell>
                    <FaCheck className="text-green-500" />
                  </Table.Cell>
                  <Table.Cell>
                    <FaTimes />
                  </Table.Cell>
                  <Table.Cell>
                    <FaTimes />
                  </Table.Cell>
                  <Table.Cell>
                    <FaTimes />
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>{new Date().toLocaleDateString()}</Table.Cell>
                  <Table.Cell>Chemistry</Table.Cell>
                  <Table.Cell>
                    <FaCheck className="text-green-500" />
                  </Table.Cell>
                  <Table.Cell>
                    <FaTimes />
                  </Table.Cell>
                  <Table.Cell>
                    <FaTimes />
                  </Table.Cell>
                  <Table.Cell>
                    <FaTimes />
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>{new Date().toLocaleDateString()}</Table.Cell>
                  <Table.Cell>Chemistry</Table.Cell>
                  <Table.Cell>
                    <FaTimes />
                  </Table.Cell>
                  <Table.Cell>
                    <FaCheck className="text-green-500" />
                  </Table.Cell>
                  <Table.Cell>
                    <FaTimes />
                  </Table.Cell>
                  <Table.Cell>
                    <FaTimes />
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>{new Date().toLocaleDateString()}</Table.Cell>
                  <Table.Cell>Chemistry</Table.Cell>
                  <Table.Cell>
                    <FaCheck className="text-green-500" />
                  </Table.Cell>
                  <Table.Cell>
                    <FaTimes />
                  </Table.Cell>
                  <Table.Cell>
                    <FaTimes />
                  </Table.Cell>
                  <Table.Cell>
                    <FaTimes />
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>{new Date().toLocaleDateString()}</Table.Cell>
                  <Table.Cell>Chemistry</Table.Cell>
                  <Table.Cell>
                    <FaCheck className="text-green-500" />
                  </Table.Cell>
                  <Table.Cell>
                    <FaTimes />
                  </Table.Cell>
                  <Table.Cell>
                    <FaTimes />
                  </Table.Cell>
                  <Table.Cell>
                    <FaTimes />
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>{new Date().toLocaleDateString()}</Table.Cell>
                  <Table.Cell>Chemistry</Table.Cell>
                  <Table.Cell>
                    <FaCheck className="text-green-500" />
                  </Table.Cell>
                  <Table.Cell>
                    <FaTimes />
                  </Table.Cell>
                  <Table.Cell>
                    <FaTimes />
                  </Table.Cell>
                  <Table.Cell>
                    <FaTimes />
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>{new Date().toLocaleDateString()}</Table.Cell>
                  <Table.Cell>Chemistry</Table.Cell>
                  <Table.Cell>
                    <FaTimes />
                  </Table.Cell>
                  <Table.Cell>
                    <FaTimes />
                  </Table.Cell>
                  <Table.Cell>
                    <FaCheck className="text-green-500" />
                  </Table.Cell>
                  <Table.Cell>
                    <FaTimes />
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>{new Date().toLocaleDateString()}</Table.Cell>
                  <Table.Cell>Chemistry</Table.Cell>
                  <Table.Cell>
                    <FaTimes />
                  </Table.Cell>
                  <Table.Cell>
                    <FaTimes />
                  </Table.Cell>
                  <Table.Cell>
                    <FaCheck className="text-green-500" />
                  </Table.Cell>
                  <Table.Cell>
                    <FaTimes />
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>{new Date().toLocaleDateString()}</Table.Cell>
                  <Table.Cell>Chemistry</Table.Cell>
                  <Table.Cell>
                    <FaTimes />
                  </Table.Cell>
                  <Table.Cell>
                    <FaTimes />
                  </Table.Cell>
                  <Table.Cell>
                    <FaCheck className="text-green-500" />
                  </Table.Cell>
                  <Table.Cell>
                    <FaTimes />
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            {/* {showMore && (
              <button
                onClick={handleShowMore}
                className="text-teal-500 self-center w-full text-sm py-7"
              >
                Show more
              </button>
            )} */}
            <button className="text-teal-500 self-center w-full text-sm py-3">
              Show more
            </button>
          </div>
        </div>
        {/* right */}
        <div className="w-full sm:w-1/4 mt-3 flex flex-col gap-8">
          {/* top */}
          <div className="hidden sm:inline">
            <Datepicker
              onSelectedDateChanged={(date) => handleChange(date)}
              inline
            />
          </div>
          {/* bottom */}
          <div className="flex flex-col sm:gap-3 gap-5">
            <div className="bg-indigo-600 flex gap-4 sm:p-3 p-6 items-center rounded-lg">
              <div>
                <HiAcademicCap className="bg-white text-black rounded-full text-5xl p-2 shadow-lg" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold">30</h1>
                <p>Total lectures</p>
              </div>
            </div>
            <div className="bg-red-500 flex gap-4 sm:p-3 p-6 items-center rounded-lg">
              <div>
                <HiCheckCircle className="bg-white text-black rounded-full text-5xl p-2 shadow-lg" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold">24</h1>
                <p>Attended</p>
              </div>
            </div>
            <div className="bg-lime-600 flex gap-4 sm:p-3 p-6 items-center rounded-lg">
              <div>
                <HiOutlineEmojiSad className="bg-white text-black rounded-full text-5xl p-2 shadow-lg" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold">6</h1>
                <p>Absent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
