import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "bg-white active" : ""}>Home</NavLink>
        
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/compare">Compare</NavLink>
      </li>
    </>
  );
  const location = useLocation();
  const normalBg = "navbar bg-base-100 shadow-sm";
  const specialBg = "flex px-6 bg-[#9538E2] text-white pt-4 mx-6 rounded-t-4xl";
  return (
    <div className={location.pathname === "/" ? specialBg : normalBg}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >             
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img src="favicon-16x16.png"></img>Gadget Heaven
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <IoCartOutline />
        </button>
        <button className="btn btn-ghost btn-circle">
          <div>
            <MdFavoriteBorder />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
