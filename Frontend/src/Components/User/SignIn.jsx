import React, { useState } from "react";
import { useFormik } from "formik";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import useAuth from "../../Auth/Auth";
import { toast } from 'react-toastify';
import Footer from "../Footer";

const Container = styled.div`
    position:absolute;
    left:50%;
    top:50%;
    width:60%;
    transform:translate(-50%, -50%);
    display:flex;
    background-color:black;
    color:white;
    @media (min-width: 576px) and (max-width: 767.98px) {
        flex-direction:column;
    }
    @media (min-width: 768px) and (max-width: 991.98px) {
        width:75%;
    }
`;
const Left = styled.div`
    width:40%;
    height:100%;
    padding:10px;
    background-color:#4A7766;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:20px;
    h2, h5, p{
        padding:0;
        margin:0;
    }
    img{
        width:150px;
        height:150px;
    }
    div{
        text-align:center;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        gap:5px;
    }
    button{
            padding:10px;
            color:#4A7766;
            background-color:whitesmoke;
            border-radius:10px;
            border:none;
            font-size:1.3em;
    }
    @media (min-width: 576px) and (max-width: 767.98px) {
        width:100%;
        gap:10px;
        img{
            width:80px;
            height:80px;
        }
        h2{
            font-size:1.3em;
        }
        button{
            font-size:1em;
        }
    }
    @media (min-width: 768px) and (max-width: 991.98px) {
        img{
            width:100px;
            height:100px;
        }
    }
`;
const Right = styled.div`
    width:60%;
    background-color:#ECE7E2;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:10px;
    h2{
    color:#4A7766;
    }
    form{
    display:flex;
    text-align:center;
    flex-direction:column;
    gap:10px;
    width:50%;
    input{
        padding: 10px;
        border-radius: 10px;
        width: 100%;
        background-color: white;
        outline: none;
        border: none;
        color:black;
    }
    button{
        background-color:#4A7766;
        color:white;
        border:none;
        font-size:1.2em;
        padding:10px;
        border-radius:10px;
    }
}   
    @media (min-width: 576px) and (max-width: 767.98px) {
        width:100%;
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
            fetch("https://ecom-f5re.onrender.com/login", {
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
    }
    );
    if (loading) return <div>Loading..</div>
    else
        return (
            (authorized) ? (<Navigate to={"/"} />) : (
                <>
                    <Container>
                        <Left>
                            <img src="https://res.cloudinary.com/dqraj6g9a/image/upload/v1745584931/logo_oehann.png" alt="" />
                            <h2>Welcome Back!</h2>
                            <div>
                                <h5>Login</h5>
                                <p>and <br /> Continue your shopping<br /> <b>New User?</b></p>
                                <Link to={'/signup'}>
                                    <button>SignUp</button>
                                </Link>
                            </div>
                        </Left>
                        <Right>
                            <form onSubmit={handleSubmit}><h2>LogIn</h2>
                                <input type="text"
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
                                <input type="password"
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
                                {
                                    isError ? (<div className="text-danger">{errosMsg}</div>) : (null)
                                }
                                <button type="submit">Login</button>
                            </form>
                        </Right>
                    </Container>
                </>
            )
        );
}