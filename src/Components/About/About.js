import React, { useState, useEffect } from "react";
import "./About.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import chessIcon from "../../images/icons/chess.png"
import codeIcon from "../../images/icons/code.png"
import dumbbellIcon from "../../images/icons/dumbbell.png"
import footballIcon from "../../images/icons/football.png"
import joystickIcon from "../../images/icons/joystick.png"
import mathsIcon from "../../images/icons/maths.png"
import rubikIcon from "../../images/icons/rubik.png"
import travelIcon from "../../images/icons/travel.png"


export default function About() {
   const text = [
      `
      I started programming in 7th grade, by learning about basic structures, such as conditions, variables and loops, and started to make simple visual apps in a JavaScript library, called p5.js. Later, I started watching Python tutorials on the internet and made some interesting, text-based games. You can still find one of them on my Github account, but it is definitely older than it says, so please don’t judge my skills based on that :)
      
      At around the same time, I started studying programming in high school, which turned into a passion for Competitive Programming, and a huge desire to win a medal at the National Olympiad in Informatics, which I am proud to say that I have actually achieved.
      
      One of my favorite programming branches is Web Development, which I started to get into during the pandemic. I learned front-end development with React and created some really cool apps. Now I am also learning back-end development with Node.js and Express, and I hope I will be able to create some more complex and interesting full-stack projects, while also learning new technologies.`,
      `
      One of my biggest passions, besides programming, is chess. In fact, my project that I am currently most proud of is a Chess Engine app, written in C++, that you can find more about in the following project section.

      I learned chess from my dad when I was around age 5. He taught me how the pieces move and how to think critically about a chess position, but I only developed a passion for the game during the pandemic, when I discovered the chess websites Chess.com and Lichess, and the various chess streamers on Twitch. I quickly became addicted to the game and to the feeling of satisfaction I get whenever I’m improving, or when I make a good move after a long think.
      
      I started improving at the game very quickly (mostly since I was playing non-stop, due to not being able to leave the house) and became a top 5% player on both websites. I also won a medal in a local chess competition, although I didn’t play very well. Right now I am improving slowly, but enjoying the process, and I hope to, maybe, join a chess club, and participate in official over the board tournaments in the future.`, 
      `
      My most unusual hobby definitely has to be speedcubing, which involves solving a Rubik’s Cube as fast as possible. My unofficial PB is somewhere around 14 seconds, but I’ve never participated in a speedcubing competition, though I am planning to, and I hope I will be able to do well and have lots of fun :)

      This is one of my oldest hobbies, since I started speedcubing when I received my first cube, at my 13th birthday. Since then, I’ve been practicing it on and off, but it is still one of the most interesting activities that I do.`, 
      `
      Some other hobbies/passions of mine include playing various video-games, watching E-Sports tournaments (mostly Rocket League), watching football matches, going to the gym, travelling.`
   ];
   const icons = [
      [codeIcon],
      [chessIcon],
      [rubikIcon],
      [dumbbellIcon, footballIcon, joystickIcon, mathsIcon, travelIcon]
   ];
   const [activeSlideIdx, setActiveSlideIdx] = useState(0);

   return (
      <section className="about">
         <SectionTitle name="about" left={true} />
         <div className="slide-div">
            <article className="about-text" style={{ left: (-100 * activeSlideIdx) + "vw" }}>
               {text.map((el, idx) => <p key={idx} className="about-p">{el}</p>)}   
            </article>
            <div className="about-icons" style={{ left: (-100 * activeSlideIdx) + "vw" }}>
               {
                  icons.map((vec, idx) => {
                     return (<div  key={idx} className="icons-slide">
                        {vec.map((icon, idx) => <img key={idx} src={icon}></img>)}
                     </div>);
                  })
               }
            </div>
            <div className="about-slide-dots">
               {text.map((el, idx) => {
                  return (
                     <div
                     key={idx}
                     className={"dot " + (idx === activeSlideIdx ? "active-dot" : "")}
                     onClick={() => setActiveSlideIdx(idx)}
                     ></div>
                  );
               })}
            </div>
         </div>
      </section>
   );
}
