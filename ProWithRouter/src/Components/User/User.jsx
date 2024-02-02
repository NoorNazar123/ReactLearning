import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
   const {userid}=useParams()
  return (
    <div className='bg-gray-600 text-2xl text-white text-center py-4'>
      User:{ userid}
    </div>
  )
}

export default User
