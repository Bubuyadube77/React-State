import React from "react"

function App() {

  function signup(formData) {
    const email = formData.get("email")
    const password = formData.get("password")
    const description = formData.get("description")
    const employmentStatus = formData.get("employmentStatus")
    
    console.log(`Email: ${email}`)
    console.log(`Password: ${password}`)
    console.log(`Description: ${description}`)
    console.log(`Employment Status: ${employmentStatus}`)

  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signup}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" defaultValue="joe@schmoe.com" placeholder="joe@schmoe.com" />
        
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" defaultValue="123@agsgshh" />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" defaultValue="This is a description"></textarea>

        <fieldset>
          <legend>Employment Status</legend>
          <label>
            <input type="radio" name="employmentStatus" value="Unemployed" />
            Unemployed
          </label>
          <label>
            <input type="radio" name="employmentStatus" value="Part-Time" />
            Part-Time
          </label>

          <label>
            <input type="radio" name="employmentStatus" defaultChecked={true} value="Full-Time" />
            Full-Time
          </label> 
        </fieldset>
              

        <button>Submit</button>
      </form>
    </section>
  )
}

export default App