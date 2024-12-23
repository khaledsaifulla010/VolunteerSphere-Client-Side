import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo/favIcon.png";
import userIcon from "../../../assets/icons/userIcon.png";
import "./Navbar.css";
import { useContext } from "react";
import AuthContext from "../../../context/AuthContext/AuthContext";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser().then(() => {
      toast.success("Sign Out Successfully!", {
        position: "top-right",
        theme: "colored",
      });
    });
  };

  return (
    <div>
      <div className="navbar bg-base-100 font-2">
        <div className="navbar-start">
          <Link to={"/"} className="flex items-center">
            <img className="w-12" src={logo} />
            <a className="text-3xl font-black text-transparent bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text">
              VolunteerSphere
            </a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center gap-8 font-semibold text-base">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/allVolunteerNeedPosts"}>
              All Volunteer Need Posts
            </NavLink>
            <div className="dropdown dropdown-bottom dropdown-right dropdown-hover">
              <div tabIndex={0} role="button" className=" m-1">
                My Profile
              </div>
              <ul
                tabIndex={0}
                className="dropdown dropdown-content dropdown-hover menu bg-base-100 rounded-box z-[1] w-64 p-4 shadow border flex items-center text-base gap-y-4"
              >
                <Link
                  className="border px-2 py-1 rounded-xl text-blue-700 bg-blue-50 border-blue-200 w-full"
                  to={"/addVolunteerNeedPost"}
                >
                  <a className="ml-1.5">Add Volunteer Need Post</a>
                </Link>
                <Link
                  className="border px-2 py-1 rounded-xl text-cyan-700 bg-cyan-50 border-cyan-200 w-full"
                  to={"/manageMyPosts"}
                >
                  <a className="ml-8"> Manage My Posts </a>
                </Link>
              </ul>
            </div>
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
              className="m-1"
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
              className="dropdown dropdown-content dropdown-hover menu bg-base-100 rounded-box z-[1] w-28 p-2 shadow border flex items-center text-base gap-y-2 font-semibold"
            >
              <Link
                className="border px-2 py-1 rounded-xl text-cyan-700 bg-cyan-50 border-cyan-200 w-full"
                to={"/aboutMe"}
              >
                <span>About Me</span>
              </Link>
              <Link
                className="border px-2 py-1 rounded-xl text-blue-700 bg-blue-50 border-blue-200 w-full"
                to={"/login"}
              >
                <span className="ml-4">Login</span>
              </Link>
              {user ? (
                <button
                  className="border px-2 py-1 rounded-xl font-bold text-red-600 bg-red-100 border-read-200 mt-2"
                  onClick={handleSignOut}
                >
                  SignOut
                </button>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
