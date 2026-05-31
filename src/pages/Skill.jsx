import { motion } from "motion/react";

const journeyItems = [
  {
    title: "Senior Full-Stack Developer",
    period: "2022 — Present",
    description: "Leading core engineering at TechFlow, architecting microservices and mentoring junior developers on MERN best practices.",
  },
  {
    title: "Freelance Engineer",
    period: "2020 — 2022",
    description: "Delivered high-performance MVPs for startups with rapid deployment, cloud scaling, and polished frontend interfaces.",
  },
  {
    title: "Frontend Lead",
    period: "2018 — 2020",
    description: "Spearheaded UI migration from legacy systems to React-based architectures for e-commerce and enterprise platforms.",
  },
];

const skillTags = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "JavaScript",
  "HTML / CSS",
  "Git & GitHub",
];

function Skill() {
  return (
    <section id="skills" className="w-full py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-0">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-400">The Journey</p>
          <h2 className="mt-4 text-4xl font-bold text-white section-heading sm:text-5xl">
            Career milestones and technical strengths.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            My experience is shaped by complex projects, meaningful product delivery, and continuous growth across the full-stack.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-card rounded-[2rem] border border-white/10 p-8"
        >
          <div className="space-y-10">
            {journeyItems.map((item) => (
              <div key={item.title} className="flex flex-col gap-4 border-b border-white/10 pb-8 last:border-b-0 last:pb-0">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <span className="badge badge-secondary">{item.period}</span>
                </div>
                <p className="text-slate-300 leading-7">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skillTags.map((tag) => (
            <span key={tag} className="badge badge-primary">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
