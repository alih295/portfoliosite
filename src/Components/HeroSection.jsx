import { motion } from "motion/react";

function HeroSection() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-5 md:px-0 pt-16 md:pt-24 gap-6 md:gap-12 md:max-w-7xl md:mx-auto">
      {/* Left Side - Text Content */}
      <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
        <h1 className="font-display-lg text-3xl sm:text-4xl md:text-display-lg leading-tight text-on-surface">
          Building <span className="text-primary">Scalable</span> Full-Stack Applications
        </h1>
        
        <p className="font-body-lg text-sm sm:text-base md:text-body-lg text-on-surface-variant max-w-xl\">
          Crafting digital experiences with precision, architectural elegance, and the power of the MERN stack. From concept to deployment, I build for the future.
        </p>

        <div className="flex gap-3 md:gap-4 pt-4 flex-wrap">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo("work")}
            className="bg-primary text-on-primary px-4 md:px-8 py-2 md:py-4 rounded-xl font-label-md text-label-md text-sm md:text-base hover:opacity-90 transition-all flex items-center gap-2"
          >
            View Projects <span className="text-lg md:text-xl">↓</span>
          </motion.button>
          
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo("contact")}
            className="glass-btn px-4 md:px-8 py-2 md:py-4 rounded-xl font-label-md text-label-md text-sm md:text-base text-on-surface hover:text-primary"
          >
            Let's Talk
          </motion.button>
        </div>
      </div>

      {/* Right Side - Code Card */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 relative h-[400px] md:h-[600px] bento-card rounded-3xl overflow-hidden group"
      >
        <img
          alt="Code Visual"
          className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
          src="./images/heroImg.png"
        />
        
        {/* Code Window Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="p-8 bento-card rounded-2xl bg-surface/40 backdrop-blur-2xl border border-white/5 space-y-2">
            {/* Window Controls */}
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-error"></div>
              <div className="w-3 h-3 rounded-full bg-secondary"></div>
              <div className="w-3 h-3 rounded-full bg-primary"></div>
            </div>
            
            {/* Code Content */}
            <code className="text-primary font-code text-code block text-xs md:text-sm whitespace-nowrap">
              <span className="text-pink-400">const</span> <span className="text-blue-400">architecture</span> = <span className="text-amber-200">"Scalable"</span>;<br/>
              <span className="text-pink-400">const</span> <span className="text-blue-400">stack</span> = [<span className="text-amber-200">"M", "E", "R", "N"</span>];<br/>
              <span className="text-purple-400">deploy</span>(<span className="text-emerald-400">high_performance</span>);
            </code>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default HeroSection;
