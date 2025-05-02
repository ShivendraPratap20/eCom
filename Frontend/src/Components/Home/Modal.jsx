import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { useFormik } from "formik";
import { Contxt } from "../../ContextProvider";
import "./Modal.css";

export default function Modal() {
    const { display, setDisplay } = useContext(Contxt);
    const containerReference = useRef();
    const loginReference = useRef();
    const registerReference = useRef();
    const [isError, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const { values, errors, handleChange, handleBlur, handleSubmit, touched } = useFormik({
        initialValues: {
            userName: "",
            userID: "",
            userPassword: "",
            phoneNumber: ""
        },
        onsubmit: (val, actions) => {
            console.log(val);
            fetch("http://localhost:8000/allotBook", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(values)
            })
                .then(response => {
                    return response.json();
                }).then(data => {
                    console.log(`Reponse received from the server ${data.message + " " + data.status}`);
                    if (data.status == "Failed") {
                        setError(true);
                        setErrorMsg(data.message);
                    } else if (data.status == "SUCCESS") {
                        setError(false);
                        setErrorMsg(data.message);
                    }
                })
                .catch((error) => {
                    setError(true);
                    setErrorMsg(error);
                    console.log("Error while alloting the book", error);
                });

        }
    });

    const Box = styled.div`
        display:${display};
        position:absolute;
        z-index:2;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
        width:80%;
        height:700px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
        background-color: whitesmoke;
        overflow: hidden;
        border-radius: 30px;
        padding:10px;
        p{
            font-size: 14px;
            line-height: 20px;
            letter-spacing: 0.3px;
            margin: 20px 0;
        }
    `;
    return (
        <Box>
            <FontAwesomeIcon icon={faXmark} style={{ width: "50px", height: "50px", color: "#4a7766", position: "absolute", top: "0px", right: "0px", cursor: "pointer" }}
                onClick={() => { setDisplay("none") }}
            />
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>

                        <div className="infield">
                            <input type="text" placeholder="Name" />
                            <label></label>
                        </div>
                        <div className="infield">
                            <input type="email" placeholder="Email" name="email" />
                            <label></label>
                        </div>
                        <div className="infield">
                            <input type="password" placeholder="Password" />
                            <label></label>
                        </div>
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>

                        <div className="infield">
                            <input type="email" placeholder="Email" name="email" />
                            <label></label>
                        </div>
                        <div className="infield">
                            <input type="password" placeholder="Password" />
                            <label></label>
                        </div>
                        <a href="#" className="forgot">Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container" id="overlayCon">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button>Sign Up</button>
                        </div>
                    </div>
                    <button id="overlayBtn"></button>
                </div>
            </div>

        </Box>
    );
}