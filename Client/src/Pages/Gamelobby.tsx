import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import { useWebSocket } from "../Websocket/WebSocketProvider"
import SpinningCubeLoader from "../Components/LoaderW";

const Gamelobby: React.FC = () => {

  const[msg, setMsg] = useState<String | null>(null)
  const[Play, setPlay] = useState<String | null>(null)
  const[lod, setlod] = useState<boolean>(false)

    const navigate = useNavigate();

    const socket = useWebSocket();
  
    useEffect(() => {
      if (!socket) return;
  
      socket.onmessage = (e: any) => {
        const message = JSON.parse(e.data)
        console.log(message)
        setMsg(message.type)
        setPlay(message.role)
      }             
      if(msg){
        navigate(`/gameroom?message=${Play}`);
      }
    }, [socket,msg]);
  
    const handleHit = () => {
      if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(
          JSON.stringify({
            type: 'hit',
          })
        );
        setlod(true)
      } else {
        console.error('WebSocket is not open');
      }
    };
  
  return (
    <>
    <div className="flex justify-center items-center h-screen"> 
    {lod && 
    <div>
      <SpinningCubeLoader/>
      <h1 className="text-center text-xl my-5 text-white font thin">Waiting for other players to join ....</h1>
    </div>
    }  
        {!lod && 
        <>
        <img src="./ropic.jpg" className="z-[-1] sha w-[700px] absolute mx-10 rounded-md opacity-45" alt="" />
        <button onClick={handleHit} className=" p-4 bg-gradient-to-b from-green-700 to-green-900 rounded-md font-semibold text-white hover:scale-110 transition-all duration-300 hover:text-slate-300">Enter Arena</button>
        </>
        }
    </div>
    </>
  )
}

export default Gamelobby;