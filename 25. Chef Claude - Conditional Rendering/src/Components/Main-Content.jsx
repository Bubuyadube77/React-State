import React from "react"

export default function MainContent() {

    const [ingredients, setIngredients] = React.useState([])

    const ingredientsItemsList = ingredients.map((ingredient)=> {
        return (
            <li key={ingredient}>{ingredient}</li>
        )
    })

    function submitIngredient(formData) {
        const newIngredient = formData.get("ingredient")

        setIngredients((prevIngredient)=> {
            return ([...prevIngredient, newIngredient])
        })
        
        console.log("Form submitted")
    } 

    return (
        <main>
            <form className="add-ingredient-form" action={submitIngredient}>
                <input 
                    type="text"
                    name="ingredient"
                    placeholder="eg. oregano"
                    aria-label="Add ingredient"
                />
                <button id="add-ingredient-btn">Add Ingredient</button>
            </form>
            <ul>
                {ingredientsItemsList}
            </ul>
        </main>
    )
}