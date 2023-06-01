import React from 'react'

export default function Home_mobile(props) {
  return (
    <div>
      <div className="relative w-[350px] rounded-b-lg mt-8">
        <img src={props.image} alt="" className='h-84 ml-5 rounded-lg mt-1' />
        {/* <div className="absolute bottom-0 px-4 py-1 bg-gray-500/50 left-14 w-full rounded-b-lg">
          <p className="text-gray-200 font-bold text-2xl">
            {props.text}
          </p>
          <div className='flex font-semibold text-white text-sm' >
          <p >{props.name}</p>
          <p className='ml-2 '>{props.date}</p>
          </div>
        </div> */}
        <p className="font-bold text-xl ml-5">
            {props.text}
        </p>
        <div className='flex font-semibold text-sm ml-5 mt-2' >
          <p >{props.name}</p>
          <p className='ml-12 '>{props.date}</p>
          </div>
      </div>
    </div>
  )
}
