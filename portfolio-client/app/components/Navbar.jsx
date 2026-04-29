"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    "home",
    "about",
    "skills",
    "projects",
    "contact",
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-wide hover:opacity-80 transition"
        >
          {"<WH />"}
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="capitalize text-gray-300 hover:text-white transition relative group"
              >
                {link}

                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
          >
            <ul className="flex flex-col items-center gap-6 py-8 text-sm">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    onClick={() => setOpen(false)}
                    className="capitalize text-gray-300 hover:text-white transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}