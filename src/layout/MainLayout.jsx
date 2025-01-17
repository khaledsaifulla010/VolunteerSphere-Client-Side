import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import preloaderLottie from "../assets/lottie/preloaderLottie.json";
import Lottie from "lottie-react";

const MainLayout = () => {
  const { loadings } = useContext(AuthContext);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location]);

  if (loadings) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
        <Lottie className="w-[300px]" animationData={preloaderLottie}></Lottie>
      </div>
    );
  }

  return (
    <div className="max-w-[1450px] mx-auto">
      {/* Preloader */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
          <Lottie
            className="w-[300px]"
            animationData={preloaderLottie}
          ></Lottie>
        </div>
      )}

      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
