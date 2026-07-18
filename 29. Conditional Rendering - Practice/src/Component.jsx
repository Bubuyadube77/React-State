import React from "react"

export function Joke(props) {

    //{isShown? <button onClick={handleSubmit}>Hide Punchline</button>: <button onClick={handleSubmit}>Show Punchline</button>}

    const [isShown, setIsShown] = React.useState(false)

    function handleSubmit() {
        setIsShown((prevStatus)=> {
            return(!prevStatus)
        }
    )}
    
    console.log(isShown)

    return (
        <section>
            <div>
                {props.setup ? <h3>{props.setup}</h3> : null}
                {isShown===true ? <p>{props.punchline}</p> : null}
                {<button onClick={handleSubmit}>{isShown? "Hide" : "Show"} Punchline</button>}
                
                <hr />  
            </div>  
        </section>
    )
}

