import React from "react";
import { useNavigate } from "react-router-dom";

const Contect = () => {

  const navigates=useNavigate();
  let navigate=()=>{
     navigates(-1)
  }

  return (
    <div>
      <section className="w-full h-screen text-center ">
        <h1 className="text-8xl font-serif font-bold text-gray-600 text-center mt-8">
          Contect page
        </h1>
        <button className="m-8  bg-gray-300 px-6 py-4 rounded-lg" onClick={navigate}>Go Back</button>
      </section>
    </div>
  );
};

export default Contect;
