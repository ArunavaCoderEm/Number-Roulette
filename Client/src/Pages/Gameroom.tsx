import React, { useState, useEffect } from 'react';
import Wheel from '../Components/Wheel';
import BounceLoader from "../Components/Loader";
import { useLocation } from 'react-router-dom';

export default function Gameroom(): React.ReactNode {
  const [load, setLoad] = useState<boolean>(true);
  const [play, setPlay] = useState<String | null>("Player");
  const location = useLocation();

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
      {!load && 
        <>
          <div className='grid lg:grid-cols-2 mt-5 sm:grid-cols-1 divide-x-*'>
            <div className='lg:border-r-2 h-screen flex flex-col items-center'>
              <h1 className='text-white text-center font-thin text-3xl'>{play}</h1>
              <Wheel/>
            </div>
            <div className='h-screen flex flex-col items-center'>
              <h1 className='text-white text-center font-thin text-3xl'>Opponent</h1>
              <img src="./player.jpg" alt="player" className='w-32 my-14' />
              <h1 className='text-white text-center font-semibold text-xl my-10'>Opponent number - </h1>
              <h1 className='text-white text-center font-semibold text-xl'>Opponent score - </h1>
            </div>
          </div>
        </>
      }
    </>
  );
}
