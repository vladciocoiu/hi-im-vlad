import React, { useState, useEffect } from "react";
import "./About.css";
import SectionTitle from "./SectionTitle";
import "./SectionTitle.css";

export default function About() {
   const desc = [
      "I'm Vlad Ciocoiu, I'm 17 and I'm a beginner software developer. " +
         "I like programming in Python and C++, but I mainly use Javascript.",
      "I'm really into Math and Computer Science " +
         "(especially algorithms and data structures).",
      "Currently I'm learning front-end web development, using React.js. " +
         "I really like animations, interactive elements (as you can see) " +
         "and I always try to create responsive designs for my websites.",
   ];
   const imgUrl = "./images/about/me.JPG";

   return (
      <div className="about">
         <SectionTitle name="about" left={true} />
         <DisplayImg url={imgUrl} index={0} />
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
      if (left) animationClass = " animated-slide-in-left";
      else animationClass = " animated-slide-in-right";
   }

   return (
      <h2 ref={h2Ref} className={"text-" + index + animationClass}>
         {text}
      </h2>
   );
}

function DisplayImg({ url, index }) {
   const imgRef = React.useRef();
   const [isDiscovered, setIsDiscovered] = useState(false);
   const handleScroll = () => {
      setIsDiscovered(isVisible(imgRef, handleScroll));
   };

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   });

   let animationClass = "";
   if (isDiscovered) animationClass = " photo-animated";

   return (
      <img
         ref={imgRef}
         className={"image-" + index + animationClass}
         src={url}
         alt=""
      />
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
