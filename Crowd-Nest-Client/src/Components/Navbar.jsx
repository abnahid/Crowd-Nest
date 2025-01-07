import { useContext, useEffect, useState } from "react";
import {
  IoMdHelpCircleOutline,
  IoMdLogOut,
  IoMdSettings,
} from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import defaultProfilePicture from "../assets/defaultProfilePicture.jpg";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("register");
  const [darkMode, setDarkMode] = useState(false);

  const activeStyle = "font-semibold text-primary ";

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const theme = darkMode ? "mydarktheme" : "mytheme";
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeStyle : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/campaigns"
          className={({ isActive }) => (isActive ? activeStyle : "")}
        >
          All Campaign
        </NavLink>
      </li>

      {user?.email && (
        <div className="dropdown dropdown-end">
          <label
            tabIndex="0"
            className="flex px-4 py-2 items-center gap-1 hover:bg-gray-200 rounded-lg"
          >
            My Account
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="dropdown-content menu p-2 shadow bg-white rounded-box w-52 mt-2 z-50"
          >
            <li>
              <NavLink
                to="/my-campaign"
                className={({ isActive }) =>
                  `hover:bg-gray-200 px-4 py-2 ${isActive ? activeStyle : ""}`
                }
              >
                My Campaign
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-donations"
                className={({ isActive }) =>
                  `hover:bg-gray-200 px-4 py-2 ${isActive ? activeStyle : ""}`
                }
              >
                My Donations
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addCampaign"
                className={({ isActive }) =>
                  `hover:bg-gray-200 px-4 py-2 ${isActive ? activeStyle : ""}`
                }
              >
                Create Campaign
              </NavLink>
            </li>
          </ul>
        </div>
      )}
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? activeStyle : "")}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? activeStyle : "")}
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/support"
          className={({ isActive }) => (isActive ? activeStyle : "")}
        >
          Support
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 z-50 lg:px-8">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          {/* Mobile Menu Button */}
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-60 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link className="px-4 normal-case text-2xl font-semibold gap-1 md:block hidden">
          Crowd Nest
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-3 px-1">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        {user && user?.email ? (
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-12 rounded-full">
                <img
                  src={user?.photoURL || defaultProfilePicture}
                  alt="Profile Picture"
                />
              </div>
            </label>
            <ul
              tabIndex="0"
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-80 z-50"
            >
              {/* User Profile */}
              <li className="flex items-center justify-between">
                <div className="flex items-center flex-row">
                  <img
                    src={user?.photoURL || defaultProfilePicture}
                    alt="Profile Picture"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-3">
                    <p className="font-bold">
                      {user?.displayName || "User Name"}
                    </p>
                    <a href="#" className="text-sm text-blue-500">
                      See your profile
                    </a>
                  </div>

                  <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={toggleDarkMode}
                    className="toggle toggle-primary theme-controller"
                  />
                </div>
              </li>

              {/* Feedback */}
              <li className="mt-2">
                <a
                  href="https://www.linkedin.com/in/ajnahid"
                  className="flex items-center gap-2"
                >
                  <MdOutlineFeedback className="text-2xl" />
                  <div>
                    <h3>Give Feedback</h3>
                    <p className="text-xs text-blue-500">
                      Help us to improve the new design
                    </p>
                  </div>
                </a>
              </li>

              {/* Settings and Logout */}
              <li>
                <a href="#" className="flex items-center gap-2">
                  <IoMdSettings className="text-2xl" />
                  <span>Settings & Privacy</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2">
                  <IoMdHelpCircleOutline className="text-2xl" />
                  <span>Help & Support</span>
                </a>
              </li>
              <li>
                <a
                  onClick={signOutUser}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <IoMdLogOut className="text-2xl" />
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link
              to="/login"
              className={`${
                activeTab === "login"
                  ? "bg-primary text-white font-semibold"
                  : "text-cyan-900"
              } px-6 py-2 rounded-lg text-sm font-normal`}
              onClick={() => setActiveTab("login")}
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className={`${
                activeTab === "register"
                  ? "bg-primary text-white font-semibold"
                  : "text-cyan-900"
              } px-6 py-2 rounded-lg text-sm font-normal`}
              onClick={() => setActiveTab("register")}
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
