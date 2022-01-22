import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
   const [navLinksVisible, setNavLinksVisible] = useState(false);

   useEffect(() => {
      window.addEventListener("scroll", () => {
         setNavLinksVisible(window.pageYOffset > window.innerHeight);
      });
   }, []);

   const items = ["About", "Skills", "Projects"];

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