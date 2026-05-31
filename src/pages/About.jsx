import { motion } from "motion/react";

const techTags = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "MERN Stack",
];

function About() {
  return (
    <section id="about" className="w-full py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-0">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-400">About me</p>
          <h2 className="mt-4 text-4xl font-bold text-white section-heading sm:text-5xl">
            The Craft Behind The Code
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I specialize in architecting complex web ecosystems that are as beautiful as they are functional. My approach combines technical rigor with a deep understanding of user psychology.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid gap-8 lg:grid-cols-[0.95fr_0.9fr]"
        >
          <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-[#0b1119]/80 p-4 shadow-[0_24px_60px_rgba(0,0,0,0.25)] lg:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(61,144,255,0.16),transparent_35%)]" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b1119]">
              <img
                src="/images/about.jpg"
                alt="About Ali Haider"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-6 left-6 rounded-3xl border border-white/10 bg-[#0b1119]/95 p-5 shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Experience</p>
              <p className="mt-3 text-3xl font-bold text-white">5+ Years</p>
              <p className="mt-2 max-w-[16rem] text-sm leading-6 text-slate-300">Working on modern MERN applications with polished UI and architecture.</p>
            </div>
          </div>

          <div className="glass-card rounded-4xl border border-white/10 p-8 lg:p-10">
            <div className="space-y-8">
              <div className="rounded-[1.75rem] border border-white/10 bg-[#0b1119] p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Profile</p>
                <h3 className="mt-4 text-2xl font-bold text-white">Transforming ideas into powerful web experiences.</h3>
                <p className="mt-4 text-slate-300 leading-8">
                  Hello! I'm Ali Haider, a passionate MERN Stack developer dedicated to crafting high-quality, dynamic, and scalable web applications. From concept to deployment, I bring ideas to life through clean code, modern design, and seamless user experiences.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="glass-panel rounded-[1.4rem] p-5">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Experience</p>
                  <p className="mt-4 text-3xl font-bold text-white">5+ Years</p>
                  <p className="mt-2 text-slate-300 leading-7">Building production-ready applications with the MERN stack.</p>
                </div>
                <div className="glass-panel rounded-[1.4rem] p-5">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Focus</p>
                  <p className="mt-4 text-3xl font-bold text-white">Scalable Systems</p>
                  <p className="mt-2 text-slate-300 leading-7">Modern architecture, clean data flows, and polished UX for enterprise-level apps.</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {techTags.map((tag) => (
                  <span key={tag} className="badge badge-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
