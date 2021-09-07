import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";

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
