import { useState } from "react"


function App() {
  let [color,setcolor]=useState("brown")

  return (
    <div 
    className="w-full h-screen"
    style={{backgroundColor:color}}
    >
       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-0"> 
        <div className="flex flex-wrap justify-center gap-8 shadow-lg bg-gray-500 px-2 py-3 rounded-lg">
          <button className="outline-none px-12 py-4 rounded-full"
          style={{backgroundColor:'blue'}}
          onClick={()=>setcolor("blue")}
          >Blue</button>
           <button className="outline-none px-12 py-4 rounded-full"
          style={{backgroundColor:'green'}}
          onClick={()=>setcolor("green")}
          >Green</button>
           <button className="outline-none px-12 py-4 rounded-full shadow-2xl"
          style={{backgroundColor:'yellow'}}
          onClick={()=>setcolor("yellow")}
          >Yellow</button>
          
        </div>
       </div>
    </div>
  )
}

export default App
