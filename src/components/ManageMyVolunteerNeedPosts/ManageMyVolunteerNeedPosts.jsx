import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
const ManageMyVolunteerNeedPosts = () => {
  const { user } = useAuth();
  const [volunteerPosts, setVolunteerPost] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/allVolunteerNeedsPostsIndividually?email=${user.email}`
      )
      .then((data) => setVolunteerPost(data.data));
  }, [user.email]);

  return (
    <div className="mt-12">
      {volunteerPosts.length > 0 ? (
        <div className="overflow-x-auto mt-20 mb-72 px-8">
          <div className="rounded-lg shadow-lg border border-gray-300">
            <table className="table w-full border-collapse">
              <thead className="bg-gray-700 text-white text-lg font-extrabold">
                <tr>
                  <th className="text-center py-3 px-4">SL/No.</th>
                  <th className="text-center py-3 px-4">Thumbnail</th>
                  <th className="text-center py-3 px-4">Post Title</th>
                  <th className="text-center py-3 px-4">Category</th>
                  <th className="text-center py-3 px-4">Location</th>
                  <th className="text-center py-3 px-4">Volunteers Needed</th>
                  <th className="text-center py-3 px-4">Deadline</th>
                  <th className="text-center py-3 px-4">Update</th>
                  <th className="text-center py-3 px-4">Delete</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {volunteerPosts.map((post, index) => (
                  <tr key={post._id} className="hover:bg-gray-100">
                    <td className="text-center py-3 px-4 font-bold text-green-600 text-base">
                      {index + 1}
                    </td>
                    <td className="text-center py-3 px-4">
                      <div className="avatar flex justify-center">
                        <div className="mask rounded-full h-16 w-16">
                          <img
                            src={post.thumbnail_URL}
                            alt={`${post.post_title} Thumbnail`}
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-center py-3 px-4 text-base text-purple-700 font-bold">
                      {post.post_title}
                    </td>
                    <td className="text-center py-3 px-4 text-green-700 font-bold text-base">
                      {post.category}
                    </td>
                    <td className="text-center py-3 px-4 text-indigo-600 font-bold text-base">
                      {post.location}
                    </td>
                    <td className="text-center py-3 px-4 text-orange-600 font-bold text-base">
                      {post.volunteersNeeded}
                    </td>
                    <td className="text-center py-3 px-4 text-rose-600 font-bold text-base">
                      {post.deadline}
                    </td>
                    <td className="text-center text-2xl py-3 px-4 text-amber-500 font-bold ">
                      <Link to={`${post._id}`}>
                        <button>
                          <FaEdit />
                        </button>
                      </Link>
                    </td>
                    <td className="text-center py-3 px-4 text-red-600 font-bold text-2xl">
                      <button>
                        <RiDeleteBin2Fill />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <h1 className="text-2xl font-bold text-slate-500 text-center mt-36 mb-36">
          No Volunteer Need Posts Found!
        </h1>
      )}
    </div>
  );
};

export default ManageMyVolunteerNeedPosts;
