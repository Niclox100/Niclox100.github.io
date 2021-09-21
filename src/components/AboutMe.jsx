import React from "react"
import "../assets/styles/components/AboutMe.css"
import Carousel from "./Carousel"
import htmlImage from "../assets/images/html.png"
import cssImage from "../assets/images/css.svg"
import reactImage from "../assets/images/react.png"
import gitImage from "../assets/images/git.png"
import jestImage from "../assets/images/jest.png"
import nodeImage from "../assets/images/node.png"

const AboutMe = () => {
    return(
        <article className="aboutme-container">
            <div className="aboutme-info">
                <h2 className="aboutme-title white-font">Sobre Mi</h2>
                <div className="aboutme-description white-font">
                <div className="aboutme-description-paragraph">Soy un Desarrollador con conocimientos en tecnologias de Frontend y me especializo en React.</div>
                <div className="aboutme-description-paragraph">Me gusta mucho todo lo relacionado con la tecnologia y con una predisposicion a aprender constantemente en este entorno en el que el cambio es algo constante.</div>
                <div className="aboutme-description-paragraph">Tambien me agrada trabajar en equipo ya que considero que cada uno tiene una especialidad que puede compartir con el resto del equipo, ademas de hacer el ambiente mucho mas divertido y ameno</div>                 </div>
            </div>
            <div className="aboutme-technologies white-font">
                <h2 className="aboutme-title white-font">Tecnologias que manejo</h2>
                <Carousel className="carousel-main-container">
                    <div>
                        <figure className="carousel-image-container">
                            <img className="carousel-image html-image grow" src={htmlImage} alt="HtmlImage" />
                        </figure>
                        <div className="carousel-description-container">   
                            <span className="carousel-description white-font">Html</span>
                        </div>
                    </div>
                    <div>
                        <figure className="carousel-image-container">
                            <img className="carousel-image css-image grow" src={cssImage} alt="cssImage" />
                        </figure>
                        <div className="carousel-description-container">   
                            <span className="carousel-description white-font">Css</span>
                        </div>
                    </div>
                    <div>
                    <figure className="carousel-image-container">
                            <img className="carousel-image react-image grow" src={reactImage} alt="reactImage" />
                        </figure>
                        <div className="carousel-description-container">   
                            <span className="carousel-description white-font">React.js</span>
                        </div>
                    </div>
                    <div>
                        <figure className="carousel-image-container">
                            <img className="carousel-image git-image grow" src={gitImage} alt="gitImage" />
                        </figure>
                        <div className="carousel-description-container">   
                            <span className="carousel-description white-font">Git</span>
                        </div>
                    </div>
                    <div>
                        <figure className="carousel-image-container github-image-container grow">
                        </figure>
                        <div className="carousel-description-container github-description">   
                            <span className="carousel-description white-font">Github</span>
                        </div>
                    </div>
                    <div>
                        <figure className="carousel-image-container jest-container">
                            <img className="carousel-image jest-image grow" src={jestImage} alt="jestImage" />
                        </figure>
                        <div className="carousel-description-container">   
                            <span className="carousel-description white-font">Jest</span>
                        </div>
                    </div>
                    <div>
                        <figure className="carousel-image-container">
                            <img className="carousel-image node-image grow" src={nodeImage} alt="nodeImage" />
                        </figure>
                        <div className="carousel-description-container">   
                            <span className="carousel-description white-font">Node.js</span>
                        </div>
                    </div>
                </Carousel>
            </div>
        </article>
    )
}

export default AboutMe