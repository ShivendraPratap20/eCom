import React, { useState, useEffect } from "react";
import Menu from "../Home/Menu";
import ContextProvider from "../../ContextProvider";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import useAuth from "../../Auth/Auth";
import { toast } from 'react-toastify';
import Footer from "../Footer";

const Wrapper = styled.div`
    display:flex;
    gap:5px;
    margin-top:30px;
    padding:10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    @media (min-width: 576px) and (max-width: 867.98px) {
        flex-direction:column;
    }
`;
const ImgContainer = styled.div`
    display:flex;
    flex-direction:column;
    padding:5px;
    width:30%;
    height:100%;
    gap:10px;
    .primaryImg{
        width:100%;
        height:300px;
    }
    .secondaryImgBox{
        display:flex;
        width:80px;
        height:80px;
        justify-content:space-between;
    }
    @media (min-width: 576px) and (max-width: 867.98px) {
        width:100%;
        justify-content:center;
        align-items:center;
        .primaryImg{
            width:500px;
            height:500px;
        }
    }
`;
const ButtonContainer = styled.div`
    width:100%;
    display:flex;
    gap:10px;
    justify-content:space-around;
    align-items:center;
    padding:5px;
    button{
        width:40%;
        padding:10px;
    }
    #cart{
        background-color:transparent;
        color:#4A7766;
        border:2px solid #4A7766;
    }
    #order{
        background-color:#4A7766;
        color:whitesmoke;
        border:none; 
    }
`;
const DataContainer = styled.div`
    width:70%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    gap:20px;
`;
const RateContainer = styled.div`
    display:flex;
    align-items:center;
    gap:5px;
    font-weight:600;
    font-size:1.3em;
    border:2px solid #4A7766;
    border-radius:10px;
    color:#4A7766;
    padding:5px;
    p{
        margin:0;
    }
    #rate{
        font-size:1.3em;
    }
`;
const PriceContainer = styled.div`
    display:flex;
    gap:15px;
    align-items:center;
    justify-content:center;
    p{
        font-size:1.5em;
        margin:0;    
        padding:0;   
    }
    #originalPrice{
        text-decoration:line-through;
    }
    #salePrice{
        font-weight:500;
        font-size:1.8em;
    }
    .percentBox{
        font-size:3em;
        color:#4A7766;
        font-weight:500;
    }
`;
const Seller = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    gap:7px;
    font-size:1.2em;
    h6{
        color:#4A7766;
    }
    div{
        background-color:#4A7766;
        color:whitesmoke;
        padding:10px;
        border-radius:5px;
    }
`;
const HighlightsContainer = styled.div`
    display:flex;
    align-items:center;
    gap:30px;
    width:100%;
    h5{
        margin:0;
        padding:5px;
        border-bottom:2px solid gray;
    }
    .highlights, p{
        font-size:1.3em;
    }
`;
const Verify = styled.div`
    color:#4A7766;
    padding:15px;
    border: 2px solid #4A7766;
    font-size:1em;
    font-weight:600;
`
const DescriptionContainer = styled.div`
    width:100%;
    h4{
        margin:0;
        padding:15px;
        border:2px solid gray;
        border-bottom:none;
    }
        div{
        font-size:1.2em;
            border:2px solid gray;
            padding:10px;
        }
    `;

export default function SingleProduct() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');
    const _id = queryParams.get("pid");
    const pname = queryParams.get("pname");
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();
    const {userData, authorized, loading} = useAuth();

    useEffect(() => {
        fetch(`/?category=${category}&_id=${_id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data == null) {
                    console.log("Null");
                }
                else {
                    console.log('Product :', data);
                    setData(data);
                    console.log(data);
                    setIsLoading(false);
                }
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                setErrorMsg(error);
            });
    }, []);

    async function cartHandler(val){
        if(!loading){
            if(authorized){
                try {
                    const response = await fetch('/addProduct', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({userID:userData._id, pID:val._id, pName: val.name, pCategory:val.category, pPrice: val.salePrice, pImage:val.imageURL})
                    });
                
                    if (!response.ok) {
                      throw new Error(`HTTP error! status: ${response.status}`);
                    }
                
                    const result = await response.json();
                    console.log('Success:', result);
                    toast.success("Added to cart");
                  } catch (error) {
                    console.error('Error:', error);
                  }
            }else if(!authorized){
                console.log("Signin first");
                toast.error("Login first");
            }
        }
    }

    return (
        <ContextProvider>
            <Menu />
            {
                (isLoading) ?
                    (null) :
                    (<>
                        {data.map((val, index) => {
                            return <Wrapper key={index}>
                                <ImgContainer>
                                    <img src={val.imageURL} alt="" className="primaryImg" />
                                    <ButtonContainer className="buttonContainer">
                                        <button id="cart"
                                            onClick={()=>{cartHandler(val)}}
                                        >Add to Cart</button>
                                        <button id="order"
                                            onClick={()=>{
                                                authorized? (navigate(`/payment?pd=${encodeURIComponent(JSON.stringify([{userID:userData._id, _id:val._id, name: val.name, category:val.category, price: val.salePrice, imageURL:val.imageURL}]))}`)) : (toast.error("Login first"));
                                            }}
                                        >Order Now</button>
                                    </ButtonContainer>
                                </ImgContainer>
                                <DataContainer>
                                    <h4>{val.name}</h4>
                                    <RateContainer>
                                        <p>4</p>
                                        <FontAwesomeIcon icon={faStar} style={{color: "#4a7766",width:"30px", height:"30px"}} />
                                        <span id="rate">Ratings</span>
                                    </RateContainer>
                                    <PriceContainer>
                                        <div>
                                            <p id="originalPrice">{val.originalPrice}</p>
                                            <p id="salePrice">{val.salePrice}</p>
                                        </div>
                                        <div className="percentBox">{
                                               (( Number(val.salePrice.replace(/[₹,]/g, ""))/Number(val.originalPrice.replace(/[₹,]/g, "")))*100).toFixed(0)
                                            }%</div>
                                    </PriceContainer>
                                    <Seller className="seller">
                                        <h6>Seller</h6>
                                        <div>{val.sellerName}</div>
                                    </Seller>
                                    <HighlightsContainer>
                                        <div className="highlights">
                                            <h5>Highlights</h5>
                                            <ul>
                                                {
                                                    (Array.isArray(val.highlights))?
                                                    (
                                                        val.highlights.map((val, index)=>{
                                                            return <li key={index}>{val}</li>
                                                        })
                                                    ):
                                                    (
                                                        Object.keys(val.highlights).map((key, index)=>{
                                                            return <li key={index}>{`${key} : ${val.highlights[key]}`}</li>
                                                        })
                                                    )
                                                }
                                            </ul>
                                        </div>
                                        <p>Expected deliver within 4 days;</p>
                                    </HighlightsContainer>
                                    <Verify>Verified Product</Verify>
                                    <DescriptionContainer>
                                        <h4>Specifications</h4>
                                        <div>
                                        <ul>
                                            {Object.keys(val.specifications).map(key => {
                                                return (<li key={val._id}>{`${key} : ${val.specifications[key]}`}</li>)
                                            })}
                                        </ul>
                                        </div>
                                    </DescriptionContainer>
                                </DataContainer>
                            </Wrapper>
                        })}
                    </>)
            }
            <Footer/>
        </ContextProvider>
    );
}