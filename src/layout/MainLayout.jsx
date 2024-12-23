import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";
import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";

const MainLayout = () => {
  const { loadings } = useContext(AuthContext);

  if (loadings) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner"></div>{" "}
        <span className=" w-28 loading loading-infinity text-secondary"></span>
      </div>
    );
  }

  return (
    <div className=" max-w-[1450px] mx-auto mt-8">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
