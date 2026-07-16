import React from "react"

function App() {
    
    const [count, setCount] = React.useState(0)

    function increaseCount() {
      console.log("Add")
      setCount(function(prevCount) {
        return prevCount + 1
      })
    }

    function decreaseCount() {
      console.log("Subtract")
      setCount(function(prevCount) {
        return prevCount - 1
      })
    }

    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button className="minus" aria-label="Decrease count" onClick={decreaseCount}>–</button>
                <h2 className="count">{count}</h2>
                <button className="plus" aria-label="Increase count" onClick={increaseCount}>+</button>
            </div>
        </main>
    )
}

export default App