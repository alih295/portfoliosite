import { motion } from "framer-motion";

function HeroSection() {
  return (
    <motion.section
      className="
        w-full min-h-screen
        flex flex-col items-center justify-center
        px-5 sm:px-8 md:px-16
        text-center
      "
    >
      <div className="flex flex-col items-center gap-2 sm:gap-3">
        <p className="text-sm sm:text-base md:text-lg uppercase tracking-wide">
          hello
        </p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="
            font-semibold capitalize
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
          "
        >
          I'm Ali Haider
        </motion.h1>

        {/* Desktop only drag */}
        <motion.h1
          drag="x"
          dragConstraints={{ left: -120, right: 120 }}
          whileDrag={{ scale: 1.15, color: "#14b8a6" }}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="
            font-bold whitespace-nowrap cursor-grab
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            hidden md:block
          "
        >
          FullStack Developer
        </motion.h1>

        {/* Mobile / Tablet static text */}
        <h1
          className="
            font-bold
            text-4xl sm:text-5xl md:hidden
          "
        >
          FullStack Developer
        </h1>
      </div>

      {/* Buttons */}
      <div
        className="
          mt-6 sm:mt-8
          flex flex-col sm:flex-row
          gap-4 sm:gap-5
          text-base sm:text-lg font-semibold
        "
      >
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="px-7 py-2 bg-teal-600 text-black rounded-full"
        >
          Projects
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="px-7 py-2 border rounded-full"
        >
          Get In Touch
        </motion.button>
      </div>
    </motion.section>
  );
}

export default HeroSection;
