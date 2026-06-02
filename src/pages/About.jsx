import { motion } from "motion/react";

const skills = [
  "MongoDB",
  "React",
  "Node.js",
  "Express",
  "Docker",
  "Git",
  "GitHub",
  "Vercel",
  "Postman",
  "AWS"
];

function About() {
  return (
    <section id="about" className="w-full  flex items-center justify-center gap-5 h-screen mt-30">
      <div className="w-[40%] h-full p-4 group hover:border-white hover:shadow-lg shadow-white/70 hover:scale-101 transition-all duration-300  rounded-lg border border-white/50 ">
        <img className="w-full group-hover:grayscale-0 h-full transition-all duration-300 rounded-lg object-cover  grayscale-100" src="./images/aboutImg.png" alt="" />
      </div>
      <div className="w-[59%] flex items-center  justify-center h-full">
        <div className="mb-10 ">

          <h2 className="mt-4 text-4xl font-bold text-white section-heading sm:text-5xl">
            The Craft Behind The Code
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I specialize in architecting complex web ecosystems that are as beautiful as they are functional. My approach combines technical rigor with a deep understanding of user psychology.
          </p>
          <div className="w-full mt-5  flex flex-wrap gap-2">

            {skills.map((skill, index) => (
              <div
                key={index}
                className="w-[18%] py-2 border border-blue-300 text-blue-300 shadow-xs shadow-white flex items-center justify-center rounded-full text-sm font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>



      </div>

    </section>
  );
}

export default About;
