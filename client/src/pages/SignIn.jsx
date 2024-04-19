import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useState } from "react";
import { FaIdCard } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import { SignInForm } from "../components/SignInForm";
import { useDispatch, useSelector} from "react-redux";
import { signInSuccess, signInFailure, signInStart } from "../redux/user/userSlice";

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {loading, error} = useSelector((state) => state.user);
  const [userType, setUserType] = useState("admin");
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    dispatch(signInStart());
    try{
      const res = await fetch(`/api/auth/sign-in/${userType}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success === false){
        dispatch(signInFailure(data.message));
        return;
      }
      const {password : pass , ...rest} = data;
      dispatch(signInSuccess(rest));
      navigate('/dashboard'); 
    }
    catch(err){
      dispatch(signInFailure(err.message));
    }
    
  };
  const handleTabChange = (currentUserType) => {
    setFormData({ email: "", password: "" });
    setUserType(currentUserType);
  }
  const handleChange = (e) => {
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
