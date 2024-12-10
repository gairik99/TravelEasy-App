import "./Auth.css";
import { useAuth, useAlert } from "../../context";
import { validateEmail } from "../../utils/email-regex";
import { validateName } from "../../utils/name-regex";
import { validateNumber } from "../../utils/number-regex";
import { validatePassword } from "../../utils/password-regex";
import { signupHandler } from "../../services/signup-service";
import { useState } from "react";

let isNumberValid,
    isNameValid,
    isEmailValid,
    isPasswordValid,
    isConfirmPasswordValid;

export const AuthSignup = () => {
    const { username, email, password, number, confirmPassword, authDispatch } = useAuth();
    const [err, setErr] = useState({
        nameErr: false,
        numberErr: false,
        emailErr: false,
        passwordErr: false,
        confirmPasswordErr: false

    });

    const { setAlert } = useAlert();

    const handleNumberChange = (event) => {
        isNumberValid = validateNumber(event.target.value);
        if (isNumberValid) {
            console.log("Valid Input");
            authDispatch({
                type: "NUMBER",
                payload: event.target.value,
            });
            setErr({
                ...err,
                numberErr: false
            })
        } else {
            setErr({
                ...err,
                numberErr: true
            })
        }
    };

    const handleNameChange = (event) => {
        isNameValid = validateName(event.target.value);
        if (isNameValid) {
            console.log("Valid Input");
            authDispatch({
                type: "NAME",
                payload: event.target.value,
            });
            setErr({
                ...err,
                nameErr: false
            })

        } else {
            setErr({
                ...err,
                nameErr: true
            })
        }
    };

    const handleEmailChange = (event) => {
        isEmailValid = validateEmail(event.target.value);
        if (isEmailValid) {
            console.log("Valid Input");
            authDispatch({
                type: "EMAIL",
                payload: event.target.value,
            });
            setErr({
                ...err,
                emailErr: false
            })
        } else {
            setErr({
                ...err,
                emailErr: true
            })
        }
    };

    const handlePasswordChange = (event) => {
        isPasswordValid = validatePassword(event.target.value);
        if (isPasswordValid) {
            console.log("Valid Input");
            authDispatch({
                type: "PASSWORD",
                payload: event.target.value,
            });
            setErr({
                ...err,
                passwordErr: false
            })
        } else {
            setErr({
                ...err,
                passwordErr: true
            })
        }
    };

    const handleConfirmPasswordChange = (event) => {
        isConfirmPasswordValid = (event.target.value == password);
        if (isConfirmPasswordValid) {
            console.log("Valid Input");
            authDispatch({
                type: "CONFIRM_PASSWORD",
                payload: event.target.value,
            });
            setErr({
                ...err,
                confirmPasswordErr: false
            })
        } else {
            setErr({
                ...err,
                confirmPasswordErr: true
            })
        }

    };
    console.log(err);
    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (
            isNumberValid &&
            isNameValid &&
            isEmailValid &&
            isPasswordValid &&
            isConfirmPasswordValid
        ) {
            signupHandler(username, number, email, password, setAlert);
        }
        authDispatch({
            type: "CLEAR_USER_DATA",
        });

        authDispatch({
            type: "SET_TO_LOGIN",
        });

    };

    return (
        <div className="auth-container">
            <form onSubmit={handleFormSubmit} >
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">
                        Mobile Number <span className="asterisk">*</span>{" "}
                    </label>
                    <input
                        defaultValue={number}
                        type="number"
                        className="auth-input"
                        maxLength="10"
                        placeholder="Enter Mobile Number"
                        required
                        onChange={handleNumberChange}
                    />
                    {err.numberErr && <span>At least have nine digits</span>}
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">
                        Name <span className="asterisk">*</span>{" "}
                    </label>
                    <input
                        defaultValue={username}
                        className="auth-input"
                        placeholder="Enter Name"
                        required
                        onChange={handleNameChange}
                    />
                    {err.nameErr && <span>Name only can contains letters</span>}
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">
                        Email <span className="asterisk">*</span>{" "}
                    </label>
                    <input
                        defaultValue={email}
                        className="auth-input"
                        placeholder="Enter Email"
                        type="email"
                        required
                        onChange={handleEmailChange}
                    />
                    {err.emailErr && <span>Incorrect email</span>}
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">
                        Password <span className="asterisk">*</span>{" "}
                    </label>
                    <input
                        defaultValue={password}
                        className="auth-input"
                        placeholder="Enter Password"
                        type="password"
                        required
                        onChange={handlePasswordChange}
                    />
                    {err.passwordErr && <span>password should contain atleast one digit,one special character,one uppercase letter and one lowercase letter and min length should be 8</span>}
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">
                        Confirm Password <span className="asterisk">*</span>{" "}
                    </label>
                    <input
                        defaultValue={confirmPassword}
                        className="auth-input"
                        placeholder="Enter Password"
                        type="password"
                        required
                        onChange={handleConfirmPasswordChange}
                    />
                    {err.confirmPasswordErr && <span>password does not match</span>}
                </div>
                <div>
                    <button className="button btn-primary btn-login cursor">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};