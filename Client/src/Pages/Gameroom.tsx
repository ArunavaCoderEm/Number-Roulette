import React from 'react'
import Wheel from '../Components/Wheel';

export default function Gameroom():React.ReactNode {
  return (
    <div className='grid lg:grid-cols-2 mt-5 sm:grid-cols-1 divide-x-*'>
        <div className='lg:border-r-2 h-screen flex flex-col items-center'>
            <h1 className='text-white text-center font-thin
            text-3xl'>Player 1</h1>
            <Wheel/>
        </div>
        <div className='lg:border-r-2 h-screen flex flex-col items-center'>
            <h1 className='text-white text-center font-thin
            text-3xl'>Player 2</h1>
            <Wheel/>
        </div>
    </div>
  )
}
