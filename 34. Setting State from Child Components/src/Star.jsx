import React from "react"
import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"

function Star(props) {
    let starIcon = props.isFilled ? starFilled : starEmpty
    return (
        <button
        onClick={props.handleClick}
        aria-pressed={props.isFilled}
        aria-label={props.isFilled ? "Remove from Favourites" : "Add to Favourites"}
        className="favorite-button">
        <img
            src={starIcon}
            alt={props.isFilled ? "Filled Star Ic" : "Add to Favourites"}
            className="favorite"
        />
    </button>
    )

   
}

export default Star