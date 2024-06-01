import { useState } from "react"
import { useLocation, useNavigate } from 'react-router-dom';


export default function Gamelobby():React.ReactNode {
    const[load,setload] = useState<boolean>(false);
    const location = useLocation();
    const navigate = useNavigate();
    const socketURL: string | undefined = location.state?.socketURL;
    let ws: WebSocket | null = null;

    const handleHit = () => {
        if (socketURL && !ws) {
            ws = new WebSocket(socketURL);

            ws.onopen = () => {
                console.log('Connected to WebSocket server in GameLobby');
                if (ws && ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify({ type: 'hit' }));
                    console.log('Hit message sent');
                    navigate('/gameroom');
                } else {
                    console.log('WebSocket is not open');
                    setload(true)
                }
            };

            ws.onclose = () => {
                console.log('WebSocket connection closed in GameLobby');
            };

            ws.onerror = (error) => {
                console.error('WebSocket error in GameLobby:', error);
            };
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
