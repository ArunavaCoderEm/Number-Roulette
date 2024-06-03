import React, { useEffect, useState } from 'react';
import { useWebSocket } from "../Websocket/WebSocketProvider"


const NumberWheel: React.FC<{ onResultChange: (
 resulto: number, scoreo: number, resultt: number, scoret: number, winner: String | null) => void }> = ({ onResultChange }) => {
  const [spinning, setSpinning] = useState(false);
  const [mynum, setmynum] = useState<number>(0)
  const [notwin, setnotwin] = useState<boolean | null>(true)

  const socket = useWebSocket();

  useEffect(() => {
    if (!socket) return;

    socket.onmessage = (e: any) => {
      const message = JSON.parse(e.data)
      console.log(message)
      onResultChange(message.player1Num, message.player1Score ,message.player2Num, message.player2Score, message.winner);
      if(message.winner){
        setnotwin(false)
      }
    };
  }, [socket]);

  const startSpinning = () => {
    setSpinning(true);
    setTimeout(() => {
      setSpinning(false);
    }, 3000);
    const randomResult = Math.floor(Math.random() * (20 - 10 + 1)); 
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(
        JSON.stringify({
          type: 'choose',
          plnum: randomResult 
        })
      );
      setmynum(randomResult)
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
      <div className="flex justify-center">
        {notwin &&
        <button onClick={startSpinning} className="p-4 sha mt-5 mb-3 bg-gradient-to-b from-green-700 to-green-900 rounded-md font-semibold text-white hover:scale-110 transition-all duration-300 hover:text-slate-300">Spin Wheel</button>
        }
      </div>
        <h1 className='text-white text-center font-semibold text-xl my-10'>My number - {mynum}</h1>
    </div>
  );
};

export default NumberWheel;
