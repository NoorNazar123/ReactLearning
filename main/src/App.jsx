import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  function addValue() {
    setCount(count++)  
  }
  const removeValue=()=>{
    setCount(count--)
  }

  return (
    <>
      <h1>Counter:{count}</h1>
      <button onClick={addValue}>add</button><br/><br/>
      <button onClick={removeValue}>Remaove</button>
    </>
  )
}

export default App
