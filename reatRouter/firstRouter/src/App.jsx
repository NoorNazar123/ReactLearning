import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contect from "./components/Contect/Contect";
import Error from "./components/Error/Error";
import Header from "./components/Header/Header";

const Geeting = ({ children }) => {
  return <p>Hello, {children}</p>;
};
const St = () => {
  return (
    <>
      <p>shadab</p>
      <h1>my age is 20</h1>
    </>
  );
};
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
            <Header>
              <Home />
            </Header>
          }
        />

        <Route
          path="/about"
          element={
            <Header>
              <About />
              <p>sdfsdfsf</p>
              <h1>dfsdfvvfgreger</h1>
            </Header>
          }
        >
          <Route path="add1" element={<Contect />} />

          <Route path="add2" element={<Home />} />
        </Route>
        <Route
          path="/contect"
          element={
            <Header>
              <Contect />
            </Header>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
