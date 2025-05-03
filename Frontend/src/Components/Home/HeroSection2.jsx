import React, { useContext } from "react";
import ImageCarousel from "./Carousel/ImageCarousel";
import styled from "styled-components";
import { Contxt } from "../../ContextProvider";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    display:grid;
    width:100%;
    padding:10px 0;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto auto;
    gap:5px 10px;
    @media (min-width:577px) and (max-width:1024px ){
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
    }
    .card-container{
        border-radius:10px;
        background-color:whitesmoke;
        padding:10px;
        display:flex;
        align-items:center;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);}
    }
    @media (max-width:576px){
        .card-container{
            grid-column-start:1;
            grid-column-end:3;
            gap:5px;
        }
    }
    .card-img{
    	width:40%;
        height:100%;
    }
    img{
    	width:100%;
        height:100%;
    }
    .card-body{
        width:60%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        gap:5px;
        text-align:center;
    }
    span{
    	color:#4A7766;
        font-weight:bold;
        font-size:2.5em;
    }
    .card-button{
    	background-color:#4A7766;
      color:whitesmoke;
        padding:10px;
        width:70%;
        border:none;
        border-radius:10px;
        transition: background-color 0.3s ease;
        a{
            display:inline-block;
            color:whitesmoke;
            text-decoration:none;
            width:100%;
        }
            &:hover{
                background-color: #3E6254;
            }
    }
    `;
export default function HeroSection2() {
    const navigate = useNavigate();
    const { hmdt, loading } = useContext(Contxt);
    return (
        (loading) ?
            <div>Loading</div> :
            <Wrapper>
                <ImageCarousel />
                {
                    hmdt.sideCard.map((val, index) => {
                        return (
                            <div className="card-container" key={index}>
                                <div className="card-img"><img src={val.imgaeURL} alt="" /></div>
                                <div className="card-body">
                                    <h3>{`${val.text}`}</h3>
                                    <p><span>{val.discount}%</span> OFF</p>
                                    <button className="card-button" onClick={
                                        () => {
                                            navigate(`/products?category=${encodeURIComponent(val.category)}`)
                                        }
                                    }>Explore Now</button>
                                </div>
                            </div>)
                    })
                }
            </Wrapper>
    );
}