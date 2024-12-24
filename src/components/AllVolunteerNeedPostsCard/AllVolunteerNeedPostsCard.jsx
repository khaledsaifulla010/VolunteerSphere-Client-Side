import { Link } from "react-router-dom";

const AllVolunteerNeedPostsCard = ({ volunteer, isTableLayout }) => {
  const { _id, thumbnail_URL, post_title, location } = volunteer;

  if (isTableLayout) {
    return (
      <tr className="hover:bg-gray-100">
        <td className="text-center py-3 px-4">
          <div className="avatar flex justify-center">
            <div className="mask rounded-full h-16 w-16">
              <img
                src={thumbnail_URL}
                alt={`${post_title} Thumbnail`}
                className="object-cover"
              />
            </div>
          </div>
        </td>
        <td className="text-center py-3 px-4 text-base text-purple-700 font-bold">
          {post_title}
        </td>
        <td className="text-center py-3 px-4 text-indigo-600 font-bold">
          {location}
        </td>
        <td className="text-center py-3 px-4">
          <Link
            to={`/allVolunteerNeedsPosts/${_id}`}
            className="border px-2 py-1 rounded-lg text-blue-700 bg-blue-100 border-blue-300 font-bold text-base mt-4"
          >
            View Details
          </Link>
        </td>
      </tr>
    );
  }

  return (
    <div className="card card-side shadow-md hover:shadow-2xl transition-shadow duration-300 w-[480px] border">
      <figure className="w-[25%]">
        <img
          src={thumbnail_URL}
          alt={post_title}
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="card-body w-[65%]">
        <h2 className="text-2xl font-bold">{post_title}</h2>
        <p className="text-base text-gray-500 flex items-center font-semibold">
          <strong className="flex items-center">Location: </strong>
          <span className="text-purple-600 font-bold ml-1">{location}</span>
        </p>
        <Link
          to={`/allVolunteerNeedsPosts/${_id}`}
          className="border px-2 py-1 rounded-lg text-blue-700 bg-blue-100 border-blue-300 font-bold text-base mt-4 text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default AllVolunteerNeedPostsCard;
