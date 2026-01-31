import React from "react";
import NavBar from "../Components/NavBar";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { motion } from "motion/react";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeIn" }}
      whileInView={{ opacity: 1, y: 0 }}
      id="contact"
      className="w-full lg:h-screen mt-10  text-gray-200 font-[myFont] bg-gray-900"
    >
      <h1 className="text-center mt-5 font-bold lg:text-[3vw] text-3xl ">
        <span className="text-teal-500">Get In</span> Touch
      </h1>
      <p className="text-center text-sm lg:text-md ">
        Ready to start your next project? Let's discuss how we can work together
        to bring your ideas to life.
      </p>
      <div className="w-full  flex lg:flex-row flex-col items-center justify-between  mt-10  h-[80%] ">
        <motion.div
          whileHover={{
            scale: 1.03,
            border: "2px solid #14b8a6", // tailwind teal-500
            boxShadow: "0 10px 20px rgba(20, 184, 166, 0.45)",
          }} 
          transition={{
            duration:0.6, ease:'easeIn'
          }}
          className="lg:w-[45%] w-full 
             rounded-lg flex justify-center items-start gap-10 flex-col shadow-lg  h-full   p-10  "
        >
          <h1 className="text-center text-xl font-semibold">
            Contact Information
          </h1>
          <div className="flex items-center border-b border-teal-500 , borderw-full gap-5">
            <span className="w-15 h-15 text-2xl  font-bold  rounded-full flex items-center justify-center">
              <HiOutlineMailOpen />
            </span>
            <div>
              Email <br /> alihaider295tts@gmail.com
            </div>
          </div>
          <div className="flex items-center border-b border-teal-500 , borderw-full gap-5">
            <span className="w-15 h-15 text-2xl  font-bold  rounded-full flex items-center justify-center">
              <FaPhoneAlt />
            </span>
            <div>
              Phone <br /> 03075133794
            </div>
          </div>
          <div className="flex items-center border-b border-teal-500 , borderw-full gap-5">
            <span className="w-15 h-15 text-2xl  font-bold   rounded-full flex items-center justify-center">
              <IoLocationSharp />
            </span>
            <div>
              Location <br /> TobaTekSingh ,punjab , pakistan
            </div>
          </div>
        </motion.div>
        <motion.div  whileHover={{
            scale: 1.03,
            border: "2px solid #14b8a6", // tailwind teal-500
            boxShadow: "0 10px 20px rgba(20, 184, 166, 0.45)",
          }} 
          transition={{
            duration:0.6, ease:'easeIn'
          }} className="lg:w-[45%] w-full lg:mt-0 mt-10 flex flex-col items-start justify-start gap-5 rounded-lg p-10 shadow-lg  h-full  ">
          <h1 className="text-center text-2xl font-semibold">Send a message</h1>
          <form className="w-full">
            <label className="text-gray-400 block mt-5   mb-2">Full Name</label>
            <input
              className="w-full shadow-md border-teal-500 , border px-5 py-3 bg-gray-900 rounded-lg outline-none"
              type="text"
            />
            <label className="text-gray-400 block mt-5   mb-2">
              Email Address
            </label>
            <input
              className="w-full shadow-md border-teal-500 , border px-5 py-3 bg-gray-900 rounded-lg outline-none"
              type="text"
            />
            <label className="text-gray-400 block mt-5   mb-2">Subject</label>
            <input
              className="w-full shadow-md border-teal-500 , border px-5 py-3 bg-gray-900 rounded-lg outline-none"
              type="text"
            />
            <label className="text-gray-400 block  mt-5  mb-2">Message</label>
            <textarea className="w-full px-5 py-3 h-25 bg-gray-900 rounded-lg outline-none shadow-md border-teal-500 , border resize-none "></textarea>
            <input
              type="submit"
              className="w-full px-5 py-3 mt-5 capitalize text-black font-semibold rounded-full bg-teal-500"
              value={"send message"}
            />
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Contact;
