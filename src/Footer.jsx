import "./style.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaRegEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0b0c2a] text-white py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm md:text-base">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Devang Gupta</h2>
          <p className="mb-2">
            Thank you for visiting my personal portfolio. Let's connect on
            social media!
          </p>
          <p className="text-purple-400">
            🚀 Keep Rising. Connect with me anytime!
          </p>
        </div>

        {/* Center Section - Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                className="hover:text-purple-400 flex items-center gap-2 no-underline"
              >
                ➤ Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-purple-400 flex items-center gap-2 no-underline"
              >
                ➤ About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-purple-400 flex items-center gap-2 no-underline"
              >
                ➤ Skills
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="hover:text-purple-400 flex items-center gap-2 no-underline"
              >
                ➤ Education
              </a>
            </li>
            <li>
              <a
                href="#work"
                className="hover:text-purple-400 flex items-center gap-2 no-underline"
              >
                ➤ Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-purple-400 flex items-center gap-2 no-underline"
              >
                ➤ Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-400" /> +91 74047-9**59
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-400" /> devanggupta1508@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-400" /> Gurugram, Haryana,
              India
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://linkedin.com/in/devang-gupta-908325291"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 text-lg hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Devanggupta1508"
              target="_blank"
              rel="noreferrer"
              className="text-gray-200 text-lg hover:scale-110 transition"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:devanggupta1508gmail.com"
              className="text-red-400 text-lg hover:scale-110 transition"
            >
              <FaRegEnvelope />
            </a>
            <a
              href="#"
              className="text-blue-400 text-lg hover:scale-110 transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-400 mt-8 border-t border-gray-600 pt-4 text-sm">
        Designed with <span className="text-red-400">❤️</span> by{" "}
        <span className="text-yellow-400 font-semibold">Devang Gupta</span>
      </div>
    </footer>
  );
}
