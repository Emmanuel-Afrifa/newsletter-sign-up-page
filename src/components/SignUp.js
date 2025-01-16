import React from "react";
import Button from './Button';

const SignUp = ({page, setPage}) => {
    const [state, setState] = React.useState({
        inputValue: "email@company.com",
        emailError: false
    })
    const validEmail = (email) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email); 
    };

    const onChangeHandler = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                inputValue: event.target.value
            }
        });
    }

    const onClickHandler = () => {
        const isEmailValid = validEmail(state.inputValue);
        
        if (isEmailValid){
            setPage({
                ...page,
                pageIndex: 'page-2',
                value: state.inputValue
            })
        }
        else {
            setState((prevState) => {
                return {
                    ...prevState,
                    emailError: true
                }
            })
        }
        
    }

    const inputClassname = state.emailError ? 'error' : 'regular';

    return (
        <div className="sign-up-container">
            <div className="sign-up-headers">
                <small className="email-label">Email address</small>
                {
                    state.emailError && <small className="error-message">Valid email required</small>
                }
            </div>
            <input type="text" value={state.inputValue} onChange={onChangeHandler} className={inputClassname}/>
            <Button 
                    innerText='Subscribe to monthly newsletter'
                    onClickHandler={onClickHandler}
                    buttonName='sign-up-button' 

            />
        </div>
    )
}

export default SignUp;