import React from "react";
import icon from '../assets/images/icon-list.svg'

const ListItem = ({message}) => {
    return (
        <div className="list-container">
            <span className="icon-list"><img src={icon} alt="icon-list"/></span>
            <p className="list-message">{message}</p>
        </div>
    )
}

export default ListItem;