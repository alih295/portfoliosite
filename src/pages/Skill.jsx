import React from 'react'
import NavBar from '../Components/NavBar'

function Skill() {
   return (
      <div className='w-full font-[myFont] overflow-hidden  lg:h-screen text-gray-200 bg-gray-700'>
         <NavBar />
         <div className='w-full min-h-100 lg:p-10 p-5'>
            <h1 className='text-center mb-2 font-bold text-3xl lg:text-[3vw] '><span className='text-teal-500'>Technical </span>skills</h1>
            <p className='text-center lg:text-lg text-md'>My expertise covers a diverse range of web development technologies and tools.
            </p>
            <div className='w-full lg:h-[60vh]   lg:flex-row flex-col flex items-center justify-between rounded-lg lg:mt-20 mt-10 bg-gray-900'>
               <div className='lg:w-[48%] w-full  p-5'>
                  <h1 className='text-center  text-2xl font-semibold mb-10 '>Frontend Development</h1>
                  <div className='w-full '>
                     <div className='w-full mb-1 flex items-center justify-between
                     '><p>HTML/CSS</p> <p>95%</p></div>
                     <div className='w-full rounded-full overflow-hidden h-3 bg-gray-500'>
                        <div className='w-[95%] rounded-full overflow-hidden h-full bg-teal-500'></div>
                     </div>

                  </div>
                  <div className='w-full mt-10'>
                     <div className='w-full mb-1 flex items-center justify-between
                     '><p>Tailwindcss</p> <p>90%</p></div>
                     <div className='w-full rounded-full overflow-hidden h-3 bg-gray-500'>
                        <div className='w-[90%] rounded-full overflow-hidden h-full bg-teal-500'></div>
                     </div>

                  </div>
                  <div className='w-full mt-10'>
                     <div className='w-full mb-1 flex items-center justify-between
                     '><p>Javascript</p> <p>80%</p></div>
                     <div className='w-full rounded-full overflow-hidden h-3 bg-gray-500'>
                        <div className='w-[80%] rounded-full overflow-hidden h-full bg-teal-500'></div>
                     </div>

                  </div>
                  <div className='w-full mt-10'>
                     <div className='w-full mb-1 flex items-center justify-between
                     '><p>React.js</p> <p>90%</p></div>
                     <div className='w-full rounded-full overflow-hidden h-3 bg-gray-500'>
                        <div className='w-[90%] rounded-full overflow-hidden h-full bg-teal-500'></div>
                     </div>

                  </div>

               </div>
               <div className='lg:w-[48%] w-full  p-5'>
                  <h1 className='text-center  text-2xl font-semibold mb-10 '>Backend & Tools</h1>
                  <div className='w-full '>
                     <div className='w-full mb-1 flex items-center justify-between
                     '><p>Node.js</p> <p>70%</p></div>
                     <div className='w-full rounded-full overflow-hidden h-3 bg-gray-500'>
                        <div className='w-[70%] rounded-full overflow-hidden h-full bg-teal-500'></div>
                     </div>

                  </div>
                  <div className='w-full mt-10'>
                     <div className='w-full mb-1 flex items-center justify-between
                     '><p>Express.js</p> <p>85%</p></div>
                     <div className='w-full rounded-full overflow-hidden h-3 bg-gray-500'>
                        <div className='w-[85%] rounded-full overflow-hidden h-full bg-teal-500'></div>
                     </div>

                  </div>
                  <div className='w-full mt-10'>
                     <div className='w-full mb-1 flex items-center justify-between
                     '><p>MongoDB</p> <p>90%</p></div>
                     <div className='w-full rounded-full overflow-hidden h-3 bg-gray-500'>
                        <div className='w-[90%] rounded-full overflow-hidden h-full bg-teal-500'></div>
                     </div>

                  </div>
                  <div className='w-full mt-10'>
                     <div className='w-full mb-1 flex items-center justify-between
                     '><p>Git & GitHub</p> <p>95%</p></div>
                     <div className='w-full rounded-full overflow-hidden h-3 bg-gray-500'>
                        <div className='w-[95%] rounded-full overflow-hidden h-full bg-teal-500'></div>
                     </div>

                  </div>

               </div>
            </div>
         </div>
      </div>
   )
}

export default Skill