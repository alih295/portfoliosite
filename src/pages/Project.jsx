import React from 'react'
import NavBar from '../Components/NavBar'
import ProjectsCards from '../Components/ProjectsCards'

function Project() {

const projects = [
   {title:'food-rview',
      descriptio:'A full-stack web application that lets users explore food videos in a reels-style interface. Users can scroll through short food clips, like their favorites, and save videos to view later — providing an engaging, social-media-like experience for discovering new dishes.',
      
   },
   {title:'Employee management system',
      descriptio:'A React.js-based web application for managing employee information. It allows users to add, update, and delete employee records using localStorage for data persistence. This project demonstrates CRUD operations and front-end data handling without the need for a backend server.',
      
   },
   {title:'Notes CRUD Application',
      descriptio:'A simple yet efficient web application that allows users to create, read, update, and delete notes. Built using React.js, it demonstrates essential CRUD operations and provides a clean, user-friendly interface for managing personal notes with real-time updates.',
      
   },
]





   return (
      <div className='w-full h-screen overflow-hidden font-[myFont]  text-gray-200 bg-gray-900'>
         <NavBar />
         <h1 className='text-[3vw] font-bold text-center mt-10 '>
            <span className='text-teal-500'>Featured
            </span>  Projects
         </h1>
         <p className='text-center mt-2 mb-20 text-lg '>
            Here are some of my recent projects that showcase my skills and passion for development
         </p>
         <div className='w-full  justify-center  flex  items-center gap-10  p-10   '>
           {
            projects.map((elem , idx)=>{
                 return  <ProjectsCards idx={idx} elem={elem}/>
            })
           }
           <a href='#' className='text-gray-200 whitespace-nowrap'>View All Projects</a>
         </div>
      </div>
   )
}

export default Project