import { Route, Routes } from "react-router-dom";
import "./App.css";
import Demos from "./components/Demos";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Clients from "./components/Clients";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Shorts" element={<Demos />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Clients" element={<Clients />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
