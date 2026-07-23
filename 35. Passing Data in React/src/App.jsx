import React from "react"
import Header from "./Components/Header.jsx"
import Body from "./Components/Body.jsx"

function App() {

    const [userName, setUserName] = React.useState("Bubuya")

    return (
        <main>
            <Header userName = {userName} />
            <Body userName = {userName} />
        </main>
    )
}



export default App