import React from "react";
import First from "./First";
import Second from "./Second";
import styled from "styled-components";



const Wrapper = styled.div`
@media (min-width:778px){
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
}
width:100%;
display:flex;
flex-direction:column;
gap:10px;
`;
export default function GridContainer(){
    return(
        <Wrapper>
            <First/>
            <Second/>
        </Wrapper>
    )
}