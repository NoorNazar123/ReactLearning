import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../Appwrte/auth_service'
import { logout } from '../../Store/auth_slice'

const LogoutBtn = () => {
   const dispatch = useDispatch()
   const logoutHandler = () => {
      authService.logOut().then(()=>{
         dispatch (logout())
      })
   }
  return (
    <button
    className=' inline-block px-6 py-2 duration-300 rounded-full hover:bg-blue-100'>
    Logout
    </button>
  )
}

export default LogoutBtn
