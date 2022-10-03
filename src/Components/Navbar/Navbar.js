import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
   const [navLinksVisible, setNavLinksVisible] = useState(false);

   // set nav links visible only when we can't see the home screen anymore
   useEffect(() => {
      window.addEventListener("scroll", () => {
         setNavLinksVisible(window.pageYOffset > window.innerHeight);
      });
   }, []);

   // hide half of navbar on scroll down
   useEffect(() => {
      let prevScrollPos = window.pageYOffset;
      window.addEventListener("scroll", () => {
         if(window.innerWidth > 1024) return;

         let currScrollPos = window.pageYOffset;
         if (prevScrollPos > currScrollPos) {
            document.querySelector("nav").style.top = "0";
         } else {
            const navHeight = document.querySelector("nav").getBoundingClientRect().height;
            document.querySelector("nav").style.top =`-${navHeight / 2}px`;
         }
         prevScrollPos = currScrollPos;
      });
   }, []);

   const items = ["About", "Projects"];

   const handleClick = (item) => {
      const section = document.querySelector("." + item.toLowerCase());
      section.scrollIntoView(true);
   };


   return (
         <nav>
            <div className="logo">
               <h1>Vlad Ciocoiu</h1>
            </div>
            <ul className={"nav-links " + 
            (navLinksVisible ? "" : "nav-links-hidden")}>
               {items.map((item, index) => (
                  <button
                     className="nav-link"
                     onClick={() => handleClick(item)}
                     key={index}
                  >
                     {item}
                  </button>
               ))}
            </ul>
         </nav>
   );
}