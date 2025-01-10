import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo/favIcon.png";
import userIcon from "../../../assets/icons/userIcon.png";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../../hooks/useAuth";
import DarkWhiteMode from "../../DarkWhiteMode/DarkWhiteMode";
import "./Navbar.css";

const Navbar = () => {
  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser().then(() => {
      toast.success("Sign Out Successfully!", {
        position: "top-right",
        theme: "colored",
      });
    });
    navigate("/");
  };

  return (
    <div className="navbar bg-base-100 font-2 rounded-xl px-8 shadow-md hover:shadow-[0px_10px_30px_rgba(0,0,0,0.3)] transition-shadow duration-1000 ease-in-out fixed left-0 right-0 z-10 top-0  py-4">
      <div className="navbar-start">
        <Link to={"/"} className="flex items-center">
          <img className="w-12" src={logo} alt="Logo" />
          <span className="text-3xl font-black text-transparent bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text">
            VolunteerSphere
          </span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center gap-16 font-semibold text-base">
          <NavLink
            to={"/"}
            className="text-black hover:text-rose-500  transition duration-300"
          >
            Home
          </NavLink>
          <NavLink
            to={"/allVolunteerNeedPosts"}
            className="text-black hover:text-rose-500 transition duration-300"
          >
            All Volunteer Need Posts
          </NavLink>

          <div className="dropdown dropdown-bottom dropdown-right dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="cursor-pointer text-black"
            >
              My Profile
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 text-black rounded-box z-[1] w-64 p-4 shadow border flex items-center text-base gap-y-4"
            >
              <Link
                className="border px-2 py-1 rounded-xl text-blue-700 bg-blue-50 border-blue-200 w-full text-center"
                to={"/addVolunteerNeedPost"}
              >
                Add Volunteer Need Post
              </Link>
              <Link
                className="border px-2 py-1 rounded-xl text-cyan-700 bg-cyan-50 border-cyan-200 w-full text-center"
                to={"/manageMyPosts"}
              >
                Manage My Posts
              </Link>
            </ul>
          </div>

          <DarkWhiteMode />
        </ul>
      </div>

      <div className="navbar-end">
        <div
          data-tooltip-id="my-tooltip"
          data-tooltip-content={user?.displayName || "Guest User"}
          className="dropdown dropdown-bottom dropdown-end dropdown-hover relative"
        >
          <div
            tabIndex={0}
            role="button"
            className="cursor-pointer"
            aria-label="User profile"
          >
            {user?.photoURL ? (
              <img
                className="w-16 h-16 border border-dotted border-slate-500 rounded-full p-1"
                src={user.photoURL}
                alt="User profile"
              />
            ) : (
              <img
                className="w-16 h-16 border-2 border-dashed border-slate-300 rounded-full"
                src={userIcon}
                alt="Default user icon"
              />
            )}
          </div>
          <Tooltip
            id="my-tooltip"
            place="left"
            style={{
              transform: "translateY(-50%)",
              top: "50%",
              backgroundColor: "indigo",
              fontWeight: 700,
            }}
          />
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 text-black rounded-box z-[1] w-28 p-2 shadow border flex items-center text-base gap-y-2 font-semibold"
          >
            <Link
              className="border px-2 py-1 rounded-xl text-cyan-700 bg-cyan-50 border-cyan-200 w-full text-center"
              to={"/aboutMe"}
            >
              About Me
            </Link>
            <Link
              className="border px-2 py-1 rounded-xl text-blue-700 bg-blue-50 border-blue-200 w-full text-center"
              to={"/login"}
            >
              Login
            </Link>
            {user && (
              <button
                className="border px-2 py-1 rounded-xl font-bold text-red-600 bg-red-100 border-red-200 mt-2 w-full text-center"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
