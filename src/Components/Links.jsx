import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


function Links() {
  return (
    <div className='w-[50vw] flex items-center justify-evenly px-5 h-10 rounded-full bg-teal-600  fixed left-[50%] -translate-x-[50%] bottom-5 '>
      <a target='blank' className='text-2xl text-white font-semibold' href="https://www.facebook.com/alihaider.asgharali.96"><FaFacebook  /></a>
      <a target='blank' className='text-2xl text-white font-semibold' href="https://github.com/alih295"><FaGithub  /></a>
      <a target='blank' className='text-2xl text-white font-semibold' href="https://www.linkedin.com/in/hafiz-ali-haider-asghar-987992368/"><FaLinkedin  /></a>

    </div>
  )
}

export default Links