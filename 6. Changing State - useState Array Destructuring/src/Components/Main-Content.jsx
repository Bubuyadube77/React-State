export default function MainContent() {
    function clickFuction() {
        console.log("i was clicked")
    }
    return (
        <main>
            <form className="add-ingredient-form">
                <input 
                    type="text"
                    id="ingredient"
                    placeholder="eg. oregano"
                    aria-label="Add ingredient"
                />
                <button id="add-ingredient-btn" type="button" onClick= {clickFuction} >Add Ingredient</button>
            </form>
        </main>
    )
}