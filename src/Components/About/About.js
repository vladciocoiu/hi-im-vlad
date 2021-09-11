import React, { useState, useEffect } from "react";
import "./About.css";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function About() {
   const desc = [
      "I'm a student at The Faculty of Mathematics and Computer Science of the University of Bucharest.",
      "My hobbies include programming, travelling, chess, speedcubing and learning about science.",
   ];

   return (
      <div className="about">
         <SectionTitle name="about" left={true} />
         <DisplayText text={desc.join(" ")} />
      </div>
   );
}

function DisplayText({ text }) {
   const h2Ref = React.useRef();
   const [isDiscovered, setIsDiscovered] = useState(false);
   const [currText, setCurrText] = useState("");
   const [isUnderscoreVisible, setIsUnderscoreVisible] = useState(false);

   const handleScroll = () => {
      if (isDiscovered) return;
      setIsDiscovered(isVisible(h2Ref, handleScroll));
   };

   useEffect(() => {
      if (currText !== "") setIsUnderscoreVisible(true);
      if (currText !== text) return;
      setInterval(() => setIsUnderscoreVisible((i) => !i), 500);
   }, [currText, text]);

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   });

   useEffect(() => {
      function handleCurrText() {
         if (!isDiscovered || currText === text) return;

         const nextChar = text[currText.length];
         setTimeout(
            () => setCurrText(currText + nextChar),
            nextChar === " " ? 60 : 50
         );
      }
      handleCurrText();
   }, [currText, isDiscovered, text]);

   return (
      <h2 ref={h2Ref} className={"text"}>
         {currText + (isUnderscoreVisible ? "_" : " ")}
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
