import React from "react";
import "./Footer.css";

import LinkedInLogo from "../../images/logos/LinkedIn.png";
import GithubLogo from "../../images/logos/Github.png";

export default function Footer() {
   const items = ["LinkedIn", "Github"];
   const urls = [
      "https://www.linkedin.com/in/vlad-ciocoiu/",
      "https://github.com/Ciorap88",
   ];
   const srcs = [LinkedInLogo, GithubLogo];

   return (
      <footer>
         <ul className="social-media">
            {items.map((item, index) => (
               <li key={item}>
                  <a
                     href={urls[index]}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <img
                        className="social-media-icon"
                        src={srcs[index]}
                        alt={item}
                     />
                  </a>
               </li>
            ))}
         </ul>
         <h2 className="email">Email: vlad.014916@gmail.com </h2>
         <h2 className="copyright">© 2021 Vlad Ciocoiu</h2>
      </footer>
   );
}
