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
