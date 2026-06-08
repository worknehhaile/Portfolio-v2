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
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-sm text-gray-300">
            Available for Opportunities
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
        >
         
        Hi, I'm <br />
          <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Workneh
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-gray-400 mt-8 max-w-3xl mx-auto leading-relaxed"
        >
          Full-Stack Developer and Information Systems Officer passionate about
          building scalable web applications, enterprise solutions, and secure
          digital experiences using modern technologies.
        </motion.p>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-3 mt-8"
        >
          {[
            "React",
            "Next.js",
            "Node.js",
            "MongoDB",
            "MySQL",
            "JavaScript",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-full text-gray-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={scrollToProjects}
            className="px-8 py-4 bg-white text-black rounded-xl hover:scale-105 hover:bg-gray-200 transition duration-300 shadow-lg"
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
            className="px-8 py-4 border border-gray-700 rounded-xl hover:border-white hover:bg-white hover:text-black transition duration-300"
          >
            Download CV
          </a>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto"
        >
          <div>
            <h3 className="text-3xl font-bold">10+</h3>
            <p className="text-gray-500 text-sm mt-1">Projects Built</p>
          </div>

          <div>
            {/* <h3 className="text-3xl font-bold">3.89</h3> */}
            {/* <p className="text-gray-500 text-sm mt-1">GPA</p> */}
          </div>

          <div>
            <h3 className="text-3xl font-bold">1+</h3>
            <p className="text-gray-500 text-sm mt-1">Years Experience</p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16 flex justify-center"
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