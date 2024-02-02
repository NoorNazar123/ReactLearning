import React from "react";
import { Outlet, useNavigate, NavLink } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  let navigateHandler = () => {
    navigate("/Contect");
  };
  const navigatebacks = useNavigate();
  let navigateback = () => {
    navigatebacks(-1);
  };

  return (
    <div>
      <section className="w-full h-screen text-center">
        <h1 className="text-8xl font-serif font-bold text-gray-600  mt-8">
          About page
        </h1>
        <button
          className="m-8 bg-gray-300 px-6 py-4 rounded-lg"
          onClick={navigateHandler}
        >
          Contect page
        </button>
        <button
          className="m-8  bg-gray-300 px-6 py-4 rounded-lg"
          onClick={navigateback}
        >
          Go Back
        </button>
        <li className="text-red-500 text-2xl  hover:text-red-400 duration-300 hover:duration-500 transition ease-in-out transform hover:scale-110">
          <NavLink to="/about/add1">Add1</NavLink>
        </li>
        <li className="text-red-500 text-2xl  hover:text-red-400 duration-300 hover:duration-500 transition ease-in-out transform hover:scale-110">
          <NavLink to="/about/add2">Add2</NavLink>
        </li>
        <Outlet/>
      </section>
    </div>
  );
};

export default About;
