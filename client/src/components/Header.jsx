import { Button, Navbar} from "flowbite-react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";

export default function Header() {
  const {theme} = useSelector((state) => state.theme);
  const dispatch = useDispatch();


  return (
      <div className="dark:bg-[#222831] px-10 pt-5 pb-4 flex justify-between bg-white">
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          {/* <span className="text-xl sm:text-2xl px-2 py-1 bg-gradient-to-r from-[#00adb5] via-[#009688] to-[#4caf50] rounded-lg text-white">
            Campus
          </span> */}
          <Button className="inline-block px-2 py-1 sm:text-2xl text-xl" size={''} gradientDuoTone={'greenToBlue'}>Campus</Button>
          <span className="text-gray-400  text-xl sm:text-2xl ml-1">Flow</span>
        </Link>
        <div className="flex gap-2 md:order-2">
          <Button className="w-12 h-10 hidden sm:inline bg-black" gradientDuoTone='greenToBlue' pill onClick={()=>dispatch(toggleTheme())}>
            {theme === "light" ? <FaMoon /> : <FaSun />}
            
          </Button>

          {/* {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar img={currentUser.profilePicture} rounded />}
          >
            <Dropdown.Header>
              <span className="block">{currentUser.username}</span>
              <span className="block font-semibold">{currentUser.email}</span>
            </Dropdown.Header>
            <Link to="/dashboard?tab=profile">
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Sign Out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/sign-in">
            <Button gradientDuoTone="purpleToBlue" outline>
              Sign In
            </Button>
          </Link>
        )} */}
          {/* <Navbar.Toggle /> */}
        </div>
        {/* <Navbar.Collapse>
        <Link
          to="/"
          className={
            path === "/"
              ? "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700 block py-2 pl-3 pr-4 md:p-0"
              : "block py-2 pl-3 pr-4 md:p-0"
          }
        >
          Home
        </Link>

        <Link
          to="/about"
          className={
            path === "/about"
              ? "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700 block py-2 pl-3 pr-4 md:p-0"
              : "block py-2 pl-3 pr-4 md:p-0"
          }
        >
          About
        </Link>

        <Link
          to="/projects"
          className={
            path === "/projects"
              ? "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700 block py-2 pl-3 pr-4 md:p-0"
              : "block py-2 pl-3 pr-4 md:p-0"
          }
        >
          Projects
        </Link>
      </Navbar.Collapse> */}
      </div>
  );
}
