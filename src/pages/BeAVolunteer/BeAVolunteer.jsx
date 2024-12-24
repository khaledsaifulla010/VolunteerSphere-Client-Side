import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GiJusticeStar } from "react-icons/gi";
import useAuth from "../../hooks/useAuth";
const BeAVolunteer = () => {
  const { user } = useAuth();

  const postsDetails = useLoaderData();
  const {
    thumbnail_URL,
    post_title,
    description,
    category,
    location,
    volunteersNeeded,
    deadline,
    organizerName,
    organizerEmail,
  } = postsDetails;

  const handleBeAVoluenteerRequest = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const beAVolunteer = Object.fromEntries(formData.entries());
    beAVolunteer.postId = postsDetails._id;

    axios
      .post("http://localhost:5000/allVolunteers", beAVolunteer)
      .then((data) => {
        if (data.data.modifiedCount > 0) {
          toast.success(" Successfully Requested As a Volunteer", {
            position: "top-right",
            theme: "colored",
          });
        }
      });
  };

  return (
    <div className="mt-12 font-5 mb-24">
      <h1 className="text-5xl font-bold text-center mb-12">
        Request As a Volunteer
      </h1>

      <div className="max-w-4xl mx-auto mt-8 p-6 bg-slate-50 rounded-lg shadow-md border transition-all duration-1000 ease-in-out hover:shadow-2xl hover:scale-105">
        <form className="space-y-6" onSubmit={handleBeAVoluenteerRequest}>
          <div>
            <label className="block text-purple-900 font-bold mb-2">
              Thumbnail URL
            </label>
            <input
              type="text"
              name="thumbnail_URL"
              value={thumbnail_URL || ""}
              readOnly
              className="input input-bordered w-full input-error cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-purple-900 font-bold mb-2">
              Post Title
            </label>
            <input
              type="text"
              name="post_title"
              value={post_title || ""}
              readOnly
              className="input input-bordered w-full input-error cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-purple-900 font-bold mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={description || ""}
              readOnly
              className="textarea textarea-bordered w-full textarea-error cursor-not-allowed"
              rows="4"
            ></textarea>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <label className="block text-purple-900 font-bold mb-2">
                Category
              </label>
              <input
                type="text"
                name="category"
                value={category || ""}
                readOnly
                className="input input-bordered w-full input-error cursor-not-allowed"
              />
            </div>
            <div className="flex-1">
              <label className="block text-purple-900 font-bold mb-2">
                Volunteers Needed
              </label>
              <input
                type="number"
                name="volunteersNeeded"
                value={volunteersNeeded || ""}
                readOnly
                className="input input-bordered w-full input-error cursor-not-allowed"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <label className="block text-purple-900 font-bold mb-2">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={location || ""}
                readOnly
                className="input input-bordered w-full input-error cursor-not-allowed"
              />
            </div>
            <div className="flex-1">
              <label className="block text-purple-900 font-bold mb-2">
                Deadline
              </label>
              <input
                type="text"
                name="deadline"
                value={deadline || ""}
                readOnly
                className="input input-bordered w-full input-error cursor-not-allowed"
              />
            </div>
            <div className="flex-1">
              <label className="block text-purple-900 font-bold mb-2">
                Status
              </label>
              <input
                type="text"
                name="status"
                value="Requested"
                readOnly
                className="input input-bordered w-full input-error cursor-not-allowed"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <label className="block text-purple-900 font-bold mb-2">
                Organizer Name
              </label>
              <input
                type="text"
                name="organizerName"
                value={organizerName || ""}
                readOnly
                className="input input-bordered w-full input-error cursor-not-allowed"
              />
            </div>
            <div className="flex-1">
              <label className="block text-purple-900 font-bold mb-2">
                Organizer Email
              </label>
              <input
                type="email"
                name="organizerEmail"
                value={organizerEmail || ""}
                readOnly
                className="input input-bordered w-full input-error cursor-not-allowed"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <label className="block text-purple-900 font-bold mb-2">
                Volunteer Name
              </label>
              <input
                type="text"
                name="volunteerName"
                value={user.displayName || ""}
                readOnly
                className="input input-bordered w-full input-error cursor-not-allowed"
              />
            </div>
            <div className="flex-1">
              <label className="block text-purple-900 font-bold mb-2">
                Volunteer Email
              </label>
              <input
                type="email"
                name="volunteerEmail"
                value={user.email || ""}
                readOnly
                className="input input-bordered w-full input-error cursor-not-allowed"
              />
            </div>
          </div>
          <div>
            <label className="block text-purple-900 font-bold mb-2">
              Suggestion
            </label>
            <textarea
              name="suggestion"
              placeholder="Enter your suggestion"
              className="textarea textarea-bordered w-full textarea-success"
              rows="4"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="border p-2 rounded-lg text-green-700 bg-green-100 border-green-300
          font-bold text-lg mt-4 w-full
          transition-all duration-1000 ease-in-out 
          hover:bg-green-200 hover:text-green-900 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-1"
            >
              <GiJusticeStar /> Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BeAVolunteer;
