import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const AllVolunteerNeedPosts = () => {
  const [allVolunteers, setAllVolunteers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/allVolunteerNeedsPosts")
      .then((data) => setAllVolunteers(data.data));
  }, []);

  return (
    <div className="mt-12 font-4">
      <h1 className="text-5xl font-bold text-center mb-12">
        All Volunteer Need Posts : {allVolunteers.length}
      </h1>
    </div>
  );
};

export default AllVolunteerNeedPosts;
