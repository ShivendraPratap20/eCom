import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useAuth from "../Auth/Auth";
import { toast } from "react-toastify";
import ContextProvider from "../ContextProvider";
import Menu from "./Home/Menu";

const Container = styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;
    align-items:center;
    justify-content:center;
    background-color:#ECE7E2;
    border-radius:10px;
    padding:10px;
    position:absolute;
    margin-top:50px;
    left:50%;
    transform:translateX(-50%);
    img{
        width:300px;
        height:300px;
    }
    button{
        padding:10px;
        background-color:#4A7766;
        color:whitesmoke;
        outline:none;
        border:none;
        border-radius:10px;
    }
`;

export default function Checkout() {
    const { authorized, userData, loading, error } = useAuth();
    const navigate = useNavigate();
    if(loading)
        return (<div>Loading...</div>)
    else{
        if(authorized){
           return ( 
            <ContextProvider>
                <Menu/>
                <Container>
                    <img src="https://res.cloudinary.com/dqraj6g9a/image/upload/v1746115955/check-out_xzt7mn.png" alt="checkout" />
                    <h4>Your order has placed</h4>
                    <button onClick={()=>{navigate("/")}}>Continue Shopping</button>
            </Container>
            </ContextProvider>
           )
        }
        else{
            toast.error("Login First");
            navigate("/");
        }
    }
}