import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    background-color: transparent;
    width: 90%;
    margin: 30px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    color: black;
    border-radius: 10px;
    border: 3px solid #4A7766;
    gap: 15px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    h3 {
        margin: 0;
        font-size: clamp(1.1rem, 4vw, 1.5rem);
        color: #4A7766;
    }

    h4, h5 {
        margin: 0;
        font-size: clamp(0.9rem, 3vw, 1.2rem);
        font-weight: 500;
    }

    button {
        padding: 12px 25px;
        border-radius: 8px;
        background: #157450;
        border: none;
        font-size: clamp(1rem, 4vw, 1.3rem);
        color: white;
        cursor: pointer;
        transition: all 0.3s ease;
        width: 100%;
        max-width: 200px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

        &:hover {
            background: #0e5a3a;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }

        &:active {
            transform: translateY(0);
        }
    }

    @media (min-width: 600px) {
        width: 70%;
        padding: 25px;
        gap: 20px;
    }

    @media (min-width: 900px) {
        width: 50%;
        padding: 30px;
    }

    @media (min-width: 1200px) {
        width: 40%;
    }
`;

export default function Ques() {
    return (
        <Wrapper>
            <h3>Didn't find your product?</h3>
            <h5>Try</h5>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Search
            </button>
            <h4>And grab amazing offers on products</h4>
        </Wrapper>
    )
}