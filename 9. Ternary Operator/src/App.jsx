function App() {
 
  const isGoingOut = true
  
  let answer = isGoingOut === true ? "Yes" : "No"
  
  /* 
  Replaced by itenerary operator

  if(isGoingOut === true) {
      answer = "Yes"
  } else {
      answer = "No"
  }
  */
  
  return (
      <main>
          <h1 className="title">Do I feel like going out tonight?</h1>
          <button className="value">{answer}</button>
      </main>
  )
}

export default App