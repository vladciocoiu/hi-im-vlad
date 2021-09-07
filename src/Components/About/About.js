import React, { useState, useEffect } from "react";
import "./About.css";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function About() {
   const desc = [
      "My name is Vlad Ciocoiu and I'm a student at The Faculty of Mathematics and Computer Science of the University of Bucharest. ",
      "My hobbies include programming, travelling, chess, speedcubing and learning about science. ",
   ];

   return (
      <div className="about">
         <SectionTitle name="about" left={true} />
         {desc.map((string, index) => (
            <DisplayText
               text={string}
               index={index}
               left={!(index % 2)}
               key={index}
            />
         ))}
      </div>
   );
}

function DisplayText({ text, index, left }) {
   const h2Ref = React.useRef();
   const [isDiscovered, setIsDiscovered] = useState(false);
   const handleScroll = () => {
      setIsDiscovered(isVisible(h2Ref, handleScroll));
   };

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   });

   let animationClass = "";
   if (isDiscovered) {
      if (left) animationClass = " animated-slide-in-left ";
      else animationClass = " animated-slide-in-right ";
   }

   return (
      <h2 ref={h2Ref} className={"text-" + index + animationClass}>
         {text}
      </h2>
   );
}

const isVisible = (ref, handleScroll) => {
   if (!ref.current) return false;
   if (
      ref.current.offsetTop <=
      window.pageYOffset + (window.innerHeight * 2) / 3
   ) {
      window.removeEventListener("scroll", handleScroll);
      return true;
   }
   return false;
};
