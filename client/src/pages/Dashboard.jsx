import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import DashSidebar from "../components/DashSidebar";
import DashboardAdmin from "../components/DashboardAdmin";
import DashboardStudent from "../components/DashboardStudent";
import { useSelector } from "react-redux";
import ShowAttendance from "../components/ShowAttendance";

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
      {tab === 'show-attendance' && <ShowAttendance/>}
    </div>
  );
}
