import React from "react";
import { motion } from "motion/react";

function ProjectsCards({ elem }) {
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 36,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02, borderColor: "rgba(173,198,255,0.35)", boxShadow: "0 24px 60px rgba(61,144,255,0.16)" }}
      className="glass-card flex w-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 p-5"
    >
      {elem.image && (
        <img
          className="h-[220px] w-full rounded-[1.4rem] object-cover"
          src={elem.image}
          alt={elem.title}
        />
      )}

      <div className="mt-5 flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {elem.tags?.map((tag, index) => (
            <span key={index} className="badge badge-primary">
              {tag}
            </span>
          ))}
        </div>
        <h2 className="text-2xl font-bold text-white">{elem.title}</h2>
        <p className="text-sm leading-7 text-slate-300">{elem.description}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {elem.tech?.map((tech, index) => (
          <span key={index} className="badge badge-secondary">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {elem.code && (
          <a
            href={elem.code}
            target="_blank"
            rel="noreferrer"
            className="btn-primary rounded-full px-4 py-2 text-sm font-semibold transition hover:bg-white/10"
          >
            Code
          </a>
        )}
        {elem.demo && (
          <a
            href={elem.demo}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary rounded-full px-4 py-2 text-sm font-semibold transition hover:bg-white/10"
          >
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectsCards;
