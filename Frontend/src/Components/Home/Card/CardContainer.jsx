import React from "react";
import Card from "./Card";
import styled from "styled-components";


const Container = styled.div`
        width:100%;
        display:flex;
        flex-direction:column;
        gap:5px;
        padding:10px;
        background-color:white;
        margin:25px 0px;
        border-radius:10px;
        flex-wrap:wrap;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    `;
    const Div = styled.div`
        width:100%;
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        @media (max-width: 767.98px){
            display:grid;
            grid-template-rows :auto auto auto;
            grid-template-columns : auto auto auto;
        }
         @media (max-width: 512.98px){
            display:grid;
            grid-template-rows :auto auto;
            grid-template-columns : auto auto;
        }   
    `
export default function CardContainer(){
    return(
        <Container>
            <h3>Best Deals on Smartphones</h3>
            <Div>
                <Card></Card>
            </Div>
        </Container>
    );
}