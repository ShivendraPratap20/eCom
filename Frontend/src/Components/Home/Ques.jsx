import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
    background-color:transparent;
    width:50%;
    margin:auto;
    display:flex;
    align-items:center;
    justify-content:space between;
    flex-direction:column;
    padding:10px;
    margin-top:30px;
    color: black;
    border-radius:10px;
    border: 3px solid #4A7766;
    gap:5px;
    button{
        padding:10px 20px;
        border-radius:10px;
        background:#157450;
        border:1px solid white;
        font-size:1.5em;
    }
`;

export default function Ques(){
    return(
        <Wrapper>
            <h3>Didn't found your product?</h3>
            <h5>Try</h5>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Search</button>
            <h4>And grab amazing offers on products</h4>
        </Wrapper>
    )
}