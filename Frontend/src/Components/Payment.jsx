import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Menu from "./Home/Menu";
import useAuth from "../Auth/Auth";
import { useFormik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faUser } from "@fortawesome/free-solid-svg-icons";
import ContextProvider from "../ContextProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { ProductContainer, ProductCard } from "./SideBar";
import * as Yup from "yup";
import { toast } from "react-toastify";

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 20px auto;
    background-color: #ECE7E2;
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 15px;
    
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
        padding: 20px;
    }
    @media (min-width: 992px) {
        width: 80%;
    }
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 10px;
`;

const Bill = styled.div`
    padding: 15px;
    background-color: whitesmoke;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    h4, h5, p {
        margin: 0;
        padding: 5px 0;
    }
    
    input {
        width: 100%;
        padding: 10px;
        color: black;
        background-color: transparent;
        border: none;
        border-bottom: 2px solid #4A7766;
        border-radius: 5px;
        outline: none;
        margin-bottom: 15px;
        font-size: 1em;
    }
    
    @media (max-width: 575px) {
        padding: 10px;
        h4 {
            font-size: 1.2em;
        }
        h5, p {
            font-size: 0.9em;
        }
    }
`;
const CheckBox = styled.div`
    input[type="radio"] {
        accent-color: #4A7766;
        transform: scale(1.5); 
    margin-right: 8px;     
    }
    padding: 10px;
    display: flex;
    justify-content: space-between;
    font-size: 1em;
    font-weight: 500;
    @media (max-width:575px){
        flex-direction:column;
        gap:5px;
    }
`;
const PaymentBox = styled.div`
    padding: 15px;
    background-color: whitesmoke;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    h3 {
        margin: 0 0 15px 0;
        font-size: 1.3em;
    }
    
    input {
        width: 100%;
        padding: 10px;
        color: black;
        background-color: transparent;
        border: none;
        border-bottom: 2px solid #4A7766;
        border-radius: 5px;
        outline: none;
        margin-bottom: 15px;
        font-size: 1em;
    }
    
    select {
        width: 100%;
        padding: 10px;
        background: transparent;
        color: black;
        border: 2px solid #4A7766;
        border-radius: 5px;
        margin-bottom: 15px;
        font-size: 1em;
    }
    
    .monthAndYear {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }
    
    button {
        padding: 12px;
        color: whitesmoke;
        background-color: #4A7766;
        border-radius: 8px;
        border: none;
        font-size: 1em;
        width: 100%;
        max-width: 200px;
        margin: 15px auto 0;
        display: block;
        cursor: pointer;
        transition: background-color 0.3s ease;
        
        &:hover {
            background-color: #3E6254;
        }
    }
    
    @media (max-width: 575px) {
        padding: 10px;
        select, input {
            font-size: 0.9em;
        }
        button {
            max-width: 150px;
        }
    }
`;

const Right = styled.div`
    padding: 15px;
    background-color: whitesmoke;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    h4 {
        margin: 0 0 15px 0;
        font-size: 1.3em;
    }
    
    @media (max-width: 575px) {
        padding: 10px;
        h4 {
            font-size: 1.2em;
        }
    }
`;

const Price = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    
    h5 {
        margin: 0;
        font-size: 1.1em;
    }
    
    #price {
        color: #4A7766;
        font-weight: 700;
        font-size: 1.3em;
    }
    
    @media (max-width: 575px) {
        h5 {
            font-size: 1em;
        }
        #price {
            font-size: 1.2em;
        }
    }
`;

const months = [
    '01', '02', '03', '04', '05', '06',
    '07', '08', '09', '10', '11', '12'
];
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 10 }, (_, i) => (currentYear + i).toString());

const validationSchema = Yup.object({
    name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .required("Name is required"),
    address: Yup.string()
        .required("Address is required"),
    cardNumber: Yup.string()
        .matches(/^\d+$/, "Enter only digits")
        .min(12, "Number must be at least 12 digits")
        .max(19, "Number can't be longer than 19 digits")
        .required("Card Number is required"),
    cvv: Yup.string()
        .matches(/^\d+$/, "Enter only digits")
        .min(3, "CVV must be at least 3 digits")
        .max(4, "CVV can't be longer than 4 digits")
        .required("CVV is required"),
    expiryMonth: Yup.string()
        .matches(/^(0[1-9]|1[0-2])$/, "Must be a valid month (01-12)")
        .required("Month is required")
});

export default function Payment() {
    const { authorized, userData, loading, error, verifyAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const pdParam = queryParams.get("pd");
    const [display, setDisplay] = useState(false);
    const inputRef = useRef();
    let productData = [];
    const handleRadioChange = (value) => {
        setDisplay(value === 'show');
    };

    try {
        if (pdParam) {
            productData = JSON.parse(decodeURIComponent(pdParam));
            console.log(productData);
        }
    } catch (error) {
        console.error("Invalid JSON in URL", error);
    }
    const setAddress = (userID, adrs) => {
        fetch("/setAddress", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ _id: userID, address: adrs })
        })
            .then(response => response.json())
            .then(result => {
                console.log("Success:", result);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }
    async function placeOrder() {
        if (!loading) {
            if (authorized) {
                try {
                    const response = await fetch('/orders', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ productArray: productData, userID: userData._id })
                    });

                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }

                    const result = await response.json();
                    console.log('Success:', result);
                    toast.success("Order Placed");
                    verifyAuth();
                    navigate("/checkout");
                    setAddress(userData._id, inputRef.current.value);
                } catch (error) {
                    console.error('Error:', error);
                }
            } else {
                toast.error("Login First!");
                navigate("/signin");
            }
        }
    }

    useEffect(() => {
        verifyAuth();
    }, []);
    const { values, errors, handleChange, handleBlur, handleSubmit, touched } = useFormik({
        initialValues: {
            name: "",
            cardNumber: "",
            expiryMonth: "",
            expiryYear: "",
            cvv: "",
            address: ""
        },
        validationSchema: validationSchema,
        onSubmit: placeOrder
    });

    if (loading) return <div>Loading...</div>;
    return (
        <ContextProvider>
            <Menu />
            {authorized ? (
                <Container>
                    <Left>
                        <Bill>
                            <h4>Billing Info</h4>
                            <h5>{userData.name.length > 15 ? `${userData.name.slice(0, 15)}...` : userData.name}</h5>
                            <p>{userData.phone}</p>
                            {userData.address == undefined || userData == null ? (
                                <>
                                    <input
                                        type="text"
                                        name="address"
                                        id="address"
                                        placeholder="Delivery address"
                                        value={values.address}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        ref={inputRef}
                                    />
                                    {touched.address && errors.address && <div style={{ color: "red" }}>{errors.address}</div>}
                                </>
                            ) : (
                                <p>{(values.address = userData.address)}</p>
                            )}
                        </Bill>
                        <CheckBox>
                            <div>
                                <input
                                    type="radio"
                                    name="payment"
                                    checked={display}
                                    onChange={() => handleRadioChange('show')}
                                />
                                <label htmlFor="cod">Cash On Delivery</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    checked={!display}
                                    onChange={() => handleRadioChange('none')}
                                    name="payment"
                                />
                                <label htmlFor="online">Online Payment</label>
                            </div>
                        </CheckBox>
                        <PaymentBox>
                            <h3>Payment Details</h3>
                            {(display) ?
                                (
                                    <button onClick={() => {
                                        const value = inputRef.current?.value?.trim();
                                        if (!value & !values.address) {
                                            toast.error("Please add address");
                                            console.log("add err");
                                            return;
                                        }
                                        placeOrder()
                                    }
                                    }>Pay</button>
                                )
                                :
                                (<form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Name on Card"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.name && errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
                                    <input
                                        type="text"
                                        name="cardNumber"
                                        id="cardNumber"
                                        placeholder="Card Number"
                                        value={values.cardNumber}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.cardNumber && errors.cardNumber && <div style={{ color: "red" }}>{errors.cardNumber}</div>}

                                    <div className="monthAndYear">
                                        <select
                                            name="expiryMonth"
                                            value={values.expiryMonth}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        >
                                            <option value="">Select Expiry Month</option>
                                            {months.map(month => (
                                                <option key={month} value={month}>{month}</option>
                                            ))}
                                        </select>
                                        {touched.expiryMonth && errors.expiryMonth && <div style={{ color: "red" }}>{errors.expiryMonth}</div>}

                                        <select
                                            name="expiryYear"
                                            value={values.expiryYear}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        >
                                            <option value="">Select Expiry Year</option>
                                            {years.map(year => (
                                                <option key={year} value={year}>{year}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <input
                                        type="text"
                                        name="cvv"
                                        id="cvv"
                                        placeholder="CVV"
                                        value={values.cvv}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.cvv && errors.cvv && <div style={{ color: "red" }}>{errors.cvv}</div>}
                                    <button type="submit">Pay</button>
                                </form>)}
                        </PaymentBox>
                    </Left>
                    <Right>
                        <h4>My Products</h4>
                        <ProductContainer>
                            <h3>Total Products <span>{productData.length}</span></h3>
                            {productData.map((val, index) => (
                                <ProductCard key={index}>
                                    <img src={val.imageURL} alt={val.name} />
                                    <div
                                        className="body"
                                        onClick={() => {
                                            navigate(`/results?category=${encodeURIComponent(val.category)}&pid=${encodeURIComponent(val._id)}&pname=${encodeURIComponent(val.name)}`);
                                        }}
                                    >
                                        <h6>
                                            {val.name.length > 25 ? `${val.name.slice(0, 25)}...` : val.name}
                                        </h6>
                                        <p>{val.price}</p>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faXmark}
                                            style={{
                                                width: "24px",
                                                height: "24px",
                                                color: "#4a7766",
                                                cursor: "pointer",
                                                position: "absolute",
                                                top: "5px",
                                                right: "5px"
                                            }}
                                            onClick={() => navigate(-1)}
                                        />
                                    </div>
                                </ProductCard>
                            ))}
                        </ProductContainer>
                        <Price>
                            <h5>Total Amount</h5>
                            {productData.length > 0 ? (
                                <h5 id="price">
                                    ₹{productData
                                        .map(val => Number(val.salePrice.replace(/[₹,]/g, "")))
                                        .reduce((acc, curr) => acc + curr, 0)
                                        .toLocaleString()}
                                </h5>
                            ) : (
                                <h5>₹0</h5>
                            )}
                        </Price>
                    </Right>
                </Container>
            ) : (
                () => {
                    toast.error("Login First");
                    navigate("/");
                }
            )}
        </ContextProvider>
    );
}