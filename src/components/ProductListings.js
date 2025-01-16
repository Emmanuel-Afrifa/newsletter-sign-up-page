import React from "react";
import ListItem from "./ListItem";

const ProductListings = () => {
    const messages = [
        'Product discovery and building what matters',
        'Measuring to ensure updates are a success',
        'And much more!'
    ]

    return (
        <div className="products-container">
           {
                messages.map((message, key) => {
                    return (<ListItem key={key} message={message} />)
                })
            } 
        </div>


        
    )
}

export default ProductListings;