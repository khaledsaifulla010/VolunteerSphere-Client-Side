import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import AllVolunteerNeedPostsCard from "../../components/AllVolunteerNeedPostsCard/AllVolunteerNeedPostsCard";

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
      <div className="grid grid-cols-3 mt-16 gap-y-12 gap-x-8 mb-12 ">
        {allVolunteers.map((volunteer) => (
          <AllVolunteerNeedPostsCard
            key={volunteer._id}
            volunteer={volunteer}
          ></AllVolunteerNeedPostsCard>
        ))}
      </div>
    </div>
  );
};

export default AllVolunteerNeedPosts;
