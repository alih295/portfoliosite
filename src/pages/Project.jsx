import React from 'react'
import NavBar from '../Components/NavBar'
import ProjectsCards from '../Components/ProjectsCards'

function Project() {

const projects = [
   {title:'food-review',
      descriptio:'A full-stack web application that lets users explore food videos in a reels-style interface. Users can scroll through short food clips, like their favorites, and save videos to view later — providing an engaging, social-media-like experience for discovering new dishes.',
      
   },
   {title:'Employee management system',
      descriptio:'A React.js-based web application for managing employee information. It allows users to add, update, and delete employee records using localStorage for data persistence. This project demonstrates CRUD operations and front-end data handling without the need for a backend server.',
      
   },
   {title:'Notes CRUD Application',
      descriptio:'A simple yet efficient web application that allows users to create, read, update, and delete notes. Built using React.js, it demonstrates essential CRUD operations and provides a clean, user-friendly interface for managing personal notes with real-time updates.',
      
   },
   {title:'Notes CRUD Application',
      descriptio:'A simple yet efficient web application that allows users to create, read, update, and delete notes. Built using React.js, it demonstrates essential CRUD operations and provides a clean, user-friendly interface for managing personal notes with real-time updates.',
      
   },
   {title:'Notes CRUD Application',
      descriptio:'A simple yet efficient web application that allows users to create, read, update, and delete notes. Built using React.js, it demonstrates essential CRUD operations and provides a clean, user-friendly interface for managing personal notes with real-time updates.',
      
   },
   {title:'Notes CRUD Application',
      descriptio:'A simple yet efficient web application that allows users to create, read, update, and delete notes. Built using React.js, it demonstrates essential CRUD operations and provides a clean, user-friendly interface for managing personal notes with real-time updates.',
      
   },

]





   return (
      <div className='w-full h-full font-[myFont]  text-gray-200 bg-gray-900'>
         <NavBar />
         <h1 className='lg:text-[3vw] text-3xl font-bold text-center mt-10 '>
            <span className='text-teal-500'>Featured
            </span>  Projects
         </h1>
         <p className='text-center mt-2 lg:mb-20 lg:text-lg  text-sm'>
            Here are some of my recent projects that showcase my skills and passion for development
         </p>
         <div className='w-full p-5 justify-star flex-wrap lg:flex-row flex-col  flex  items-center lg:gap-10  gap-5 lg:p-10   '>
           {
            projects.map((elem , idx)=>{
                 return  <ProjectsCards idx={idx} elem={elem}/>
            })
           }
          
         </div>
      </div>
   )
}

export default Project