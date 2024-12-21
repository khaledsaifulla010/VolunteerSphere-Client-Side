import { Outlet } from "react-router-dom";
import Home from "../pages/Home/Home";
import Navbar from "../components/shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className=" max-w-[1450px] mx-auto mt-8">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Home></Home>
    </div>
  );
};

export default MainLayout;
