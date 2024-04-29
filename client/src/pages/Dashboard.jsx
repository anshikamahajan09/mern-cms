import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import DashSidebar from "../components/DashSidebar";
import DashboardAdmin from "../components/DashboardAdmin";
import DashboardStudent from "../components/DashboardStudent";
import { useSelector } from "react-redux";
import Profile from "../components/Profile";
import ShowAttendance from "../components/ShowAttendance";
import DashboardFaculty from "../components/DashboardFaculty";
import Notice from "../components/Notices";
import Students from "../components/Students";
import AddStudent from "../components/AddStudent";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  const { currentUser } = useSelector((state) => state.user);
  
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);


 
  return (
    <div className="min-h-screen flex flex-row">
      <DashSidebar />
      {currentUser.isAdmin && (tab === 'dashboard' || !tab) && <DashboardAdmin />}
      {currentUser.isStudent && (tab === 'dashboard' || !tab) && <DashboardStudent />}
      {currentUser.isFaculty && (tab === 'dashboard' || !tab) && <DashboardFaculty />}
      {tab === 'profile' && <Profile />}
      {tab === 'show-attendance' && <ShowAttendance />}
      {tab === 'notices' && <Notice />}
      {tab === 'students' && <Students />}
      {tab === 'add-student' && <AddStudent />}
    </div>
  );
}
