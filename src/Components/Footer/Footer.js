import React from "react";
import "./Footer.css";

import LinkedInLogo from "../../images/logos/LinkedIn.png";
import GithubLogo from "../../images/logos/Github.png";

export default function Footer() {
   const socialMedia = [
      {
         name: "LinkedIn",
         url: "https://www.linkedin.com/in/vlad-ciocoiu/",
         img: LinkedInLogo
      }, 
      {
         name: "Github",
         url: "https://github.com/Ciorap88",
         img: GithubLogo
      }
   ];

   return (
      <footer>
         <ul className="social-media">
            {socialMedia.map(({name, url, img}, index) => (
               <li key={index}>
                  <a
                     href={url}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <img
                        className="social-media-icon"
                        src={img}
                        alt={name}
                     />
                  </a>
               </li>
            ))}
         </ul>
         <h2 className="email">Email: vlad.014916@gmail.com </h2>
         <h2 className="copyright">© 2022 Vlad Ciocoiu</h2>
      </footer>
   );
}
