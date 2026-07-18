import React from "react"

function App() {

  function signup(formData) {
    const email = formData.get("email")
    const password = formData.get("password")
    console.log(`Email: ${email}`)
    console.log(`Password: ${password}`)
    
  }



  return (
    <section>
      <h1>Signup form</h1>
      <form action={signup}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" defaultValue="joe@schmoe.com" placeholder="joe@schmoe.com" />
        <br />
        
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" defaultValue="123@agsgshh" />

        <br />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description"></textarea>

        <br />

        <button>Submit</button>
      </form>
    </section>
  )
}

export default App