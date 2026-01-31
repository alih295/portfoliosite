import React from "react";
import { motion } from "framer-motion";
import NavBar from "../Components/NavBar";

/* ================= VARIANTS ================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const barContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const barFill = {
  hidden: { width: 0 },
  show: (width) => ({
    width,
    transition: { duration: 1.2, ease: "easeOut" },
  }),
};

/* ================= SKILL BAR ================= */

function SkillBar({ label, percent }) {
  return (
    <motion.div variants={fadeUp} className="w-full mt-8">
      <div className="flex justify-between mb-1">
        <p>{label}</p>
        <p>{percent}%</p>
      </div>

      <div className="w-full h-3 bg-gray-600 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-teal-500 rounded-full shadow-[0_0_15px_rgba(20,184,166,0.6)]"
          variants={barFill}
          custom={`${percent}%`}
        />
      </div>
    </motion.div>
  );
}

/* ================= MAIN COMPONENT ================= */

function Skill() {
  return (
    <div
      id="skills"
      className="w-full font-[myFont] overflow-hidden lg:h-screen text-gray-200"
    >
      <NavBar />

      <div className="w-full min-h-100 px-5 lg:px-20">
        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
         
          className="text-center mb-2 font-bold text-3xl lg:text-[3vw]"
        >
          <span className="text-teal-500">Technical </span>Skills
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        
          className="text-center lg:text-lg text-md"
        >
          My expertise covers a diverse range of web development technologies and
          tools.
        </motion.p>

        {/* Skills Container */}
        <motion.div
          className="w-full lg:h-[60vh] lg:flex-row flex-col flex items-center justify-between rounded-lg lg:mt-20 mt-10 bg-gray-900"
          variants={container}
          initial="hidden"
          whileInView="show"
         
        >
          {/* Frontend */}
          <motion.div
            className="lg:w-[48%] w-full p-5"
            variants={fadeUp}
          >
            <h1 className="text-center text-2xl font-semibold mb-10">
              Frontend Development
            </h1>

            <motion.div variants={barContainer}>
              <SkillBar label="HTML / CSS" percent={95} />
              <SkillBar label="Tailwind CSS" percent={90} />
              <SkillBar label="JavaScript" percent={80} />
              <SkillBar label="React.js" percent={90} />
            </motion.div>
          </motion.div>

          {/* Backend */}
          <motion.div
            className="lg:w-[48%] w-full p-5"
            variants={fadeUp}
          >
            <h1 className="text-center text-2xl font-semibold mb-10">
              Backend & Tools
            </h1>

            <motion.div variants={barContainer}>
              <SkillBar label="Node.js" percent={70} />
              <SkillBar label="Express.js" percent={85} />
              <SkillBar label="MongoDB" percent={90} />
              <SkillBar label="Git & GitHub" percent={95} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Skill;
