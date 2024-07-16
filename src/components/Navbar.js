import React from "react";
import logo from "../assets/logo.svg";
import searchIcon from "../assets/search.svg";

const Navbar = () => {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="mx-32 my-6">
          <a href="#" alt="logo">
            <img className="h-11 w-40" src={logo} alt="logo" />
          </a>
        </div>
        <div className="flex items-center px-48">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded-full bg-gray-200 w-56 h-6 focus:outline-none "
          />
          <button className="p-2">
            <img src={searchIcon} alt="Search Icon" className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
