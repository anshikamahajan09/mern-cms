import { Sidebar } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  HiAcademicCap,
  HiAnnotation,
  HiArrowSmRight,
  HiBadgeCheck,
  HiCalendar,
  HiChartPie, 
  HiDocumentText,
  HiOfficeBuilding,
  HiOutlineUserGroup,
  HiUpload,
  HiUser,
  HiUserGroup,
} from "react-icons/hi";
import { GiNotebook, GiBookshelf } from "react-icons/gi";
import { FaClipboardList } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function DashSidebar() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="md:w-56 w-full">
      <Sidebar className="w-full ">
        <Sidebar.Items>
          <Sidebar.ItemGroup className="flex flex-col gap-1">
            <Link to="/dashboard?tab=profile">
              <Sidebar.Item
                active={tab === "profile" || tab === ""}
                icon={HiUser}
                label={
                  currentUser.isAdmin
                    ? "Admin"
                    : currentUser.isFaculty
                    ? "Faculty"
                    : "Student"
                }
                labelColor="dark"
                as={"div"}
              >
                Profile
              </Sidebar.Item>
            </Link>
            {currentUser.isAdmin && (
              <>
                <Link to="/dashboard?tab=students">
                  <Sidebar.Item
                    active={tab === "students"}
                    icon={HiUserGroup}
                    as={"div"}
                  >
                    Manage students
                  </Sidebar.Item>
                </Link>
                <Link to="/dashboard?tab=faculty-members">
                  <Sidebar.Item
                    active={tab === "faculty-members"}
                    icon={HiUserGroup}
                    as={"div"}
                  >
                    Manage Faculty
                  </Sidebar.Item>
                </Link>
                <Link to="/dashboard?tab=courses">
                  <Sidebar.Item
                    active={tab === "courses"}
                    icon={GiBookshelf}
                    as={"div"}
                  >
                    Courses
                  </Sidebar.Item>
                </Link>
                <Link to="/dashboard?tab=departments">
                  <Sidebar.Item
                    active={tab === "departments"}
                    icon={HiOfficeBuilding}
                    as={"div"}
                  >
                    Departments
                  </Sidebar.Item>
                </Link>
                <Link to="/dashboard?tab=attendence">
                  <Sidebar.Item
                    active={tab === "attendence"}
                    icon={HiCalendar}
                    as={"div"}
                  >
                    Attendence
                  </Sidebar.Item>
                </Link>
                <Link to="/dashboard?tab=grades">
                  <Sidebar.Item
                    active={tab === "grades"}
                    icon={HiAcademicCap}
                    as={"div"}
                  >
                    Grades
                  </Sidebar.Item>
                </Link>
                <Link to="/dashboard?tab=notices">
                  <Sidebar.Item
                    active={tab === "notices"}
                    icon={FaClipboardList}
                    as={"div"}
                  >
                    Notices
                  </Sidebar.Item>
                </Link>
                <Link to="/dashboard?tab=complaints">
                  <Sidebar.Item
                    active={tab === "complaints"}
                    icon={GiNotebook}
                    as={"div"}
                  >
                    Complaints
                  </Sidebar.Item>
                </Link>
              </>
            )}
            {currentUser.isFaculty && (
              <>
                <Link to="/dashboard?tab=students">
                  <Sidebar.Item
                    active={tab === "students"}
                    icon={HiOutlineUserGroup}
                    as={"div"}
                  >
                    Manage students
                  </Sidebar.Item>
                </Link>
                <Link to="/dashboard?tab=upload-marks">
                  <Sidebar.Item
                    active={tab === "upload-marks"}
                    icon={HiUpload}
                    as={"div"}
                  >
                    Upload marks
                  </Sidebar.Item>
                </Link>
                <Link to="/dashboard?tab=mark-attendence">
                  <Sidebar.Item
                    active={tab === "mark-attendence"}
                    icon={HiCalendar}
                    as={"div"}
                  >
                    Mark attendence
                  </Sidebar.Item>
                </Link>
                <Link to="/dashboard?tab=assignments">
                  <Sidebar.Item
                    active={tab === "assignments"}
                    icon={HiDocumentText}
                    as={"div"}
                  >
                    Assignments
                  </Sidebar.Item>
                </Link>
                <Link to="/dashboard?tab=notices">
                  <Sidebar.Item
                    active={tab === "notices"}
                    icon={FaClipboardList}
                    as={"div"}
                  >
                    Notices
                  </Sidebar.Item>
                </Link>
                <Link to="/dashboard?tab=complaints">
                  <Sidebar.Item
                    active={tab === "complaints"}
                    icon={GiNotebook}
                    as={"div"}
                  >
                    Complaints
                  </Sidebar.Item>
                </Link>
              </>
            )}
            {currentUser.isStudent && (
              <>
                <Link to="/dashboard?tab=courses">
                  <Sidebar.Item
                    active={tab === "courses"}
                    icon={HiBadgeCheck}
                    as={"div"}
                  >
                    Courses enrolled
                  </Sidebar.Item>
                </Link>
                <Link to="/dashboard?tab=show-attendence">
                  <Sidebar.Item
                    active={tab === "show-attendence"}
                    icon={HiCalendar}
                    as={"div"}
                  >
                    Show Attendence
                  </Sidebar.Item>
                </Link>
                <Link to="/dashboard?tab=grades">
                  <Sidebar.Item
                    active={tab === "grades"}
                    icon={HiAcademicCap}
                    as={"div"}
                  >
                    Grades
                  </Sidebar.Item>
                </Link>
                <Link to="/dashboard?tab=progress">
                  <Sidebar.Item
                    active={tab === "progress"}
                    icon={HiChartPie}
                    as={"div"}
                  >
                    Progress
                  </Sidebar.Item>
                </Link>
                <Link to="/dashboard?tab=assignments">
                  <Sidebar.Item
                    active={tab === "assignments"}
                    icon={HiDocumentText}
                    as={"div"}
                  >
                    Assignments
                  </Sidebar.Item>
                </Link>
                <Link to="/dashboard?tab=notices">
                  <Sidebar.Item
                    active={tab === "notices"}
                    icon={FaClipboardList}
                    as={"div"}
                  >
                    Notices
                  </Sidebar.Item>
                </Link>
                <Link to="/dashboard?tab=complaints">
                  <Sidebar.Item
                    active={tab === "complaints"}
                    icon={GiNotebook}
                    as={"div"}
                  >
                    Complaints
                  </Sidebar.Item>
                </Link>
                <Link to="/dashboard?tab=remarks">
                  <Sidebar.Item
                    active={tab === "remarks"}
                    icon={HiAnnotation}
                    as={"div"}
                  >
                    Remarks
                  </Sidebar.Item>
                </Link>
              </>
            )}
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup >
          <Sidebar.Item icon={HiArrowSmRight}>
              <span className="cursor-pointer">Sign Out</span>
            </Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
