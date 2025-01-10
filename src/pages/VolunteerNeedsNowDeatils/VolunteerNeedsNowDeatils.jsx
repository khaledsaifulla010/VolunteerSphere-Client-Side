import { BiSolidCategory } from "react-icons/bi";
import { FaCalendarDays } from "react-icons/fa6";
import { GrUserWorker } from "react-icons/gr";
import { HiDocumentCheck } from "react-icons/hi2";
import { IoLocation } from "react-icons/io5";
import { useLoaderData } from "react-router-dom";
import "animate.css/animate.css";
const VolunteerNeedsNowDeatils = () => {
  const volunteerPostDetails = useLoaderData();
  const {
    _id,
    thumbnail_URL,
    post_title,
    description,
    category,
    location,
    volunteersNeeded,
    deadline,
  } = volunteerPostDetails;

  return (
    <div className=" mt-12 font-5 py-24">
      <h1
        style={{ animationDuration: "4s" }}
        className="text-5xl font-bold text-center mb-12 animate__animated
         animate__backInDown"
      >
        "{post_title}" Posts Details
      </h1>
      <div className=" flex justify-center items-center p-8 mt-12 mb-24">
        <div className="card bg-gray-50 border-2 border-gray-300 w-[1400px] h-[700px] shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105">
          <figure className="flex">
            <img
              src={thumbnail_URL}
              alt="Post Thumbnail"
              className="object-cover w-[40%] h-[700px] border-r"
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
              <div className="divider mt-6"></div>
              <p className="mt-4 text-gray-600 text-lg border p-4 rounded-xl bg-orange-50 border-orange-300   text-justify  h-[200px]">
                <p className="flex text-orange-600 font-bold">
                  <HiDocumentCheck className="mr-1 mt-1" />{" "}
                  <span className="underline mb-1">Description</span> :{" "}
                </p>
                {description}
              </p>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default VolunteerNeedsNowDeatils;
