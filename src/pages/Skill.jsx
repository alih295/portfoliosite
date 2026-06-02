import { motion } from "motion/react";

const journeyItems = [
  {
    title: "Full-Stack Developer",
    period: "2023 — Present",
    description: "Leading core engineering at TechFlow, architecting microservices and mentoring junior developers on MERN best practices.",
  },
  {
    title: "Frontend Lead",
    period: "2022 — 2024",
    description: "Spearheaded UI migration from legacy systems to React-based architectures for e-commerce and enterprise platforms.",
  },
];



function Skill() {
  return (
    <section id="skills" className="w-full h-screen  mt-30">
      <div className="mx-auto max-w-7xl px-5 lg:px-0">
        <div className="mb-10 text-center">
          <p className="text-4xl font-[myFont2]">The Journey</p>
         
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className=" rounded-xl flex
           items-center justify-center p-8"
        >
          <div className="space-y-10 w-1/2">
            {journeyItems.map((item) => (
              <div key={item.title} className="flex flex-col gap-4  pb-8 last:border-b-0 last:pb-0">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <span className="text-blue-300 font-semibold">{item.period}</span>
                </div>
                <p className="text-slate-300 leading-7">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        
      </div>
    </section>
  );
}

export default Skill;
