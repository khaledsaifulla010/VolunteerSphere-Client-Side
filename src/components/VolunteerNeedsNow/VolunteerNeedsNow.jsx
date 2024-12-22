import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import VolunteerNeedsNowCard from "../VolunteerNeedsNowCard/VolunteerNeedsNowCard";

const VolunteerNeedsNow = () => {
  const [allVolunteersData, setAllVolunteersData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/volunteerNeedsNow")
      .then((data) => setAllVolunteersData(data.data));
  }, []);
  

  return (
    <div className="mt-24 font-1">
      <h1 className="text-5xl font-bold text-center mb-12">
        Volunteer Needs Now
      </h1>
      <div className="grid grid-cols-3 mt-16 gap-y-12 gap-x-8 mb-24 ">
        {allVolunteersData.map((volunteer) => (
          <VolunteerNeedsNowCard
            key={volunteer._id}
            volunteer={volunteer}
          ></VolunteerNeedsNowCard>
        ))}
      </div>
    </div>
  );
};

export default VolunteerNeedsNow;
