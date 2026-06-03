import { motion } from "motion/react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";

function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bento-card rounded-2xl md:rounded-[40px] p-6 md:p-12 overflow-hidden relative"
      >
        {/* Gradient Blur Background */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[100px] rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative z-10">
          
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">
              Let's Build Something<br/>
              <span className="text-secondary">Exceptional.</span>
            </h2>
            
            <p className="text-on-surface-variant text-body-lg mb-12">
              I'm currently available for senior roles and high-impact freelance projects. Reach out and let's discuss your vision.
            </p>

            {/* Email Contact */}
            <div className="space-y-6">
              <a href="mailto:alihaider295tts@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bento-card flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <div>
                  <div className="text-label-md text-xs text-on-surface-variant">EMAIL</div>
                  <div className="text-body-md font-bold">alihaider295tts@gmail.com</div>
                </div>
              </a>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://github.com/alih295"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bento-card flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
                >
                  <BsGithub size={20} />
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://www.linkedin.com/in/hafiz-ali-haider-asghar-987992368/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bento-card flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
                >
                  <FaLinkedinIn size={20} />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="w-12 h-12 rounded-xl bento-card flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <label className="text-label-md text-on-surface-variant">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-surface-container-low border-b border-outline-variant focus:border-primary focus:ring-0 transition-all text-on-surface py-3 px-0 placeholder:text-outline-variant"
              />
            </div>

            <div className="space-y-2">
              <label className="text-label-md text-on-surface-variant">Work Email</label>
              <input
                type="email"
                placeholder="john@company.com"
                className="w-full bg-surface-container-low border-b border-outline-variant focus:border-primary focus:ring-0 transition-all text-on-surface py-3 px-0 placeholder:text-outline-variant"
              />
            </div>

            <div className="space-y-2">
              <label className="text-label-md text-on-surface-variant">Message</label>
              <textarea
                placeholder="Tell me about your project..."
                rows="4"
                className="w-full bg-surface-container-low border-b border-outline-variant focus:border-primary focus:ring-0 transition-all text-on-surface py-3 px-0 placeholder:text-outline-variant resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-on-primary py-4 rounded-xl font-headline-md text-lg hover:shadow-[0_0_20px_rgba(173,198,255,0.4)] transition-all active:scale-95"
            >
              Send Inquiry
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
