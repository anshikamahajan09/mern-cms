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
import { Banner } from "flowbite-react";
import { HiArrowRight, HiX } from "react-icons/hi";
import { MdPercent } from "react-icons/md";

function DashboardAdmin() {
  const [trend, setTrend] = useState({
    students: "up",
    teachers: "up",
    courses: "down",
    fees: "down",
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
                New Students
              </h5>
              <p className="text-6xl sm:text-4xl text-end text-[#4caf50]">95</p>
            </div>
          </div>
          <div className="flex gap-2">
            {trend.students === "up" ? (
              <FcBullish size={30} />
            ) : (
              <FcBearish size={30} />
            )}
            <p className="font-normal flex items-end text-gray-700 dark:text-gray-400">
              10% Higher Than Last Month
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
                Total Courses
              </h5>
              <p className="text-6xl sm:text-4xl text-end text-[#4caf50]">
                125
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            {trend.courses === "up" ? (
              <FcBullish size={30} />
            ) : (
              <FcBearish size={30} />
            )}
            <p className="font-normal flex items-end text-gray-700 dark:text-gray-400">
              7% Less Than Last Month
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
              <p className="text-6xl sm:text-4xl text-end text-[#4caf50]">89</p>
            </div>
          </div>
          <div className="flex gap-2">
            {trend.teachers === "up" ? (
              <FcBullish size={30} />
            ) : (
              <FcBearish size={30} />
            )}
            <p className="font-normal flex items-end text-gray-700 dark:text-gray-400">
              12% Higher Than Last Month
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
            {trend.fees === "up" ? (
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
                      <a
                        href="https://flowbite.com"
                        className="ml-0 flex items-center text-xs sm:text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500 md:ml-1 md:inline-flex"
                      >
                        Make an annoucement
                        <HiArrowRight className="ml-2" />
                      </a>
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
            <TimelineItem>
              <Timeline.Point icon={HiCalendar} />
              <TimelineContent>
                <TimelineTime>April 2024 - Examination Department</TimelineTime>
                {/* <img src={newPng}/> */}
                <TimelineTitle>
                  Revised Date Sheet BE {"(ECE)"} Regular & Reappear for End
                  Term Examination May 2024
                </TimelineTitle>
                <TimelineBody></TimelineBody>
                <Button color="gray">
                  Learn More
                  <HiArrowNarrowRight className="ml-2 mt-1.5 h-3 w-3" />
                </Button>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <Timeline.Point icon={HiCalendar} />{" "}
              <TimelineContent>
                <TimelineTime>
                  April 2024 - Office of Student Affairs
                </TimelineTime>
                <TimelineTitle>World Dance Day</TimelineTitle>
                <TimelineBody>
                  Dear all, we are celebrating World Dance Day on 29th April
                  2022. All the students are requested to participate in the
                  event. <br /> Thanks and Regards
                  <br /> Office of Student Affairs
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <Timeline.Point icon={HiCalendar} />
              <TimelineContent>
                <TimelineTime>March 2024 - Examination Department</TimelineTime>
                <TimelineTitle>
                  Result Declared BE MBA CSE 3RD SEM, BATCH 2022
                </TimelineTitle>
                <TimelineBody>
                  Students may apply for the re-evaluation till 14.02.2024 only
                  for Discrete Structure {'"22AS003"'}. No evaluation will be
                  entitiled after the due date.
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </main>
  );
}

export default DashboardAdmin;
