import React from "react";
import "./Footer.css";

export default function Footer() {
   const items = ["Facebook", "Youtube", "Instagram", "Github"];
   const urls = [
      "https://www.facebook.com/vled3/",
      "https://www.youtube.com/channel/UCc8cF-V791gNRlrpiRvZyuQ?view_as=subscriber",
      "https://www.instagram.com/vladd.88/",
      "https://github.com/Ciorap88",
   ];

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
                        src={"./images/logos/" + item + ".png"}
                        alt={item}
                     />
                  </a>
               </li>
            ))}
         </ul>
         <h2 className="email">Email: vlad.014916@gmail.com </h2>
         <h2 className="copyright">© 2020 Vlad Ciocoiu</h2>
      </footer>
   );
}
