import React, { useState } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";





function NavBar() {

  const [showLink, setShowLink] = useState(false)

  return (
    <div className='w-full font-[myFont] z-40 relative  lg:px-10 px-5  flex items-center justify-between lg:py-4  border-b border-gray-500'>
      <h1 className='lg:text-4xl text-2xl text-teal-500 font-semibold'>
        Ali Haider
      </h1>

      {/* responsive section */}
      <div className={`  rounded-lg z-20  lg:hidden   p-5 absolute ${showLink ? 'right-0 h-[40vh] opacity-100 top-0' : '-right-50 opacity-0 -top-50'}  transition-all duration-300 backdrop-blur-sm bg-white/30   `}>
        <div onClick={() => setShowLink(!showLink)} className='absolute right-4 text-lg'><RxCross1 /></div>
        <nav>
          <ul className='w-full flex gap-2  flex-col mt-10 text-lg '>
            <li className='border-b-2 border-teal-500'><Link to={'/'}>Home</Link></li>
            <li className='border-b-2 border-teal-500'><Link to={'/about'}>About</Link></li>
            <li className='border-b-2 border-teal-500'><Link to={'/contact'}>Contact</Link></li>
            <li className='border-b-2 border-teal-500'><Link to={'/project'}>Projects</Link></li>
            <li className='border-b-2 border-teal-500'><Link to={'/skill'}>Skills</Link></li>
            
          </ul>
        </nav>
      </div>






      <nav className='lg:flex hidden' >
        <ul className='flex gap-10 text-lg '>
          <li className='hover:border-b hover:text-gray-200 hover:scale-110  transition-all duration-200 text-md  text-gray-400'> <Link to='/'> Home</Link> </li>
          <li className='hover:border-b hover:scale-110  transition-all duration-200 text-md hover:text-gray-200 text-gray-400'> <Link to={'/about'}> About</Link> </li>
          <li className='hover:border-b  hover:scale-110  transition-all duration-200 text-md hover:text-gray-200 text-gray-400'><Link to={'/contact'}>Contact</Link></li>
          <li className='hover:border-b  hover:scale-110 transition-all duration-200 text-md hover:text-gray-200 text-gray-400'><Link to={'/project'}>Projects</Link></li>
          <li className='hover:border-b  hover:scale-110 transition-all duration-200 text-md hover:text-gray-200 text-gray-400'><Link to={'/skill'}>Skills</Link></li>
        </ul>
      </nav>
      <div className='lg:flex hidden  gap-5' >
        <a target='blank' href='https://www.facebook.com/alihaider.asgharali.96' className='lg:w-10 w-8 h-8 flex items-center hover:bg-[#1877F2] transitn-color duration-200 justify-center text-lg  lg:text-2xl lg:h-10 shadow-lg shadow-gray-500 rounded-full '> <FaFacebookF /></a>
        <a target='blank' href='https://github.com/alih295' className='lg:w-10 w-8 h-8 flex items-center hover:bg-[#FFFFFF] hover:text-black transitn-color duration-200 justify-center lg:text-2xl text-lg lg:h-10 shadow-lg shadow-gray-500 rounded-full '> <BsGithub /></a>
        <a target='blank' href='https://www.linkedin.com/in/hafiz-ali-haider-asghar-987992368/' className='lg:w-10 w-8 h-8 flex items-center hover:bg-[#1877F2] transitn-color duration-200 justify-center text-lg  lg:text-2xl lg:h-10 shadow-lg shadow-gray-500 rounded-full  '> <FaLinkedinIn /></a>

      </div>
      <div onClick={() => setShowLink(!showLink)} className='text-xl lg:hidden px-5 py-5 rounded-full'> <FiMenu />  </div>
    </div>
  )
}

export default NavBar