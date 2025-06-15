import React from "react";
import "./Education.css";
import "./style.css";

import { FaGraduationCap } from "react-icons/fa";

import Dav from '../DAV.png';
import Clg from '../Clg_Logo.png';

export default function Education() {
  return (


<section
  id="education"
  className="bg-white py-12 text-center"
 
>
      <div className="max-w-4xl mx-auto px-4">
        {/* Icon */}
        <FaGraduationCap className="text-purple-600 text-5xl mx-auto mb-2" />

        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-10">
          My <span className="text-purple-600">Education</span>
        </h2>
      </div>

      {/* Education Cards */}
      <div className="cards">
        {/* BCA */}
        <div className="card red"data-aos="fade-down">
          <img src={Clg} alt="college logo" className="logo" />
          <div className="card-text">
            <p className="tip font-bold">Bachelor of Computer Application (BCA)</p>
            <p className="second-text">Suraj PG Degree College, Gurugram University</p>
            <p className="text-lg font-bold text-green-900 mt-1">
              2022 – 2025 | Completed
            </p>
          </div>
        </div>

        {/* 12th */}
        <div className="card blue"data-aos="fade-down">
          <img src={Dav} alt=" 12 School  logo" className="logo" />
          <div className="card-text">
            <p className="tip font-bold">Senior Secondary (Class 12th) – CBSE Board</p>
            <p className="second-text">DAV Public School, Haily Mandi</p>
            <p className="text-lg font-bold text-green-900 mt-1">
              2021 – 2022 | Completed
            </p>
          </div>
        </div>

        {/* 10th */}
        <div className="card green" data-aos="fade-down">
          <img src={Dav} alt=" 10 School  logo" className="logo" />
          <div className="card-text">
            <p className="tip font-bold">Secondary (Class 10th) – CBSE Board</p>
            <p className="second-text">DAV Public School, Haily Mandi</p>
            <p className="text-lg font-bold text-green-900 mt-1">
              2020 – 2021 | Completed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
