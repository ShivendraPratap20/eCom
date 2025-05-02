import React, { useContext } from "react";
import styled from "styled-components";
import {Contxt} from "../../ContextProvider";
import { useNavigate } from "react-router-dom";

const H2 = styled.h2`
    color:#4A7766;
    text-align:center;
    padding:10px;
`;
const TabContainer = styled.div`
    width:60%;
    background-color:#ECE7E2;
    padding:10px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:auto;
    border-radius:10px;
    overflow-x:auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const TabCard = styled.div`
    padding:5px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:5px;
    &:hover{
        cursor:pointer;
    }
`;
const TabCardImg = styled.img`
    width:80px;
    height:80px;
    border-radius:10px;
`  ;
const TabCardText = styled.p`
    text-align:center;
    font-size:1.2em;
    font-weight:450;
`;
export default function Tab() {
    const navigate = useNavigate();
   const {hmdt, loading} = useContext(Contxt);
    return (
        <>
            <H2>Looking For</H2>
            <TabContainer>
               {
                (loading)?
                (<div>Loading</div>):
                (
                    hmdt.tabCard.map((val, index)=>{
                        return(
                        <TabCard onClick={
                            ()=>{navigate(`/products?category=${encodeURIComponent(val.category)}`)}
                        }>
                            <TabCardImg src={val.imageURL}></TabCardImg>
                            <TabCardText>{`${val.text}`}</TabCardText>
                        </TabCard>
                        )
                    })
                )
               }
            </TabContainer>
        </>
    )

}