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
import { useState, useEffect} from "react";
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

function DashboardAdmin() {
  const [trend, setTrend] = useState({
    students: "up",
    teachers: "up",
    courses: "down",
    fees: "down",
  });
  const options = {
    chart: {
      height: "100%",
      maxWidth: "100%",
      type: "area",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
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
      enabled: false,
    },
    stroke: {
      width: 6,
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
        name: "New users",
        data: [6500, 6418, 6456, 6526, 6356, 6456],
        color: "#1A56DB",
      },
    ],
    xaxis: {
      categories: [
        "01 February",
        "02 February",
        "03 February",
        "04 February",
        "05 February",
        "06 February",
        "07 February",
      ],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
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
  }, []);

  return (
    <main className="text-white w-full p-6">
      <h1 className="text-3xl font-bold border-b-1 mb-6 text-center sm:text-left">
        Admin Dashboard
      </h1>
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
      <div className="flex flex-col gap-y-8 gap-x-8  sm:flex-row">
        <div className="flex-1 bg-gray-600 mt-6 p-6 rounded-lg">
          <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
            <div className="flex justify-between">
              <div>
                <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
                  32.4k
                </h5>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Users this week
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
            <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
              <div className="flex justify-between items-center pt-5">
                {/* Button */}
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="lastDaysdropdown"
                  data-dropdown-placement="bottom"
                  className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
                  type="button"
                >
                  Last 7 days
                  <svg
                    className="w-2.5 m-2.5 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {/* Dropdown menu */}
                <div
                  id="lastDaysdropdown"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Yesterday
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Today
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Last 7 days
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Last 30 days
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Last 90 days
                      </a>
                    </li>
                  </ul>
                </div>
                <a
                  href="#"
                  className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2"
                >
                  Users Report
                  <svg
                    className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/4">
          <div className="flex items-center">
            <p className="font-semibold text-4xl sm:text-2xl sm:pl-6 pr-2 py-4">
              Recent Annoucements
            </p>
            <TfiAnnouncement size={40} />
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
