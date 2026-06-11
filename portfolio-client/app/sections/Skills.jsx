"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const skillData = {
  Frontend: [
    "React",
    "Next.js",
    "JavaScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
  ],

  Backend: [
    "Node.js",
    "Express.js",
    "PHP",
    "Laravel",
    "REST API",
  ],

  Databases: [
    "MongoDB",
    "MySQL",
    "PostgreSQL",
  ],

  Tools: [
    "Git",
    "GitHub",
    "Docker",
    "Postman",
    "Figma",
  ],
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section
      id="skills"
      className="px-4 md:px-6 py-16 md:py-20 bg-black text-white"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>

          <p className="text-gray-400 max-w-lg mx-auto">
            Technologies, tools, and databases I use to build modern web
            applications and digital experiences.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex overflow-x-auto gap-2 mb-12 p-1 bg-white/5 rounded-full border border-white/10 max-w-full mx-auto no-scrollbar">
          {Object.keys(skillData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-blue-600 rounded-full"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}

              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {skillData[activeTab].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    group
                    relative
                    p-4
                    md:p-6
                    rounded-2xl
                    bg-white/5
                    border
                    border-white/10
                    hover:border-blue-500/50
                    transition-all
                    duration-300
                    backdrop-blur-sm
                  "
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm md:text-lg font-semibold tracking-wide">
                      {skill}
                    </h3>

                    <div className="w-2 h-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <p className="hidden md:block text-xs text-gray-500 mt-2">
                    Industry standard technology
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