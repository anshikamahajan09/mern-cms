import {
  HiAnnotation,
  HiArrowNarrowUp,
  HiDocumentText,
  HiOutlineUserGroup,
  HiCalendar,
  HiArrowNarrowRight,
} from "react-icons/hi";
import {
  Button,
  Card,
  Table,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import ApexCharts from "apexcharts";
import { useState } from "react";
import { useEffect } from "react";
import { FcBearish, FcBullish } from "react-icons/fc";
import { GrSchedules } from "react-icons/gr";
import { useSelector } from "react-redux";

export default function DashboardFaculty() {
  const {currentUser} = useSelector((state) => state.user);
  const options = {
    colors: ["#1A56DB", "#FDBA8C"],
    series: [
      {
        name: "Organic",
        color: "#1A56DB",
        data: [
          { x: "Mon", y: 231 },
          { x: "Tue", y: 122 },
          { x: "Wed", y: 63 },
          { x: "Thu", y: 421 },
          { x: "Fri", y: 122 },
          { x: "Sat", y: 323 },
          { x: "Sun", y: 111 },
        ],
      },
    ],
    chart: {
      type: "bar",
      height: "291px",
      fontFamily: "Inter, sans-serif",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "70%",
        borderRadiusApplication: "end",
        borderRadius: 8,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      style: {
        fontFamily: "Inter, sans-serif",
      },
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 1,
        },
      },
    },
    stroke: {
      show: true,
      width: 0,
      colors: ["transparent"],
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -14,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      floating: false,
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
        },
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
    fill: {
      opacity: 1,
    },
  };
  const [trend, setTrend] = useState({
    students: "up",
    attendance: "down",
    marks: "up",
  });


  const getChartOptions = () => {
    return {
      series: [35.1, 23.5, 2.4, 5.4],
      colors: ["#1C64F2", "#16BDCA", "#FDBA8C", "#E74694"],
      chart: {
        height: 320,
        width: "100%",
        type: "donut",
      },
      stroke: {
        colors: ["transparent"],
        lineCap: "",
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true,
                fontFamily: "Inter, sans-serif",
                offsetY: 20,
              },
              total: {
                showAlways: true,
                show: true,
                label: "Unique visitors",
                fontFamily: "Inter, sans-serif",
                formatter: function (w) {
                  const sum = w.globals.seriesTotals.reduce((a, b) => {
                    return a + b;
                  }, 0);
                  return "$" + sum + "k";
                },
              },
              value: {
                show: true,
                fontFamily: "Inter, sans-serif",
                offsetY: -20,
                formatter: function (value) {
                  return value + "k";
                },
              },
            },
            size: "80%",
          },
        },
      },
      grid: {
        padding: {
          top: -2,
        },
      },
      labels: ["DBMS", "AIML", "FEE", "Email marketing"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: "bottom",
        fontFamily: "Inter, sans-serif",
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return value + "k";
          },
        },
      },
      xaxis: {
        labels: {
          formatter: function (value) {
            return value + "k";
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
  };

  useEffect(() => {
    if (
      document.getElementById("donut-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      const chart = new ApexCharts(
        document.getElementById("donut-chart"),
        getChartOptions()
      );
      chart.render();

      // Get all the checkboxes by their class name
      const checkboxes = document.querySelectorAll(
        '#devices input[type="checkbox"]'
      );

      // Function to handle the checkbox change event
      function handleCheckboxChange(event, chart) {
        const checkbox = event.target;
        if (checkbox.checked) {
          switch (checkbox.value) {
            case "desktop":
              chart.updateSeries([15.1, 22.5, 4.4, 8.4]);
              break;
            case "tablet":
              chart.updateSeries([25.1, 26.5, 1.4, 3.4]);
              break;
            case "mobile":
              chart.updateSeries([45.1, 27.5, 8.4, 2.4]);
              break;
            default:
              chart.updateSeries([55.1, 28.5, 1.4, 5.4]);
          }
        } else {
          chart.updateSeries([35.1, 23.5, 2.4, 5.4]);
        }
      }

      // Attach the event listener to each checkbox
      checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", (event) =>
          handleCheckboxChange(event, chart)
        );
      });

      // Cleanup function to remove event listeners when component unmounts
      return () => {
        checkboxes.forEach((checkbox) => {
          checkbox.removeEventListener("change", handleCheckboxChange);
        });
      };
    }
  }, []);

  useEffect(() => {
    if (
      document.getElementById("column-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      const chart = new ApexCharts(
        document.getElementById("column-chart"),
        options
      );
      chart.render();
    }
  }, []);

  useEffect(() => {
    const fetchAttendance = async () => {
      const res = await fetch("/api/faculty/fetchAttendance", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id:currentUser._id }),
      });
      const data = await res.json();
      console.log(data);
    };
    fetchAttendance();
  }, []);

  return (
    <div className="md:pl-64 p-7">
      <h1 className="text-3xl font-bold">Faculty Dashboard</h1>
      <div className=" flex  w-full gap-10">
        {/* left */}
        <div className="gap-10 w-3/4 flex flex-col">
          <div className="flex flex-wrap gap-4 justify-center mt-5">
            <div className="flex flex-col p-5 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-3xl sm:text-xl  tracking-tight text-gray-900 dark:text-white">
                    Total Students
                  </h3>
                  <p className="text-6xl sm:text-4xl text-[#4caf50]">10</p>
                </div>
                <HiOutlineUserGroup className="bg-teal-600 text-white rounded-full text-5xl p-3 shadow-lg" />
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
            </div>
            <div className="flex flex-col p-5 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-3xl sm:text-xl  tracking-tight text-gray-900 dark:text-white">
                    Average Attendance
                  </h3>
                  <p className="text-6xl sm:text-4xl text-red-500">78%</p>
                </div>
                <HiAnnotation className="bg-indigo-600 text-white rounded-full text-5xl p-3 shadow-lg" />
              </div>
              <div className="flex gap-2">
                {trend.attendance === "up" ? (
                  <FcBullish size={30} />
                ) : (
                  <FcBearish size={30} />
                )}
                <p className="font-normal flex items-end text-gray-700 dark:text-gray-400">
                  7% Less Than Last Month
                </p>
              </div>
            </div>
            <div className="flex flex-col p-5 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-3xl sm:text-xl  tracking-tight text-gray-900 dark:text-white">
                    Upcoming Meeting
                  </h3>
                  <p className="text-5xl sm:text-3xl text-[#4caf50]">
                    9 days left
                  </p>
                </div>
                <HiCalendar className="bg-lime-600 text-white rounded-full text-5xl p-3 shadow-lg" />
              </div>
              <div className="flex gap-2 items-center mt-2">
                <GrSchedules className="text-2xl" />
                <p className="font-normal flex items-end text-gray-700 dark:text-gray-400 ">
                  5th May 2024
                </p>
              </div>
            </div>
          </div>
          {/* bottom */}
          <div className="flex gap-10">
            <div className="w-1/2">
              <div className=" w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
                <div className="flex justify-between mb-3">
                  <div className="flex justify-center items-center">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white pe-1">
                      Course Enrollment Trend
                    </h5>
                    
                    <div
                      data-popover
                      id="chart-info"
                      role="tooltip"
                      className="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
                    >
                      <div className="p-3 space-y-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Activity growth - Incremental
                        </h3>
                        <p>
                          Report helps navigate cumulative growth of community
                          activities. Ideally, the chart should have a growing
                          trend, as stagnating chart signifies a significant
                          decrease of community activity.
                        </p>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Calculation
                        </h3>
                        <p>
                          For each date bucket, the all-time volume of
                          activities is calculated. This means that activities
                          in period n contain all activities up to period n,
                          plus the activities generated by your community in
                          period.
                        </p>
                        <a
                          href="#"
                          className="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:underline"
                        >
                          Read more{" "}
                          <svg
                            className="w-2 h-2 ms-1.5 rtl:rotate-180"
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
                      <div data-popper-arrow></div>
                    </div>
                  </div>
                </div>

                {/* Donut Chart */}
                <div className="py-6" id="donut-chart"></div>

                <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between"></div>
              </div>
            </div>
            <div className="w-1/2">
              <div className=" w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
                <div className="flex justify-between pb-4 mb-4 ">
                  <div className="flex items-center">
                    <div>
                      <h5 className="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-1">
                        3.4k
                      </h5>
                    </div>
                  </div>
                </div>
                <div id="column-chart"></div>
                <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between"></div>
              </div>
            </div>
          </div>
          <div>
            <h1 className=" font-semibold text-3xl my-5">Top Students</h1>
            <Table hoverable className="shadow-md min-w-full">
            <Table.Head>
              <Table.HeadCell>Roll No.</Table.HeadCell>
              <Table.HeadCell>Profile Picture</Table.HeadCell>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>CGPA</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
                           
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>101</Table.Cell>
                <Table.Cell><img className="h-10 w-10" src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"></img></Table.Cell>
                <Table.Cell>Anuj Kumar</Table.Cell>
                <Table.Cell>9.8</Table.Cell>
              </Table.Row>              
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>101</Table.Cell>
                <Table.Cell><img className="h-10 w-10" src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"></img></Table.Cell>
                <Table.Cell>Anuj Kumar</Table.Cell>
                <Table.Cell>9.8</Table.Cell>
              </Table.Row>              
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>101</Table.Cell>
                <Table.Cell><img className="h-10 w-10" src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"></img></Table.Cell>
                <Table.Cell>Anuj Kumar</Table.Cell>
                <Table.Cell>9.8</Table.Cell>
              </Table.Row>              
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>101</Table.Cell>
                <Table.Cell><img className="h-10 w-10" src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"></img></Table.Cell>
                <Table.Cell>Anuj Kumar</Table.Cell>
                <Table.Cell>9.8</Table.Cell>
              </Table.Row>              
            </Table.Body>
          </Table>
          </div>
        </div>
        {/* right */}
        <div className="w-1/4">
          <div>
            <h1 className=" font-bold text-3xl truncate">Notices</h1>
            <Timeline className="mt-5">
              <TimelineItem>
                <Timeline.Point icon={HiCalendar} />
                <TimelineContent>
                  <TimelineTime>
                    April 2024 - Examination Department
                  </TimelineTime>
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
                  <TimelineTime>
                    March 2024 - Examination Department
                  </TimelineTime>
                  <TimelineTitle>
                    Result Declared BE MBA CSE 3RD SEM, BATCH 2022
                  </TimelineTitle>
                  <TimelineBody>
                    Students may apply for the re-evaluation till 14.02.2024
                    only for Discrete Structure {'"22AS003"'}. No evaluation
                    will be entitiled after the due date.
                  </TimelineBody>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      </div>
    </div>
  );
}
