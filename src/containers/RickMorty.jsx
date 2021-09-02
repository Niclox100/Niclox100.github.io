import React from "react"
import Header from "../../src/components/Projects/RickMorty/Header"
import Characters from "../../src/components/Projects/RickMorty/Characters"

const RickMorty = () => {
    return(
        <>
            <div className="rickmorty-background">
                <Header/>
                <Characters/>
            </div>
        </>
    )
}

export default RickMorty