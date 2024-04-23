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
import { useDispatch, useSelector } from "react-redux";
import { signOutFailure, signOutSuccess } from "../redux/user/userSlice";

export default function DashSidebar() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  const handleSignOut = async () => {
    try {
      const res = await fetch("/api/auth/sign-out");
      const data = await res.json();
      if (data.success === false) {
        dispatch(signOutFailure(data.message));
        return;
      }
      dispatch(signOutSuccess());
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-56 hidden md:inline-block fixed z-[100] h-full">
      <Sidebar className="w-full">
        <Sidebar.Items>
          <Sidebar.ItemGroup className="flex flex-col gap-1">
          <Link to={`/${currentUser.userType}?tab=dashboard`}>
              <Sidebar.Item
                active={tab ===  "dashboard" || tab === ''}
                icon={HiChartPie}
                as={"div"}
              >
                Dashboard
              </Sidebar.Item>
            </Link>
            <Link to={`/${currentUser.userType}?tab=profile`}>
              <Sidebar.Item
                active={tab === `profile`}
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
                <Link to={`/${currentUser.userType}?tab=students`}>
                  <Sidebar.Item
                    active={tab === "students"}
                    icon={HiUserGroup}
                    as={"div"}
                  >
                    Manage students
                  </Sidebar.Item>
                </Link>
                <Link to={`/${currentUser.userType}?tab=faculty-members`}>
                  <Sidebar.Item
                    active={tab === "faculty-members"}
                    icon={HiUserGroup}
                    as={"div"}
                  >
                    Manage Faculty
                  </Sidebar.Item>
                </Link>
                <Link to={`/${currentUser.userType}?tab=courses`}>
                  <Sidebar.Item
                    active={tab === "courses"}
                    icon={GiBookshelf}
                    as={"div"}
                  >
                    Courses
                  </Sidebar.Item>
                </Link>
                <Link to={`/${currentUser.userType}?tab=departments`}>
                  <Sidebar.Item
                    active={tab === "departments"}
                    icon={HiOfficeBuilding}
                    as={"div"}
                  >
                    Departments
                  </Sidebar.Item>
                </Link>
                <Link to={`/${currentUser.userType}?tab=attendence`}>
                  <Sidebar.Item
                    active={tab === "attendence"}
                    icon={HiCalendar}
                    as={"div"}
                  >
                    Attendence
                  </Sidebar.Item>
                </Link>
                <Link to={`/${currentUser.userType}?tab=grades-all`}>
                  <Sidebar.Item
                    active={tab === "grades-all"}
                    icon={HiAcademicCap}
                    as={"div"}
                  >
                    Grades
                  </Sidebar.Item>
                </Link>
                <Link to={`/${currentUser.userType}?tab=add-notice`}>
                  <Sidebar.Item
                    active={tab === "add-notice"}
                    icon={FaClipboardList}
                    as={"div"}
                  >
                    Notices
                  </Sidebar.Item>
                </Link>
                <Link to={`/${currentUser.userType}?tab=see-complaints`}>
                  <Sidebar.Item
                    active={tab === "see-complaints"}
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
                <Link to={`/${currentUser.userType}?tab=students`}>
                  <Sidebar.Item
                    active={tab === "students"}
                    icon={HiOutlineUserGroup}
                    as={"div"}
                  >
                    Manage students
                  </Sidebar.Item>
                </Link>
                <Link to={`/${currentUser.userType}?tab=upload-marks`}>
                  <Sidebar.Item
                    active={tab === "upload-marks"}
                    icon={HiUpload}
                    as={"div"}
                  >
                    Upload marks
                  </Sidebar.Item>
                </Link>
                <Link to={`/${currentUser.userType}?tab=mark-attendence`}>
                  <Sidebar.Item
                    active={tab === "mark-attendence"}
                    icon={HiCalendar}
                    as={"div"}
                  >
                    Mark attendence
                  </Sidebar.Item>
                </Link>
                <Link to={`/${currentUser.userType}?tab=add-assignment`}>
                  <Sidebar.Item
                    active={tab === "add-assignment"}
                    icon={HiDocumentText}
                    as={"div"}
                  >
                    Assignments
                  </Sidebar.Item>
                </Link>
                <Link to={`/${currentUser.userType}?tab=add-notice`}>
                  <Sidebar.Item
                    active={tab === "add-notice"}
                    icon={FaClipboardList}
                    as={"div"}
                  >
                    Notices
                  </Sidebar.Item>
                </Link>
                <Link to={`/${currentUser.userType}?tab=complaints`}>
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
                <Link to={`/${currentUser.userType}?tab=courses`}>
                  <Sidebar.Item
                    active={tab === "courses"}
                    icon={HiBadgeCheck}
                    as={"div"}
                  >
                    Courses enrolled
                  </Sidebar.Item>
                </Link>
                <Link to={`/${currentUser.userType}?tab=show-attendance`}>
                  <Sidebar.Item
                    active={tab === "show-attendance"}
                    icon={HiCalendar}
                    as={"div"}
                  >
                    Show Attendance
                  </Sidebar.Item>
                </Link>
                <Link to={`/${currentUser.userType}?tab=grades`}>
                  <Sidebar.Item
                    active={tab === "grades"}
                    icon={HiAcademicCap}
                    as={"div"}
                  >
                    Grades
                  </Sidebar.Item>
                </Link>
                <Link to={`/${currentUser.userType}?tab=progress`}>
                  <Sidebar.Item
                    active={tab === "progress"}
                    icon={HiChartPie}
                    as={"div"}
                  >
                    Progress
                  </Sidebar.Item>
                </Link>
                <Link to={`/${currentUser.userType}?tab=see-assignment`}>
                  <Sidebar.Item
                    active={tab === "see-assignment"}
                    icon={HiDocumentText}
                    as={"div"}
                  >
                    Assignments
                  </Sidebar.Item>
                </Link>
                <Link to={`/${currentUser.userType}?tab=see-notice`}>
                  <Sidebar.Item
                    active={tab === "see-notice"}
                    icon={FaClipboardList}
                    as={"div"}
                  >
                    Notices
                  </Sidebar.Item>
                </Link>
                <Link to={`/${currentUser.userType}?tab=add-complaints`}>
                  <Sidebar.Item
                    active={tab === "add-complaints"}
                    icon={GiNotebook}
                    as={"div"}
                  >
                    Complaints
                  </Sidebar.Item>
                </Link>
                <Link to={`/${currentUser.userType}?tab=remarks`}>
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
          <Sidebar.ItemGroup>
            <Sidebar.Item icon={HiArrowSmRight} onClick={handleSignOut}>
              <span className="cursor-pointer">Sign Out</span>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
