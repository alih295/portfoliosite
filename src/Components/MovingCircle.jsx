import React from 'react'
import { SiReact } from "react-icons/si";


function MovingCircle({ x, y, visible }) {
  return (
    <div style={{ left: x, top: y, transform: 'translate(-60% , -50%)' }} className={` ${visible ? 'opacity-50 w-20 h-20 ' : 'opacity-0 w-0 h-0 '}  z-1 text-4xl  bg-gray-100 text-black   rounded-full absolute blur-lg flex items-center justify-center
     transition-all duration-100`} >
     <SiReact/>
    </div>
  )
}

export default MovingCircle