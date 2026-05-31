import ProjectsCards from "../Components/ProjectsCards";
import { motion } from "motion/react";

const projects = [
  {
    title: "Food Review Platform",
    description:
      "A full-stack solution for discovering food videos in a modern social feed. Users can like, save, and explore restaurant recommendations with a polished interface.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    tags: ["Web App", "MERN", "UX"],
    tech: ["React", "Node", "Express", "MongoDB"],
    code: "https://github.com/alih295/food-review",
  },
  {
    title: "Employee Management System",
    description:
      "A React-powered dashboard that supports employee CRUD workflows, team organization, and smooth local data persistence for quick admin updates.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    tags: ["Admin", "Dashboard", "MERN"],
    tech: ["React", "LocalStorage", "Tailwind"],
    code: "https://github.com/alih295/employee-management-system",
  },
  {
    title: "Notes CRUD App",
    description:
      "A clean note-taking experience built with React. It supports creating, editing, and deleting notes with a layout designed for fast use and readability.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    tags: ["Productivity", "React", "UI"],
    tech: ["React", "JavaScript", "CSS"],
    code: "https://github.com/alih295/notes-crud-app",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function Project() {
  return (
    <section id="projects" className="w-full py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-0 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Portfolio</p>
        <h2 className="mt-4 text-4xl font-bold text-white section-heading sm:text-5xl">
          Selected Works
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          A collection of recent projects that demonstrate my ability to turn complex ideas into polished user experiences.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        className="mx-auto mt-12 grid gap-6 px-5 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-7xl lg:px-0"
      >
        {projects.map((elem, idx) => (
          <ProjectsCards key={idx} elem={elem} />
        ))}
      </motion.div>
    </section>
  );
}

export default Project;
