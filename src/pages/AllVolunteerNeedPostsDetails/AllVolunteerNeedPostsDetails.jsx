import { Link, useLoaderData } from "react-router-dom";
import { BiSolidCategory } from "react-icons/bi";
import { GrUserWorker } from "react-icons/gr";
import { IoLocation } from "react-icons/io5";
import { FaCalendarDays } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { HiDocumentCheck } from "react-icons/hi2";
import { FaCertificate } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css/animate.css";
import { Helmet } from "react-helmet-async";
const AllVolunteerNeedPostsDetails = () => {
  const postsDetails = useLoaderData();

  const {
    _id,
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

  const handleCantBeAVolunteer = () => {
    if (volunteersNeeded <= 0) {
      toast.error("Sorry, No Volunteers Needed Now!", {
        position: "top-right",
        theme: "colored",
      });
    }
  };

  return (
    <div className="mt-12 font-5 py-36">
      <Helmet>
        <title>VolunteerSphere || Posts Details</title>
      </Helmet>
      <h1
        style={{ animationDuration: "4s" }}
        className="text-5xl font-bold text-center mb-12 animate__animated
         animate__bounceInDown"
      >
        "{post_title}" Posts Details
      </h1>
      <div className=" flex justify-center items-center p-8 mt-12 mb-24">
        <div className="card bg-gray-50 border-2 border-gray-300 w-[1400px] h-[700px] shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105">
          <figure className="flex">
            <img
              src={thumbnail_URL}
              alt="Post Thumbnail"
              className="object-cover w-[40%] h-[700px] border-r rounded-xl"
            />
            <div className="flex flex-col p-4 w-[60%]">
              <h2 className="text-4xl font-bold text-teal-800 bg-teal-50 border-teal-200 border p-2 rounded-xl w-full text-center ">
                {post_title}
              </h2>
              <div className="mt-10 text-lg text-gray-700 flex justify-between gap-8">
                <p
                  className="text-green-600 bg-green-50 border-green-200 border p-2 rounded-xl 
                  w-full flex items-center justify-center
                font-semibold"
                >
                  <BiSolidCategory className="mr-1" /> Category : {category}
                </p>
                <p
                  className="text-green-600 bg-green-50 border-green-200 border p-2 rounded-xl 
                  w-full flex items-center justify-center
                font-semibold"
                >
                  <GrUserWorker className="mr-1" /> Volunteers Needed :{" "}
                  {volunteersNeeded}
                </p>
              </div>
              <div className="mt-8 text-lg text-gray-700 flex justify-between gap-8">
                <p
                  className="text-red-600 bg-red-50 border-red-200 border p-2 rounded-xl
                  w-full flex items-center justify-center
                font-semibold"
                >
                  <IoLocation className="mr-1" /> Location : {location}
                </p>
                <p
                  className="text-red-600 bg-red-50 border-red-200 border p-2 rounded-xl
                   w-full flex items-center justify-center
                font-semibold"
                >
                  <FaCalendarDays className="mr-1" /> Deadline : {deadline}
                </p>
              </div>
              <div className="mt-8 text-lg text-gray-700 flex justify-between gap-8">
                <p
                  className="text-blue-600 bg-blue-50 border-blue-200 border p-2 rounded-xl
                   w-full flex items-center justify-center
                font-semibold"
                >
                  <FaBuilding className="mr-1" /> Organizer Name :{" "}
                  {organizerName}
                </p>
                <p
                  className="text-blue-600 bg-blue-50 border-blue-200 border p-2 rounded-xl
                   w-full flex items-center justify-center
                font-semibold"
                >
                  <MdAttachEmail className="mr-1 mt-0.5" /> Organizer Email :{" "}
                  {organizerEmail}
                </p>
              </div>
              <div className="divider mt-6"></div>
              <p className="mt-4 text-gray-600 text-lg border p-4 rounded-xl bg-orange-50 border-orange-300   text-justify  h-[200px]">
                <p className="flex text-orange-600 font-bold">
                  <HiDocumentCheck className="mr-1 mt-1" />{" "}
                  <span className="underline mb-1">Description</span> :{" "}
                </p>
                {description}
              </p>

              <Link
                className="  w-full border px-2 py-1 rounded-lg text-purple-800 bg-purple-100 border-purple-300 font-bold text-lg mt-10  "
                to={
                  volunteersNeeded > 0
                    ? `/allVolunteerNeedsPosts/beAVolunteer/${_id}`
                    : "#"
                }
              >
                <button
                  onClick={handleCantBeAVolunteer}
                  className="flex items-center  gap-1.5 ml-80"
                >
                  <FaCertificate /> Be a Volunteer
                </button>
              </Link>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default AllVolunteerNeedPostsDetails;
