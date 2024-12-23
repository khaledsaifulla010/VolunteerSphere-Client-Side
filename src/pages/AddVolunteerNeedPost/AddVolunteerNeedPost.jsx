import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AuthContext from "../../context/AuthContext/AuthContext";

const AddVolunteerNeedPost = () => {
  const [deadline, setDeadline] = useState(new Date());
  const { user } = useContext(AuthContext);

  const handleVolunteerNeedPost = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newVolunteerNeedPost = Object.fromEntries(formData.entries());

    console.log(newVolunteerNeedPost);
  };

  return (
    <div className="font-3 mt-12 mb-24">
      <h1 className="text-5xl font-bold text-center mb-12">
        Add Volunteer Need Post
      </h1>
      <div className="max-w-4xl mx-auto mt-8 p-6 bg-slate-50 rounded-lg shadow-md border transition-all duration-1000 ease-in-out hover:shadow-2xl hover:scale-105">
        <form className="space-y-6" onSubmit={handleVolunteerNeedPost}>
          {/* Thumbnail */}
          <div>
            <label className="block text-purple-900 font-bold mb-2">
              Thumbnail URL
            </label>
            <input
              name="thumbnail_URL"
              type="url"
              placeholder="Enter Thumbnail URL"
              className="input input-bordered w-full input-success"
              required
            />
          </div>

          {/* Post Title */}
          <div>
            <label className="block text-purple-900 font-semibold mb-2">
              Post Title
            </label>
            <input
              name="post_title"
              type="text"
              placeholder="Enter Post title"
              className="input input-bordered w-full input-success"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-purple-900 font-bold mb-2">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Enter Description"
              className="textarea textarea-bordered w-full textarea-success"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Category */}
            <div>
              <label className="block text-purple-900 font-bold mb-2">
                Category
              </label>
              <select
                name="category"
                className="select select-bordered w-full select-success"
                required
              >
                <option value="" disabled selected>
                  Select Category
                </option>
                <option value="healthcare">Healthcare</option>
                <option value="education">Education</option>
                <option value="social-service">Social Service</option>
                <option value="animal-welfare">Animal Welfare</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-purple-900 font-bold mb-2">
                Location
              </label>
              <input
                name="location"
                type="text"
                placeholder="Enter Location"
                className="input input-bordered w-full input-success"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Number of Volunteers */}
            <div>
              <label className="block text-purple-900 font-bold mb-2">
                No. of Volunteers Needed
              </label>
              <input
                name="volunteersNeeded"
                type="number"
                placeholder="Enter Number of Volunteers"
                className="input input-bordered w-full input-success"
                min="1"
                required
              />
            </div>

            {/* Deadline */}
            <div>
              <label className="block text-purple-900 font-bold mb-2">
                Deadline
              </label>
              <DatePicker
                name="deadline"
                selected={deadline}
                onChange={(date) => setDeadline(date)}
                dateFormat="dd/MM/yyyy"
                className="input input-bordered w-[182%] input-success"
                required
              />
            </div>
          </div>

          {/* Organizer Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-purple-900 font-bold mb-2">
                Organizer Name
              </label>
              <input
                name="organizerName"
                type="text"
                value={user?.displayName || ""}
                className="input w-full cursor-not-allowed input-error font-bold text-gray-500"
                readOnly
              />
            </div>
            <div>
              <label className="block text-purple-900 font-bold mb-2">
                Organizer Email
              </label>
              <input
                name="organizerEmail"
                type="email"
                value={user?.email || ""}
                className="input w-full cursor-not-allowed input-error font-bold text-gray-500"
                readOnly
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="
                border p-2 rounded-lg text-blue-700 bg-blue-200 border-blue-400
                font-bold text-lg mt-4 w-full
                transition-all duration-1000 ease-in-out 
                hover:bg-blue-300 hover:text-blue-900 hover:shadow-lg hover:scale-105
              "
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVolunteerNeedPost;
