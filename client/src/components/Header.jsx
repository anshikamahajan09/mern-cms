import { Button, Navbar} from "flowbite-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
      <Navbar className=" border-b-2 ">
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white pl-2 py-1"
        >
          <Button className="inline-block px-2 py-1 sm:text-2xl text-xl" size={''} gradientDuoTone={'greenToBlue'}>Campus</Button>
          <span className="text-gray-400  text-xl sm:text-2xl ml-1">Flow</span>
        </Link>
      </Navbar>
  );
}
