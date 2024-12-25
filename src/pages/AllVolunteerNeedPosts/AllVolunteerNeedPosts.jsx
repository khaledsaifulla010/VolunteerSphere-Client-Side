import axios from "axios";
import { useState, useEffect } from "react";
import AllVolunteerNeedPostsCard from "../../components/AllVolunteerNeedPostsCard/AllVolunteerNeedPostsCard";
import { IoGrid } from "react-icons/io5";
import { RiTableView } from "react-icons/ri";
import { BsFillSearchHeartFill } from "react-icons/bs";
const AllVolunteerNeedPosts = () => {
  const [allVolunteers, setAllVolunteers] = useState([]);
  const [isTableLayout, setIsTableLayout] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/allVolunteerNeedsPosts")
      .then((data) => setAllVolunteers(data.data));
  }, []);

  const handleLayoutToggle = (layout) => {
    setIsTableLayout(layout);
  };

  return (
    <div className="mt-4 font-4 mb-24">
      <h1 className="text-5xl font-bold text-center mb-12">
        All Volunteer Need Posts
      </h1>
      <div className="text-center mb-2 flex items-center justify-end gap-4">
        <div className="mr-16">
          <input
            className="border rounded-l-lg w-[500px] h-14 p-2 font-bold"
            type="text"
            placeholder="Search with Post Title"
          />
          <button className="absolute right-[250px] top-[280px] h-14 w-[100px] border p-2 rounded-r-lg bg-blue-500 font-bold text-white flex items-center justify-center gap-1">
            Search
            <BsFillSearchHeartFill className="mt-0.5" />
          </button>
        </div>
        <div className="tooltip font-bold" data-tip="Card View">
          <button
            onClick={() => handleLayoutToggle(false)}
            className={`px-4 py-2 ${
              isTableLayout ? "bg-gray-500" : "bg-blue-500"
            } text-white rounded-lg mx-2`}
          >
            <IoGrid />
          </button>
        </div>
        <div className="tooltip font-bold" data-tip="Table View">
          <button
            onClick={() => handleLayoutToggle(true)}
            className={`px-4 py-2 ${
              !isTableLayout ? "bg-gray-500" : "bg-blue-500"
            } text-white rounded-lg mx-2`}
          >
            <RiTableView />
          </button>
        </div>
      </div>
      <div className="divider"></div>
      {isTableLayout ? (
        <div className="overflow-x-auto mt-20 mb-72 px-8">
          <div className="rounded-lg shadow-lg border border-gray-300">
            <table className="table w-full border-collapse">
              <thead className="bg-gray-700 text-white text-lg font-extrabold">
                <tr>
                  <th className="text-center py-3 px-4">Thumbnail</th>
                  <th className="text-center py-3 px-4">Post Title</th>
                  <th className="text-center py-3 px-4">Location</th>
                  <th className="text-center py-3 px-4">View Details</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {allVolunteers.map((volunteer, index) => (
                  <AllVolunteerNeedPostsCard
                    key={volunteer._id}
                    volunteer={volunteer}
                    index={index}
                    isTableLayout={isTableLayout}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 mt-16 gap-y-12 gap-x-8 mb-12">
          {allVolunteers.map((volunteer) => (
            <AllVolunteerNeedPostsCard
              key={volunteer._id}
              volunteer={volunteer}
              isTableLayout={isTableLayout}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllVolunteerNeedPosts;
