"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto text-center">
        
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-gray-300 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Available for Opportunities
        </motion.div>

        {/* Welcome Text */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-400 uppercase tracking-[4px] text-sm mb-4"
        >
          Welcome To My Portfolio
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Building Modern
          <br />
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Digital Experiences
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed"
        >
          Full Stack Developer passionate about building scalable web
          applications, backend systems, and secure digital experiences.
          I enjoy transforming ideas into reliable, user-friendly solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={scrollToProjects}
            className="px-8 py-4 border border-white rounded-xl hover:bg-white hover:text-black transition duration-300"
          >
            View Projects
          </button>

          <a
            href="/workneh-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-white rounded-xl hover:bg-white hover:text-black transition duration-300"
          >
            View CV
          </a>

          <a
            href="/workneh-cv.pdf"
            download
            className="px-8 py-4 border border-white rounded-xl hover:bg-white hover:text-black transition duration-300"
          >
            Download CV
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-20 flex justify-center"
        >
          <div className="w-6 h-10 border border-gray-500 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="w-2 h-2 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}