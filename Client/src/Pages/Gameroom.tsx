import React, { useState } from 'react'
import Wheel from '../Components/Wheel';
import BounceLoader from "../Components/Loader";

export default function Gameroom():React.ReactNode {
  
  const [load, setLoad] = useState<boolean>(true);

  setTimeout(() => {
    setLoad(false);
  }, 2500);

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
            <h1 className='text-white text-center font-thin
            text-3xl'>Player 1</h1>
            <Wheel/>
        </div>
        <div className=' h-screen flex flex-col items-center'>
            <h1 className='text-white text-center font-thin
            text-3xl'>Player 2</h1>
            <Wheel/>
        </div>
      </div>
      </>
      }
    </>
  )
}
