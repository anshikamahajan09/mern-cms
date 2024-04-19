import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import SignInForm from "../components/SignInForm";
import { useState } from "react";
import { FaIdCard } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";

export default function SignIn() {
  const [userType, setUserType] = useState("admin");
  const theme = useTheme();
  return (
    <div className="py-20 w-full px-10 sm:max-w-2xl mx-auto sm:py-20 ">
      <Tabs isFitted variant="enclosed">
        <TabList textColor="brand.600" mb="1em" margin='0' border='0'>
          <Tab
            onClick={() => setUserType("admin")}
            _selected={{
              bg: "brand.700",
              color: "brand.600",
              fontWeight: "600",
              border:'1px solid #ffffff',
              borderBottom:'0',
            }}
          >
            Admin
          </Tab>
          <Tab
            onClick={() => setUserType("Faculty")}
            _selected={{
              bg: "brand.700",
              color: "brand.600",
              fontWeight: "600",
              border:'1px solid #ffffff',
              borderBottom:'0',
            }}
          >
            Faculty
          </Tab>
          <Tab
            onClick={() => setUserType("Student")}
            _selected={{
              bg: "brand.700",
              color: "brand.600",
              fontWeight: "600",
              border:'1px solid #ffffff',
              borderBottom:'0',
            }}
          >
            Student
          </Tab>
        </TabList>
        <div className="border rounded-2xl rounded-tl-none rounded-tr-none">
          {userType === "admin" && (
            <MdAdminPanelSettings className="text-4xl sm:text-6xl flex justify-center w-full mb-4 mt-8 text-white" />
          )}
          {userType === "Faculty" && (
            <LiaChalkboardTeacherSolid className="text-4xl sm:text-6xl flex justify-center w-full mb-4 mt-8 text-white" />
          )}
          {userType === "Student" && (
            <FaIdCard className="text-4xl sm:text-6xl flex justify-center w-full mb-4 mt-8 text-white" />
          )}
          <TabPanels pb='5' textColor="brand.600">
            <TabPanel >
              <SignInForm userType={userType}/>
            </TabPanel>
            <TabPanel >
              <SignInForm userType={userType}/>
            </TabPanel>
            <TabPanel >
              <SignInForm userType={userType}/>
            </TabPanel>
          </TabPanels>
        </div>
      </Tabs>
    </div>
  );
}
