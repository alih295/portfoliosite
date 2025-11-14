import React from 'react'

function HerSection() {
   return (
      <div className='w-full z-10 relative px-10 mt-40 flex-wrap flex items-center justify-between font-[myFont]'>
         <div className='w-[50vw] h-[500px]   px-5 rounded-lg flex items-start justify-center flex-col'>
            <p className='text-2xl tracking-tight leading-[3.5vw] '>
               I'm <span className='text-[3vw] font-bold  m-2 font-[myFont] text-gray-200  '> Ali Haider</span> , a <span className='text-[3vw] strokedText m-2 font-[myfont2] text-transparent  '> MERN Stack Developer</span>   specializing in creating modern, high-performance web solutions that help businesses grow online.
            </p>
            <div className='mt-5 flex gap-10 '>
               <button className='px-6 py-4 rounded-full text-lg capitalize bg-teal-500 font-semibold tracking-normal leading-none shadow-lg shadow-gray-600'>view my work</button>
               <button className='px-6 py-4 rounded-full text-lg capitalize bg-transparent hover:bg-teal-500 transition-all duration-300 font-semibold tracking-normal leading-none shadow-md shadow-gray-400'>Get in touch</button>

            </div>
         </div>


         <div className='w-[40vw] hover:border-2 border-dashed transition-all duration-200 shadow-lg shadow-gray-700 h-[500px] overflow-hidden rounded-full  flex items-center justify-center'>
            <img className='  object-cover' src='../../public/img.png' alt="img is not showing" />
         </div>

      </div>
   )
}

export default HerSection