import React from "react"

function Pad(props) {

    const [click, setClick] = React.useState(props.on)


    return (<button style={{backgroundColor: props.color}} className={click ? "on" : null} onClick={props.toggle}></button>)
    
}

export default Pad