import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top */}
        <div className="grid md:grid-cols-3 gap-10 items-center">

          {/* Branding */}
          <div>
            <h2 className="text-white text-2xl font-bold mb-3">
              {"<WH />"}
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Software Developer passionate about building scalable
              applications, backend systems, and secure digital solutions.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <a href="#home" className="hover:text-white transition">
                Home
              </a>

              <a href="#about" className="hover:text-white transition">
                About
              </a>

              <a href="#skills" className="hover:text-white transition">
                Skills
              </a>

              <a href="#projects" className="hover:text-white transition">
                Projects
              </a>

              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </div>
          </div>

          {/* Socials */}
          <div className="flex justify-center md:justify-end gap-5 text-lg">
            <a
              href="https://github.com/worknehhaile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover:scale-110 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/worknehhaile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:worknehhaile123@gmail.com"
              className="text-gray-400 hover:text-white hover:scale-110 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Workneh Haile. All rights reserved.
          </p>

          {/* Back To Top */}
          <a
            href="#home"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
          >
            Back to top <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}