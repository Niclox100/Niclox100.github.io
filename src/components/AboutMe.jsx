import React from "react"
import "../assets/styles/components/AboutMe.css"
import Carousel from "./Carousel"
import kanade from "../assets/images/kanade.jfif"

const AboutMe = () => {
    return(
        <article className="aboutme-container">
            <div className="aboutme-info">
                <h2 className="aboutme-title white-font">Sobre Mi</h2>
                <div className="white-font">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quae iure, perspiciatis ex voluptatem harum saepe. Adipisci voluptates amet modi non nostrum, culpa fuga iusto quam incidunt tempore odit aliquid!</div>
            </div>
            <div className="aboutme-technologies white-font">
                <h2 className="aboutme-title white-font">Tecnologias que manejo</h2>
                <Carousel>
                    <div>
                        <figure className="carousel-image-container">
                            <img className="carousel-image" src={kanade} alt="" />
                        </figure>
                        <div className="carousel-description-container">   
                            <span className="carousel-description white-font">Html</span>
                        </div>
                    </div>
                    <div>
                        <figure className="carousel-image-container">
                            <img className="carousel-image" src={kanade} alt="" />
                        </figure>
                        <div className="carousel-description-container">   
                            <span className="carousel-description white-font">Css</span>
                        </div>
                    </div>
                    <div>
                    <figure className="carousel-image-container">
                            <img className="carousel-image" src={kanade} alt="" />
                        </figure>
                        <div className="carousel-description-container">   
                            <span className="carousel-description white-font">React</span>
                        </div>
                    </div>
                    <div>
                        <figure className="carousel-image-container">
                            <img className="carousel-image" src={kanade} alt="" />
                        </figure>
                        <div className="carousel-description-container">   
                            <span className="carousel-description white-font">Git</span>
                        </div>
                    </div>
                    <div>
                        <figure className="carousel-image-container">
                            <img className="carousel-image" src={kanade} alt="" />
                        </figure>
                        <div className="carousel-description-container">   
                            <span className="carousel-description white-font">Github</span>
                        </div>
                    </div>
                    <div>
                        <figure className="carousel-image-container">
                            <img className="carousel-image" src={kanade} alt="" />
                        </figure>
                        <div className="carousel-description-container">   
                            <span className="carousel-description white-font">Jest</span>
                        </div>
                    </div>

                </Carousel>
            </div>
        </article>
    )
}

export default AboutMe