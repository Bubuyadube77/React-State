import React from "react"

export default function MainContent() {

    const [ingredients, setIngredients] = React.useState([])

    const ingredientsItemsList = ingredients.map((ingredient)=> {
        return (
            <li key={ingredient}>{ingredient}</li>
        )
    })

    function handleSubmit(event) {
        event.preventDefault()
        console.log("Form submitted")

        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")

        setIngredients((prevIngredient)=> {
            return ([...prevIngredient, newIngredient])
        })
    } 

    return (
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
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