import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Auth/Auth";
import { toast } from 'react-toastify';

const CardContainer = styled.div`
    display: flex;
    padding: 10px;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    @media (min-width: 768px) {
        width: 80%;
    }
`;

const CardHolder = styled.div`
    background-color: #ECE7E2;
    width: 100%;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding: 10px;
    a {
        text-decoration: none;
        color: black;
    }
    @media (max-width: 575px) {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
`;

const Card = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto;
    gap: 8px;
    background-color: whitesmoke;
    padding: 12px;
    transition: box-shadow 0.3s ease;
    
    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }

    .img-container {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    img {
        width: 100%;
        max-width: 200px;
        height: auto;
        aspect-ratio: 1/1;
        object-fit: contain;
    }

    .txt-container {
        display: flex;
        flex-direction: column;
        p, h5, h6 {
            margin: 2px 0;
        }
        span {
            color: #4A7766;
            font-weight: bold;
            font-size: 1.8em;
        }
    }

    .btn-container {
        display: flex;
        gap: 8px;
        button {
            padding: 8px;
            border-radius: 8px;
            flex: 1;
            font-size: 0.9em;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        #cart {
            background: transparent;
            color: #4A7766;
            border: 1px solid #4A7766;
            &:hover {
                background-color: #3E6254;
                color: white;
            }
        }
        #buy {
            background-color: #4A7766;
            border: none;
            color: whitesmoke;
            &:hover {
                background-color: #3E6254;
            }
        }
    }

    @media (max-width: 575px) {
        padding: 8px;
        h6 {
            font-size: 0.85rem;
        }
    }
`;

export default function ProductContainer({ productDt, category }) {
    const navigate = useNavigate();
    const { userData, authorized, loading, verifyAuth } = useAuth();

    const handler = (val) => {
        navigate(`/results?category=${encodeURIComponent(val.category)}&pid=${encodeURIComponent(val._id)}&pname=${encodeURIComponent(val.name)}`);
    };

    async function cartHandler(val) {
        if (!loading) {
            if (authorized) {
                try {
                    const response = await fetch('/addProduct', {
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
                    verifyAuth();
                } catch (error) {
                    console.error('Error:', error);
                }
            } else {
                toast.error("Login First!");
                navigate("/signin");
            }
        }
    }

    return (
        <CardContainer>
            <h3>Showing results for "{category}"</h3>
            <CardHolder>
                {productDt.map((val, index) => (
                    <Card key={index} onClick={() => handler(val)}>
                        <div className="img-container">
                            <img src={val.imageURL} alt={val.name} />
                        </div>
                        <div className="txt-container">
                            <h6>
                                {val.name.length > 50 ? `${val.name.slice(0, 50)}...` : val.name}
                            </h6>
                            <div className="price-container">
                                <p style={{ textDecoration: "line-through" }}>{val.originalPrice}</p>
                                <p style={{ color: "#4A7766" }}><b>{val.salePrice}</b></p>
                                <p>
                                    <span>
                                        {((Number(val.salePrice.replace(/[₹,]/g, "")) / 
                                        Number(val.originalPrice.replace(/[₹,]/g, ""))) * 100).toFixed(0)}%
                                    </span> Off
                                </p>
                            </div>
                        </div>
                        <div className="btn-container">
                            <button 
                                id="cart" 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    cartHandler(val);
                                }}
                            >
                                Add to Cart
                            </button>
                            <button 
                                id="buy"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    authorized 
                                        ? navigate(`/payment?pd=${encodeURIComponent(JSON.stringify([{
                                            userID: userData._id,
                                            _id: val._id,
                                            name: val.name,
                                            category: val.category,
                                            salePrice: val.salePrice,
                                            imageURL: val.imageURL
                                        }]))}`)
                                        : toast.error("Login First");
                                }}
                            >
                                Buy Now
                            </button>
                        </div>
                    </Card>
                ))}
            </CardHolder>
        </CardContainer>
    );
}