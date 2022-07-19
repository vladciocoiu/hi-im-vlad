import React from "react";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import About from "./About/About";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

export default function App() {
    return (
        <div className="app">
            <Home />
            <Navbar />
            <About />
            <Skills />
            <Projects />
            <Footer />
        </div>
    );
}