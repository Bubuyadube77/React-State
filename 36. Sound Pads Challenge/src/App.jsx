import React from "react"
import padsData from "./pads.js"

function App() {

    const [pads, setPads] = React.useState(padsData)

    const buttonElements = pads.map((pad)=>{
        return (<button key={pad.id}></button>)
    })

    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from pads.js
     * 2. Map over that state array and display each one
     *    as a <button> (CSS is already written for you)
     *    (Don't worry about using the "on" or "color" 
     *    properties yet)
     */
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}

export default App