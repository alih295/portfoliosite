import React, { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { motion, AnimatePresence } from "motion/react";

function NavBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const navItems = [
    { name: "Work", id: "work" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
    {name:"Skill" , id:'skill'}
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-20 py-3 md:py-4 max-w-7xl mx-auto bg-surface/30 backdrop-blur-xl border-b border-outline-variant/10\">
      <div className="text-body-lg font-headline-lg-mobile font-bold tracking-normal text-on-surface">MERN.DEV</div>
      
      <nav className="hidden md:flex gap-8 items-center">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            whileHover={{ y: -2 }}
            className={`font-label-md text-label-md transition-colors duration-300 ${
              item.id === "work" 
                ? "text-primary font-bold border-b-2 border-primary pb-1" 
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            {item.name}
          </motion.button>
        ))}
      </nav>

      <div className="hidden md:flex items-center gap-4">
        <a
          href="https://github.com/alih295"
          target="_blank"
          rel="noreferrer"
          className="text-on-surface-variant hover:text-primary transition-colors duration-300"
        >
          <BsGithub size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/hafiz-ali-haider-asghar-987992368/"
          target="_blank"
          rel="noreferrer"
          className="text-on-surface-variant hover:text-primary transition-colors duration-300"
        >
          <FaLinkedinIn size={18} />
        </a>
        <button className="glass-btn px-6 py-2 rounded-full font-label-md text-label-md text-primary scale-105 active:scale-95 transition-all">
          Resume
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-on-surface-variant hover:text-primary transition-colors"
        onClick={() => setOpen(!open)}
      >
        {open ? <RxCross1 size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/95  backdrop-blur-xl border-b border-outline-variant/10 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  whileHover={{ x: 4 }}
                  className="text-on-surface-variant hover:text-primary transition-colors text-left font-label-md"
                >
                  {item.name}
                </motion.button>
              ))}
              <div className="flex gap-4 pt-4 border-t border-outline-variant/10">
                <a href="https://github.com/alih295" target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-primary">
                  <BsGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/hafiz-ali-haider-asghar-987992368/" target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-primary">
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default NavBar;
