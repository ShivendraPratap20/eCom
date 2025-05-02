import React, { useId } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Auth/Auth";
import { toast } from 'react-toastify';

const CardContainer = styled.div`
    display:flex;
    padding:10px;
    flex-direction:column;
    gap:5px;
    width:79%;
    @media (min-width: 576px) and (max-width: 767.98px){
        width:60%;
    }
    @media (max-width:575px){
        width:50%;
    }
`;
const CardHolder = styled.div`
    background-color:#ECE7E2;
    width:100%;
    display:grid;
    gap:10px 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding:5px;
    a{
        text-decoration:none;
        color:black;
    }
    @media (max-width:575px){
        grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 576px) and (max-width: 767.98px){
        grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 768px) and (max-width: 1199.98px ) {
        grid-template-columns: 1fr 1fr 1fr;
    }    
`
const Card = styled.div`
    display:grid;
    grid-template-columns:100%;
    grid-template-rows:auto auto;
    gap:5px 5px;
    background-color:whitesmoke;
    width:100%;
    padding:10px;
    &:hover{
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        cursor:pointer;
    }
    .img-container{
        width:100%;
        display:flex;
        justify-content:center;
    }
    img{
        width:200px;
        height:200px;
    }
    .txt-container{
        display:flex;
        flex-direction:column;
         p, h5, h6{
            margin:0;
        }   
        span{
    	    color:#4A7766;
            font-weight:bold;
            font-size:2.5em;
        }
    }
        .btn-container{
            width:100%;
            display:flex;
            gap:5px;
            button{
                padding:10px;
                border-radius:10px;
                width:49%;
            }
            #cart{
                background:transparent;
                color:#4A7766;
                border:1px solid #4A7766;
                &:hover{
                    background-color: #3E6254;
                    color:white;
            }
            }
            #buy{
                background-color:#4A7766;
                border:none;
                color:whitesmoke;
                &:hover{
                    background-color: #3E6254;
            }
            }
            
        }
    
    @media (max-width: 575px ){
        img{
            width:70px;
            height:70px;
        }
        h6{
            font-size:.8rem;
        }
    }
    @media (min-width: 576px) and (max-width: 767.98px){
        img{
            width:110px;
            height:110px;
        }
    }
    @media (min-width: 768px) and (max-width: 1199.98px) {
        img{
            width:140px;
            height:140px;
        }
    }
`;

export default function ProductContainer({ productDt, category }) {
    const navigate = useNavigate();
    const {userData, authorized, loading, verifyAuth} = useAuth();
    const handler = (val)=>{
        navigate(`/results?category=${encodeURIComponent(val.category)}&pid=${encodeURIComponent(val._id)}&pname=${encodeURIComponent(val.name)}`);
    };
    async function cartHandler(val){
        if(!loading){
            if(authorized){
                try {
                    const response = await fetch('/addProduct', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({userID:userData._id, pID:val._id, pName: val.name, pCategory:val.category, pPrice: val.salePrice, pImage: val.imageURL})
                    });
                
                    if (!response.ok) {
                      throw new Error(`HTTP error! status: ${response.status}`);
                    }
                
                    const result = await response.json();
                    console.log('Success:', result);
                    toast.success("Added to cart");
                    verifyAuth();
                  } catch (error) {
                    console.error('Error:', error);
                  }
            }else if(!authorized){
                toast.error("Login First!");
                navigate("/signin");
            }
        }
    }

    return (
        <CardContainer>
            <h3>Showing result for "{category}"</h3>
            <CardHolder >
                {productDt.map((val, index) => {
                    return (
                            <Card key={index} onClick={()=>{handler(val)}}>
                                <div className="img-container" >
                                    <img src={val.imageURL} alt="Headphone" /></div>
                                <div className="txt-container" >
                                    <h6>{
                                    (val.name.length>50)? (`${val.name.slice(0, 50)}....`):(val.name)
                                    }</h6>
                                    <div className="price-container" >
                                        <p style={{textDecoration:"line-through"}}>{val.originalPrice}</p>
                                        <p style={{color:"#4A7766"}}><b>{val.salePrice}</b></p>
                                        <p><span>{
                                               (( Number(val.salePrice.replace(/[₹,]/g, ""))/Number(val.originalPrice.replace(/[₹,]/g, "")))*100).toFixed(0)
                                            }%</span>Off</p>
                                    </div>
                                </div>
                                <div className="btn-container">
                                    <button id="cart" 
                                        onClick={(e)=>{
                                            e.stopPropagation();
                                            cartHandler(val);
                                        }}
                                    >Add to Cart</button>
                                    <button id="buy"
                                        onClick={(e)=>{
                                            e.stopPropagation();
                                            (authorized)? ((navigate(`/payment?pd=${encodeURIComponent(JSON.stringify([{userID:userData._id, _id:val._id, name: val.name, category:val.category, price: val.salePrice, imageURL:val.imageURL}]))}`))):(toast.error("Login First"))
                                        }}
                                    >Buy Now</button>
                                </div>
                            </Card>
                    )
                })}
            </CardHolder>
        </CardContainer>
    )

}