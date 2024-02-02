import React from 'react'
import UserContextProvider from './context/userContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>Context Api Test</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
