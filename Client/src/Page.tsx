import Navbar from "./Components/Navbar";
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
      </Routes>
    </>
  )
}
