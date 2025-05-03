import React, { useContext } from "react";
import styled from "styled-components";
import { Contxt } from "../../../ContextProvider";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    padding: 15px;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: #ECE7E2;
    
    h2 {
        color: #4A7766;
        font-size: clamp(1.2rem, 2vw, 1.8rem);
        margin: 0 0 10px 0;
    }

    @media (min-width: 768px) {
        width: 48%;
        padding: 20px;
    }
`;

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
    width: 100%;
    
    @media (min-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }

    @media (min-width: 768px) {
        gap: 15px;
        height: 100%;
    }
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #4A7766;
    border-radius: 15px;
    color: white;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    min-height: 180px;

    &:hover {
        cursor: pointer;
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    img {
        width: 100%;
        height: 120px;
        object-fit: cover;
        border-radius: 15px 15px 0 0;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 12px;
        flex-grow: 1;

        h4 {
            margin: 0 0 5px 0;
            font-size: clamp(0.9rem, 1.5vw, 1.1rem);
        }

        h6 {
            margin: 0;
            font-size: clamp(0.75rem, 1.2vw, 0.9rem);
            font-weight: 400;
            opacity: 0.9;
        }
    }

    @media (min-width: 480px) {
        flex-direction: row;
        min-height: auto;

        img {
            width: 48%;
            height: auto;
            border-radius: 15px 0 0 15px;
        }

        div {
            width: 52%;
            padding: 10px 12px;
        }
    }

    @media (min-width: 768px) {
        height: 100%;
    }
`;

export default function Second() {
    const navigate = useNavigate();
    const { hmdt, loading } = useContext(Contxt);

    return (
        <Wrapper>
            <h2>Grab Amazing Deals</h2>
            {
                loading ? (
                    <h4>Loading...</h4>
                ) : (
                    <CardContainer>
                        {hmdt.gridCardSecond.map((val, index) => (
                            <Card 
                                key={index}
                                onClick={() => navigate(`/products?category=${encodeURIComponent(val.category)}`)}
                            >
                                <img src={val.imageURL} alt={val.headText || "Deal item"} />
                                <div>
                                    <h4>{val.headText}</h4>
                                    <h6>{val.text}</h6>
                                </div>
                            </Card>
                        ))}
                    </CardContainer>
                )
            }
        </Wrapper>
    );
}