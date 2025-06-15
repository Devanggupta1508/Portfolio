import React from "react";
import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiRedux,
  SiTailwindcss,
  SiRender,
  SiNetlify,
  SiLeaflet,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 color="#e34c26" size={50} /> },
  { name: "CSS", icon: <FaCss3Alt color="#264de4" size={50} /> },
  { name: "JavaScript", icon: <FaJs color="#f0db4f" size={50} /> },
  { name: "Bootstrap", icon: <FaBootstrap color="#563d7c" size={50} /> },
  { name: "Node.js", icon: <FaNodeJs color="#68a063" size={50} /> },
  { name: "Express", icon: <SiExpress color="black" size={50} /> },
  { name: "MongoDB", icon: <SiMongodb color="#4DB33D" size={50} /> },
  { name: "MySQL", icon: <SiMysql color="#00758f" size={50} /> },
  { name: "GitHub", icon: <FaGithub color="black" size={50} /> },
  { name: "React", icon: <FaReact color="#61DBFB" size={50} /> },
  { name: "Redux", icon: <SiRedux color="#764abc" size={50} /> },
  { name: "Tailwind", icon: <SiTailwindcss color="#38bdf8" size={50} /> },
  { name: "Render", icon: <SiRender color="#00bfff" size={50} /> },
  { name: "Netlify", icon: <SiNetlify color="#38b2ac" size={50} /> },
  { name: "Leaflet", icon: <SiLeaflet color="#199900" size={50} /> },
];

const Skills = () => {

  return (
    <div className="skill_container" id="skills" data-aos="fade-up"  data-aos-mirror="true" data-aos-once = "false">
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2 style={{ fontSize: "5rem", marginBottom: "1rem",  color:"#ff006e", fontWeight:"700"}}> Core <span style={{color:"#3a86ff",fontWeight:"700"}}> Skills</span></h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        {skills.map((skill, index) => (
          <div className="card" key={index}>
            <div className="card__glow"></div>
            <div className="card__shine"></div>
            <div className="card__content">
              <div className="card__image">{skill.icon}</div>
              <div className="card__text">
                <h3 className="card__title">{skill.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Skills;
