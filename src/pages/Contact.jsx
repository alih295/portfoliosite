import { motion } from "motion/react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";


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
      className="w-full min-h-screen bg-[#061113]/80 backdrop-blur-2xl rounded-[2rem] border border-white/10 p-8 shadow-xl shadow-black/20 transition-all duration-300 hover:shadow-[0_0_40px_rgba(78,237,163,0.25)] hover:scale-[1.01]"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-12">
        <motion.div
          whileHover={{ y: -4 }}
          className="flex flex-col justify-between gap-8"
        >
          <div>
            <h3 className="text-5xl font-semibold leading-[0.95] text-white">
              <span className="block">Let's Build</span>
              <span className="block">Something</span>
              <span className="block text-[#4edea3]">Exceptional.</span>
            </h3>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              I'm currently available for senior roles and high-impact freelance projects. Reach out and let's discuss your vision.
            </p>
          </div>

          <div className="grid gap-5">
            <div className="flex items-center gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-sm shadow-black/20">
              <div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-[#0f191b] text-2xl text-[#4edea3]">
                <MdOutlineMail />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Email</p>
                <p className="mt-2 text-lg font-semibold text-white">hahservices295@gmail.com</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <button className="flex h-14 w-full items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-slate-200 transition hover:border-[#4edea3]/30 hover:bg-[#0f191b]">
                <HiOutlineMailOpen className="text-xl" />
              </button>
              <button className="flex h-14 w-full items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-slate-200 transition hover:border-[#4edea3]/30 hover:bg-[#0f191b]">
                <FaPhoneAlt className="text-xl" />
              </button>
              <button className="flex h-14 w-full items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-slate-200 transition hover:border-[#4edea3]/30 hover:bg-[#0f191b]">
                <IoLocationSharp className="text-xl" />
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div whileHover={{ y: -4 }} className="rounded-[2rem] border border-white/10 bg-[#071014]/90 p-8 shadow-xl shadow-black/20">
          <h3 className="text-2xl font-semibold text-white">Send a message</h3>
          <form className="mt-8 space-y-6">
            <div>
              <label className="mb-3 block text-sm font-medium text-slate-300">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-2xl border border-white/10 bg-[#0c141c]/90 px-5 py-4 text-slate-100 outline-none transition focus:border-[#4edea3] focus:ring-2 focus:ring-[#4edea3]/20"
              />
            </div>
            <div>
              <label className="mb-3 block text-sm font-medium text-slate-300">Work Email</label>
              <input
                type="email"
                placeholder="john@company.com"
                className="w-full rounded-2xl border border-white/10 bg-[#0c141c]/90 px-5 py-4 text-slate-100 outline-none transition focus:border-[#4edea3] focus:ring-2 focus:ring-[#4edea3]/20"
              />
            </div>
            <div>
              <label className="mb-3 block text-sm font-medium text-slate-300">Message</label>
              <textarea
                rows="6"
                placeholder="Tell me about your project..."
                className="w-full rounded-2xl border border-white/10 bg-[#0c141c]/90 px-5 py-4 text-slate-100 outline-none transition focus:border-[#4edea3] focus:ring-2 focus:ring-[#4edea3]/20"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-[#a8c8ff] px-6 py-4 text-base font-semibold text-slate-900 transition hover:bg-[#93b8ff]"
            >
              Send Inquiry
            </button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contact;
