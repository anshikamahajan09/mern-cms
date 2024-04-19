import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { useState } from "react";
import { FaIdCard } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import { SignInForm } from "../components/SignInForm";

export default function SignIn() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("admin");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const theme = useTheme();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try{
      const res = await fetch(`/api/auth/sign-in/${userType}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if(data.success === false){
        setError(data.message);
        return;
      }
      navigate('/dashboard');
    }
    catch(err){
      setError(err.message);
      setLoading(false);
    }
    
  };
  const handleTabChange = (currentUserType) => {
    setError(null);
    setFormData({ email: "", password: "" });
    setUserType(currentUserType);
  }
  const handleChange = (e) => {
    setError(null);
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

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
