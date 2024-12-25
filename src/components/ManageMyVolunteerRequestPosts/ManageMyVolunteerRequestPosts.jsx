import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { GiCancel } from "react-icons/gi";
import Swal from "sweetalert2";
const ManageMyVolunteerRequestPosts = () => {
  const [requestPosts, setRequestPosts] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/allVolunteersRequestDataIndividually?email=${user.email}`,
        { withCredentials: true }
      )
      .then((data) => setRequestPosts(data.data));
  }, [user.email]);

  const handleVolunteerRequestCancel = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Won't be Able to Revert This Request!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel It!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/allVolunteers/${_id}`)
          .then((data) => {
            if (data.data.deletedCount > 0) {
              Swal.fire({
                title: "Your Request has been Cancel!",
                icon: "success",
              });
              setRequestPosts((prevPosts) =>
                prevPosts.filter((post) => post._id !== _id)
              );
            } else {
              Swal.fire({
                icon: "error",
                title: "Failed to Cancel Your Post!",
              });
            }
          });
      }
    });
  };

  return (
    <div className="mt-12">
      {requestPosts.length > 0 ? (
        <div className="overflow-x-auto mt-20 mb-72 px-8">
          <div className="rounded-lg shadow-lg border border-gray-300">
            <table className="table w-full border-collapse">
              <thead className="bg-gray-700 text-white text-lg font-extrabold">
                <tr>
                  <th className="text-center py-3 px-4">SL/No.</th>
                  <th className="text-center py-3 px-4">Thumbnail</th>
                  <th className="text-center py-3 px-4">Post Title</th>
                  <th className="text-center py-3 px-4">Location</th>
                  <th className="text-center py-3 px-4">Deadline</th>
                  <th className="text-center py-3 px-4">Organizer Email</th>
                  <th className="text-center py-3 px-4">Status</th>
                  <th className="text-center py-3 px-4">Cancel</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {requestPosts.map((post, index) => (
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
                    <td className="text-center py-3 px-4 text-indigo-600 font-bold text-base">
                      {post.location}
                    </td>
                    <td className="text-center py-3 px-4 text-rose-600 font-bold text-base">
                      {post.deadline}
                    </td>

                    <td className="text-center py-3 px-4 text-base text-blue-600 font-bold">
                      {post.organizerEmail}
                    </td>
                    <td className="text-center py-3 px-4 text-yellow-600 font-bold text-base">
                      {post.status}
                    </td>
                    <td className="text-center py-3 px-4 text-2xl text-red-600">
                      <button
                        onClick={() => handleVolunteerRequestCancel(post._id)}
                      >
                        <GiCancel />
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
          No Volunteer Request Posts Found!
        </h1>
      )}
    </div>
  );
};

export default ManageMyVolunteerRequestPosts;
