import "./style.css";

export default function Achievements() {
  const achievements = [
    {
      title: "Full-Stack MERN Certification",
      description:
        "Completed full-stack web development course from Apna College, covering both frontend and backend technologies using the MERN stack (MongoDB, Express.js, React, Node.js).",
    },
    {
      title: "DIPLOMA OF WEB DEVELOPMENT",
      description:
"Completed a comprehensive Web Development Diploma from STP Computer Education, covering HTML, CSS, JavaScript, Node.js, Express.js, and SQL."    },
    {
      title: "HACKATHON PARTICIPATION",
      description:
"Participated in a national-level Hackathon organized by CodTech IT Solutions, showcasing web development and problem-solving skills.",    },
    {
      title: "API Integration Project",
      description:
        "Built a travel platform with location-based hotel & farmhouse listings using API.",
    },
    {
      title: "Git & GitHub Mastery",
      description:
        "Mastered Git/GitHub workflows including branching, pull requests, and version control.",
    },
  ];

  const repeated = [...achievements, ...achievements]; // for smooth loop

  return (
      <div className="overflow-x-hidden w-full bg-gray-100 py-10 px-4 outer-wrapper">

      <h1 className="text-center  underline font-black italic pb-6 text-3xl sm:text-5xl" style={{color:"#ff6700"}} >
        Achievements
      </h1>

      <div className="relative w-full">
<div className="flex animate-marquee gap-4 sm:gap-6 w-max marquee-track">
          {repeated.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-4 flex-shrink-0 w-[80vw] sm:w-[300px] md:w-[350px] hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-lg font-semibold text-zinc-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-600 text-justify">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
