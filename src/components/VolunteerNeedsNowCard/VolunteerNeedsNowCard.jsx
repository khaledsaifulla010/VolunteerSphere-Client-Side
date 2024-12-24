import { Link } from "react-router-dom";

const VolunteerNeedsNowCard = ({ volunteer }) => {
  const { thumbnail_URL, post_title, category, deadline } = volunteer;
  return (
    <div className="card card-side shadow-md hover:shadow-2xl transition-shadow duration-300 w-[470px] border font-1">
      <figure className="w-[25%]">
        <img
          src={thumbnail_URL}
          alt={post_title}
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="card-body w-[65%]">
        <h2 className="text-2xl font-bold">{post_title}</h2>
        <p className="text-lg text-gray-500 font-semibold">
          <strong>Category :</strong>{" "}
          <span className="text-green-600">{category}</span>
        </p>
        <p className="text-base text-gray-500">
          <strong>Deadline :</strong>{" "}
          <span className="text-rose-600 font-bold">{deadline}</span>
        </p>
        <Link
          to={"/allVolunteerNeedPosts"}
          className="border px-2 py-1 rounded-lg text-blue-700 bg-blue-100 border-blue-300 font-bold text-base mt-4"
        >
          <button className=" w-full ">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default VolunteerNeedsNowCard;
