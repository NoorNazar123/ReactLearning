import { Route, Routes } from "react-router-dom";
import './App.css'
import Navbar from "./components/navBar"
import Massage from './components/img/massage'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar/>} />
      <Route path="/massage" element={<Massage />} />
    </Routes>
  );
}
export default App;
