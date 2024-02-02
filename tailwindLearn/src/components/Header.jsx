import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full h-23 bg-red-300 '>
      <ul className='flex gap-16'>
        <li>
         <Link to="/">NavBar</Link>
        </li>
        <li>
         <Link to="/Massage">Massage</Link>
        </li>

      </ul>
    </div>
  )
}

export default Header
