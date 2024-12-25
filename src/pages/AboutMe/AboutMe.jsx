import { FaUserCircle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const AboutMe = () => {
  const { user } = useAuth();
  return (
    <div className="mb-36 mt-12">
      <div className="card border max-w-[900px] mx-auto rounded-xl shadow-lg bg-white">
        <div className="flex items-center ml-12 mt-8 gap-4">
          {user && user?.photoURL ? (
            <img
              className="w-16 h-16 border border-dashed border-slate-700 rounded-full p-1"
              src={user?.photoURL}
            />
          ) : (
            <h1 className="text-5xl">
              <FaUserCircle />
            </h1>
          )}
          <div
            className="tooltip absolute left-[90px] top-[92px] tooltip-right tooltip-success"
            data-tip="Active"
          >
            <div className="w-3 h-3 rounded-full border-2 bg-green-600 "></div>
          </div>
          <div>
            <h1 className="font-bold text-2xl text-purple-700">
              {user?.displayName ?? "N/A"}
            </h1>
            <h2 className="font-bold text-lg text-slate-500">{user?.email}</h2>
            <h3 className="font-bold text-sm text-slate-500">
              Last Seen:
              {user.metadata?.lastSignInTime
                ? new Date(user.metadata.lastSignInTime).toLocaleDateString(
                    "en-GB",
                    {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    }
                  )
                : "N/A"}
            </h3>
          </div>
        </div>
        <div className="divider px-4"></div>
        <div className=" ">
          <div className="flex items-center justify-between px-6 py-4">
            <h1 className="font-bold text-xl text-black">Name </h1>
            <h1 className="font-bold text-xl text-slate-600">
              {user?.displayName}
            </h1>
          </div>
          <div className="divider px-4 -mt-2"></div>
          <div className="flex items-center justify-between px-6 py-4">
            <h1 className="font-bold text-xl text-black">Email </h1>
            <h1 className="font-bold text-xl text-slate-600">{user?.email}</h1>
          </div>
          <div className="divider px-4 -mt-2"></div>
          <div className="flex items-center justify-between px-6 py-4">
            <h1 className="font-bold text-xl text-black">Phone Number</h1>
            <h1 className="font-bold text-xl text-slate-600">
              {user?.phoneNumber ?? "N/A"}
            </h1>
          </div>
          <div className="divider px-4 -mt-2"></div>
          <div className="flex items-center justify-between px-6 py-4">
            <h1 className="font-bold text-xl text-black">Account Created</h1>
            <h1 className="font-bold text-xl text-slate-600">
              {user.metadata?.creationTime
                ? new Date(user.metadata.creationTime).toLocaleDateString(
                    "en-GB",
                    {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    }
                  )
                : "N/A"}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
