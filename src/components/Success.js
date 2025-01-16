import React from "react";
import iconSuccess from '../assets/images/icon-success.svg';
import Button from "./Button";

const Success = ({page, setPage}) => {

    const onClickHandler = () => {
        setPage({
            ...page,
            value: "email@company.com",
            pageIndex: 'page-1'
        });
    }

    return (
        <div className="success-container">
            <img src={iconSuccess} alt="" className="icon-success" />
            <h1 className="success-heading">Thanks for subscribing!</h1>
            <p className="success-description">A confirmation email has been sent to <span style={{fontWeight: 'bold'}}>{page.value}</span>. 
                Please open it and click the button inside to confirm your subscription.
            </p>
            <Button 
                innerText='Dismiss message'
                onClickHandler={onClickHandler}
                buttonName='dismiss-button' 

            />
        </div>
    )
}

export default Success;