import React from "react";
import "./Projects.css";

import SectionTitle from "../SectionTitle/SectionTitle";
import ListProject from "./ListProject/ListProject.jsx";

import SudokuImg from "../../images/projects/sudokuBig.png";
import PathfindingImg from "../../images/projects/pathfindingBig.png";
import ChessEngineImg from "../../images/projects/chessEngine.png";
import WeatherImg from "../../images/projects/weatherBig.png";

export default function Projects() {
   return (
      <div className="projects">
         <SectionTitle name="projects" left={true} />
         <ListProject
            img={ChessEngineImg}
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
                  <ListProject
            img={WeatherImg}
            url="https://vladciocoiu.github.io/weather-app/"
            title="Weather App"
            number="3"
         />
      </div>
   );
}
