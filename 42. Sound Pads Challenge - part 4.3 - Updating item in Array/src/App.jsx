import React from "react"
import padsData from "./pads.js"
import Pad from "./Components/Pad.jsx"

function App() {

    const [pads, setPads] = React.useState(padsData)


    function toggle(id) {
        console.log(id)
        setPads((currentState) => {
            return currentState.map((pad) => {
                if (pad.id === id) {
                    return { ...pad, on: !pad.on }
                } else {
                    return pad
                }
            })
        })
    }


    const buttonElements = pads.map((pad)=>{
        return (<Pad toggle={toggle} id={pad.id} key={pad.id} color={pad.color} on={pad.on} />)
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