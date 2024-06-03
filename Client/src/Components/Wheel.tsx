import React, { useEffect, useState } from 'react';
import { useWebSocket } from "../Websocket/WebSocketProvider"

const NumberWheel: React.FC = () => {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<number | null>(0);
  const [score, setscore] = useState<number | null>(0);

  const socket = useWebSocket();


  useEffect(() => {
    if (!socket) return;
    socket.onmessage = (e: any) => {
      const message = JSON.parse(e.data)
      console.log(message)
    }             
  }, [socket]);


  const startSpinning = () => {
    setSpinning(true);
    const randomResult = Math.floor(Math.random() * (20 - 10 + 1));
    setTimeout(() => {
      setSpinning(false);
      setResult(randomResult);
    }, 3000);
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(
        JSON.stringify({
          type: 'choose',
          plnum: result
        })
      );
    } else {
      console.error('WebSocket is not open');
    }
  };

  return (
    <div>
      <h2 className='text-2xl text-center text-white mt-10 mb-5'>Number Wheel</h2>
      <div className={`wheel ${spinning ? 'spin' : ''}`}>
        <div className='flex justify-center my-5 mx-auto'>
        <img src="./spin.png" className='img2' alt="Number Wheel" />
        </div>
      </div>
        <h1 className='text-white text-center font-semibold text-xl'>Your Number - {result}</h1>
      <div className="flex justify-center">
        <button onClick={startSpinning} className="p-4 sha mt-5 bg-gradient-to-b from-green-700 to-green-900 rounded-md font-semibold text-white hover:scale-110 transition-all duration-300 hover:text-slate-300">Spin Wheel</button>
    </div>
    <h1 className='text-white my-5 text-center font-semibold text-xl'>Score - {score}</h1>
    </div>
  );
};

export default NumberWheel;
