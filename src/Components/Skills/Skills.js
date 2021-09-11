import React, { useEffect, useState } from "react";
import "./Skills.css";

import SectionTitle from "../SectionTitle/SectionTitle";
import SkillBar from "./SkillBar/SkillBar";

export default function Skills() {
   const [isDiscovered, setIsDiscovered] = useState(false);

   const skillsRef = React.useRef();

   const skills = [
      {
         name: "C++",
         value: 90,
      },
      {
         name: "JavaScript",
         value: 75,
      },
      {
         name: "Python",
         value: 70,
      },
      {
         name: "React.js",
         value: 70,
      },
      {
         name: "Node.js",
         value: 60,
      },
   ];

   const handleScroll = () => {
      if (isDiscovered) return;
      setIsDiscovered(isVisible(skillsRef, handleScroll));
   };

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   });

   const animationClass = isDiscovered ? " skill-bar-animated " : "";

   return (
      <div className="skills">
         <SectionTitle name="Skills" left={false} />
         <div ref={skillsRef} className={"skills-wrapper " + animationClass}>
            <h2 className="languages-heading">Languages</h2>
            <h2 className="frameworks-heading">Frameworks and Technologies</h2>
            {skills.map((skill) => (
               <SkillBar
                  name={skill.name}
                  value={skill.value}
                  key={skill.name}
               />
            ))}
         </div>
      </div>
   );
}

const isVisible = (ref, handleScroll) => {
   if (!ref.current) return false;
   if (ref.current.offsetTop <= window.pageYOffset + window.innerHeight / 2) {
      window.removeEventListener("scroll", handleScroll);
      return true;
   }
   return false;
};
