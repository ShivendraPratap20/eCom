import React, { useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import ValidationSchema from "./ValidationSchema";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import useAuth from "../../Auth/Auth";
import { toast } from 'react-toastify';

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

export default function SignUp() {
    const { authorized, loading, error } = useAuth();
    const navigate = useNavigate();
    const [isError, setError] = useState(false);
    const { values, errors, handleChange, handleBlur, handleSubmit, touched } = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: 0,
            password: "",
            confirmPassword: "",
            gender: ""
        },
        validationSchema: ValidationSchema,
        onSubmit: (values, action) => {
            fetch("http://localhost:8000/register", {
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
                        toast.success("Welcome");
                    } else if (data.status === "FAILED") {
                        setError(true);
                        toast.error(data.message);
                        throw new Error(data.message);
                    }
                })
                .catch((error) => {
                    console.log("Error while signup ", error);
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
                        <img src="/images/logo.png" alt="Logo" />
                        <h2>Welcome!</h2>
                        <div>
                            <h5>SignUp</h5>
                            <p>Place your first order<br /><b>Have Account?</b></p>
                            <Link to={'/signin'}>
                                <button>Login</button>
                            </Link>
                        </div>
                    </Left>
                    <Right>
                        <form onSubmit={handleSubmit}>
                            <h2>SignUp</h2>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Name"
                                autoComplete="true"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            {touched.name && errors.name && (
                                <div className="text-danger">{errors.name}</div>
                            )}
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Email"
                                autoComplete="true"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {touched.email && errors.email && (
                                <div className="text-danger">{errors.email}</div>
                            )}
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                placeholder="Phone Number"
                                autoComplete="true"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone}
                            />
                            {touched.phone && errors.phone && (
                                <div className="text-danger">{errors.phone}</div>
                            )}
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                autoComplete="true"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            {touched.password && errors.password && (
                                <div className="text-danger">{errors.password}</div>
                            )}
                            <input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="Confirm Password"
                                autoComplete="true"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                            />
                            {touched.confirmPassword && errors.confirmPassword && (
                                <div className="text-danger">{errors.confirmPassword}</div>
                            )}
                            <input
                                type="text"
                                name="gender"
                                id="gender"
                                placeholder="Gender"
                                autoComplete="true"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.gender}
                            />
                            {touched.gender && errors.gender && (
                                <div className="text-danger">{errors.gender}</div>
                            )}
                            <button type="submit">SignUp</button>
                        </form>
                    </Right>
                </Container>
            </>
        )
    );
}