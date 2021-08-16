import React from "react"
import AboutMe from "../components/AboutMe";
import Intro from "../components/Intro";
import "../assets/styles/containers/Home.css"

const Home = () => {
    return(
        <div className="all">
            <Intro/>
            <AboutMe/>
        </div>
    )
}

export default Home