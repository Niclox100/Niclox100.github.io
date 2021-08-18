import React from "react"
import AboutMe from "../components/AboutMe";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import "../assets/styles/containers/Home.css"

const Home = () => {
    return(
        <div className="all">
            <Intro/>
            <AboutMe/>
            <Projects/>
        </div>
    )
}

export default Home