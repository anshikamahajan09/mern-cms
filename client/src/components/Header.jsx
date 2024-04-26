import { Button, Navbar } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaMoon, FaSun } from "react-icons/fa";
import { Dropdown, Avatar } from "flowbite-react";
import { useLocation } from "react-router-dom";
import { signOutFailure, signOutSuccess } from "../redux/user/userSlice";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
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
    <Navbar className=" border-b-2 sticky top-0 z-10">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white pl-2 py-1"
      >
        <Button
          className="inline-block px-2 py-1 sm:text-2xl text-xl"
          size={""}
          gradientDuoTone={"greenToBlue"}
        >
          Campus
        </Button>
        <span className="text-gray-400  text-xl sm:text-2xl ml-1">Flow</span>
      </Link>
      {currentUser && (
        <div className="flex gap-4 md:order-2 items-end">
          {currentUser && (
            <>
             <div className="hidden md:inline-block">
             <span className="font-bold text-sm mb-1">
                {currentUser.isAdmin
                  ? "Admin"
                  : currentUser.isFaculty
                  ? "Faculty"
                  : "Student"}
                : @{currentUser.fName + ' ' +currentUser.lName}
              </span>
             </div>
              <Dropdown
                arrowIcon={false}
                inline
                label={<Avatar  img={currentUser.profilePicture} rounded />}
              >
                <Dropdown.Header>
                  <span className="block">{currentUser.name}</span>
                  <span className="block font-semibold">
                    {currentUser.email}
                  </span>
                </Dropdown.Header>
                <Link to="/dashboard?tab=profile">
                  <Dropdown.Item>Profile</Dropdown.Item>
                </Link>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleSignOut}>Sign Out</Dropdown.Item>
              </Dropdown>
            </>
          )}
          <span onClick={() => setIsOpen(false)}><Navbar.Toggle/></span>
        </div>
      )}

      <Navbar.Collapse  hidden={isOpen} >
        {currentUser?.isAdmin && (
          <>
            <Link
            onClick={() => setIsOpen(true)}
              to="/dashboard?tab=students"
              className={
                path === "/dashboard?tab=students"
                  ? "bg-cyan-700 text-white dark:text-white md:bg-transparent md:hidden md:text-cyan-700 block py-2 pl-3 pr-4 md:p-0"
                  : "block py-2 pl-3 pr-4 md:p-0 hover:bg-cyan-700 hover:text-white md:hidden"
              }
            >
              Manage students
            </Link>

            <Link
              to="/dashboard?tab=faculty-members"
              
              className={
                path === "/dashboard?tab=faculty-members"
                  ? "bg-cyan-700 text-white md:hidden dark:text-white md:bg-transparent md:text-cyan-700 block py-2 pl-3 pr-4 md:p-0"
                  : "block py-2 pl-3 pr-4 md:p-0 md:hidden hover:bg-cyan-700 "
              }
            >
              Manage Faculty
            </Link>

            <Link
              to="/dashboard?tab=courses"
              
              className={
                path === "/dashboard?tab=courses"
                  ? "bg-cyan-700 text-white md:hidden dark:text-white md:bg-transparent md:text-cyan-700 block py-2 pl-3 pr-4 md:p-0"
                  : "block py-2 pl-3 pr-4 md:p-0 hover:bg-cyan-700 md:hidden"
              }
            >
              Courses
            </Link>

            <Link
              to="/dashboard?tab=departments"
              
              className={
                path === "/dashboard?tab=departments"
                  ? "bg-cyan-700 text-white md:hidden dark:text-white md:bg-transparent md:text-cyan-700 block py-2 pl-3 pr-4 md:p-0"
                  : "block py-2 pl-3 pr-4 md:p-0 hover:bg-cyan-700 md:hidden"
              }
            >
              Departments
            </Link>

            <Link
              to="/dashboard?tab=attendance"
              
              className={
                path === "/dashboard?tab=attendance"
                  ? "bg-cyan-700 text-white md:hidden dark:text-white md:bg-transparent md:text-cyan-700 block py-2 pl-3 pr-4 md:p-0"
                  : "block py-2 pl-3 pr-4 md:p-0 hover:bg-cyan-700 md:hidden"
              }
            >
              Attendance
            </Link>

            <Link
              to="/dashboard?tab=grades-all"
              
              className={
                path === "/dashboard?tab=grades-all"
                  ? "bg-cyan-700 text-white md:hidden dark:text-white md:bg-transparent md:text-cyan-700 block py-2 pl-3 pr-4 md:p-0"
                  : "block py-2 pl-3 pr-4 md:p-0 hover:bg-cyan-700 md:hidden"
              }
            >
              Grades
            </Link>

            <Link
              to="/dashboard?tab=add-notice"
              
              className={
                path === "/dashboard?tab=add-notice"
                  ? "bg-cyan-700 text-white md:hidden dark:text-white md:bg-transparent md:text-cyan-700 block py-2 pl-3 pr-4 md:p-0"
                  : "block py-2 pl-3 pr-4 md:p-0 hover:bg-cyan-700 md:hidden"
              }
            >
              Notices
            </Link>   
          </>
        )}
        {currentUser?.isFaculty && (
          <>
            <Link
              to="/dashboard?tab=students"
              
              className={
                path === "/dashboard?tab=students"
                  ? "bg-cyan-700 text-white dark:text-white md:bg-transparent md:hidden md:text-cyan-700 block py-2 pl-3 pr-4 md:p-0"
                  : "block py-2 pl-3 pr-4 md:p-0 hover:bg-cyan-700 hover:text-white md:hidden"
              }
            >
              Manage students
            </Link>

            <Link
              to="/dashboard?tab=upload-marks"
              
              className={
                path === "/dashboard?tab=upload-marks"
                  ? "bg-cyan-700 text-white md:hidden dark:text-white md:bg-transparent md:text-cyan-700 block py-2 pl-3 pr-4 md:p-0"
                  : "block py-2 pl-3 pr-4 md:p-0 hover:bg-cyan-700 md:hidden"
              }
            >
              Upload marks
            </Link>

            <Link
              to="/dashboard?tab=mark-attendance"
              
              className={
                path === "/dashboard?tab=mark-attendance"
                  ? "bg-cyan-700 text-white md:hidden dark:text-white md:bg-transparent md:text-cyan-700 block py-2 pl-3 pr-4 md:p-0"
                  : "block py-2 pl-3 pr-4 md:p-0 hover:bg-cyan-700 md:hidden"
              }
            >
              Mark attendance
            </Link>

            <Link
              to="/dashboard?tab=add-assignment"
              
              className={
                path === "/dashboard?tab=add-assignment"
                  ? "bg-cyan-700 text-white md:hidden dark:text-white md:bg-transparent md:text-cyan-700 block py-2 pl-3 pr-4 md:p-0"
                  : "block py-2 pl-3 pr-4 md:p-0 hover:bg-cyan-700 md:hidden"
              }
            >
              Assignments
            </Link>

            <Link
              to={`/dashboard?tab=notice-${currentUser.userType}`}
              
              className={
                path === `/dashboard?tab=notice-${currentUser.userType}`
                  ? "bg-cyan-700 text-white md:hidden dark:text-white md:bg-transparent md:text-cyan-700 block py-2 pl-3 pr-4 md:p-0"
                  : "block py-2 pl-3 pr-4 md:p-0 hover:bg-cyan-700 md:hidden"
              }
            >
              Notices
            </Link>

            <Link
              to="/dashboard?tab=see-complaints"
              
              className={
                path === "/dashboard?tab=see-complaints"
                  ? "bg-cyan-700 text-white md:hidden dark:text-white md:bg-transparent md:text-cyan-700 block py-2 pl-3 pr-4 md:p-0"
                  : "block py-2 pl-3 pr-4 md:p-0 hover:bg-cyan-700 md:hidden"
              }
            >
              Complaints
            </Link>
          </>
        )}
        {currentUser?.isStudent && (
          <>
            <Link
              to="/dashboard?tab=courses"
              
              className={
                path === "/dashboard?tab=courses"
                  ? "bg-cyan-700 text-white dark:text-white md:bg-transparent md:hidden md:text-cyan-700 block py-2 pl-3 pr-4 md:p-0"
                  : "block py-2 pl-3 pr-4 md:p-0 hover:bg-cyan-700 hover:text-white md:hidden"
              }
            >
              Courses enrolled
            </Link>

            <Link
              to="/dashboard?tab=show-attendance"
              
              className={
                path === "/dashboard?tab=show-attendance"
                  ? "bg-cyan-700 text-white md:hidden dark:text-white md:bg-transparent md:text-cyan-700 block py-2 pl-3 pr-4 md:p-0"
                  : "block py-2 pl-3 pr-4 md:p-0 hover:bg-cyan-700 md:hidden"
              }
            >
              Show attendance
            </Link>

            <Link
              to="/dashboard?tab=grades"
              
              className={
                path === "/dashboard?tab=grades"
                  ? "bg-cyan-700 text-white md:hidden dark:text-white md:bg-transparent md:text-cyan-700 block py-2 pl-3 pr-4 md:p-0"
                  : "block py-2 pl-3 pr-4 md:p-0 hover:bg-cyan-700 md:hidden"
              }
            >
              Grades
            </Link>

            <Link
              to="/dashboard?tab=progress"
              
              className={
                path === "/dashboard?tab=progress"
                  ? "bg-cyan-700 text-white md:hidden dark:text-white md:bg-transparent md:text-cyan-700 block py-2 pl-3 pr-4 md:p-0"
                  : "block py-2 pl-3 pr-4 md:p-0 hover:bg-cyan-700 md:hidden"
              }
            >
              Progress
            </Link>

            <Link
              to="/dashboard?tab=see-assignment"
              
              className={
                path === "/dashboard?tab=see-assignment"
                  ? "bg-cyan-700 text-white md:hidden dark:text-white md:bg-transparent md:text-cyan-700 block py-2 pl-3 pr-4 md:p-0"
                  : "block py-2 pl-3 pr-4 md:p-0 hover:bg-cyan-700 md:hidden"
              }
            >
              Assignments
            </Link>

            <Link
              to="/dashboard?tab=see-notice"
              
              className={
                path === "/dashboard?tab=see-notice"
                  ? "bg-cyan-700 text-white md:hidden dark:text-white md:bg-transparent md:text-cyan-700 block py-2 pl-3 pr-4 md:p-0"
                  : "block py-2 pl-3 pr-4 md:p-0 hover:bg-cyan-700 md:hidden"
              }
            >
              Notices
            </Link>

            <Link
              to="/dashboard?tab=add-complaints"
              
              className={
                path === "/dashboard?tab=add-complaints"
                  ? "bg-cyan-700 text-white md:hidden dark:text-white md:bg-transparent md:text-cyan-700 block py-2 pl-3 pr-4 md:p-0"
                  : "block py-2 pl-3 pr-4 md:p-0 hover:bg-cyan-700 md:hidden"
              }
            >
              Complaints
            </Link>
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
