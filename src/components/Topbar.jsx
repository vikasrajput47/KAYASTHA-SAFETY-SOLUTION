import React from "react";
import SocialMedia from "./SocialMedia";

const Topbar = () => {
  return (
    <div className="w-full bg-[#1E164A] text-white px-4 py-2 flex flex-col md:flex-row items-center md:justify-between gap-2">
      <div className="support flex flex-col sm:flex-row items-center gap-3">
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

      <div className="intouch hidden md:block">{/* <SocialMedia/> */}</div>
    </div>
  );
};

export default Topbar;
