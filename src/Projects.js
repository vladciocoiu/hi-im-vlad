import React from "react";
import "./Projects.css";
import SectionTitle from "./SectionTitle";
import "./SectionTitle.css";

export default function Projects() {
   return (
      <div className="projects">
         <SectionTitle name="projects" left={false} />
         <h2>
            I don't have any interesting projects done yet, but I'm working on
            them.
         </h2>
         <h2>
            You can check out my github repositories to see my smaller projects
            though.
         </h2>
      </div>
   );
}
