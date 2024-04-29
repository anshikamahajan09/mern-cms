import {
  Button,
  Card,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import { PiMathOperationsBold } from "react-icons/pi";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { coursesDetails } from "../utils.js";
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
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

export default function DashboardStudent() {
  const { currentUser } = useSelector((state) => state.user);
  const [attendanceData, setAttendanceData] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [academicInfo, setAcademicInfo] = useState({});
  useEffect(() => {
    const fetchAcademicInfo = async () => {
      try {
        const response = await fetch("/api/student/fetchAcademicInfo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ rollno: currentUser.rollno }),
        });
        const data = await response.json();
        setAcademicInfo(data);
      } catch (error) {
        console.error("Error fetching academic info right now.", error);
      }
    };
    if (currentUser.rollno) {
      fetchAcademicInfo();
    }
  }, []);
  console.log(academicInfo);

  useEffect(() => {
    const fetchAnnoucements = async () => {
      try {
        const response = await fetch("/api/general/fetchAnnouncements", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userType: currentUser.userType }),
        });
        const data = await response.json();
        setAnnouncements(data);
      } catch (err) {
        console.error("Error fetching announcements:", err);
      }
    };
    if (currentUser.rollno) {
      fetchAnnoucements();
    }
  }, []);
  
  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const response = await fetch("/api/faculty/fetchAttendance", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ rollno: currentUser.rollno }),
        });
        const data = await response.json();
        setAttendanceData(data);
      } catch (error) {
        console.error("Error fetching attendance:", error);
      }
    };
    if (currentUser.rollno) {
      fetchAttendanceData();
    }
  }, []);
  return (
    <div className="p-7 w-full flex flex-col lg:flex-row gap-12 md:pl-64">
      {/* right */}
      <div className="flex flex-col w-full lg:w-3/4 gap-10 ">
        {/* top */}
        <div>
          <h1 className="font-bold text-3xl ">Attendance</h1>
          <div className="flex flex-wrap w-full justify-between sm:justify-start  gap-2 sm:gap-8 lg:gap-4 py-5">
            {academicInfo &&
              academicInfo.courses && academicInfo.courses.map((enrolledCourseId) => {
                const data = attendanceData.find(
                  (data) => data.courseId === enrolledCourseId
                );
                const title =
                  coursesDetails[academicInfo.department][enrolledCourseId]
                    .title;
                const attendancePercentage =
                  data?.totalAttendance !== 0 &&
                  !isNaN(data?.PCount / data?.totalAttendance)
                    ? Math.floor((data?.PCount / data?.totalAttendance) * 100)
                    : 0;
                return (
                  <Card
                    key={enrolledCourseId}
                    className="w-1/4 lg:max-w-[190px] lg:min-w-[200px] md:max-w-[220px] rounded-3xl flex flex-col gap-2 shadow-2xl border-0 md:min-w-[200px] min-w-[170px] max-w-[210px]"
                  >
                    {enrolledCourseId === "OOP100" ? (
                      <MdComputer className="bg-lime-600 text-white rounded-full text-5xl p-3 shadow-lg" />
                    ) : enrolledCourseId === "AIML100" ? (
                      <GiArtificialHive className="bg-teal-600 text-white rounded-full text-5xl p-3 shadow-lg" />
                    ) : enrolledCourseId === "MHT100" ? (
                      <PiMathOperationsBold className="bg-indigo-600 text-white rounded-full text-5xl p-3 shadow-lg" />
                    ) : (
                      <AiFillDatabase className="bg-red-500 text-white rounded-full text-5xl p-3 shadow-lg" />
                    )}
                    <h1 className="text-lg font-bold">{title}</h1>
                    <h1 className="text-2xl font-bold">
                      {data?.PCount || 0}/{data?.totalAttendance || 0}
                    </h1>
                    <CircularProgressbar
                      className="h-28"
                      value={attendancePercentage}
                      text={`${attendancePercentage}%`}
                    />
                  </Card>
                );
              })}
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
                {academicInfo.courses && academicInfo.courses.map((enrolledCourseId) => {
                  return (
                    <TableRow
                      key={enrolledCourseId}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {coursesDetails[academicInfo.department][enrolledCourseId].time}
                      </TableCell>
                      <TableCell>
                      {coursesDetails[academicInfo.department][enrolledCourseId].lh}
                      </TableCell>
                      <TableCell>{enrolledCourseId}</TableCell>
                      <TableCell>Lecture</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      {/* left */}
      <div className="w-full lg:w-1/4">
        {/* top */}
        <div>
          <h1 className=" font-bold text-3xl truncate">Announcements</h1>
          <Timeline className="mt-5">
            {announcements.slice(0, 4).map((announcement) => {
              const createdAt = new Date(announcement.createdAt);
              const formattedDate = createdAt.toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              });
              return (
                <TimelineItem key={announcement._id}>
                  <Timeline.Point icon={HiCalendar} />
                  <TimelineContent>
                    <TimelineTime>
                      {formattedDate} - {announcement.dept}
                    </TimelineTime>
                    <TimelineTitle>{announcement.title}</TimelineTitle>
                    <TimelineBody>{announcement.content}</TimelineBody>
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </Timeline>
        </div>
      </div>
    </div>
  );
}
