import { useState } from "react";
import "./style.css";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react"; // optional, or use your own icons

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "education", label: "Education" },
    { to: "work", label: "Work" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <div className="my_nav_bar p-4 bg-white text-black w-full fixed top-0 left-0 z-50 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h4 className="font-bold text-lg" style={{color:"#00509d"}}>Devang Gupta</h4>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row gap-6 list-none text-sm uppercase tracking-wider cursor-pointer"style={{color:"#0582ca"}}>
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="hover:text-yellow-400 transition"
              onClick={closeMenu}
            >
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active-link"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white mt-4 px-4 pb-4 rounded shadow-md">
          <ul className="flex flex-col gap-4 text-sm uppercase tracking-wider">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="hover:text-yellow-400 transition"
                onClick={closeMenu}
              >
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="active-link"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
