import React, { useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import ValidationSchema from "./ValidationSchema";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import useAuth from "../../Auth/Auth";
import { toast } from 'react-toastify';

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
    height:inherit;
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
            fetch("https://ecom-f5re.onrender.com/register", {
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
    }
    );
    if (loading) return <div>Loading</div>
    else return (
        (authorized)? (<Navigate to={"/"}/>):
        (
            <Container>
            <Left>
                <img src="https://res.cloudinary.com/dqraj6g9a/image/upload/v1745584931/logo_oehann.png" alt="" />
                <h2>Welcome!</h2>
                <div>
                    <h5>SignUp</h5>
                    <p>and <br />Place your first order<br /> <b>Have Account?</b></p>
                    <Link to={'/signin'}>
                        <button>Login</button>
                    </Link>
                </div>
            </Left>
            <Right>

                <form onSubmit={handleSubmit}><h2>SignUp</h2>
                    <input type="text" name="name" id="name" placeholder="Name"
                        autoComplete="true"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                    />
                    {touched.name && errors.name && (
                        <div className="text-danger">{errors.name}</div>
                    )}
                    <input type="text" name="email" id="email" placeholder="Email"
                        autoComplete="true"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {touched.email && errors.email && (
                        <div className="text-danger">{errors.email}</div>
                    )}
                    <input type="phone" name="phone" id="phone" placeholder="Phone Number"
                        autoComplete="true"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                    />
                    {touched.phone && errors.phone && (
                        <div className="text-danger">{errors.phone}</div>
                    )}
                    <input type="password" name="password" id="password" placeholder="password"
                        autoComplete="true"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    {touched.password && errors.password && (
                        <div className="text-danger">{errors.password}</div>
                    )}
                    <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password"
                        autoComplete="true"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                    />
                    {touched.confirmPassword && errors.confirmPassword && (
                        <div className="text-danger">{errors.confirmPassword}</div>
                    )}
                    <input type="text" name="gender" id="gender" placeholder="gender"
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
        )
    );
}