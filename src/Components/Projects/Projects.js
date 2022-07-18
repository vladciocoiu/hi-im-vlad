import React from "react";
import "./Projects.css";

import SectionTitle from "../SectionTitle/SectionTitle";
import ListProject from "./ListProject/ListProject.jsx";

import SudokuImg from "../../images/projects/sudokuBig.png";
import PathfindingImg from "../../images/projects/pathfindingBig.png";
import ChessEngineImg from "../../images/projects/chessEngine.png";
import WeatherImg from "../../images/projects/weatherBig.png";

export default function Projects() {
   const projectList = [
      {
         img: ChessEngineImg,
         url: "https://github.com/vladciocoiu/chess-engine",
         title: "CiorapBot"
      }, 
      {
         img: SudokuImg,
         url: "https://vladciocoiu.github.io/sudoku-solver/",
         title: "Sudoku Solver"
      }, 
      {
         img: PathfindingImg,
         url: "https://vladciocoiu.github.io/pathfinding-visualizer/",
         title: "Pathfinding Visualizer"
      }, 
      {
         img: WeatherImg,
         url: "https://vladciocoiu.github.io/weather-app/",
         title: "Weather App"
      }, 
   ];

   return (
      <section className="projects">
         <SectionTitle name="projects" left={true} />
         {projectList.map(({img, url, title}, idx) => <ListProject
            img={img}
            url={url}
            title={title}
            number={idx}
            key={idx}
         />)}
      </section>
   );
}
