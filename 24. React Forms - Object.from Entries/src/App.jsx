import React from "react"

function App() {

  function signup(formData) {
    const data = Object.fromEntries(formData)
    const detaryRestrictions = formData.getAll("detaryRestrictions")
    
    const allData = {
      ...data,
      detaryRestrictions
    }

    console.log(allData)

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

        <fieldset>
          <legend>Dietary Restrictions</legend>
          <label>
            <input type="checkbox" name="detaryRestrictions" value="kosher" />
            Kosher
          </label>
          <label>
            <input type="checkbox" name="detaryRestrictions" value="halal" />
            Halal
          </label>

          <label>
            <input type="checkbox" name="detaryRestrictions" defaultChecked={true} value="vegan" />
            Vegan
          </label> 
        </fieldset>

        <label htmlFor="favColor">What is your Favorite color</label>
        <select id="favColor" name="favColor" defaultValue="">
        <option value="" disabled>-- Choose a color --</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="green">Green</option>
          <option value="black">Black</option>
          <option value="white">White</option>
        </select>    

        <button>Submit</button>
      </form>
    </section>
  )
}

export default App