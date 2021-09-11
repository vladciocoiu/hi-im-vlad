import React from "react";
import "./SkillBar.css";

export default function SkillBar({ name, value }) {
   return (
      <div className={"skill-bar " + name}>
         <p className="skill-name">{name}</p>
         <div className="bar">
            <div className={"progress-line " + name}>
               <div className={"info " + name}>{value + "%"}</div>
            </div>
         </div>
      </div>
   );
}
