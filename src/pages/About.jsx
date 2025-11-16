import React from 'react'
import NavBar from '../Components/NavBar'

function About() {
  return (
   <>
    
    <div className='w-full lg:h-screen h-full font-semibold text-gray-200  bg-gray-700 font-[myFont]'>
     <NavBar/>
     <div className='lg:p-10 p-5'>

     
      <h1 className='lg:text-[4vw] text-4xl text-center capitalize'>
         <span className='text-teal-500'>about</span> me</h1>
   <div className='w-full lg:h-[70%] h-full flex lg:flex-row flex-col items-center justify-between p-5 overflow-hidden rounded-2xl mt-10 shadow-lg shadow-gray-200 bg-gray-900'>
   <div className='lg:w-[45%] w-full rounded-lg overflow-hidden  h-full '><img className='w-full h-full object-cover' src="/about.JPG" alt="" /></div>
   <div className='w-[50%] h-full bg-gray-700 p-5 rounded-lg'>
      <h1 className='font-[myfont2] text-2xl font-bold'>Transforming Ideas Into Powerful Web Experiences </h1>

<p className='font-[myFont] text-md font-light mt-5'>Hello! I'm Ali Haider, a passionate and detail-oriented MERN Stack Developer dedicated to crafting high-quality, dynamic, and scalable web applications.
From concept to deployment, I bring ideas to life through clean code, modern design, and seamless user experiences.</p>
<p className='font-[myFont] text-md font-light  mt-5'> My journey in development began with curiosity and evolved into a mission — to create digital products that are not just functional, but meaningful.
I take pride in writing efficient, maintainable code and designing systems that balance performance, security, and creativity.</p>

<p className='text-md flex leading-10  mt-5 mb-5 '>
   
⚙️ MERN Stack Development  <br />
🎨 Responsive Design  <br />
🚀 Backend Engineering 
</p>

<p className='font-[myFont] text-md font-light  mt-5'>
I believe great software is built on clarity, innovation, and purpose — and every project is a step toward redefining digital excellence.
      
</p>



   </div>
   </div>
   </div>
    </div>
   </>
  )
}

export default About
