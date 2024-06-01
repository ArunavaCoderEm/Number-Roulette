import Navbar from "./Components/Navbar";
import Gamelobby from "./Pages/Gamelobby";
import Gameroom from "./Pages/Gameroom";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";

export default function Page():React.ReactNode {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/gameroom" element={<Gameroom/>} />
        <Route path="/gamelobby" element={<Gamelobby/>} />
      </Routes>
    </>
  )
}
