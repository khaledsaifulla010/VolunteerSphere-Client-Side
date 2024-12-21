import { Outlet } from "react-router-dom";
import Home from "../pages/Home/Home";
import Navbar from "../components/shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Home></Home>
    </div>
  );
};

export default MainLayout;
