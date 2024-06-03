import { useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import { useWebSocket } from "../../WebSocketProvider"

const Gamelobby: React.FC = () => {

    const navigate = useNavigate();

    const socket = useWebSocket();
  
    useEffect(() => {
      if (!socket) return;
  
      socket.onmessage = (e: any) => {
        const message = JSON.parse(e.data)
        console.log(message)
      }
    }, [socket]);
  
    const handleHit = () => {
      if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(
          JSON.stringify({
            type: 'hit',
          })
        );
        navigate('/gameroom')
      } else {
        console.error('WebSocket is not open');
      }
    };
  
  return (
    <>
    <div className="flex justify-center items-center h-screen">   
        <button onClick={handleHit} className=" p-4 bg-gradient-to-b from-green-700 to-green-900 rounded-md font-semibold text-white hover:scale-110 transition-all duration-300 hover:text-slate-300">Enter Arena</button>
    </div>
    </>
  )
}

export default Gamelobby;