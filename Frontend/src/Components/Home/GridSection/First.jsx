import React, {useContext} from "react";
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
        background-color:#ECE7E2;
        border-radius:10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        h2{
            color:#4A7766;
        }
        @media (max-width:777px){
            width:100%;
        }
    `;
    const MiddleImg = styled.img`
        width:100%;
        height: 270px;
        &:hover{
            cursor:pointer;
        }
    `;
    const BottomContainer = styled.div`
        display:flex;
        justify-content:space-between;
        width:100%;
        img{
            width:80px;
            height: 80px;
            border-radius:10px;
            &:hover{
                cursor:pointer;
            }
        }
    `;
export default function First(){
    const {hmdt, loading} = useContext(Contxt);
    const navigate = useNavigate();
    //const {bannerImgURL, secondaryData} = hmdt.gridCardFirst;
    return(
        <>
           {
            (loading)?
            (
                <h5>Loading...</h5>
            ):(
                <Wrapper>
                    <h2>Great fashions collections</h2>
                    <MiddleImg src={hmdt.gridCardFirst.bannerImgURL}
                        onClick={()=>{navigate(`/products?category=${encodeURIComponent(hmdt.gridCardFirst.category)}`);}}
                    />
                    <BottomContainer>
                        {hmdt.gridCardFirst.secondaryData.map((val, index)=>{
                            return(
                                <img src={val.imageURL} alt="" key={index}
                                    onClick={()=>{navigate(`/products?category=${encodeURIComponent(val.category)}`);}}
                                />
                            )
                        })}
                        </BottomContainer>
                </Wrapper>
            )
           }
        </>
    )
}