import React from "react";
import { motion } from "motion/react";

function ProjectsCards({ elem, idx }) {
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        scale: 1.03,
        border: "2px solid teal",
        boxShadow: " 0px 10px 30px rgba(0, 128, 128, 0.4)",
      }}
      key={idx}
      className="lg:w-[30%] w-full p-5 max-h-[700px] rounded-2xl   "
    >
      <img
        className="w-full  object-cover "
        src="https://www.cio.com/wp-content/uploads/2023/05/apps-mobile-100721214-orig-1.jpg?quality=50&strip=all"
        alt=""
      />
      <h1 className="text-xl font-bold mt-2">{elem.title}</h1>
      <p className="text-sm font-light mt-2">{elem.descriptio}</p>
      <div className="w-full mt-3 flex items-center justify-start gap-5">
        <button className="px-2 py-1 bg-teal-500 rounded-full  text-lg">
          React.js
        </button>
        <button className="px-2 py-1 bg-teal-500 rounded-full  text-lg">
          Node.js
        </button>
        <button className="px-2 py-1 bg-teal-500 rounded-full  text-lg">
          Express.js
        </button>
      </div>
      <div className="w-full mt-3 flex text-teal-300 items-center justify-start gap-5">
        <a href="#">code</a>
        <a href="#">Live Demo</a>
      </div>
    </motion.div>
  );
}

export default ProjectsCards;
