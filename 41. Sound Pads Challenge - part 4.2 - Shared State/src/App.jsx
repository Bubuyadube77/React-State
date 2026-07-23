import React from "react"
import padsData from "./pads.js"
import Pad from "./Components/Pad.jsx"

function App() {

    const [pads, setPads] = React.useState(padsData)

    function toggle() {
        console.log("Clicked")
    }

    const buttonElements = pads.map((pad)=>{
        return (<Pad toggle={toggle} key={pad.id} color={pad.color} on={pad.on} />)
    })

    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}

export default App