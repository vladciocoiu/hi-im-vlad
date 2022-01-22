import React, { useState, useEffect, useRef } from "react";
import "./ListProject.css";

const isVisible = (ref, handleScroll) => {
   if (!ref.current) return false;
   if (
      ref.current.offsetTop <=
      window.pageYOffset + (window.innerHeight * 4) / 5
   ) {
      window.removeEventListener("scroll", handleScroll);
      return true;
   }
   return false;
};

export default function ListProject(props) {
   const { img, url, title, number } = props;

   const ref = useRef();
   const [isDiscovered, setIsDiscovered] = useState(false);

   const handleScroll = () => {
      setIsDiscovered(isVisible(ref, handleScroll));
   };

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   });

   let animationClass = isDiscovered ? " animated-slide-up " : "";

   return (
      <article className={" project  project-" + number + animationClass} ref={ref}>
         <img src={img} alt=""></img>
         <div className="overlay">
            <h1 className="project-title">{title}</h1>
            <a href={url} target="_blank" rel="noopener noreferrer">
               Check it out
            </a>
         </div>
      </article>
   );
}
