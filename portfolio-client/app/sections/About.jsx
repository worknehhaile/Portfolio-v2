"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen px-6 py-24 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">About Me</h2>

          <p className="text-gray-400 leading-relaxed">
            I am a passionate Information Technology graduate with a strong
            foundation in full-stack web development, networking, and system
            security. I enjoy building scalable applications and solving real-world
            problems using modern technologies.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            Currently, I am working as a Junior Information Systems Officer,
            where I contribute to banking systems and digital solutions.
            I am also deeply interested in cybersecurity and continuously
            improving my skills to tackle modern digital threats.
          </p>

          {/* Skills Tags */}
          <motion.div
            className="mt-6 flex gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {["React", "Node.js", "MongoDB", "DevOps"].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-white hover:text-black transition duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500"
        >
          <h3 className="text-2xl font-semibold mb-6">Highlights</h3>

          <ul className="space-y-4 text-gray-300">
            {[
              "🎓 BSc in IT (GPA: 3.89)",
              "💼 Working at Commercial Bank of Ethiopia",
              "💻 Fullstack Developer (React/Nodejs)",
              "🔐 Interested in DevOps",
              "🚀 Built Equb Management System (Thesis)",
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}