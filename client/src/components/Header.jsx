import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { FaMoon, FaSun } from "react-icons/fa";
import { Dropdown, Avatar } from "flowbite-react";

export default function Header() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const handleSignOut = async() => {
    try{
      const res = await fetch('/api/auth/sign-out');
      const data = await res.json();
      if(data.success === false){
        dispatch(signOutFailure(data.message));
        return;
      }
      dispatch(signOutSuccess());
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <div className="px-10 pt-5">
      <Navbar className="bg-[#222831] ">
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
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
        <div className="flex gap-2 md:order-2">
          <Button
            className="w-12 h-10 hidden sm:inline bg-black"
            gradientDuoTone="greenToBlue"
            pill
          >
            {/* {theme === "light" ? <FaMoon /> : <FaSun />} */}
            <FaMoon />
          </Button>

          {currentUser && (
            <Dropdown
              arrowIcon={false}
              inline
              label={<Avatar img={currentUser.profilePicture} rounded />}
            >
              <Dropdown.Header>
                <span className="block">{currentUser.name}</span>
                <span className="block font-semibold">{currentUser.email}</span>
              </Dropdown.Header>
              <Link to="/dashboard?tab=profile">
                <Dropdown.Item>Profile</Dropdown.Item>
              </Link>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleSignOut}>Sign Out</Dropdown.Item>
            </Dropdown>
          )}
          <Navbar.Toggle />
        </div>
      </Navbar>
    </div>
  );
}
