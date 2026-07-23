import React from "react"
import IngredientsList from "./IngredientsList.jsx"
import ClaudeRecipe from "./ClaudeRecipe.jsx"
import { getRecipeFromChefClaude } from "../../ai.js"

export default function MainContent() {

    const [ingredients, setIngredients] = React.useState(
        []
    )

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    
    const [recipe, setRecipe] = React.useState("")
    const [recipeShown, setRecipeShown] = React.useState(false)
    
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    async function getRecipe(){
        setIsLoading(true)
        setError(null)
        try {
            const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
            setRecipe(recipeMarkdown)
            setRecipeShown(true)
        } catch (err) {
            setError("Couldn't get a recipe — please try again.")
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
            {ingredients.length > 0 && <IngredientsList ingredients = {ingredients} getRecipe={getRecipe}/>}
            {recipeShown && <ClaudeRecipe recipe={recipe}/>}
        </main>
    )  
}

