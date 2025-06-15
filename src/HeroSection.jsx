import "./HeroSection.css";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div
      id="home"
      className="hero-container"
      data-aos="fade-in"
      data-aos-duration="1000"
    >
      <div className="hero-content">

        {/* Left Text Section */}
        <div className="text-section">
          <h1
            style={{ color: "#0582ca", fontWeight: "700" }}
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1000"
          >
            Hello, I'm Devang 👋
          </h1>

          <h2
            className="loader-text"
            style={{ color: "#003554", fontWeight: "700" }}
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            Full Stack Web Developer
          </h2>

          {/* Show icons here only on laptop */}
          <div className="social-icons desktop-only">
            <a
              href="https://github.com/Devanggupta1508"
              className="Btn"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <FaGithub size={24} id="github" />
            </a>
            <a
              href="https://linkedin.com/in/devang-gupta-908325291"
              className="Btn"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://wa.me/740479**59"
              className="Btn"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="image-section mobile_img" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
          <img
            src="./devang_img.png"
            alt="Devang"
            className="hero-img"
          />

          {/* Show icons here only on mobile */}
          <div className="social-icons mobile-only">
            <a href="https://github.com/Devanggupta1508" className="Btn" target="_blank" rel="noopener noreferrer" data-aos="zoom-in" data-aos-delay="200">
              <FaGithub size={24} id="github" />
            </a>
            <a href="https://linkedin.com/in/devang-gupta-908325291" className="Btn" target="_blank" rel="noopener noreferrer" data-aos="zoom-in" data-aos-delay="300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://wa.me/7404795459" className="Btn" target="_blank" rel="noopener noreferrer" data-aos="zoom-in" data-aos-delay="400">
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
