import React, { useContext } from "react";
import styled from "styled-components";
import { Contxt } from "../../../ContextProvider";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
    justify-content:center;
    padding:10px;
    width:48%;
    height:inherit;
    border-radius:10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color:#ECE7E2;
    h2{
        color:#4A7766;
    }
    @media (max-width:777px){
        width:100%;
    }
`;
const CardContainer = styled.div`
    display:grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    padding:10px;
    gap:10px 10px;
    height:100%;
    width:98%;
`;
const Card = styled.div`
    display:flex;
    justify-content:space-between;
    height:100%;
    background-color:#4A7766;
    border-radius:20px;
    color:white;
    img{
        width:48%;
        height:100%;
        border-radius:20px;
    }
    div{
        display:flex;
        width:48%;
        flex-direction:column;
        justify-content:center;
    }
    &:hover{
        cursor:pointer;
    }
`;

export default function Second() {
    const navigate = useNavigate();
    const { hmdt, loading } = useContext(Contxt);

    return (
        <Wrapper>
            <h2>Grab Amazing Deals</h2>
            {
                (loading) ?
                    (<h4>Loading</h4>
                    ) : (
                        <CardContainer>
                            {
                                hmdt.gridCardSecond.map((val, index) => {
                                    return (
                                        <Card 
                                        key={index}
                                        onClick={()=>{navigate(`/products?category=${encodeURIComponent(val.category)}`);}}>
                                            <img src={val.imageURL} alt="" />
                                            <div>
                                                <h4>{val.headText}</h4>
                                                <h6>{val.text}</h6>
                                            </div>
                                        </Card>
                                    )
                                })
                            }
                        </CardContainer>
                    )
            }
        </Wrapper>
    );
}