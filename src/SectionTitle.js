import React, { useState, useEffect } from "react";
import "./SectionTitle.css";

export default function SectionTitle({ left, name }) {
   const titleRef = React.useRef();
   const [isDiscovered, setIsDiscovered] = useState(false);
   const handleScroll = () => {
      setIsDiscovered(isVisible(titleRef, handleScroll));
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
      <div ref={titleRef} className={"title-wrapper"}>
         <h1 className={"section-title" + animationClass}>
            {name.toUpperCase()}
         </h1>
         <div className={"underscore" + animationClass}></div>
      </div>
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
