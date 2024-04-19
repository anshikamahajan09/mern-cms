import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { useState } from "react";
import { FaIdCard } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { SignInForm } from "../components/SignInForm";

export default function SignIn() {
  const [userType, setUserType] = useState("admin");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const theme = useTheme();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    // Add your form submission logic here
  };
  const handleTabChange = (currentUserType) => {
    setError(null);
    setFormData({ email: "", password: "" });
    setUserType(currentUserType);
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  console.log(formData);
  return (
    <div className="py-20 w-full px-10 sm:max-w-2xl mx-auto sm:py-20 ">
      <Tabs isFitted variant="enclosed">
        <TabList textColor="brand.600" mb="1em" margin="0" border="0">
          <Tab
            onClick={() => handleTabChange("admin")}
            _selected={{
              bg: "brand.700",
              color: "brand.600",
              fontWeight: "600",
              border: "1px solid #ffffff",
              borderBottom: "0",
            }}
          >
            Admin
          </Tab>
          <Tab
            onClick={() => handleTabChange("faculty")}
            _selected={{
              bg: "brand.700",
              color: "brand.600",
              fontWeight: "600",
              border: "1px solid #ffffff",
              borderBottom: "0",
            }}
          >
            Faculty
          </Tab>
          <Tab
            onClick={() => handleTabChange("student")}
            _selected={{
              bg: "brand.700",
              color: "brand.600",
              fontWeight: "600",
              border: "1px solid #ffffff",
              borderBottom: "0",
            }}
          >
            Student
          </Tab>
        </TabList>
        <div className="border rounded-2xl rounded-tl-none rounded-tr-none">
          {userType === "admin" && (
            <MdAdminPanelSettings className="text-4xl sm:text-6xl flex justify-center w-full mb-4 mt-8 text-white" />
          )}
          {userType === "faculty" && (
            <LiaChalkboardTeacherSolid className="text-4xl sm:text-6xl flex justify-center w-full mb-4 mt-8 text-white" />
          )}
          {userType === "student" && (
            <FaIdCard className="text-4xl sm:text-6xl flex justify-center w-full mb-4 mt-8 text-white" />
          )}
          <TabPanels pb="5" textColor="brand.600">
            <TabPanel>
            <SignInForm
                userType={userType}
                formData={formData}
                handleChange={handleChange}
                handleFormSubmit={handleFormSubmit}
                loading={loading}
                error={error}
              />
            </TabPanel>
            <TabPanel>
            <SignInForm
                userType={userType}
                formData={formData}
                handleChange={handleChange}
                handleFormSubmit={handleFormSubmit}
                loading={loading}
                error={error}
              />
            </TabPanel>
            <TabPanel>
            <SignInForm
                userType={userType}
                formData={formData}
                handleChange={handleChange}
                handleFormSubmit={handleFormSubmit}
                loading={loading}
                error={error}
              />
            </TabPanel>
            
          </TabPanels>
        </div>
      </Tabs>
    </div>
  );
}
