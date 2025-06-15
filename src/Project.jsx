import styles from './Project.module.css';

const projectData = [
  {
    title: "Bharat Darshan",
    description: "A dynamic location-based platform that helps users explore Indian monuments and contribute new places.",
    img: "Bharat Darshan.png",
    github: "https://github.com/Devanggupta1508/Bharat_Darshan",
    view: "https://lnkd.in/d_NJaH5z",
  },
  {
    title: "My Weather App 🌦️",
    description: "It fetches real-time weather data using the OpenWeatherMap API and in a clean UI built with React & Material UI.",
    img: "Weather.png",
    github: "https://github.com/Devanggupta1508/Weather_App",
    view: "https://lnkd.in/dhCZQg9N",
  },
  {
    title: "Fun Joke Generator App",
    description: "While learning React, I built a fun Joke Generator App using the useEffect hook and integrated it with an external API.",
    img: "Joker.png",
    github: "https://github.com/Devanggupta1508/React-Joker-API",
    view: "https://react-joker-api.vercel.app/",
  },
  {
    title: "Lottery Game",
    description: "A fun and simple React.js-based Lottery Game where users win if the sum of randomly generated numbers equals 15.",
    img: "Lottery.png",
    github: "https://github.com/Devanggupta1508/Lottery-Game-React.js-Project",
    view: "https://lottery-game-react-js-project.vercel.app/",
  },
  {
    title: "React Todo List",
    description: "A simple Todo List app built with React and Vite to practice components, props, useState, and event handling. Deployed on Vercel with a clean, responsive UI.",
    img: "Todo.png",
    github: "https://github.com/Devanggupta1508/React-Todo-List",
    view: "https://react-todo-list-g5fy.vercel.app/",
  },

   {
    title: "Spotify-UI-Clone",
    description: "A sleek and responsive Spotify Clone built using HTML & CSS. This project replicates the core UI elements of Spotify, including a navigation bar, search functionality, sidebar menus, artist cards, and a footer section..",
    img: "Spotify.png",
    github: "https://github.com/Devanggupta1508/Spotify-UI-Clone",
    view: "https://devanggupta1508.github.io/Spotify-UI-Clone/",
  },
];

export default function Project() {
  return (
    <div id="work">
      <h2 className={styles["section-heading" ]}>  <span style={{color:"#8f2d56", fontWeight:"700"}}>💡 Skill-Building</span> <span style={{color:"#d81159",fontWeight:"700"}}>Projects</span></h2>


    <div className={styles["project-container"]} data-aos="fade-down" >
      {projectData.map((project, index) => (
        <div className={styles.card} key={index}>
          <img
            src={project.img}
            alt={project.title}
            className={styles["card-img"]}
          />
          <div className={styles["card-details"]}>
            <p className={styles["text-title"]}>{project.title}</p>
            <p className={styles["text-body"]}>{project.description}</p>
          </div>
          <div className={styles["btn-group"]}>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <button className={styles["card-button"]}>Code</button>
            </a>
            <a href={project.view} target="_blank" rel="noopener noreferrer">
              <button className={styles["card-button"]}>View</button>
            </a>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
