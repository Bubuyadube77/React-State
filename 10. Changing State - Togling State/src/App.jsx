import React from "react"


function App() {

  const [isGoingOut, setIsGoingOut] = React.useState(false)

  function changeMind() {
    setIsGoingOut((prevValule)=>{
      return (!prevValule)
    })
  }

  return (
      <main>
          <h1 className="title">Do I feel like going out tonight?</h1>
          <button 
          onClick={changeMind} 
          className="value"
          aria-label={`Current answer is ${isGoingOut ? "Yes" : "No"}. Click to change it`}>
            {isGoingOut ? "Yes" : "No"}
          </button>
      </main>
  )
}

export default App