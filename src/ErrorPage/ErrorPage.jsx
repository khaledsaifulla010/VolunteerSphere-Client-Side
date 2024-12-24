import Lottie from "lottie-react";
import errorLottie from "../assets/lottieFiles/404Lottie.json";
import { Link } from "react-router-dom";
import { FaHandPointLeft } from "react-icons/fa";
const ErrorPage = () => {
  return (
    <div className="font-1">
      <Lottie
        className="max-w-[1000px] mx-auto ml-48"
        animationData={errorLottie}
      ></Lottie>
      <Link
        to={"/"}
        className="absolute -mt-[270px] ml-[290px] border p-2 text-xl rounded-xl bg-indigo-500 text-white font-bold flex items-center gap-2"
      >
        <FaHandPointLeft />
        Back To Home
      </Link>
    </div>
  );
};

export default ErrorPage;
