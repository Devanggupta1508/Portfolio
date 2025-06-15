import React from "react";
import "./style.css";
import "./About.css";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import devang_About_Img from '../devAbout.png';


const About = () => {
  return (
    <section id="about">
      <h2>
        About <span style={{ color: "purple" }}>Me</span>
      </h2>

      <div className="circleImage" data-aos="fade-zoom-in" data-aos-mirror="true" data-aos-once="false">
        <img src={devang_About_Img} alt="Devang" className="devAbout" />
      </div>

      <div data-aos="fade-down" data-aos-anchor-placement="top-bottom">
        <p className="about-text">
          I’m Devang Gupta, a passionate full-stack web developer skilled in the MERN stack. <br />
          I specialize in creating responsive and user-friendly web applications with modern UI/UX. <br />
          Currently enhancing my backend and database knowledge to build robust, scalable digital solutions.
        </p>

        <div className="info">
          <p><MdPhone size={24} color="#0ea5e9" /> +91 74047**9</p>
          <p><MdEmail size={24} color="#6b21a8" /> devanggupta1508@gmail.com</p>
          <p><MdLocationOn size={24} color="#ef4444" /> Pataudi, Gurugram, India – 122504</p>
        </div>
      </div>

      <a
        href="https://drive.google.com/file/d/1E0aaFNp7jrdB0knLgMyqM_lCGv2lYAiB/view?usp=sharing"
        className="button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
        <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </section>
  );
};

export default About;
