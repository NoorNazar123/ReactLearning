import React from "react";
import { ImYoutube2 } from "react-icons/im";
import { MdKeyboardVoice } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import { VscArrowUp } from "react-icons/vsc";
import { IoMdNotifications } from "react-icons/io";
import { FaProductHunt } from "react-icons/fa";

function Header() {
  return (
    
    <div className="w-full flex justify-between px-7 items-center fixed top-0 bg-white z-50">
      {/* -------------------letf box start--------------------- */}
      <div className="flex items-center ">
        <span>
          <RxHamburgerMenu className="text-black text-4xl hover:cursor-pointer" />
        </span>
        <span>
          <ImYoutube2 className="text-rose-600 text-4xl w-32 ml-2 hover:cursor-pointer" />
        </span>
      </div>
     {/* -------------------midle box start--------------------- */}
      <div className="w-[650px] flex items-center">
        <input
          type="text"
          placeholder="Youtube search"
          className="w-[90%] border-2 rounded-l-3xl border-r-0 px-4 py-2 focus:outline-none"
        />
        <button className="w-[10%] border-2 rounded-r-3xl  py-3 px-8 bg-gray-100  hover:bg-gray-200">
          <FaSearch className="text-gray-700 hover:cursor-pointer" />
        </button>
        <MdKeyboardVoice className=" hover:bg-gray-200 text-5xl m-4 bg-gray-100 text-gray-700 rounded-[50%] px-[14px] " />
      </div>
      {/* -------------------right box start--------------------- */}
      <div className="flex items-center ">
        <VscArrowUp className="  hover:text-gray-500 cursor-pointer text-4xl text-gray-600" />
        <IoMdNotifications className="cursor-pointer  hover:text-gray-500 text-4xl mx-6 text-gray-600" />
        <FaProductHunt className="cursor-pointer hover:text-gray-500 text-4xl text-gray-600" />
      </div>
    </div>
    
    //  header end
  );
}

export default Header;
