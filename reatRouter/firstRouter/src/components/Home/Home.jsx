import React from "react";
import Header from "../Header/Header";
import { Outlet ,useNavigate} from "react-router-dom";

const Home = () => {
  let navigate=useNavigate();
  const navigateHandler=()=>{
    navigate("/About")
  }
  return (
    <div className=" w-full h-screen">
    
      
      <section className="w-full h-screen text-center">
        <h1 className="text-8xl font-serif font-bold text-gray-600 mt-8">
          Home page
        </h1>
        <button className="m-8 bg-gray-300 px-6 py-4 rounded-lg"  onClick={navigateHandler}>About page</button>
      </section>
      <Outlet />
    </div>
  );
};

export default Home;
