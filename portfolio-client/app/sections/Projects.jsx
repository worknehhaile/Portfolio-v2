"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
const projects = [
{
  title: "Equb Management System",
  description:
    "A system that digitizes traditional Ethiopian savings groups with transparent tracking and payments.",
  tech: ["Next.js", "Node.js", "Express.js", "MongoDB"],
  github: "https://github.com/worknehhaile/EQUB-Updated",
  screenshots: [
    "/dashboard.png",
    "/rounds.png",
    "/login.png",
    "/payment.png",
  ],
},
  {
    title: "Smart Student ID Verification",
    description:
      "QR-based identity verification system designed to improve student security and reduce manual campus verification processes.",
    tech: ["JavaScript", "QR Code"],
    github: "https://github.com/worknehhaile/Smart-Student-ID-Verification",
    // demo: "https://smart-student-id-verification.vercel.app",
  },
  {
    title: "Personal Portfolio",
    description:
      "A responsive portfolio built with Next.js showcasing projects and skills.",
    tech: ["Next.js", "Tailwind CSS"],
    github: "https://github.com/worknehhaile/Portfolio-v2",
    demo: "https://workneh-portfolio.vercel.app/",
  },
];

export default function Projects() {
  const [selectedImages, setSelectedImages] = useState(null);
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
             <div className="flex gap-3 mt-auto">
              {/* GitHub Button */}
             {/* GitHub Button - Added conditional check */}

             {project.screenshots && (
              <button
                onClick={() => setSelectedImages(project.screenshots)}
                className="flex-1 flex items-center justify-center gap-2 bg-white text-black px-5 py-3 rounded-xl hover:bg-gray-200 transition duration-300"
              >
                Screenshots
              </button>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 border border-gray-700 px-5 py-3 rounded-xl hover:bg-white hover:text-black transition duration-300"
              >
                <FaGithub />
                GitHub
              </a>
            )}

              {/* Live Demo Button */}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-white text-black px-5 py-3 rounded-xl hover:bg-gray-200 transition duration-300"
                >
                  <FaExternalLinkAlt />
                  Demo
                </a>
              )}
            </div>
            </motion.div>
          ))}
        </div>

      </div>
        {/* Image Modal */}
        {selectedImages && (
  <div
    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
    onClick={() => setSelectedImages(null)}
  >
    <div
      className="bg-gray-900 rounded-3xl max-w-6xl w-full p-6 max-h-[90vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold">
          Equb Management System Screenshots
        </h3>

        <button
          onClick={() => setSelectedImages(null)}
          className="text-2xl"
        >
          ✕
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {selectedImages.map((image, index) => (
          <img
          key={index}
          src={image}
          alt={`Screenshot ${index + 1}`}
          className="w-full h-auto rounded-xl border border-gray-700 object-contain"
        />
        ))}
      </div>
    </div>
  </div>
)}
    </motion.section>
  );
}