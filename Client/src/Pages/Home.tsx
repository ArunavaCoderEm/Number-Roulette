import { useNavigate } from "react-router-dom";
import TextTicker from "../Components/TextTicker"
import React from 'react';

export default function Home():React.ReactNode {

  const navigate = useNavigate();

  const handleConnect = (): void => {
      navigate('/gamelobby');
  };

  return (
    <>
    <div className="my-5">
      <h1
      className="bg-clip-text font-extrabold text-center text-4xl my-5 text-transparent bg-gradient-to-br from-blue-400 to-blue-800">
        Welcome to #1 Number Roulette Game</h1>
        <img src="./rou.jpg" className="absolute z-[-1] sha bg-cover opacity-30 w-[900px] h-[500px] left-0 right-0 mx-auto" alt="imagebg" />

          <div className="flex flex-col items-center align-middle justify-center mt-20">
            <div className="backdrop-blur-sm rounded-md sha bg-blue-600/40">
          <div className="text-3xl text-center font-semibold tabular-nums tracking-tight text-blue-200">
            <h2 className="bg-clip-text font-extrabold text-center text-3xl my-5 text-transparent bg-gradient-to-br from-slate-300 via-slate-400 to-slate-300">Our Trusted Users</h2>
            <TextTicker value={690} /> 
          </div>
            <h2 className="text-center mt-5 mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-br mx-1 from-slate-200 to-slate-400 text-3xl p-5">Play multiplayer as a guest & Test<br/> Your Winning Luck !!</h2>
            <div className="flex justify-center">
            <button onClick={handleConnect} className="p-4 m-3 bg-gradient-to-b from-green-700 to-green-900 rounded-md font-semibold text-white hover:scale-110 transition-all duration-300 hover:text-slate-300">Join Game Room</button>
            </div>
          </div>
          </div>
      </div>
    </>
  )
}
