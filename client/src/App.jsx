import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import {Navigate} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/sign-up" element={<SignIn />} />
        <Route path="/" element={<Navigate to="/dashboard" />} /> 
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
