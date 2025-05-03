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
    display: flex;
    gap: 15px;
    margin-top: 20px;
    padding: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    @media (max-width: 767px) {
        flex-direction: column;
        padding: 10px;
    }
`;

const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 100%;
    max-width: 400px;
    gap: 15px;
    align-items: center;
    
    .primaryImg {
        width: 100%;
        height: auto;
        max-height: 400px;
        object-fit: contain;
    }

    .secondaryImgBox {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        justify-content: center;
    }

    @media (min-width: 768px) {
        width: 35%;
    }
    @media (max-width: 575px) {
        max-width: 100%;
        .primaryImg {
            max-height: 300px;
        }
    }
`;

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    justify-content: center;
    padding: 10px 0;
    
    button {
        flex: 1;
        padding: 12px;
        border-radius: 8px;
        font-size: 1em;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    
    #cart {
        background-color: transparent;
        color: #4A7766;
        border: 2px solid #4A7766;
        &:hover {
            background-color: #4A7766;
            color: white;
        }
    }
    
    #order {
        background-color: #4A7766;
        color: whitesmoke;
        border: none;
        &:hover {
            background-color: #3E6254;
        }
    }

    @media (max-width: 575px) {
        button {
            padding: 10px;
            font-size: 0.9em;
        }
    }
`;

const DataContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 10px;
    
    @media (min-width: 768px) {
        width: 65%;
    }
`;

const RateContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    font-size: 1.1em;
    border: 2px solid #4A7766;
    border-radius: 8px;
    color: #4A7766;
    padding: 6px 12px;
    width: fit-content;
    
    p {
        margin: 0;
    }
    
    #rate {
        font-size: 1.1em;
    }

    @media (max-width: 575px) {
        font-size: 1em;
        padding: 5px 10px;
    }
`;

const PriceContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    
    p {
        font-size: 1.2em;
        margin: 0;
    }
    
    #originalPrice {
        text-decoration: line-through;
    }
    
    #salePrice {
        font-weight: 500;
        font-size: 1.5em;
    }
    
    .percentBox {
        font-size: 2em;
        color: #4A7766;
        font-weight: 500;
    }

    @media (max-width: 575px) {
        p {
            font-size: 1.1em;
        }
        #salePrice {
            font-size: 1.3em;
        }
        .percentBox {
            font-size: 1.8em;
        }
    }
`;

const Seller = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.1em;
    
    h6 {
        color: #4A7766;
        margin: 0;
    }
    
    div {
        background-color: #4A7766;
        color: whitesmoke;
        padding: 6px 12px;
        border-radius: 5px;
    }

    @media (max-width: 575px) {
        font-size: 1em;
    }
`;

const HighlightsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
    
    h5 {
        margin: 0;
        padding: 5px;
        border-bottom: 2px solid gray;
    }
    
    .highlights, p {
        font-size: 1.1em;
    }
    
    .highlights {
        flex: 1;
        min-width: 200px;
    }

    @media (max-width: 575px) {
        flex-direction: column;
        gap: 15px;
        .highlights, p {
            font-size: 1em;
        }
    }
`;

const Verify = styled.div`
    color: #4A7766;
    padding: 10px;
    border: 2px solid #4A7766;
    font-size: 1em;
    font-weight: 600;
    width: fit-content;
    border-radius: 5px;

    @media (max-width: 575px) {
        font-size: 0.9em;
        padding: 8px;
    }
`;

const DescriptionContainer = styled.div`
    width: 100%;
    
    h4 {
        margin: 0;
        padding: 10px;
        border: 2px solid gray;
        border-bottom: none;
    }
    
    div {
        font-size: 1.1em;
        border: 2px solid gray;
        padding: 15px;
    }

    @media (max-width: 575px) {
        div {
            font-size: 1em;
            padding: 10px;
        }
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
    const { userData, authorized, loading } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:8000/singlePdt/?category=${category}&_id=${_id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data == null) {
                    console.log("Null");
                } else {
                    console.log('Product:', data);
                    setData(data);
                    setIsLoading(false);
                }
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                setErrorMsg(error);
            });
    }, []);

    async function cartHandler(val) {
        if (!loading) {
            if (authorized) {
                try {
                    const response = await fetch('http://localhost:8000/addProduct', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            userID: userData._id,
                            pID: val._id,
                            pName: val.name,
                            pCategory: val.category,
                            pPrice: val.salePrice,
                            pImage: val.imageURL
                        })
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
            } else {
                toast.error("Login first");
            }
        }
    }

    return (
        <ContextProvider>
            <Menu />
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                    {data.map((val, index) => (
                        <Wrapper key={index}>
                            <ImgContainer>
                                <img src={val.imageURL} alt={val.name} className="primaryImg" />
                                <ButtonContainer>
                                    <button
                                        id="cart"
                                        onClick={() => cartHandler(val)}
                                    >
                                        Add to Cart
                                    </button>
                                    <button
                                        id="order"
                                        onClick={() => {
                                            authorized
                                                ? navigate(`/payment?pd=${encodeURIComponent(JSON.stringify([{
                                                    userID: userData._id,
                                                    _id: val._id,
                                                    name: val.name,
                                                    category: val.category,
                                                    salePrice: val.salePrice,
                                                    imageURL: val.imageURL
                                                }]))}`)
                                                : toast.error("Login first");
                                        }}
                                    >
                                        Order Now
                                    </button>
                                </ButtonContainer>
                            </ImgContainer>
                            <DataContainer>
                                <h4>{val.name}</h4>
                                <RateContainer>
                                    <p>4</p>
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#4a7766", width: "24px", height: "24px" }} />
                                    <span id="rate">Ratings</span>
                                </RateContainer>
                                <PriceContainer>
                                    <div>
                                        <p id="originalPrice">{val.originalPrice}</p>
                                        <p id="salePrice">{val.salePrice}</p>
                                    </div>
                                    <div className="percentBox">
                                        {((Number(val.salePrice.replace(/[₹,]/g, "")) /
                                        Number(val.originalPrice.replace(/[₹,]/g, ""))) * 100).toFixed(0)}%
                                    </div>
                                </PriceContainer>
                                <Seller>
                                    <h6>Seller</h6> 
                                    <div>{val.sellerName}</div>
                                </Seller>
                                <HighlightsContainer>
                                    <div className="highlights">
                                        <h5>Highlights</h5>
                                        <ul>
                                            {Array.isArray(val.highlights) ? (
                                                val.highlights.map((highlight, index) => (
                                                    <li key={index}>{highlight}</li>
                                                ))
                                            ) : (
                                                Object.keys(val.highlights).map((key, index) => (
                                                    <li key={index}>{`${key}: ${val.highlights[key]}`}</li>
                                                ))
                                            )}
                                        </ul>
                                    </div>
                                    <p>Expected delivery within 4 days</p>
                                </HighlightsContainer>
                                <Verify>Verified Product</Verify>
                                <DescriptionContainer>
                                    <h4>Specifications</h4>
                                    <div>
                                        <ul>
                                            {Object.keys(val.specifications).map(key => (
                                                <li key={`${val._id}-${key}`}>{`${key}: ${val.specifications[key]}`}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </DescriptionContainer>
                            </DataContainer>
                        </Wrapper>
                    ))}
                </>
            )}
            <Footer />
        </ContextProvider>
    );
}