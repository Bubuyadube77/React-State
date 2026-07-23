import React from "react"

function Pad(props) {

    const [click, setClick] = React.useState(props.on)

    function handleClick () {
        setClick((currentState)=>{
            return(!currentState)
        })
    }

    return (<button style={{backgroundColor: props.color}} className={click ? "on" : null} onClick={handleClick}></button>)
    
}

export default Pad