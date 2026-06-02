import ProjectsCards from "../Components/ProjectsCards";
import { motion } from "motion/react";
import { IoIosCode } from "react-icons/io";
import { RxExternalLink } from "react-icons/rx";

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
    <section id="projects" className="w-full min-h-screen mt-30">
      <div className="mx-auto max-w-7xl px-5 lg:px-0 ">
        <p className="text-sm uppercase tracking-[0.35em] text-green-400">Portfolio</p>
        <h2 className="mt-4 text-4xl font-bold text-white section-heading sm:text-5xl">
          Selected Works
        </h2>

      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        className="mx-auto mt-12 grid gap-6 px-5  lg:max-w-7xl lg:px-0"
      >
        <div className="w-full h-screen  flex items-center  justify-between " >
          <div className="w-[67%] rounded-xl p-5 group px-10 flex flex-col  justify-start gap-5  h-full border border-white/50 hover:border-white hover:shadow-lg shadow-green-400/20 transition-all duration-300 hover:scale-102">
            <img className="w-full transition-scale duration-300 group-hover:scale-105 h-[60%] rounded-xl object-cover " src="./projectImg/admin.png" alt="" />
            <div className="w-full flex items-center justify-between"><h1>Digital Attendance System</h1>
              <div className="flex items-center justify-center gap-5 text-2xl font-bold"><a target="blank" href="https://github.com/alih295/digital-attendance-system" className="font-bold hover:text-green-400 transition-colors duration-200 cursor-pointer"><IoIosCode /> </a>  <a target="blank" href="https://digital-attendance-system-nine.vercel.app/" className="font-bold hover:text-green-400 transition-colors duration-200 cursor-pointer"><RxExternalLink /></a> </div>
            </div>
            <p className="text-gray-300">QR-based Attendance System featuring Admin, Teacher, and Student portals. It tracks real-time, secure, and contactless attendance via QR scans.</p>

          </div>
          <div className="w-[29%] h-full flex flex-col items-center justify-between ">
            <div className="w-full h-[48%] group border border-white/50 hover:border-white hover:shadow-lg shadow-green-400/20 transition-all duration-300 hover:scale-102 p-5 rounded-xl flex flex-col gap-2">
              <img className="w-full h-[70%] group-hover:scale-102 transition-scale duration-300 rounded-xl object-cover object-center" src="./projectImg/grocery-store.png" alt="" />
              <h1 className="text-2xl font-semibold">Grocery Store
              </h1>
              <p className="text-sm font-normal text-gray-300">Smart online grocery store for fresh daily essentials delivered fast.</p>
              </div>
            <div className="w-full h-[48%] group border border-white/50 hover:border-white hover:shadow-lg shadow-green-400/20 transition-all duration-300 hover:scale-102 p-5 rounded-xl flex flex-col gap-2">
              <img className="w-full h-[70%] group-hover:scale-102 transition-scale duration-300 rounded-xl object-cover object-center" src="./projectImg/Ngrok.png" alt="" />
              <h1 className="text-2xl font-semibold">Ngrok UI Clone
              </h1>
              <p className="text-sm font-normal text-gray-300">Pixel-perfect frontend clone of the official ngrok website UI.</p>
              </div>
           
          </div>

        </div>
      </motion.div>
    </section>
  );
}

export default Project;
