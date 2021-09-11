import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

ReactDOM.render(
   <>
      <Home />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Footer />
   </>,
   document.getElementById("root")
);
