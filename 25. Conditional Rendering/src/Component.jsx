import React from "react"

export function Joke(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */

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
                {props.setup && <h3>{props.setup}</h3>}
                {isShown===true && <p>{props.punchline}</p>}
                <button onClick={handleSubmit}>Show Punchline</button>
                <hr />  
            </div>  
        </section>
    )
}

