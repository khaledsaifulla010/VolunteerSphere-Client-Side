import axios from "axios";
import { useState, useEffect } from "react";
import AllVolunteerNeedPostsCard from "../../components/AllVolunteerNeedPostsCard/AllVolunteerNeedPostsCard";
import { IoGrid } from "react-icons/io5";
import { RiTableView } from "react-icons/ri";
import { BsFillSearchHeartFill } from "react-icons/bs";
import "animate.css/animate.css";
import { Helmet } from "react-helmet-async";

const AllVolunteerNeedPosts = () => {
  const [allVolunteers, setAllVolunteers] = useState([]);
  const [filteredVolunteers, setFilteredVolunteers] = useState([]);
  const [isTableLayout, setIsTableLayout] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("default"); // New state for sorting option

  useEffect(() => {
    axios
      .get(
        "https://volunteer-sphere-server-side.vercel.app/allVolunteerNeedsPosts"
      )
      .then((data) => {
        setAllVolunteers(data.data);
        setFilteredVolunteers(data.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Search function
  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setFilteredVolunteers(allVolunteers);
    } else {
      const filtered = allVolunteers.filter((volunteer) =>
        volunteer.post_title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredVolunteers(filtered);
    }
  };

  // Sort by volunteersNeeded function
  const handleSortByVolunteersNeeded = () => {
    const sortedPosts = [...filteredVolunteers].sort((a, b) => {
      return b.volunteersNeeded - a.volunteersNeeded;
    });
    setFilteredVolunteers(sortedPosts);
  };

  // Handle sort option change
  const handleSortOptionChange = (event) => {
    const value = event.target.value;
    setSortOption(value);

    if (value === "volunteersNeeded") {
      handleSortByVolunteersNeeded();
    } else {
      // Default sorting (reset to original order)
      setFilteredVolunteers(allVolunteers);
    }
  };

  const handleLayoutToggle = (layout) => {
    setIsTableLayout(layout);
  };

  return (
    <div className="mt-4 font-4 mb-24 py-36">
      <Helmet>
        <title>VolunteerSphere || All Volunteer Need Posts</title>
      </Helmet>
      <h1
        style={{ animationDuration: "4s" }}
        className="text-5xl font-bold text-center mb-12 animate__animated animate__bounceInLeft"
      >
        All Volunteer Need Posts
      </h1>
      <div className="text-center mb-2 flex items-center justify-end gap-4">
        <div className="mr-16 relative">
          <input
            className="border rounded-l-lg w-[500px] h-14 p-2 font-bold"
            type="text"
            placeholder="Search with Post Title"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="absolute -right-2 top-0 h-14 w-[100px] border p-2 rounded-r-lg bg-blue-500 font-bold text-white flex items-center justify-center gap-1"
            onClick={handleSearch}
          >
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
        {/* Sort select dropdown */}
        <div className="tooltip font-bold" data-tip="Sort Options">
          <select
            value={sortOption}
            onChange={handleSortOptionChange}
            className="px-4 py-2 text-center border border-blue-500 rounded-lg mx-2 outline-none font-bold text-green-500"
          >
            <option value="default">Sort by Default</option>
            <option value="volunteersNeeded">Sort by Volunteers Needed</option>
          </select>
        </div>
      </div>
      <div className="divider"></div>
      {filteredVolunteers.length === 0 ? (
        <div className="text-center text-2xl font-bold text-red-500 mt-16">
          No Posts Found.
        </div>
      ) : isTableLayout ? (
        <div className="overflow-x-auto mt-20 mb-72 px-8">
          <div className="rounded-lg shadow-lg border border-gray-300">
            <table className="table w-full border-collapse">
              <thead className="bg-gray-700 text-white text-lg font-extrabold">
                <tr>
                  <th className="text-center py-3 px-4">Thumbnail</th>
                  <th className="text-center py-3 px-4">Post Title</th>
                  <th className="text-center py-3 px-4">Location</th>
                  <th className="text-center py-3 px-4">Volunteers Needed</th>
                  <th className="text-center py-3 px-4">View Details</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {filteredVolunteers.map((volunteer, index) => (
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
          {filteredVolunteers.map((volunteer) => (
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
