import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import Home from "./Home";
import Projects from "./Projects";

ReactDOM.render(
   <>
      <Home />
      <Navbar />
      <About />
      <Projects />
      <Footer />
   </>,
   document.getElementById("root")
);
