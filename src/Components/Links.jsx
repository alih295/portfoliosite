import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function Links() {
  return (
    <div className="fixed bottom-5 left-1/2 z-40 flex -translate-x-1/2 items-center justify-center gap-4 rounded-full border border-white/10 bg-[#0a1018]/80 px-5 py-3 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
      <a
        href="https://www.facebook.com/alihaider.asgharali.96"
        target="_blank"
        rel="noreferrer"
        className="text-xl text-slate-100 transition hover:text-white"
      >
        <FaFacebook />
      </a>
      <a
        href="https://github.com/alih295"
        target="_blank"
        rel="noreferrer"
        className="text-xl text-slate-100 transition hover:text-white"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/hafiz-ali-haider-asghar-987992368/"
        target="_blank"
        rel="noreferrer"
        className="text-xl text-slate-100 transition hover:text-white"
      >
        <FaLinkedin />
      </a>
    </div>
  );
}

export default Links;