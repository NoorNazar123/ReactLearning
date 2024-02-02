import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Massage() {
   const navigate=useNavigate();
   const Discordmassage=()=>{
      navigate("/")
   }
   return(
      
        
      <div className=" h-96 w-96 bg-white rounded-2xl  p-4 mx-auto my-16">
         <FaCheckCircle className="text-red-600 inline-block align-middle mx-1 w-12 h-12 my-4" />
         <h1 className=" fonr-sans text-4xl font-bold mb-4">Thanks For Subscribing!</h1>
         <p className="my-6">
            A comformation email has been sent to <span className="font-bold">hammad@gmail.com</span>.
            please open it. And click the button side to conform your
            Subscribtion.
         </p>
         <button
         onClick={Discordmassage}
        className=" w-full py-5 px-2 rounded-lg text-white bg-gradient-to-r from-gray-800 to-gray-700 hover:from-pink-400 hover:to-orange-500 "
      >
        Dismiss massage
      </button>
      </div>
      
   );
   
}
export default Massage