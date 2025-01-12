import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import VolunteerNeedsNowCard from "../VolunteerNeedsNowCard/VolunteerNeedsNowCard";
import { Link } from "react-router-dom";
import "animate.css/animate.css";

const VolunteerNeedsNow = () => {
  const [allVolunteersData, setAllVolunteersData] = useState([]);
  useEffect(() => {
    axios
      .get("https://volunteer-sphere-server-side.vercel.app/volunteerNeedsNow")
      .then((data) => setAllVolunteersData(data.data));
  }, []);

  return (
    <div className=" font-1">
      <h1
        style={{ animationDuration: "4s" }}
        className="text-5xl font-bold text-center mb-12 animate__animated
         animate__bounceInLeft"
      >
        Volunteer Needs Now
      </h1>
      <div className="grid grid-cols-3 mt-16 gap-y-12 gap-x-8 mb-12 ">
        {allVolunteersData.map((volunteer) => (
          <VolunteerNeedsNowCard
            key={volunteer._id}
            volunteer={volunteer}
          ></VolunteerNeedsNowCard>
        ))}
      </div>
      <div>
        <Link to={"/allVolunteerNeedPosts"}>
          <button className=" border px-2 py-1 rounded-lg text-violet-700 bg-violet-100 border-violet-300 font-bold text-base mt-4 ml-[680px] w-24">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VolunteerNeedsNow;
