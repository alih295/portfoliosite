import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

function NavBar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/40 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between py-4">

        {/* Logo */}
        <h1 className="text-2xl lg:text-3xl text-teal-500 font-semibold">
          Ali Haider
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex">
          <ul className="flex gap-10 text-gray-400">
            {navItems.map((item,idx) => (
              <motion.li  key={idx}
              
                onClick={() => scrollTo(item.id)}
                className="relative cursor-pointer hover:text-white"
                whileHover={{ scale: 1.1 }}
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-500 transition-all group-hover:w-full" />
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Desktop Socials */}
        <div className="hidden lg:flex gap-4">
          <motion.a whileHover={{ scale: 1.2 }} href="https://www.facebook.com/alihaider.asgharali.96" target="_blank">
            <FaFacebookF />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/alih295" target="_blank">
            <BsGithub />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/hafiz-ali-haider-asghar-987992368/" target="_blank">
            <FaLinkedinIn />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div onClick={() => setOpen(true)} className="lg:hidden text-white  text-2xl cursor-pointer">
          <FiMenu  />
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="fixed top-0 right-0 w-[70%] h-screen bg-black text-white p-6 z-50"
            >
              <div className="flex justify-end mb-10">
                <RxCross1 onClick={() => setOpen(false)} className="text-2xl cursor-pointer" />
              </div>

              <ul className="flex flex-col gap-6 text-lg">
                {navItems.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="border-b border-gray-600 pb-2 cursor-pointer"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}

export default NavBar;
