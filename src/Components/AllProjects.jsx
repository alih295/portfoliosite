import React from "react";
import { motion } from "motion/react";
import { useAppContext } from "../context/AppContext";
import NavBar from "./NavBar";
import Footer from "./Footer";

function AllProjects() {
  const { projects } = useAppContext();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <NavBar />
      <main className="py-16 md:py-24 px-4 md:px-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 md:mb-12"
        >
          <span className="text-secondary font-label-md text-label-md tracking-widest uppercase mb-2 block">Portfolio</span>
          <h1 className="font-headline-lg text-headline-lg text-on-surface">All Projects</h1>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid gap-3 md:gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="bento-card flex w-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 p-4 md:p-5"
            >
              {project.image && (
                <div className="overflow-hidden rounded-[1.4rem] h-[220px] mb-5">
                  <img
                    className="h-full w-full rounded-[1.4rem] object-cover group-hover:scale-105 transition-transform duration-700"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              )}

              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag, index) => (
                    <span key={index} className="neon-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-on-surface">{project.title}</h2>
                <p className="text-sm leading-7 text-on-surface-variant grow">{project.description}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.tech?.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-surface-container rounded text-label-md text-xs text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary rounded-full px-4 py-2 text-sm font-semibold transition hover:bg-white/10"
                  >
                    Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary rounded-full px-4 py-2 text-sm font-semibold transition hover:bg-white/10"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
      <Footer />
    </>
  );
}

export default AllProjects;
