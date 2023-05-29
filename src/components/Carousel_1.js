import React from 'react'
import imgCar1 from '../images/imgCar1.jpg';

export default function Carousel_1() {
  return (
    <div>
      <div className="relative w-[375px] rounded-b-lg">
        <img src={imgCar1} alt="" className='h-48 w-96 ml-14 mt-10 rounded-lg' />
        <div className="absolute bottom-0 px-4 py-1 bg-gray-500/50 left-14 w-full rounded-b-lg">
          <p className="text-gray-200 font-bold">
            Algorithmic trading for multiple<br />commodities markets, like Forex, Metals,<br /> Energy, etc.
          </p>
        </div>
      </div>


    </div>

  
  )
}

