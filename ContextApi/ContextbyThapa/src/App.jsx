import React, { createContext } from "react";
import ComA from "./Components/ComA";

const fname = createContext();
const lname = createContext();
const id = createContext();

function App() {
  return (
    <div>
      <fname.Provider value={"Hammad"}>
        <lname.Provider value={"Khan"}>
          <id.Provider value={10}>
            <ComA />
          </id.Provider>
        </lname.Provider>
      </fname.Provider>
    </div>
  );
}

export default App;
export { fname, lname, id };
