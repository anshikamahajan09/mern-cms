import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import DashSidebar from "../components/DashSidebar";
import DashboardAdmin from "../components/DashboardAdmin";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  
  
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
      {tab === 'profile' && <DashboardAdmin />}
     
    </div>
  );
}
