import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo/favIcon.png";
import "./Navbar.css";

const Navbar = () => {
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
                  className="border p-2 rounded-xl text-blue-700 bg-blue-50 border-blue-200"
                  to={"/addVolunteerNeedPost"}
                >
                  <a>Add Volunteer Need Post</a>
                </Link>
                <Link
                  className="border p-2 rounded-xl text-cyan-700 bg-cyan-50 border-cyan-200"
                  to={"/manageMyPosts"}
                >
                  <a>Manage My Posts </a>
                </Link>
              </ul>
            </div>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
