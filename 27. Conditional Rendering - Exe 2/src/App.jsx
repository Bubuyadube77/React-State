import React from "react"

 function  App() {
    const [unreadMessages, setUnreadMessages] = React.useState([])
      
    
    return (
        <>
        <div>
            {unreadMessages.length > 0 && <h1>You have {unreadMessages.length} unread messages!</h1>}
        </div>
        <div>
            {unreadMessages.length === 0 && <h1>You have {unreadMessages.length} unread messages!</h1>}
        </div>
        </>
        
    )
}

export default App