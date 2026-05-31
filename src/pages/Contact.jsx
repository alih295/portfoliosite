import { motion } from "motion/react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const contactCards = [
  {
    label: "Email",
    value: "alihaider295tts@gmail.com",
    icon: <HiOutlineMailOpen className="text-2xl" />,
  },
  {
    label: "Phone",
    value: "+92 307 513 3794",
    icon: <FaPhoneAlt className="text-2xl" />,
  },
  {
    label: "Location",
    value: "Toba Tek Singh, Punjab, Pakistan",
    icon: <IoLocationSharp className="text-2xl" />,
  },
];

function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full min-h-screen scroll-mt-28 py-24"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-0">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Get in touch</p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl section-heading">
            Let's build something exceptional.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I am available for senior roles and high-impact freelance projects. Reach out and let's discuss your vision.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_0.85fr]">
          <motion.div
            whileHover={{ y: -4 }}
            className="glass-card rounded-4xl border border-white/10 p-8 overflow-hidden"
          >
            <h3 className="text-2xl font-semibold text-white">Contact Information</h3>
            <p className="mt-3 text-slate-300 leading-7">
              Prefer a direct line? Use the details below or send a message with the form.
            </p>
            <div className="mt-8 space-y-5">
              {contactCards.map((item) => (
                <div key={item.label} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#0a0f16]/80 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-[0.2em]">
                      {item.label}
                    </p>
                    <p className="mt-2 text-base text-slate-100">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="glass-card rounded-4xl border border-white/10 p-8">
            <h3 className="text-2xl font-semibold text-white">Send a message</h3>
            <form className="mt-8 space-y-6">
              <div>
                <label className="mb-2 block text-sm text-slate-400">Full Name</label>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-white/10 bg-[#0b1119]/90 px-5 py-3 text-slate-100 outline-none transition focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-400">Email Address</label>
                <input
                  type="email"
                  className="w-full rounded-2xl border border-white/10 bg-[#0b1119]/90 px-5 py-3 text-slate-100 outline-none transition focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-400">Subject</label>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-white/10 bg-[#0b1119]/90 px-5 py-3 text-slate-100 outline-none transition focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-400">Message</label>
                <textarea
                  rows="5"
                  className="w-full rounded-2xl border border-white/10 bg-[#0b1119]/90 px-5 py-3 text-slate-100 outline-none transition focus:border-primary"
                />
              </div>
              <button type="submit" className="btn-primary w-full rounded-full px-6 py-3 text-base font-semibold">
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
