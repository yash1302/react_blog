import React from 'react'
import imgCar1 from '../images/imgCar1.jpg';

export default function BelowCard(props) {
  return (
    <div>
      <div className="rounded-b-lg grid justify-items-center ml-5">
        <img src={props.image} alt="" className='mt-10 rounded-lg h-48 w-96' />
        <p className='flex text-start justify-center w-96 font-bold'>{props.text}</p>
      </div>
      <div className='ml-16 py-2 flex font-bold'>
      <p className=''>{props.name}</p>
      <p className='ml-14'>{props.date}</p>
      </div>
    </div>
  )
}
