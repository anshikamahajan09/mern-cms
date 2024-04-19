import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

function PrivateRoute() {
  const [userType, setUserType] = useState("admin");
  return (userType === "admin" ? <Outlet /> : <Navigate to="/"/>)
}

export default PrivateRoute;
