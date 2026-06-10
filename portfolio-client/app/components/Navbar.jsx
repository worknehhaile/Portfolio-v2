"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

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
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
      
      {/* Glass Container */}
      <motion.div
        whileHover={{ y: -2 }}
        className="
          relative
          flex
          justify-between
          items-center
          px-6
          py-4
          rounded-2xl

          bg-white/10
          backdrop-blur-2xl

          border
          border-white/20

          shadow-[0_8px_32px_rgba(255,255,255,0.08)]

          before:absolute
          before:inset-0
          before:rounded-2xl
          before:bg-gradient-to-b
          before:from-white/10
          before:to-transparent
          before:pointer-events-none
        "
      >
        {/* Logo */}
        <a
          href="#home"
          className="
            text-xl
            font-bold
            tracking-wide
            text-white
            hover:text-gray-200
            transition
            z-10
          "
        >
          {"<WH />"}
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm z-10">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="
                  capitalize
                  text-gray-300
                  hover:text-white
                  transition-all
                  duration-300
                  relative
                  group
                "
              >
                {link}

                <span
                  className="
                    absolute
                    left-0
                    -bottom-1
                    h-[2px]
                    w-0
                    rounded-full
                    bg-white
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                ></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-white z-10"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="
              md:hidden
              mt-3

              bg-white/10
              backdrop-blur-2xl

              border
              border-white/20

              rounded-2xl

              shadow-[0_8px_32px_rgba(255,255,255,0.08)]
            "
          >
            <ul className="flex flex-col items-center gap-6 py-8 text-base">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    onClick={() => setOpen(false)}
                    className="
                      capitalize
                      text-gray-300
                      hover:text-white
                      transition-all
                      duration-300
                      hover:scale-105
                    "
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