import React, { useState, useEffect } from "react";
import "./Home.css";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";

export default function Home() {
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

   return (
      <section className="home">
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
            className="home-button"
            onClick={() => scrollToAbout()}
         >
            Find out more{" "}
            <Icon
               path={mdiArrowRight}
               size={1}
               className="arrow"
            />
         </button>
      </section>
   );
}

function scrollToAbout() {
   const section = document.querySelector(".about");
   section.scrollIntoView(true);
}
