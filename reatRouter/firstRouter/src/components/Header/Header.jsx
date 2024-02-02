import React from 'react'
import { NavLink, Outlet } from "react-router-dom";

const Header = (props) => {
  return (
    <div>
       <header className="w-full h-16 bg-black text-white flex items-center justify-between px-16">
        <div>
          <h1 className="text-4xl font-sans font-bold">
            Port
            <span className="text-red-500">folio</span>
          </h1>
        </div>
        <div>
          <ul className=" flex gap-16">
            <li className="text-red-500 text-2xl  hover:text-red-400 duration-300 hover:duration-500 transition ease-in-out transform hover:scale-110">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-red-500 text-2xl  hover:text-red-400 duration-300 hover:duration-500 transition ease-in-out transform hover:scale-110">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="text-red-500 text-2xl  hover:text-red-400 duration-300 hover:duration-500 transition ease-in-out transform hover:scale-110">
              <NavLink to="/contect">Contect</NavLink>
            </li>
          </ul>
        </div>
      </header>
      {props.children}
      <footer className='bg-[#f00] w-[100%]'>
        This is footer
      </footer>
    </div>
  )
}

export default Header
