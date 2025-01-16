import React from "react";

const Button = ({innerText, onClickHandler, buttonName}) => {
    return (
        <button onClick={onClickHandler} className={buttonName}>{innerText}</button>
    )
}

export default Button;