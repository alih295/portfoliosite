import React, { useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
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
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#080a0d]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-lg font-black text-primary">
            M
          </div>
          <span className="text-base font-semibold text-slate-100">MERN.DEV</span>
        </div>

        <nav className="hidden items-center gap-10 lg:flex text-sm text-slate-300">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              whileHover={{ y: -2 }}
              className="transition-colors duration-200 hover:text-white"
            >
              {item.name}
            </motion.button>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="https://github.com/alih295"
            target="_blank"
            rel="noreferrer"
            className="text-slate-200 transition hover:text-white"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/hafiz-ali-haider-asghar-987992368/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-200 transition hover:text-white"
          >
            <FaLinkedinIn />
          </a>
          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="btn-secondary rounded-full px-5 py-2 text-sm font-semibold"
          >
            Contact
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="lg:hidden text-2xl text-slate-100"
        >
          <FiMenu />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="fixed top-0 right-0 z-50 h-screen w-[70%] bg-[#0b1016] p-6 shadow-2xl"
            >
              <div className="flex justify-end">
                <button type="button" onClick={() => setOpen(false)} className="text-2xl text-slate-200">
                  <RxCross1 />
                </button>
              </div>
              <div className="mt-10 flex flex-col gap-6 text-lg text-slate-200">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollTo(item.id)}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition hover:border-primary"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default NavBar;
