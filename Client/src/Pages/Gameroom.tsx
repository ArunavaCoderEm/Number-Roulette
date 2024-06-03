import React, { useState, useEffect } from 'react';
import Wheel from '../Components/Wheel';
import BounceLoader from "../Components/Loader";
import { useLocation } from 'react-router-dom';

export default function Gameroom(): React.ReactNode {
  const [resultTwo, setResultTwo] = useState<number | null>(0);
  const [scoreTwo, setScoreTwo] = useState<number | null>(0);
  const [resultOne, setResultOne] = useState<number | null>(0);
  const [scoreOne, setScoreOne] = useState<number | null>(0);
  const [winner, setwinner] = useState<String | null>(null);
  const [load, setLoad] = useState<boolean>(true);
  const [play, setPlay] = useState<String | null>("Player");
  const location = useLocation();

  const handleResultChange = (resulto: number, scoreo: number, resultt: number, scoret: number, winner: String | null) => {
    setResultTwo(resultt);
    setScoreTwo(scoret);
    setResultOne(resulto);
    setScoreOne(scoreo);
    if(winner) {
      setTimeout(() => {
        setwinner(winner)
      }, 1000);
    }
  };


  useEffect(() => {
    const mes = new URLSearchParams(location.search).get("message");
    setPlay(mes);
    setTimeout(() => {
      setLoad(false);
    }, 2500);
  }, [location]);

  return (
    <>
      {load &&     
        <div className='h-screen flex flex-col justify-center'>
          <BounceLoader/>
        </div>
      }
      {!load && !winner &&
        <>
        {play == "player1" ? 
        
        <div className='grid lg:grid-cols-2 mt-5 sm:grid-cols-1 divide-x-*'>
        <div className='lg:border-r-2 h-screen flex flex-col items-center'>
          <h1 className='text-white text-center font-thin text-3xl'>{play}</h1>
          <Wheel onResultChange={handleResultChange}/>
          <h1 className='text-white text-center font-semibold text-xl'>My score - {scoreOne}</h1>
        </div>
        <div className='h-screen flex flex-col items-center'>
          <h1 className='text-white text-center font-thin text-3xl'>Opponent</h1>
          <img src="./player.jpg" alt="player" className='w-32 my-14' />
          <h1 className='text-white text-center font-semibold text-xl my-10'>Opponent number - {resultTwo}</h1>
          <h1 className='text-white text-center font-semibold text-xl'>Opponent score - {scoreTwo}</h1>
        </div>
      </div>    
        
        :

        <div className='grid lg:grid-cols-2 mt-5 sm:grid-cols-1 divide-x-*'>
        <div className='lg:border-r-2 h-screen flex flex-col items-center'>
          <h1 className='text-white text-center font-thin text-3xl'>{play}</h1>
          <Wheel onResultChange={handleResultChange}/>
          <h1 className='text-white text-center font-semibold text-xl'>My score - {scoreTwo}</h1>
        </div>
        <div className='h-screen flex flex-col items-center'>
          <h1 className='text-white text-center font-thin text-3xl'>Opponent</h1>
          <img src="./player.jpg" alt="player" className='w-32 my-14' />
          <h1 className='text-white text-center font-semibold text-xl my-10'>Opponent number - {resultOne}</h1>
          <h1 className='text-white text-center font-semibold text-xl'>Opponent score - {scoreOne}</h1>
        </div>
      </div>    
        
        }
      {winner && 
        <h1 className='text-center text-white'>Winner is {winner}</h1>
      }
        </>
      }
    </>
  );
}
