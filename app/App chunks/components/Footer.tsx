import React from "react";
import Logo from "./Logo";
const Footer = () => {
  return (
    <div className="w-full py-12 h-[60vh] bg-gradient-to-t from-purple-300 to-transparent">
      <div className="container grid grid-cols-1 lg:grid-cols-3">
        <div>
          <Logo className="text-[#1b0518]" />
        </div>
        <div>Menu</div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
