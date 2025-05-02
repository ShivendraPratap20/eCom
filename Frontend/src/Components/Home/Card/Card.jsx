import React, {useEffect, useState, useContext} from "react";
import styled from "styled-components";
import {Contxt} from "../../../ContextProvider";
import { useNavigate } from "react-router-dom";

const Cards = styled.div`
        padding:10px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        gap:5px;
        &:hover{
            cursor:pointer;
            background-color:whitemsoke;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
    `;
    const CardImg = styled.img`
        width:100px;
        height:100px;
    `;
    const CardText = styled.div`
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
    `;

export default function Card(){
    const {hmdt, loading} = useContext(Contxt);
    const navigate = useNavigate();
    return(
        <>
            {
                (loading)?
                (<div>Loading</div>):
                (
                    hmdt.card.map((val, index)=>{
                        return(
                           <Cards key={index}
                            onClick={()=>{
                                navigate(`/products?category=${encodeURIComponent(val.category)}`)
                            }}
                           >
                                 <CardImg src={val.imageURL}/>
                                    <CardText>
                                        <h5>{val.brand}</h5>
                                        <p>{val.text}</p>
                                    </CardText>
                           </Cards>
                        )
                    })
                )
            }
        </>
    );
}