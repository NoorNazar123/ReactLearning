// App.js
import React, { useState } from "react";
import { ThemeProvider } from "./Context/theme";
import SayHello from "./Components/SayHello";

function App() {
  const [userName, setUserName] = useState("Noor");
  const id = '3';
   
  const lightTheme = () => {
    // Implement light theme logic if needed
  };

  const darkTheme = () => {
    // Implement dark theme logic if needed
  };

  return (
    <ThemeProvider value={{ userName,id, darkTheme, lightTheme }}>
      <div className="bg-gray-300">
        <SayHello />
      </div>
    </ThemeProvider>
  );
}

export default App;
