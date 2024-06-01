import { useState } from "react"
import { useLocation, useNavigate } from 'react-router-dom';


export default function Gamelobby():React.ReactNode {
    const [load,setload] = useState<boolean>(false)
    const location = useLocation();
    const socket = location.state?.socket as WebSocket;
    const navigate = useNavigate();
    const handleHit = () => {
        if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify({ type: 'hit' }));
            console.log('Hit message sent');
            navigate('/gameroom')
            setload(true);
        } else {
            console.log('WebSocket is not open');
        }
    };

  return (
    <>
    <div className="flex justify-center items-center h-screen">
    {!load && 

        <button onClick={handleHit} className=" p-4 bg-gradient-to-b from-green-700 to-green-900 rounded-md font-semibold text-white hover:scale-110 transition-all duration-300 hover:text-slate-300">Enter Arena</button>
    }
    </div>
    </>
  )
}
