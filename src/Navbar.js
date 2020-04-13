import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
   const items = ["About", "Projects"];
   const [sidebarActive, setSidebarActive] = useState(null);

   const updateSidebar = () => {
      setSidebarActive(!sidebarActive);
   };

   ///doing this to prevent the element from animating when the page is loaded
   let overlayClass = "";
   if (sidebarActive) overlayClass = "black-active";
   else if (sidebarActive === false) overlayClass = "black-rev";
   let navLinksClass = "";
   if (sidebarActive) navLinksClass = "nav-active";
   else if (sidebarActive === false) navLinksClass = "nav-rev";

   return (
      <>
         <div className={"black-overlay " + overlayClass}></div>
         <nav>
            <div className="logo">
               <h1>Vlad Ciocoiu</h1>
            </div>
            <ul className={"nav-links " + navLinksClass}>
               {items.map((item, index) => (
                  <ListItem key={item} value={item} />
               ))}
            </ul>
            <BurgerMenu active={sidebarActive} update={updateSidebar} />
         </nav>
      </>
   );
}

function ListItem({ value }) {
   const [hovered, setHovered] = useState(null);

   const handleHover = () => {
      setHovered(!hovered);
   };

   // maybe it's considered bad practice to access the DOM directly but I find it
   // easier to do this than to use context
   const handleClick = () => {
      const section = document.querySelector("." + value.toLowerCase());
      section.scrollIntoView(true);
   };

   let thisClass = "";
   if (hovered === true) thisClass = "nav-link-hover";
   else if (hovered === false) thisClass = "nav-link-rev";

   return (
      <button
         className={thisClass}
         onMouseOver={handleHover}
         onMouseOut={handleHover}
         onClick={handleClick}
      >
         {value}
      </button>
   );
}

function BurgerMenu({ active, update }) {
   let buttonLocked = false;
   const [visible, setVisible] = useState(false);

   useEffect(() => {
      window.addEventListener("scroll", () => {
         if (
            window.pageYOffset > window.innerHeight &&
            window.innerWidth < 990
         ) {
            setVisible(true);
         } else {
            setVisible(false);
            if (active) update();
         }
      });
   });

   const handleClick = () => {
      if (buttonLocked) return;

      ///lock the button to prevent spamming
      buttonLocked = true;
      setTimeout(() => (buttonLocked = false), 500);
      update();
   };

   let lineClass = "";
   if (active) lineClass = "animate";
   else if (active === false) lineClass = "animate-rev";
   const burgerClass = visible ? "visible" : "hidden";

   return (
      <div className={"burger-menu " + burgerClass} onClick={handleClick}>
         <span className={"line-1 " + lineClass}></span>
         <span className={"line-2 " + lineClass}></span>
         <span className={"line-3 " + lineClass}></span>
      </div>
   );
}
