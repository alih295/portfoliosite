import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import {Link} from  'react-router-dom'

function NavBar() {
  return (
    <div onMouseMove={()=>{
       
    }} className='w-full font-[myFont] z-10 relative  px-10 flex items-center justify-between py-4 border-b border-gray-500'>
        <h1 className='text-4xl text-teal-500 font-semibold'>
          Ali Haider
        </h1>
        <nav >
          <ul className='flex gap-10 text-lg '>
            <li className='hover:border-b hover:text-gray-200 hover:scale-110  transition-all duration-200 text-md  text-gray-400'> <Link to='/'> Home</Link> </li>
            <li className='hover:border-b hover:scale-110  transition-all duration-200 text-md hover:text-gray-200 text-gray-400'> <Link to={'/about'}> About</Link> </li>
            <li className='hover:border-b  hover:scale-110  transition-all duration-200 text-md hover:text-gray-200 text-gray-400'><Link to={'/contact'}>Contact</Link></li>
            <li className='hover:border-b  hover:scale-110 transition-all duration-200 text-md hover:text-gray-200 text-gray-400'><Link to={'/project'}>Projects</Link></li>
            <li className='hover:border-b  hover:scale-110 transition-all duration-200 text-md hover:text-gray-200 text-gray-400'><Link to={'/skill'}>Skills</Link></li>
          </ul>
        </nav>
        <div className='flex gap-5' >
        <div className='w-10 flex items-center hover:bg-[#1877F2] transitn-color duration-200 justify-center text-2xl h-10 shadow-lg shadow-gray-500 rounded-full '> <FaFacebookF/></div>
        <div className='w-10 flex items-center hover:bg-[#FFFFFF] hover:text-black transitn-color duration-200 justify-center text-2xl h-10 shadow-lg shadow-gray-500 rounded-full '> <BsGithub/></div>
        <div className='w-10 flex hover:bg-[#1877F2] transitn-color duration-200  items-center justify-center text-2xl h-10 shadow-lg shadow-gray-500 rounded-full '> <FaLinkedinIn/></div>
        
        </div>
      </div>
  )
}

export default NavBar