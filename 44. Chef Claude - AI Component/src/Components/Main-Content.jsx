import React from "react"
import IngredientsList from "./IngredientsList.jsx"
import ClaudeRecipe from "./ClaudeRecipe.jsx"

export default function MainContent() {

    const [ingredients, setIngredients] = React.useState(
        ["all the main spices", "ground beef", "pasta", "tomato paste"]
    )

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    
    const [recipeShown, setRecipeShown] = React.useState(false)
    
    function recipeShownState(){
        setRecipeShown((prevState)=>{
            return(!prevState)
        })
    }
    

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 && <IngredientsList ingredients = {ingredients} recipeShownState={recipeShownState}/>}
            {recipeShown && <ClaudeRecipe />}
        </main>
    )  
}

