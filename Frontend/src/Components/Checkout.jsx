import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useAuth from "../Auth/Auth";
import { toast } from "react-toastify";
import ContextProvider from "../ContextProvider";
import Menu from "./Home/Menu";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    background-color: #ECE7E2;
    border-radius: 10px;
    padding: 20px;
    width: 90%;
    max-width: 500px;
    margin: 20px auto;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    img {
        width: 100%;
        max-width: 250px;
        height: auto;
        object-fit: contain;
    }
    
    h4 {
        margin: 0;
        font-size: 1.3em;
        text-align: center;
    }
    
    button {
        padding: 12px 20px;
        background-color: #4A7766;
        color: whitesmoke;
        border: none;
        border-radius: 8px;
        font-size: 1em;
        cursor: pointer;
        transition: background-color 0.3s ease;
        
        &:hover {
            background-color: #3E6254;
        }
    }
    
    @media (max-width: 575px) {
        padding: 15px;
        margin: 10px auto;
        h4 {
            font-size: 1.1em;
        }
        button {
            padding: 10px 15px;
            font-size: 0.9em;
        }
    }
`;

export default function Checkout() {
    const { authorized, userData, loading, error } = useAuth();
    const navigate = useNavigate();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!authorized) {
        toast.error("Login First");
        navigate("/");
        return null;
    }

    return (
        <ContextProvider>
            <Menu />
            <Container>
                <img src="https://res.cloudinary.com/dqraj6g9a/image/upload/v1746115955/check-out_xzt7mn.png" alt="Checkout confirmation" />
                <h4>Your order has been placed</h4>
                <button onClick={() => navigate("/")}>Continue Shopping</button>
            </Container>
        </ContextProvider>
    );
}