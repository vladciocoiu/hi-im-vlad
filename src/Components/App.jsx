import React from "react";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import About from "./About/About";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";

export default function App() {
    return (
        <div className="app">
            <Home />
            <Navbar />
            <About />
            <Projects />
            <Footer />
        </div>
    );
}