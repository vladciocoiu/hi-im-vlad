import React from "react";
import "./Projects.css";

import SectionTitle from "../SectionTitle/SectionTitle";
import ListProject from "./ListProject/ListProject.jsx";

import SudokuImg from "../../images/projects/sudokuBig.png";
import PathfindingImg from "../../images/projects/pathfindingBig.png";
import chessEngineImg from "../../images/projects/chessEngine.png";

export default function Projects() {
   return (
      <div className="projects">
         <SectionTitle name="projects" left={false} />
         <ListProject
            img={chessEngineImg}
            url="https://github.com/vladciocoiu/chess-engine"
            title="Chess Engine"
            number="0"
         />
         <ListProject
            img={SudokuImg}
            url="https://vladciocoiu.github.io/sudoku-solver/"
            title="Sudoku Solver"
            number="1"
         />
         <ListProject
            img={PathfindingImg}
            url="https://vladciocoiu.github.io/pathfinding-visualizer/"
            title="Pathfinding Visualizer"
            number="2"
         />
      </div>
   );
}
