import React from 'react'
import { Link } from 'react-router-dom'

function HerSection() {
   return (
      <div className='w-full lg:gap-0  gap-10 z-10 relative lg:px-10 lg:mt-40  flex  lg:flex-row flex-col items-center justify-center mt-10 font-[myFont]'>
         <div className='lg:w-[50vw] w-full lg:h-[500px]    px-5 rounded-lg flex items-start justify-center flex-col'>
            <p className='lg:text-2xl text-lg tracking-tight lg:leading-[3.5vw] '>
               I'm <span className='lg:text-[3vw] text-2xl font-bold  m-2 font-[myFont] text-gray-200  '> Ali Haider</span> , a <span className='lg:text-[3vw] text-4xl strokedText m-2 font-[myfont2] text-teal-500 lg:text-transparent  '> MERN Stack Developer</span>   specializing in creating modern, high-performance web solutions that help businesses grow online.
            </p>
            <div className='mt-5 flex lg:gap-10 gap-5 '>
               <button className='lg:px-6 px-4 py-2 lg:py-4 rounded-full lg:text-lg text-md capitalize bg-teal-500 lg:font-semibold tracking-normal leading-none shadow-lg shadow-gray-600'><Link to={'/project'}>view my work</Link></button>
               <button className='lg:px-6 px-4 py-2 lg:py-4 rounded-full lg:text-lg text-md capitalize bg-transparent hover:bg-teal-500 transition-all duration-300 lg:font-semibold tracking-normal leading-none shadow-md shadow-gray-400'><Link to={'/contact'}>Get in Touch</Link></button>

            </div>
         </div>


         <div className='lg:w-[40vw] w-full hover:border-2 border-dashed transition-all duration-200 shadow-lg shadow-gray-700 h-[500px] overflow-hidden rounded-full  flex items-center justify-center'>
            <img className='  object-cover' src='/img.png' alt="img is not showing" />
         </div>

      </div>
   )
}

export default HerSection
