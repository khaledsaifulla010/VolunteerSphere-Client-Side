import { Outlet } from "react-router-dom";
import Home from "../pages/HomePage/Home/Home";

const MainLayout = () => {
  return (
    <div>
      <Outlet></Outlet>
      <Home></Home>
    </div>
  );
};

export default MainLayout;
