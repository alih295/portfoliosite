import { motion } from "motion/react";

function HeroSection() {
  // assume scrollTo function is defined elsewhere

  return (
    <motion.section className="w-full pt-24 lg:pt-28">
      <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center px-5 sm:px-8 lg:px-0">

        {/* Left Side (Unchanged) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 text-center lg:text-left"
        >
          <h1 className="text-[5.5vw] leading-[5.5vw] font-black font-[myFont2] text-white">
            Building <br /> <span className="text-blue-300">Scalable</span> Full-Stack Applications
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-8 text-slate-300 lg:mx-0 lg:text-lg">
            Crafting digital experiences with precision, architectural elegance,
            and the power of the MERN stack. From concept to deployment, I build
            performant web applications that feel polished and reliable.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <button
              onClick={() => scrollTo("projects")}
              className="px-8 rounded-lg text-black py-2 bg-blue-300 transition-transform duration-200 hover:-translate-y-0.5"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="btn-secondary rounded-lg px-8 py-3 font-semibold transition-transform duration-200 hover:-translate-y-0.5"
            >
              Let's Talk
            </button>
          </div>
        </motion.div>

        {/* Right Side (Enhanced Code Screenshot Overlay) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-card relative overflow-hidden rounded-4xl p-6 min-h-[400px] flex items-center justify-center"
        >
          {/* Background Image Container */}
          <div className="absolute inset-0 w-full h-full overflow-hidden rounded-4xl">
            <img
              className="w-full h-full object-center object-cover hover:scale-110 transition-transform duration-500"
              src="./images/heroImg.png"
              alt="Hero Graphic"
            />
            {/* Soft gradient overlay so the image doesn't clash with the code snippet */}
          </div>

          {/* Code Screenshot Element Overlaid on Image */}
          <div className="relative z-10 w-full max-w-sm rounded-2xl border border-white/10 bg-[#0d1118]/95 p-4 shadow-2xl backdrop-blur-md">

            {/* Window Header (Mac Controls) */}
            <div className="flex items-center gap-1.5 pb-3 mb-3 border-b border-white/5">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-[11px] font-mono text-slate-500 ml-2">developer.js</span>
            </div>

            {/* Code Content */}
            <div className="rounded-xl bg-[#111827]/80 p-4 text-xs sm:text-sm font-mono text-slate-300 tracking-wide">
              <pre className="whitespace-pre-wrap leading-6">
                <span className="text-pink-400">const</span> <span className="text-blue-400">architecture</span> = <span className="text-amber-200">"Scalable"</span>{"\n"}
                <span className="text-pink-400">const</span> <span className="text-blue-400">stack</span> = [<span className="text-amber-200">"MERN"</span>, <span className="text-amber-200">"GraphQL"</span>]{"\n"}
                <span className="text-purple-400">deploy</span>({`{ `}<span className="text-emerald-400">high_performance</span>: <span className="text-orange-400">true</span>{` }`})
              </pre>
            </div>

          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}

export default HeroSection;