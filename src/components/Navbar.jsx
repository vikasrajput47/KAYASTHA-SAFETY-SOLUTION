import React from "react";
import Topbar from "./Topbar";

const Navbar = () => {
  return (
    <>
      {/* Topbar visible only on md (≥768px) and up */}
      <div className="hidden md:block">
        <Topbar />
      </div>

      <div className="md:h-20 h-16 flex justify-between items-center pl-8 pr-8 w-full z-20 bg-white">
        {/* Logo & Title */}
        <div className="flex gap-2 items-center">
          <img src="/images/logo-2.jpg" alt="logo" className="h-12 md:h-16" />
          <h2 className="md:text-4xl text-xl font-bold">
            KAYASTHA SAFETY SOLUTION
          </h2>
        </div>

        {/* Navigation Links (hidden on mobile) */}
        <div className="items-center gap-10 font-semibold text-md hidden md:flex">
          <a
            className="hover:scale-150 hover:text-red-700 transition-all duration-500"
            href="#Home"
          >
            Home
          </a>
          <a
            className="hover:scale-150 hover:text-red-700 transition-all duration-500"
            href="#About"
          >
            About
          </a>
          <a
            className="hover:scale-150 hover:text-red-700 transition-all duration-500"
            href="#Service"
          >
            Service
          </a>
          {/* Uncomment if needed
          <a className="hover:scale-150 hover:text-red-700 transition-all duration-500" href="#Client">
            Client
          </a>
          <a className="hover:scale-150 hover:text-red-700 transition-all duration-500" href="#WhyUs">
            Why Us
          </a>
          */}
          <button className="px-6 py-2 rounded-full text-white bg-red-700 hover:bg-red-800">
            <a href="#Contact">Contact Us</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
