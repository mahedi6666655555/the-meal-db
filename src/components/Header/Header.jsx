import React from "react";
import logo from "../Header//logo.avif";

const Header = () => {
  return (
    <div>
      <div className="w-full h-20 px-20 bg-gray-800 flex justify-between items-center">
        <div>
          <img src={logo} className="w-32" alt="" />
        </div>
        <div className="text-white">
          <a className="pl-4" href="#">Home</a>
          <a className="pl-4" href="#">Home</a>
          <a className="pl-4" href="#">Home</a>
          <a className="pl-4" href="#">Home</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
