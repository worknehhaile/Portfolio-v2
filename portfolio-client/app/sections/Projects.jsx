"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Equb Management System",
    description:
      "A system that digitizes traditional Ethiopian savings groups with transparent tracking, contribution monitoring, and automated management.",
    tech: ["Python", "MySQL"],
    link: "#",
  },
  {
    title: "Smart Student ID Verification",
    description:
      "QR-based identity verification system designed to improve student security and reduce manual campus verification processes.",
    tech: ["JavaScript", "QR Code"],
    link: "#",
  },
  {
    title: "Personal Portfolio",
    description:
      "Modern responsive portfolio showcasing projects, technical skills, backend integration, and professional contact features.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="min-h-screen px-6 py-24 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">Projects</h2>
          <p className="text-gray-400 mt-4">
            Some of the projects I’ve built and worked on.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-900/70 backdrop-blur-md p-8 rounded-3xl border border-gray-800 hover:border-gray-600 transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Project Number */}
                <span className="text-sm text-gray-500">
                  0{index + 1}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-semibold mt-3 mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300 hover:bg-white hover:text-black transition duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Button */}
              <a
                href={project.link}
                className="inline-block mt-auto border border-gray-700 px-5 py-3 rounded-xl hover:bg-white hover:text-black transition duration-300 text-center"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}