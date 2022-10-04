import React, { useState, useEffect } from "react";
import "./About.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import chessIcon from "../../images/icons/chess.png"
import codeIcon from "../../images/icons/code.png"
import rubikIcon from "../../images/icons/rubik.png"
import travelIcon from "../../images/icons/travel.png"


export default function About() {
   const text = [
      `
      I have been practicing programming consistently since 7th grade, so this is by far my biggest passion.

      Some of my favorite programming branches include:
          - Competitive Programming, where I managed to win some great awards
          - Web Development, on both the front and back-end
          - AI and Machine Learning, although I'm just getting started with them`,
      `
      One of my biggest passions, besides programming, is chess. In fact, the project I'm currently most proud of is a Chess Engine app, that you can find out more about in the following "Projects" section.

      I started learning chess seriously during the pandemic, improving quickly, due to not being able te leave the house. Nowadays I'm at around the 98th percentile on both Chess.com and Lichess, and I'm planning on joining a chess club and competing in over the board tournaments in the future. `, 
      `
      My most unusual hobby definitely has to be speedcubing, which involves solving a Rubik’s Cube as fast as possible. My unofficial PB is somewhere around 14 seconds, but I’ve never participated in a speedcubing competition, though I am planning to, and I hope I will be able to do well and have lots of fun :)

      This is one of my oldest hobbies, since I started speedcubing when I received my first cube, at my 13th birthday. Since then, I’ve been practicing it on and off, but it is still one of the most interesting activities that I do.`, 
      `
      Some other hobbies/passions of mine include playing various video-games, watching E-Sports tournaments (mostly Rocket League), watching football matches, going to the gym, travelling.`
   ];
   const icons = [
      codeIcon,
      chessIcon,
      rubikIcon,
      travelIcon
   ];
   const [activeSlideIdx, setActiveSlideIdx] = useState(0);

   return (
      <section className="about" id="about">
         <SectionTitle name="about" left={true} />

         <div className="slide-div">
            <article className="about-text">
               <p className="about-p">{text[activeSlideIdx]}</p>
            </article>
         </div>
         <div className="about-slide-nav">
              {text.map((el, idx) => <a href="#about" key={idx}><img className={idx === activeSlideIdx ? "active" : ""} onClick={() => setActiveSlideIdx(idx)} src={icons[idx]}></img></a>)}
         </div>
      </section>
   );
}
