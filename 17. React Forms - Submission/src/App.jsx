import React from "react"

function App() {

  function handleSubmit(event) {
    event.preventDefault()
    const formEl = event.currentTarget
    const formData = new FormData(formEl)
    const email = formData.get("email")
    console.log(email)
    formEl.reset()
  }



  return (
    <section>
      <h1>Signup form</h1>
      <form method="POST" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
        <br />
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />
        <button>Submit</button>
      </form>
    </section>
  )
}

export default App