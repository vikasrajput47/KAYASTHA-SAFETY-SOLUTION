import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="hidden sm:flex bg-white w-full z-20 px-6 py-3 flex-row items-center justify-between">
        {/* Logo & Company Name */}
        <div className="flex items-center gap-2">
          <img
            src="/images/fire.png"
            alt="fire logo"
            className="h-14 w-14 object-contain"
          />
          <h2 className="text-xl md:text-3xl font-bold">
            KM POWER & FIRE SOLUTION
          </h2>
        </div>

        {/* Contact Info */}
        <div className="flex flex-row items-center gap-4">
          <div className="flex items-center gap-2">
            <img
              className="w-4"
              src="/images/telephone-call.png"
              alt="telephone"
            />
            <p className="text-sm">9013807874</p>
          </div>
          <div className="flex items-center gap-2">
            <img className="w-4" src="/images/email.png" alt="email" />
            <p className="text-sm">support@kmpower.in</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
