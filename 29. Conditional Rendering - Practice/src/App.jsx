import React from "react"

function  App() {
    const [messages, setMessages] = React.useState(["a", "b"])
    
    /* 
    
    Option 1

    return (
       <>
        <div>
            {messages.length === 0 && <h1>You are all caught up</h1>}
        </div>
        <div>
            {messages.length === 1 && <h1>You have {messages.length} unread message</h1>}
        </div>
        <div>
            {messages.length > 1 && <h1>You have {messages.length} unread messages</h1>}
        </div>
        </>
    ) */

    return (
        <div>
            {messages.length === 0 ? <h1>You are all caught up</h1> 
            : messages.length === 1 ? <h1>You have {messages.length} unread message</h1> 
            : <h1>You have {messages.length} unread messages</h1>}
        </div>
    )
}

export default App