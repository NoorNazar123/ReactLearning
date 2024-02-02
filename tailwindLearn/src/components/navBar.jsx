import desktopImage from "./img/mainimg.svg";
import mobileImg from "./img/mobileImg.svg";
import React from "react";
import Content from "./content";
import Form from "./form";



const NavBar = () => {
  return (
    <>
     
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full sm:w-2/4 h-80vh p-6 bg-white flex flex-wrap-reverse sm:flex-nowrap justify-between items-center rounded-2xl">
        <div className="w-full sm:w-2/4 h-full p-4">
          <Content />
          <Form />
        </div>
        <div className="w-full sm:w-2/4">
          <img
            className="w-full sm:w-auto"
            src={window.innerWidth < 640 ? mobileImg : desktopImage}
            alt="Image from Google"
          />
        </div>
      </div>
     
    </div>
    </>
  );
};
export default NavBar

