import React from "react"
import { Link } from "react-router-dom";

const Questionnarie = () => {

    const quizData = [
        {
            question: "¿Que significa HTML?",
            a : "Hypertext Markup Language",
            b : "Cascading Style Sheet",
            c : "Jason Object Notation",
            d : "Helicopter Testing Master Language",
            correct : "a"
        },
        {
            question: "¿Cual de los siguientes no es un Framework de Javascript?",
            a : "React",
            b : "Angular",
            c : "Bootstrap",
            d : "Vue",
            correct : "c"
        },
        {
            question: "¿En que año fue lanzado React?",
            a : "2015",
            b : "2012",
            c : "2013",
            d : "2014",
            correct : "c"
        },
        {
            question: "¿Quien es el fundador de SpaceX?",
            a : "Jeff Bezos",
            b : "Bill Gates",
            c : "Mark Zuckerberg",
            d : "Elon Musk",
            correct : "d"
        },
        {
            question: "¿Cual de los siguientes es un Software de control de versiones?",
            a : "Stack Overflow",
            b : "Git",
            c : "Java",
            d : "Jest",
            correct : "b"
        }
    ]
    
    
    
    let currentQuiz = 0;
    let answer = undefined
    let score = 0
    

    setTimeout(loadQuiz, 0)
    function loadQuiz() {

        const questionEl = document.getElementById("question")
        const a_text = document.getElementById("a_text")
        const b_text = document.getElementById("b_text")
        const c_text = document.getElementById("c_text")
        const d_text = document.getElementById("d_text")
        const btn_submit = document.getElementById("submit")
        
        btn_submit.addEventListener("click", nextQuestion)

        const currentQuizData = quizData[currentQuiz]


            questionEl.innerHTML = currentQuizData.question
            a_text.innerHTML = currentQuizData.a
            b_text.innerHTML = currentQuizData.b
            c_text.innerHTML = currentQuizData.c
            d_text.innerHTML = currentQuizData.d
            
            
        
    }

    const nextQuestion = () =>
    {   

        getSelected()
        
        if(answer)
        {
            if(answer === quizData[currentQuiz].correct)
            {
                score++
            }
            currentQuiz++
            if(currentQuiz < quizData.length)
            {
                

                let answerEls = document.querySelectorAll(".answer")
                answerEls.forEach((answerEl) => {
                    answerEl.checked = false
                })

                answer = undefined


                loadQuiz()

            }
            else
            {
                const quiz = document.getElementById("quiz")
                quiz.innerHTML = `<h2 class="quiz-finish-score">Contestaste Correctamente ${score}/${quizData.length} preguntas</h2> <button onClick="location.reload()" class="quiz-button">Jugar de Nuevo</button>`
            }
        }
        else {

            alert("Tenes que elegir una opcion para continuar");
        }


    }

    function getSelected()
    {
        let answerEls = document.querySelectorAll(".answer")
        answerEls.forEach((answerEl) => {
           if(answerEl.checked)
           {
               answer = answerEl.id
           }
           
           
           return answer
        })

        
    }




    return(
        <>
        <Link to="/portafolio" className="header-back">Volver a la Pagina Principal</Link>
            <div className="quiz-container" id="quiz">
                <div className="quiz-main">
                    <h2 id="question">Question text</h2>
                    <ul className="quiz-questions">
                        <li>
                            <input type="radio" name="answer" className="answer" id="a"/>
                            <label htmlFor="a" id="a_text">Question</label>
                        </li>
                        <li>
                            <input type="radio" name="answer" className="answer" id="b"/>
                            <label htmlFor="b" id="b_text">Question</label>
                        </li>
                        <li>
                            <input type="radio" name="answer" className="answer" id="c"/>
                            <label htmlFor="c" id="c_text">Question</label>
                        </li>
                        <li>
                            <input type="radio" name="answer" className="answer" id="d"/>
                            <label htmlFor="d" id="d_text">Question</label>
                        </li>
                    </ul>
                </div>
                <button type="submit" className="quiz-button" id="submit">Siguiente</button>
            </div>
        </>
    )
}

export default Questionnarie