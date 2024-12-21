import { Link } from "react-router-dom";
import logo from "../../../assets/logo/favIcon.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link to={"/"} className="flex items-center">
            <img className="w-12" src={logo} />
            <a className="text-3xl font-black text-transparent bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text">
              VolunteerSphere
            </a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
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
