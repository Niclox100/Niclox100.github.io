import React from "react"
import "../assets/styles/components/Projects.css"
import { Link } from "react-router-dom"
import rickAndMorty from "../assets/images/rickmorty.jpg"
import comingSoon from "../assets/images/proximamente.jpg"
import newYear from "../assets/images/newyear.jpg"
import quizApp from "../assets/images/quizApp.jpg"
import simonSays from "../assets/images/simon.jpg"




const Projects = () => {
    

    const mostrar = (number) => {
        const description = [...document.querySelectorAll(".projects-description")]
        const arrow = [...document.querySelectorAll(".projects-arrow")]
        switch(number)
        {
            case 0 : 
                description[0].classList.toggle("hidden")
                if(arrow[0].innerHTML === "expand_more")
                    {
                        arrow[0].innerHTML ="expand_less"
                    }
                else 
                    {
                    arrow[0].innerHTML ="expand_more"
                    }

            break;

            case 1 : 
                description[1].classList.toggle("hidden")
                if(arrow[1].innerHTML === "expand_more")
                    {
                        arrow[1].innerHTML ="expand_less"
                    }
                else 
                    {
                    arrow[1].innerHTML ="expand_more"
                    }
            break;

            case 2 : 
                    description[2].classList.toggle("hidden")
                    if(arrow[2].innerHTML === "expand_more")
                        {
                            arrow[2].innerHTML ="expand_less"
                        }
                    else 
                        {
                        arrow[2].innerHTML ="expand_more"
                        }
                break;

            case 3 : 
                description[3].classList.toggle("hidden")
                if(arrow[3].innerHTML === "expand_more")
                    {
                        arrow[3].innerHTML ="expand_less"
                    }
                else 
                    {
                    arrow[3].innerHTML ="expand_more"
                    }
            break;

            default:
                console.log(number);
        }
        if(number)
        {
            console.log(number);
        }
   
      
    }
    


    return(
        <>
            <h1 className="projects-title white-font">Algunos Proyectos</h1>
            <div className="projects-container">
                <div className="projects-item">
                    <div className="projects-image">
                        <img src={rickAndMorty} alt="" />
                        <div className="project-seemore">
                            <span className="project-seemore-text">Ver Mas</span>
                            <span className="projects-arrow material-icons" onClick={(id)=>{mostrar(0)}} id="1">expand_more</span>
                        </div>
                        <span className="image-title"></span>
                    </div>
                    <div className="projects-description hidden" id="as">
                       Proyecto de un buscador de personajes de Rick y Morty en el que se obtienen personajes a partir de un llamado a una api. En el podes filtrar entre personajes y agregarlos a una seccion de favoritos
                       <br />
                       <Link to="/portafolio/RickMorty">Ir al Proyecto</Link>
                    </div>
                </div>
                <div className="projects-item">
                    <div className="projects-image">
                        <img src={newYear} alt="" />
                        <div className="project-seemore">
                            <span className="project-seemore-text">Ver Mas</span>
                            <span className="projects-arrow material-icons" onClick={(id)=>{mostrar(1)}} id="1">expand_more</span>
                        </div>
                        <span className="image-title"></span>
                    </div>
                    <div className="projects-description hidden">
                   Proyecto en el cual se puede visualizar los dias restantes hasta fin de año.
                   <br />
                   <Link to="/portafolio/NewYearCounter">Ir al Proyecto</Link>
                    </div>                    
                </div>
                <div className="projects-item">
                <div className="projects-image">
                        <img src={quizApp} alt="" />
                        <div className="project-seemore">
                            <span className="project-seemore-text">Ver Mas</span>
                            <span className="projects-arrow material-icons" onClick={(id)=>{mostrar(2)}} id="1">expand_more</span>
                        </div>
                        <span className="image-title"></span>
                    </div>
                    <div className="projects-description-container">
                        <div className="projects-description hidden">
                        Proyecto de un Juego de Preguntas con puntaje final
                        <br />
                        <Link to="/portafolio/QuizApp">Ir al Proyecto</Link>
                        </div>                    
                    </div>
                </div>
                <div className="projects-item">
                <div className="projects-image">
                        <img src={simonSays} alt="" />
                        <div className="project-seemore">
                            <span className="project-seemore-text simon">Ver Mas</span>
                            <span className="projects-arrow material-icons" onClick={(id)=>{mostrar(3)}} id="1">expand_more</span>
                        </div>
                        <span className="image-title"></span>
                    </div>
                    <div className="projects-description hidden">
                    Proyecto del clasico juego de Simon Dice
                    <br />
                    <Link to="/portafolio/SimonSays">Ir al Proyecto</Link>
                    </div>
                </div>
                
                
                
            </div>     
        </>

    )
}

export default Projects