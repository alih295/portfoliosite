import React from 'react'

function ProjectsCards({ elem, idx }) {
   return (
      <div key={idx} className='lg:w-[30%] w-full p-5 max-h-[700px] transition-all duration-300 rounded-2xl shadow-md hover:scale-y-105 shadow-gray-400 bg-gray-700'>
         <img className='w-full  object-cover ' src="https://www.cio.com/wp-content/uploads/2023/05/apps-mobile-100721214-orig-1.jpg?quality=50&strip=all" alt="" />
         <h1 className='text-xl font-bold mt-2'>{elem.title}</h1>
         <p className='text-sm font-light mt-2'>{elem.descriptio}</p>
         <div className='w-full mt-3 flex items-center justify-start gap-5'>
            <button className='px-2 py-1 bg-teal-500 rounded-full  text-lg'>React.js</button>
            <button className='px-2 py-1 bg-teal-500 rounded-full  text-lg'>Node.js</button>
            <button className='px-2 py-1 bg-teal-500 rounded-full  text-lg'>Express.js</button>
         </div>
         <div className='w-full mt-3 flex text-teal-300 items-center justify-start gap-5'>
            <a href="#">code</a>
            <a href="#">Live Demo</a>
         </div>
      </div>
   )
}

export default ProjectsCards