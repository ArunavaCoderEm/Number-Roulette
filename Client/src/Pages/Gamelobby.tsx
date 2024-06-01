import { useState, useEffect } from "react"
import { useLocation, useNavigate } from 'react-router-dom';


export default function Gamelobby():React.ReactNode {
    const[load,setload] = useState<boolean>(false);
    const location = useLocation();
    const navigate = useNavigate();
    const socketURL: string | undefined = location.state?.socketURL;
    let ws: WebSocket | null = null;

    useEffect(() => {
        if (socketURL && !ws) {
            ws = new WebSocket(socketURL);

            ws.onopen = () => {
                console.log('Connected to WebSocket server in GameLobby');
            };

            ws.onclose = () => {
                console.log('WebSocket connection closed in GameLobby');
            };

            ws.onerror = (error) => {
                console.error('WebSocket error in GameLobby:', error);
            };
        }

        return () => {
           
            if (ws && ws.readyState === WebSocket.OPEN) {
                ws.close();
            }
        };
    }, [socketURL]);

    const handleHit = () => {
        if (ws && ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify({ type: 'hit' }));
            console.log('Hit message sent');
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
