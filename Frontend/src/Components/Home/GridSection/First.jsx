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
    background-color: #ECE7E2;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
    h2 {
        color: #4A7766;
        font-size: clamp(1.2rem, 2vw, 1.8rem);
        margin: 0;
    }

    @media (min-width: 768px) {
        width: 48%;
        padding: 20px;
    }

    @media (min-width: 1024px) {
        gap: 20px;
    }
`;

const MiddleImg = styled.img`
    width: 100%;
    height: auto;
    aspect-ratio: 16/9;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s ease;

    &:hover {
        cursor: pointer;
        transform: scale(1.01);
    }

    @media (min-width: 768px) {
        height: 270px;
    }
`;

const BottomContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    width: 100%;
    color: black;
    font-weight: 400;

    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        transition: transform 0.2s ease;

        &:hover {
            cursor: pointer;
            transform: translateY(-3px);
        }
    }

    img {
        width: 100%;
        height: auto;
        max-width: 120px;
        aspect-ratio: 1/1;
        border-radius: 10px;
        object-fit: cover;
    }

    p {
        margin: 0;
        font-size: clamp(0.8rem, 1.5vw, 1rem);
        text-align: center;
    }

    @media (min-width: 480px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: 768px) {
        img {
            width: 80px;
            height: 80px;
        }
    }
`;

export default function First() {
    const { hmdt, loading } = useContext(Contxt);
    const navigate = useNavigate();
    return (
        <>
            {
                (loading) ?
                    (
                        <h5>Loading...</h5>
                    ) : (
                        <Wrapper>
                            <h2>Great fashions collections</h2>
                            <MiddleImg 
                                src={hmdt.gridCardFirst.bannerImgURL}
                                onClick={() => { navigate(`/products?category=${encodeURIComponent(hmdt.gridCardFirst.category)}`); }}
                                alt="Fashion collection banner"
                            />
                            <BottomContainer>
                                {hmdt.gridCardFirst.secondaryData.map((val, index) => {
                                    return (
                                        <div 
                                            key={index}
                                            onClick={() => { navigate(`/products?category=${encodeURIComponent(val.category)}`); }}
                                        >
                                            <img src={val.imageURL} alt={val.text} />
                                            <p>{val.text}</p>
                                        </div>
                                    )
                                })}
                            </BottomContainer>
                        </Wrapper>
                    )
            }
        </>
    )
}