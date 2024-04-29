import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import {Navigate} from "react-router-dom";
import { useSelector } from "react-redux";


export default function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/sign-up" element={<SignIn />} />

        {currentUser?.userType && (
          <Route path="/" element={<Navigate to={`/${currentUser.userType}`} />} /> 
        )}
        <Route element={<PrivateRoute />}>
          <Route path={`/${currentUser?.userType}`} element={<Dashboard />} />
        </Route>
        <Route path="*" element={<Navigate to="/sign-up" />} />
      </Routes>
    </BrowserRouter>
  );
}
