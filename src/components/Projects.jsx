import React from "react"
import "../assets/styles/components/Projects.css"
import { Link } from "react-router-dom"

const Projects = () => {
    return(
        <>
            <h1 className="projects-title white-font">Proyectos</h1>
            <div className="projects-container">
                <Link to="/Portafolio/RickMorty" className="white-font">UwU</Link>
            </div>     
        </>

    )
}

export default Projects