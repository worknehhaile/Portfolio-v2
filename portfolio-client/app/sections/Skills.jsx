"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const skillData = {
  Frontend: ["React", "Next.js", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  Backend: ["Node.js", "Express", "PHP", "Laravel", "REST API"],
  Databases: ["MySQL", "MongoDB", "PostgreSQL"],
  Tools: ["Git", "GitHub", "Docker", "Postman", "Figma"],
  
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section id="skills" className="px-6 py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Tech Stack
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Tools and technologies I use to build digital experiences.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12 p-1 bg-white/5 rounded-full w-fit mx-auto border border-white/10">
          {Object.keys(skillData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-blue-600 rounded-full"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>

        {/* Grid Container */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
            >
              {skillData[activeTab].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold tracking-wide">{skill}</h3>
                    <div className="w-2 h-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Industry standard tech
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}