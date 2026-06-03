import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

function Project() {
  const { projects } = useAppContext();
  
  // First project is featured, rest are smaller
  const featured = projects[0];
  const smaller = projects.slice(1, 3);

  return (
    <section id="work" className="py-16 md:py-24 px-4 md:px-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-end mb-12"
      >
        <div>
          <span className="text-secondary font-label-md text-label-md tracking-widest uppercase mb-2 block">Portfolio</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Selected Works</h2>
        </div>
        <motion.div
          whileHover={{ x: 4 }}
          className="hidden md:block"
        >
          <Link to={'/project'} className="text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors flex items-center gap-2">
            All Projects <span className="text-lg">→</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-none md:grid-rows-2 gap-3 md:gap-6">
        
        {/* Featured Project - Large */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-8 md:row-span-2 bento-card rounded-3xl p-4 md:p-8 flex flex-col group h-full"
          >
            <div className="overflow-hidden rounded-2xl aspect-video mb-6">
              <img
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={featured.image}
              />
            </div>
            
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-headline-md text-headline-md text-on-surface">{featured.title}</h3>
              <div className="flex gap-3">
                {featured.code && (
                  <a href={featured.code} target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-primary cursor-pointer transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                    </svg>
                  </a>
                )}
                {featured.demo && (
                  <a href={featured.demo} target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-primary cursor-pointer transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm0 2c1.657 0 3 1.343 3 3v14c0 1.657-1.343 3-3 3h-14c-1.657 0-3-1.343-3-3v-14c0-1.657 1.343-3 3-3h14z"></path>
                    </svg>
                  </a>
                )}
              </div>
            </div>
            
            <p className="text-on-surface-variant text-body-md mb-6 grow">{featured.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {featured.tags?.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 bg-surface-container rounded text-label-md text-xs text-secondary border border-secondary/20">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Smaller Cards */}
        {smaller.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.1 }}
            className="md:col-span-4 bento-card rounded-3xl p-4 md:p-6 group"
          >
            <div className="overflow-hidden rounded-xl aspect-4/3 mb-4">
              <img
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={project.image}
              />
            </div>
            
            <h3 className="font-headline-md text-headline-md mb-2 text-on-surface text-xl">{project.title}</h3>
            <p className="text-on-surface-variant text-body-md text-sm line-clamp-2">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Project;
