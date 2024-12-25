import { useLoaderData } from "react-router-dom";
import { GrUpdate } from "react-icons/gr";
import { useState } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css/animate.css";
const ManageMyVolunteerNeedPostsUpdate = () => {
  const updateVolunteerNeedPost = useLoaderData();
  const {
    _id,
    thumbnail_URL,
    post_title,
    description,
    category,
    location,
    volunteersNeeded,
    organizerName,
    organizerEmail,
  } = updateVolunteerNeedPost;
  const [deadlines, setDeadlines] = useState(new Date());
  const [volunteers, setVolunteers] = useState(volunteersNeeded || "");

  const handleUpdateVolunteerNeedPost = (e, _id) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newVolunteerNeedPost = Object.fromEntries(formData.entries());
    newVolunteerNeedPost.volunteersNeeded = Number(
      newVolunteerNeedPost.volunteersNeeded
    );

    axios
      .put(
        `https://volunteer-sphere-server-side.vercel.app/allVolunteerNeedsPosts/${_id}`,
        newVolunteerNeedPost
      )
      .then((data) => {
        if (data.data.modifiedCount > 0) {
          toast.success("Volunteer Need Post Updated", {
            position: "top-right",
            theme: "colored",
          });
        }
      });
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <div className="mt-12 mb-24 font-3">
      <h1
        style={{ animationDuration: "4s" }}
        className="text-5xl font-bold text-center mb-16 animate__animated
         animate__backInDown"
      >
        Update My Volunteer Need Post
      </h1>
      <div className="max-w-4xl mx-auto mt-8 p-6 bg-slate-50 rounded-lg shadow-md border transition-all duration-1000 ease-in-out hover:shadow-2xl hover:scale-105">
        <form
          className="space-y-6"
          onSubmit={(e) => handleUpdateVolunteerNeedPost(e, _id)}
        >
          <div>
            <label className="block text-purple-900 font-bold mb-2">
              Thumbnail URL
            </label>
            <input
              type="text"
              name="thumbnail_URL"
              value={thumbnail_URL || ""}
              className="input input-bordered w-full input-success text-black"
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
              className="input input-bordered w-full input-success text-black"
            />
          </div>
          <div>
            <label className="block text-purple-900 font-bold mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={description || ""}
              className="textarea textarea-bordered w-full textarea-success text-black"
              rows="4"
            ></textarea>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <label className="block text-purple-900 font-bold mb-2">
                Category
              </label>
              <select
                name="category"
                className="select select-bordered w-full select-success text-black"
                required
              >
                <option value="" disabled selected>
                  {category}
                </option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="Environmental">Environmental</option>
                <option value="Social-Service">Social Service</option>
                <option value="Animal-Welfare">Animal Welfare</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-purple-900 font-bold mb-2">
                Volunteers Needed
              </label>
              <input
                type="number"
                name="volunteersNeeded"
                value={volunteers}
                onChange={(e) => setVolunteers(e.target.value)}
                className="input input-bordered w-full input-success text-black"
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
                className="input input-bordered w-full input-success text-black"
              />
            </div>
            <div className="flex-1">
              <label className="block text-purple-900 font-bold mb-2">
                Deadline
              </label>
              <DatePicker
                name="deadline"
                selected={deadlines}
                onChange={(date) => setDeadlines(date)}
                dateFormat="dd/MM/yyyy"
                className="input input-bordered w-[182%] input-success text-black"
                required
                minDate={today}
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
                className="input input-bordered w-full input-error cursor-not-allowed text-black"
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
                className="input input-bordered w-full input-error cursor-not-allowed text-black"
              />
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="border p-2 rounded-lg text-green-700 bg-green-100 border-green-300
          font-bold text-lg mt-4 w-full
          transition-all duration-1000 ease-in-out 
          hover:bg-green-200 hover:text-green-900 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
            >
              Update <GrUpdate />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManageMyVolunteerNeedPostsUpdate;
