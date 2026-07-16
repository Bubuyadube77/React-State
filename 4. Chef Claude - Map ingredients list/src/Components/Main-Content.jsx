export default function MainContent() {

    const ingredients = ["Chicken", "Oregano", "Tomatoes"]

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
        console.log(newIngredient)
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