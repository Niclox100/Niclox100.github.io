import React from "react"
import "../assets/styles/components/AboutMe.css"
import Carousel from "./Carousel"
import kanade from "../assets/images/kanade.jfif"

const AboutMe = () => {
    return(
        <article className="aboutme-container">
            <div className="aboutme-info">
                <h2 className="aboutme-title">Sobre Mi</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, accusantium exercitationem necessitatibus amet magni nobis minus possimus sequi. Asperiores placeat ex magnam temporibus minus maxime? Quidem porro doloribus explicabo nulla!
            </div>
            <div className="aboutme-technologies">
                <h2 className="aboutme-title">Tecnologias que manejo</h2>
                <Carousel>
                    <div>
                        <figure className="carousel-image-container">
                            <img className="carousel-image" src={kanade} alt="" />
                        </figure>
                        <div className="carousel-description-container">   
                            <span className="carousel-description">Html</span>
                        </div>
                    </div>
                    <div>
                        <figure className="carousel-image-container">
                            <img className="carousel-image" src={kanade} alt="" />
                        </figure>
                        <div className="carousel-description-container">   
                            <span className="carousel-description">Css</span>
                        </div>
                    </div>
                    <div>
                    <figure className="carousel-image-container">
                            <img className="carousel-image" src={kanade} alt="" />
                        </figure>
                        <div className="carousel-description-container">   
                            <span className="carousel-description">React</span>
                        </div>
                    </div>
                    <div>
                        <figure className="carousel-image-container">
                            <img className="carousel-image" src={kanade} alt="" />
                        </figure>
                        <div className="carousel-description-container">   
                            <span className="carousel-description">Git</span>
                        </div>
                    </div>
                    <div>
                        <figure className="carousel-image-container">
                            <img className="carousel-image" src={kanade} alt="" />
                        </figure>
                        <div className="carousel-description-container">   
                            <span className="carousel-description">Github</span>
                        </div>
                    </div>
                    <div>
                        <figure className="carousel-image-container">
                            <img className="carousel-image" src={kanade} alt="" />
                        </figure>
                        <div className="carousel-description-container">   
                            <span className="carousel-description">Jest</span>
                        </div>
                    </div>

                </Carousel>
            </div>
        </article>
    )
}

export default AboutMe