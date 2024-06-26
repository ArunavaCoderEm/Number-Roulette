import Navbar from "./Components/Navbar";
import Gamelobby from "./Pages/Gamelobby";
import Gameroom from "./Pages/Gameroom";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import { WebSocketProvider } from './Websocket/WebSocketProvider';
import RulesPage from "./Pages/Rule";
import FeaturesPage from "./Pages/Feature";

export default function Page():React.ReactNode {

  return (
    <>
      <WebSocketProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gameroom" element={<Gameroom />} />
          <Route path="/gamelobby" element={<Gamelobby />} />
          <Route path="/rules" element={<RulesPage />} />
          <Route path="/features" element={<FeaturesPage />} />
        </Routes>
      </WebSocketProvider>
    </>
  )
}
