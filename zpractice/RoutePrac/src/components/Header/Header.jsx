import React from "react";
import {NavLink } from "react-router-dom";



function Header() {
  return (
    <div className="w-full bg-gray-400 text-white flex justify-center gap-7">
      <ul className="flex gap-4">
        <li>
          <NavLink
            to="/"
            className={({isActive}) => `
                duration-1000
               ${isActive? 'text-red-500' : 'text-red-100'}
            `}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({isActive})=>`{
               duration-1000
               ${isActive? 'text-red-500' : 'text-red-100'}
            }
            `}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({isActive})=>`{
               duration-1000
               ${isActive? 'text-red-500 font-bold' : 'text-red-100'}
            }
            `}
          >
            Contact
          </NavLink>
        </li>
        <li>
          
          <NavLink to="/userdata" 
            className={({isActive})=>`{
               duration-1000
               ${isActive? 'text-red-500 font-bold' : 'text-red-100'}
            }
            `}
           >
            Users
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
