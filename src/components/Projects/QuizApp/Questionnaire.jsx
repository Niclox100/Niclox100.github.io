import React from "react"

const Questionnarie = () => {

    const quizData = [
        {
            question: "Cuanto es 2 + 2",
            a : 4,
            b : 3,
            c : 2,
            d : 5,
            correct : "a"
        },
        {
            question: "Cuanto es 3 + 3",
            a : 3,
            b : 4,
            c : 6,
            d : 2,
            correct : "c"
        },
        {
            question: "Cuanto es 4 * 4",
            a : 14,
            b : 13,
            c : 16,
            d : 19,
            correct : "c"
        },
        {
            question: "Cuanto es 5 / 5",
            a : 0,
            b : 3,
            c : 4,
            d : 1,
            correct : "d"
        },
        {
            question: "Cuanto es 5 + 3",
            a : 4,
            b : 5,
            c : 8,
            d : 7,
            correct : "c"
        }
    ]

    return(
        <>
            <div className="quiz-container">
                <h2>Question text</h2>
                <ul>
                    <li>
                        <input type="radio" name="" id="a" name="answer" />
                        <label htmlFor="a">Question</label>
                    </li>
                    <li>
                        <input type="radio" name="" id="b" name="answer" />
                        <label htmlFor="a">Question</label>
                    </li>
                    <li>
                        <input type="radio" name="" id="c" name="answer" />
                        <label htmlFor="a">Question</label>
                    </li>
                    <li>
                        <input type="radio" name="" id="d" name="answer" />
                        <label htmlFor="a">Question</label>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Questionnarie