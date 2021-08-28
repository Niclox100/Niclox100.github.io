import React from "react"
import "../../../assets/styles/components/projects/NewYearCountdown/Counter.css"

const newYearCounter = () => {

    const newYears = "1 Jan 2022"

    function countdown() {
        const newYearsDate = new Date(newYears)
        const currentDate = new Date()

        const totalSeconds = (newYearsDate - currentDate) / 1000

        const days = Math.floor(totalSeconds / 3600 / 24)
        const hours = Math.floor((totalSeconds / 3600) % 24)
        const mins = Math.floor((totalSeconds / 60) % 60)
        const seconds = Math.floor(totalSeconds % 60)


        console.log(days, hours, mins, seconds)

        const daysEl = document.getElementById("days")
        const hoursEl = document.getElementById("hours")
        const minsEl = document.getElementById("mins")
        const secondsEl = document.getElementById("seconds")
        
        daysEl.innerHTML = days
        hoursEl.innerHTML = formatTime(hours)
        minsEl.innerHTML = formatTime(mins)
        secondsEl.innerHTML = formatTime(seconds)

        function formatTime(time) {
            return time < 10 ? `0${time}` : time;
        }
    }
    
    setTimeout(countdown, 0)
    setInterval(countdown, 1000)

    return(
        <>
            <h1 className="countdown-title">New Years Eve</h1>
            <div className="countdown-container">
                <div className="counter-container">
                    <p className="counter-number" id="days">0</p>
                    <span className="counter-text">days</span>
                </div>
                <div className="counter-container">
                    <p className="counter-number" id="hours">0</p>
                    <span className="counter-text">hours</span>
                </div>
                <div className="counter-container">
                    <p className="counter-number" id="mins">0</p>
                    <span className="counter-text">mins</span>
                </div>
                <div className="counter-container">
                    <p className="counter-number" id="seconds">0</p>
                    <span className="counter-text">seconds</span>
                </div>
            </div>
        </>
    )
}

export default newYearCounter