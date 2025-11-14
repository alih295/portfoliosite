import React from 'react'
import NavBar from '../Components/NavBar'
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";


function Contact() {
   return (
      <div className='w-full h-screen  text-gray-200 font-[myFont] bg-gray-900'>
         <NavBar />
         <h1 className='text-center mt-5 font-bold text-[3vw] '><span className='text-teal-500'>Get In</span> Touch</h1>
         <p className='text-center '>Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.</p>
         <div className='w-full p-10 flex items-center justify-between   h-[80%] '>

            <div className='w-[45%] rounded-lg flex justify-center items-start gap-10 flex-col shadow-lg shadow-gray-400 h-full bg-gray-800 p-10  '>
               <h1 className='text-center text-xl font-semibold'>Contact Information</h1>
               <div className='flex items-center border-b border-gray-500 w-full gap-5'>
                  <span className='w-15 h-15 text-2xl  font-bold  bg-gray-900 rounded-full flex items-center justify-center'><HiOutlineMailOpen /></span>
                  <div>
                     Email <br /> alihaider295tts@gmail.com
                  </div>
               </div>
               <div className='flex items-center border-b border-gray-500 w-full gap-5'>
                  <span className='w-15 h-15 text-2xl  font-bold  bg-gray-900 rounded-full flex items-center justify-center'><FaPhoneAlt /></span>
                  <div>
                     Phone <br /> 03075133794
                  </div>
               </div>
               <div className='flex items-center border-b border-gray-500 w-full gap-5'>
                  <span className='w-15 h-15 text-2xl  font-bold  bg-gray-900 rounded-full flex items-center justify-center'><IoLocationSharp /></span>
                  <div>
                     Location <br /> TobaTekSingh ,punjab , pakistan
                  </div>
               </div>

            </div>
            <div className='w-[45%] flex flex-col items-start justify-start gap-5 rounded-lg p-10 shadow-lg shadow-gray-400 h-full bg-gray-800  '>
               <h1 className='text-center text-2xl font-semibold'>Send a message</h1>
               <form className='w-full' >
                  <label className='text-gray-400 block mt-5   mb-2' >Full Name</label>
                  <input className='w-full shadow-md shadow-gray-500 px-5 py-3 bg-gray-900 rounded-lg outline-none' type="text" />
                  <label className='text-gray-400 block mt-5   mb-2' >Email Address</label>
                  <input className='w-full shadow-md shadow-gray-500 px-5 py-3 bg-gray-900 rounded-lg outline-none' type="text" />
                  <label className='text-gray-400 block mt-5   mb-2' >Subject</label>
                  <input className='w-full shadow-md shadow-gray-500 px-5 py-3 bg-gray-900 rounded-lg outline-none' type="text" />
                  <label className='text-gray-400 block  mt-5  mb-2' >Message</label>
                  <textarea className='w-full px-5 py-3 h-25 bg-gray-900 rounded-lg outline-none shadow-md shadow-gray-500 resize-none ' ></textarea>
                  <input type="submit" className='w-full px-5 py-3 mt-5 rounded-full bg-teal-500' value={'send message'} />
               </form>


            </div>


         </div>
      </div>
   )
}

export default Contact