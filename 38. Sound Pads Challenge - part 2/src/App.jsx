import React from "react"
import padsData from "./pads.js"
import Pad from "./Components/Pad.jsx"

function App() {

    const [pads, setPads] = React.useState(padsData)

    const buttonElements = pads.map((pad)=>{
        return (<Pad key={pad.id} color={pad.color}/>)
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