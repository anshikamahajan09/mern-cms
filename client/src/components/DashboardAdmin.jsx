import { useSelector } from "react-redux";
import { FcBearish } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import student from "../assests/students.png";
import onlineLearning from "../assests/online-learning.png";
import money from "../assests/money.png";
import teacher from "../assests/teacher.png";
import { TfiAnnouncement } from "react-icons/tfi";
import { HiCalendar } from "react-icons/hi";
import ApexCharts from "apexcharts";
import { Card } from "flowbite-react";
import { useState, useEffect } from "react";
import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Banner } from "flowbite-react";
import { HiArrowRight, HiX } from "react-icons/hi";
import { MdPercent } from "react-icons/md";
import { coursesDetails } from "../utils";

function DashboardAdmin() {
  const [announcements, setAnnouncements] = useState([]);
  const {currentUser} = useSelector((state) => state.user);
  useEffect(()=>{
    const fetchAnnoucements = async () => {
      try{
        const response = await fetch("/api/general/fetchAnnouncements", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userType: currentUser.userType }),
        });
        const data = await response.json();
        setAnnouncements(data);
      }
      catch(err){
        console.error("Error fetching announcements:", err);
      }
    }
    if(currentUser){
      fetchAnnoucements();
    }
  }, []);

  const [trendData, setTrendData] = useState({
    students:{
      trend: "up",
      newTotal: 0,
      tillLastMonthStudentCount: 0,
    },
    teachers: {
      trend: "up",
      newTotal: 0,
      tillLastMonthFacultyCount: 0,
    },
    courses: {
      trend: "up",
      newTotal: Object.keys(coursesDetails).length,
      lastYearTotal: 3,
    },
    fees: {
      trend: "down",
      newTotal: 48697,
      lastMonthTotal: 53240,
    },
  });

  const options = {
    chart: {
      height: "85%",
      maxWidth: "100%",
      type: "area",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      foreColor: "#9ca3af",
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: "#1C64F2",
        gradientToColors: ["#1C64F2"],
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ["#0e9f6e"],
      },
    },
    stroke: {
      width: 6,
      curve: "smooth",
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: 0,
      },
    },
    series: [
      {
        name: "Admissions",
        data: [2345, 2112, 3024, 2980, 2389, 2473],
        color: "#1A56DB",
      },
    ],
    xaxis: {
      categories: ["2019", "2020", "2021", "2022", "2023", "2024"],
      labels: {
        show: true,
      },
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
    },
    yaxis: {
      show: true,
    },
  };

  const options2 = {
    series: [40.0, 35.0, 10.0, 15.0],
    colors: ["#1C64F2", "#16BDCA", "#FDBA8C", "#E74694"],
    chart: {
      height: "420",
      width: "100%",
      type: "pie",
    },
    stroke: {
      colors: ["#ffffff"],
      lineCap: "",
    },
    plotOptions: {
      pie: {
        labels: {
          show: true,
        },
        size: "100%",
        dataLabels: {
          offset: -25,
        },
      },
    },
    labels: ["CSE", "Bussiness Administration", "Marine", "Pharmacy"],
    dataLabels: {
      enabled: true,
      style: {
        fontFamily: "Inter, sans-serif",
      },
    },
    legend: {
      position: "bottom",
      fontFamily: "Inter, sans-serif",
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return value + "%";
        },
      },
    },
    xaxis: {
      labels: {
        formatter: function (value) {
          return value + "%";
        },
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
  };

  useEffect(() => {
    if (
      document.getElementById("area-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      const chart = new ApexCharts(
        document.getElementById("area-chart"),
        options
      );
      chart.render();
    }
    if (
      document.getElementById("pie-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      const chart = new ApexCharts(
        document.getElementById("pie-chart"),
        options2
      );
      chart.render();
    }
  }, []);

  useEffect(()=>{
    const fetchTrendData = async () => {
      try{
        const response = await fetch("/api/general/fetchTrendData");
        const data = await response.json();
        setTrendData({
          ...trendData,
          students: {
            trend: data.totalStudent > data.tillLastMonthStudentCount ? "up" : "down",
            newTotal: data.totalStudent,
            tillLastMonthStudentCount: data.tillLastMonthStudentCount,
          },
          teachers: {
            trend: data.totalFaculty > data.tillLastMonthFacultyCount ? "up" : "down",
            newTotal: data.totalFaculty,
            tillLastMonthFacultyCount: data.tillLastMonthFacultyCount,
          },
        });
      }
      catch(err){
        console.error("Error fetching trend data:", err);
      }
    }

    if(currentUser){
      fetchTrendData();
    }
  },[])
  return (
    <main className="text-white w-full p-6 md:pl-64">
      <h1 className="text-3xl font-bold border-b-1 mb-6 text-center sm:text-left">
        Admin Dashboard
      </h1>

      {/* top cards */}
      <div className="flex flex-col sm:flex-row justify-between gap-y-8 mb-6">
        <Card href="#" className="max-w-xl cursor-default">
          <div className="flex  justify-between sm:gap-14 ">
            <img
              src={student}
              className="w-24  object-cover"
              alt="student-logo"
            />
            <div className="flex-col">
              <h5 className=" text-3xl sm:text-xl  tracking-tight text-gray-900 dark:text-white">
                Total Students
              </h5>
              <p className="text-6xl sm:text-4xl text-end text-[#4caf50]">{(trendData.students.newTotal)}</p>
            </div>
          </div>
          <div className="flex gap-2">
            {trendData.students.trend === "up" ? (
              <FcBullish size={30} />
            ) : (
              <FcBearish size={30} />
            )}
            <p className="font-normal flex items-end text-gray-700 dark:text-gray-400">
              {Math.floor(((trendData.students.newTotal-trendData.students.tillLastMonthStudentCount)/trendData.students.tillLastMonthStudentCount)*100) && 100}% Higher Than Last Month
            </p>
          </div>
        </Card>
        <Card href="#" className="max-w-xl cursor-default">
          <div className="flex  justify-between sm:gap-14 ">
            <img
              src={onlineLearning}
              className="w-24  object-cover"
              alt="courses-logo"
            />
            <div className="flex-col">
              <h5 className="text-3xl sm:text-xl  tracking-tight text-gray-900 dark:text-white">
                Total Departments
              </h5>
              <p className="text-6xl sm:text-4xl text-end text-[#4caf50]">
                {trendData.courses.newTotal}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            {trendData.courses.trend === "up" ? (
              <FcBullish size={30} />
            ) : (
              <FcBearish size={30} />
            )}
            <p className="font-normal flex items-end text-gray-700 dark:text-gray-400">
            {Math.floor(((trendData.courses.newTotal-trendData.courses.lastYearTotal)/trendData.courses.lastYearTotal)*100) && 100}% Higher Than Last Year
            </p>
          </div>
        </Card>
        <Card href="#" className="max-w-xl cursor-default">
          <div className="flex  justify-between sm:gap-14 ">
            <img
              src={teacher}
              className="w-24  object-cover"
              alt="teacher-logo"
            />
            <div className="flex-col gap-8">
              <h5 className="text-3xl sm:text-xl  tracking-tight text-gray-900 dark:text-white">
                Total Teachers
              </h5>
              <p className="text-6xl sm:text-4xl text-end text-[#4caf50]">{trendData.teachers.newTotal}</p>
            </div>
          </div>
          <div className="flex gap-2">
            {trendData.teachers.trend === "up" ? (
              <FcBullish size={30} />
            ) : (
              <FcBearish size={30} />
            )}
            <p className="font-normal flex items-end text-gray-700 dark:text-gray-400">
            {Math.floor(((trendData.teachers.newTotal-trendData.teachers.tillLastMonthFacultyCount)/trendData.teachers.tillLastMonthFacultyCount)*100) && 100}% Higher Than Last Month
            </p>
          </div>
        </Card>
        <Card href="#" className="max-w-xl cursor-default">
          <div className="flex  justify-between sm:gap-14 ">
            <img src={money} className="w-24  object-cover" alt="fees-logo" />
            <div className="flex-col gap-8">
              <h5 className="text-3xl sm:text-xl  tracking-tight text-gray-900 dark:text-white">
                Fees Collection
              </h5>
              <p className="text-6xl sm:text-4xl text-end text-[#4caf50]">
                $48,697
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            {trendData.fees.trend === "up" ? (
              <FcBullish size={30} />
            ) : (
              <FcBearish size={30} />
            )}
            <p className="font-normal flex items-end text-gray-700 dark:text-gray-400">
              22% Less Higher Than Last Month
            </p>
          </div>
        </Card>
      </div>

      {/* bottom main */}
      <div className=" flex flex-col  min-h-screen gap-y-8 sm:flex-row  gap-x-8">
        <div className="flex flex-col min-h-full mt-6 flex-1 gap-y-6">
          {/* both charts in it */}
          <div className="flex  rounded-lg">
            <Banner className="w-full">
              <div className="flex w-full justify-between border-t text-center rounded-lg border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-[#536878]">
                <div className="mx-auto flex items-center">
                  <p className="flex items-center text-xs sm:text-sm font-normal text-gray-500 dark:text-white">
                    <span className="[&_p]:inline">
                      Something new ?&nbsp;
                      <Link
                        to="/admin?tab=add-notice"
                        className="ml-0 flex items-center text-xs sm:text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500 md:ml-1 md:inline-flex"
                      >
                        Make an annoucement
                        <HiArrowRight className="ml-2" />
                      </Link>
                    </span>
                  </p>
                </div>
              </div>
            </Banner>
          </div>
          <div className="justify-between flex h-1/2 sm:h-3/4 gap-4  rounded-lg">
            {/* first chart */}
            <div className="w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
              <div className="flex justify-between">
                <div>
                  <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
                    2.4k
                  </h5>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Addmissions this year
                  </p>
                </div>
                <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
                  12%
                  <svg
                    className="w-3 h-3 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13V1m0 0L1 5m4-4 4 4"
                    />
                  </svg>
                </div>
              </div>
              <div id="area-chart"></div>
            </div>
            {/*  second chart */}
            <div className="w-full rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
              <div className="flex justify-between items-start w-full">
                {/* Website traffic */}
                <div className="flex-col items-center">
                  <div className="flex items-center mb-1">
                    <h5 className="text-xl font-bold leading-none text-white me-1">
                      Course Distribution
                    </h5>
                  </div>
                </div>
              </div>
              {/* Line Chart */}
              <div className="py-6" id="pie-chart"></div>
            </div>
          </div>
          {/* chat div */}
          
        </div>

        {/* announcements */}
        <div className="w-full h-full sm:w-1/4 ">
          <div className="flex items-center py-4 ">
            <p className="font-semibold text-4xl sm:text-2xl  sm:pl-6 pr-2 ">
              Recent Annoucements
            </p>
            <TfiAnnouncement size={30} />
          </div>

          <Timeline>
          {announcements.slice(0, 4).map((announcement) => {
            const createdAt = new Date(announcement.createdAt);
            const formattedDate = createdAt.toLocaleDateString('en-US', {
              month: 'short',
              day: '2-digit',
              year: 'numeric'
            });
            return (
              <TimelineItem key={announcement._id}>
              <Timeline.Point icon={HiCalendar} />
              <TimelineContent>
                <TimelineTime>{formattedDate} - {announcement.dept}</TimelineTime>
                {/* <img src={newPng}/> */}
                <TimelineTitle>
                  {announcement.title}
                </TimelineTitle>
                <TimelineBody>{announcement.content}</TimelineBody>
              </TimelineContent>
            </TimelineItem>
            )
          })}
          </Timeline>
        </div>
      </div>
    </main>
  );
}

export default DashboardAdmin;
