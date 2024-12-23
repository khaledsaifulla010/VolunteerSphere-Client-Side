import { useLoaderData } from "react-router-dom";

const AllVolunteerNeedPostsDetails = () => {
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

  return (
    <div className="mt-12">
      <h1 className="text-5xl font-bold text-center mb-12">
        All Volunteer Need Posts Details
      </h1>
      <div className="flex justify-center items-center p-8 mt-12 mb-24">
        <div className="card bg-slate-100 border-2 border-gray-300 w-[1200px] h-[550px] shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105">
          <figure className="flex">
            <img
              src={thumbnail_URL}
              alt="Post Thumbnail"
              className="object-cover w-[40%] h-[550px] border-r"
            />
            <div className="flex flex-col p-6 w-[60%]">
              <h2 className="text-4xl font-bold text-indigo-800 bg-indigo-50 border-indigo-200 border p-2 rounded-xl w-full text-center">
                {post_title}
              </h2>
              <div className="mt-10 text-lg text-gray-700 flex justify-between gap-8">
                <p className="text-green-600 bg-green-50 border-green-200 border p-2 rounded-xl w-[40%] text-center">
                  <strong>Category: </strong> {category}
                </p>
                <p className="text-green-600 bg-green-50 border-green-200 border p-2 rounded-xl w-[60%] text-center">
                  <strong>Location: </strong> {location}
                </p>
              </div>
              <div className="mt-8 text-lg text-gray-700 flex justify-between gap-8">
                <p className="text-red-600 bg-red-50 border-red-200 border p-2 rounded-xl w-[40%] text-center">
                  <strong>Volunteers Needed: </strong> {volunteersNeeded}
                </p>
                <p className="text-red-600 bg-red-50 border-red-200 border p-2 rounded-xl w-[60%] text-center">
                  <strong>Deadline: </strong> {deadline}
                </p>
              </div>
              <div className="mt-8 text-lg text-gray-700 flex justify-between gap-8">
                <p className="text-blue-600 bg-blue-50 border-blue-200 border p-2 rounded-xl w-[40%] text-center">
                  <strong>Organizer Name: </strong> {organizerName}
                </p>
                <p className="text-blue-600 bg-blue-50 border-blue-200 border p-2 rounded-xl w-[60%] text-center">
                  <strong>Organizer Email: </strong> {organizerEmail}
                </p>
              </div>
              <div className="divider mt-6"></div>
              <p className="mt-4 text-gray-600 text-lg font-bold text-justify">
                <strong className="text-orange-600">Description: </strong>
                {description}
              </p>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default AllVolunteerNeedPostsDetails;
