import React from "react"
import IngredientsList from "./IngredientsList.jsx"
import ClaudeRecipe from "./ClaudeRecipe.jsx"
import { getRecipeFromChefClaude } from "../../ai.js"

export default function MainContent() {

    const [ingredients, setIngredients] = React.useState(
        ["all the main spices", "ground beef", "pasta", "tomato paste"]
    )

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    
    const [recipe, setRecipe] = React.useState("")
    const [recipeShown, setRecipeShown] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)
    
    async function getRecipe(){
        setIsLoading(true)
        try {
            const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
            setRecipe(recipeMarkdown)
            setRecipeShown(true)
        } catch (err) {
            console.error(err)
        } finally {
            setIsLoading(false)
        }
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
            {ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe} isLoading={isLoading}/>}
            {recipeShown && <ClaudeRecipe recipe={recipe}/>}
        </main>
    )  
}
