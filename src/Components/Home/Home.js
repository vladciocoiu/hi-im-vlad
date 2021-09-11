import React, { useState, useEffect } from "react";
import "./Home.css";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";

export default function Home() {
   const [buttonHovered, setButtonHovered] = useState(null);
   const [currName, setCurrName] = useState("");

   const FULL_NAME = "Vlad Ciocoiu";

   useEffect(() => {
      if (currName !== FULL_NAME) {
         setTimeout(
            () => setCurrName((name) => name + FULL_NAME[name.length]),
            currName.length ? 100 : 400
         );
      }
   }, [currName]);

   let arrowClass = "";
   let buttonClass = "home-button ";
   if (buttonHovered === true) {
      arrowClass = "arrow-over";
      buttonClass += "home-button-hovered";
   } else if (buttonHovered === false) {
      arrowClass = "arrow-out";
      buttonClass += "home-button-rev";
   }

   return (
      <div className="home">
         <h2>
            Hi, I'm{" "}
            <i className="home-name-placeholder">
               <i className="home-name">{currName}</i>
               {FULL_NAME}
            </i>
            .
         </h2>
         <h2>I create software.</h2>
         <button
            className={buttonClass}
            onMouseOver={() => setButtonHovered(true)}
            onMouseOut={() => setButtonHovered(false)}
            onClick={() => scrollToAbout()}
         >
            Find out more{" "}
            <Icon
               path={mdiArrowRight}
               size={1}
               className={"arrow " + arrowClass}
            />
         </button>
      </div>
   );
}

function scrollToAbout() {
   const section = document.querySelector(".about");
   section.scrollIntoView(true);
}
