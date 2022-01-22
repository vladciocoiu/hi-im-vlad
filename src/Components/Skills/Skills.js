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
         value: 75,
      },
      {
         name: "JavaScript",
         value: 60,
      },
      {
         name: "Python",
         value: 55,
      },
      {
         name: "React.js",
         value: 55,
      },
      {
         name: "Node.js",
         value: 30,
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
      <section className="skills">
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
      </section>
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
