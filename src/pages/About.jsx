import { motion } from "motion/react";

const skills = [
  "MongoDB",
  "Express.js",
  "React.js",
  "Node.js",
  "Next.js",
  "TailwindCSS"
];

function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center">
        
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-5 relative"
        >
          <div className="aspect-4/5 rounded-3xl overflow-hidden border-2 border-primary/20 p-2 bento-card">
            <img
              alt="Profile Photo"
              className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
              src="./images/aboutImg.png"
            />
          </div>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7 space-y-6 md:space-y-8"
        >
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              The Craft Behind The Code
            </h2>
            
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 md:mt-6">
              I specialize in architecting complex web ecosystems that are as beautiful as they are functional. My approach combines technical rigor with a deep understanding of user psychology.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="neon-tag text-center py-3 hover:shadow-[0_0_20px_rgba(173,198,255,0.5)] transition-all"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
