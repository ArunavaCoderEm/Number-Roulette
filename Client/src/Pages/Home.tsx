import { useNavigate } from "react-router-dom";

export default function Home():React.ReactNode {

    const navigate = useNavigate();

  const handleConnect = (): any => {
    const socket = new WebSocket('ws://localhost:3060');
    socket.addEventListener('open', () => {
        console.log('WebSocket connection established');
    });

    socket.addEventListener('message', (event) => {
        console.log('Message from server:', event.data);
    });

    socket.addEventListener('close', () => {
        console.log('WebSocket connection closed');
    });
    navigate("/gameroom")
};

  return (
    <>
    <div className="my-5">
      <h1
      className="bg-clip-text font-extrabold text-center text-3xl my-5 text-transparent bg-gradient-to-br from-blue-400 to-blue-800">
        Welcome to #1 Number Roulette Game</h1>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 h-screen">
          <div className="flex flex-col align-middle items-center justify-center">
            <h2 className="text-center mt-10 mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-br from-slate-200 to-slate-400 text-2xl">Play as a guest && Test Your Luck !!</h2>
            <button onClick={handleConnect} className="p-4 bg-gradient-to-b from-green-700 to-green-900 rounded-md font-semibold m-3 text-white hover:scale-110 transition-all duration-300 hover:text-slate-300">Join Game Room</button>
          </div>
      </div>
      </div>
    </>
  )
}
