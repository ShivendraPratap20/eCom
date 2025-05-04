import React, { useState } from "react";
import { useFormik } from "formik";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import useAuth from "../../Auth/Auth";
import { toast } from 'react-toastify';
import Footer from "../Footer";

const Container = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    width: 80%;
    max-width: 900px;
    transform: translate(-50%, -50%);
    display: flex;
    background-color: black;
    color: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    @media (max-width: 768px) {
        flex-direction: column;
        width: 90%;
        max-width: 500px;
    }
    @media (max-width: 480px) {
        width: 95%;
        top: 45%;
    }
`;

const Left = styled.div`
    width: 40%;
    padding: 20px;
    background-color: #4A7766;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    h2, h5, p {
        padding: 0;
        margin: 0;
    }
    img {
        width: clamp(100px, 25vw, 140px);
        height: clamp(100px, 25vw, 140px);
        object-fit: contain;
    }
    div {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8px;
    }
    button {
        padding: 12px 24px;
        color: #4A7766;
        background-color: whitesmoke;
        border-radius: 8px;
        border: none;
        font-size: clamp(1rem, 2.5vw, 1.2rem);
        cursor: pointer;
        transition: background-color 0.2s;
        &:hover {
            background-color: #e0e0e0;
        }
    }
    @media (max-width: 768px) {
        width: 100%;
        gap: 16px;
        padding: 16px;
        img {
            width: clamp(80px, 20vw, 100px);
            height: clamp(80px, 20vw, 100px);
        }
        h2 {
            font-size: clamp(1.2rem, 4vw, 1.5rem);
        }
        button {
            font-size: clamp(0.9rem, 2.5vw, 1rem);
            padding: 10px 20px;
        }
    }
`;

const Right = styled.div`
    width: 60%;
    background-color: #ECE7E2;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px;
    border-radius: 0 12px 12px 0;
    h2 {
        color: #4A7766;
        font-size: clamp(1.5rem, 4vw, 1.8rem);
        margin-bottom: 16px;
    }
    form {
        display: flex;
        text-align: center;
        flex-direction: column;
        gap: 12px;
        width: 100%;
        max-width: 300px;
        input {
            padding: 12px;
            border-radius: 8px;
            width: 100%;
            background-color: white;
            outline: none;
            border: none;
            color: black;
            font-size: clamp(0.9rem, 2.5vw, 1rem);
        }
        button {
            background-color: #4A7766;
            color: white;
            border: none;
            font-size: clamp(1rem, 2.5vw, 1.1rem);
            padding: 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.2s;
            &:hover {
                background-color: #3a5f50;
            }
        }
    }
    @media (max-width: 768px) {
        width: 100%;
        padding: 16px;
        border-radius: 0 0 12px 12px;
        form {
            max-width: 100%;
        }
    }
    @media (max-width: 480px) {
        padding: 12px;
        h2 {
            font-size: clamp(1.3rem, 4vw, 1.5rem);
        }
    }
`;

export default function SignIn() {
    const { authorized, loading, error } = useAuth();
    const [isError, setError] = useState(false);
    const [errosMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();
    const { values, errors, handleChange, handleBlur, handleSubmit, touched } = useFormik({
        initialValues: {
            username: "",
            userpassword: ""
        },
        validate: values => {
            Object.keys(values).forEach(field => {
                if (!values[field]) {
                    errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
                } else {
                    delete errors[field];
                }
            });
        },
        onSubmit: (values, action) => {
            fetch("/login", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(values),
                credentials: "include"
            })
                .then(response => response.json())
                .then(data => {
                    if (data.status === "SUCCESS") {
                        setError(false);
                        navigate("/");
                        toast.success("Login Successful")
                    } else if (data.status === "FAILED") {
                        setError(true);
                        setErrorMsg(data.message);
                        toast.error("Login Failed! Try Again");
                        throw new Error(data.message);
                    }
                })
                .catch((error) => {
                    console.log("Error while login", error);
                });
        }
    });

    if (loading) return <div>Loading...</div>;
    return (
        (authorized) ? (<Navigate to={"/"} />) : (
            <>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <Container>
                    <Left>
                        <img src="https://res.cloudinary.com/dqraj6g9a/image/upload/v1745584931/logo_oehann.png" alt="Logo" />
                        <h2>Welcome Back!</h2>
                        <div>
                            <h5>Login</h5>
                            <p>Continue your shopping<br /><b>New User?</b></p>
                            <Link to={'/signup'}>
                                <button>SignUp</button>
                            </Link>
                        </div>
                    </Left>
                    <Right>
                        <form onSubmit={handleSubmit}>
                            <h2>LogIn</h2>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="User Name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.username}
                            />
                            {touched.username && errors.username && (
                                <div className="text-danger">{errors.username}</div>
                            )}
                            <input
                                type="password"
                                name="userpassword"
                                id="userpassword"
                                placeholder="Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.userpassword}
                            />
                            {touched.userpassword && errors.userpassword && (
                                <div className="text-danger">{errors.userpassword}</div>
                            )}
                            {isError && <div className="text-danger">{errosMsg}</div>}
                            <button type="submit">Login</button>
                        </form>
                    </Right>
                </Container>
            </>
        )
    );
}