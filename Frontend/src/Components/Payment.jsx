import React, { useEffect, useState } from "react";
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
    width:95%;
    margin:auto;
    margin-top:20px;
    background-color:#ECE7E2;
    display:grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    border-radius:10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    @media (min-width:998px){
        width:70%;
    }
`;
const Left = styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
    width:100%;
    padding:10px;
`;
const Bill = styled.div`
    padding:10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color:whitesmoke;
    border-radius:10px;
    h4, h5, p{
        padding:0;
        margin:0;
    }
    input{
        width:100%;
        padding:10px;
        color:black;
        background-color:transparent;
        border:none;
        border-bottom: 3px solid #4A7766;
        border-radius:10px;
        outline:none;
        margin-bottom:15px;
    }
`;
const PaymentBox = styled.div`
    padding:10px;
    background-color:whitesmoke;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius:10px;
    input{
        width:100%;
        padding:10px;
        color:black;
        background-color:transparent;
        border:none;
        border-bottom: 3px solid #4A7766;
        border-radius:10px;
        outline:none;
        margin-bottom:15px;
    }
    select{
        padding:10px;
        background:transparent;
        color:black;
        border:2px solid #4A7766;
        border-radius:10px;
    }
    .monthAndYear{
        width:100%;
        display:flex;
        justify-content:space-around;
    }
    button{
        padding:10px;
        color:whitesmoke;
        background-color:#4A7766;
        border-radius:10px;
        border:none;
        font-size:1.2em;
        width:40%;
        margin:auto;
    }
`;
const Right = styled.div`
    width:100%;
    background-color:whitesmoke;
    padding:10px;
`;
const Price = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 10px;
    #price{
        color:#4A7766;
        font-weight:700;
        font-size:1.5em;
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

    let productData = [];

    try {
        if (pdParam) {
            productData = JSON.parse(decodeURIComponent(pdParam));
            console.log(productData)
        }
    } catch (error) {
        console.error("Invalid JSON in URL", error);
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
                        body: JSON.stringify({ productArray: productData })
                    });

                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }

                    const result = await response.json();
                    console.log('Success:', result);
                    toast.success("Order Placed");
                    verifyAuth();
                    navigate("/checkout");
                } catch (error) {
                    console.error('Error:', error);
                }
            } else if (!authorized) {
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
        onSubmit:placeOrder
    });
    console.log(values)
    if (loading) return <div>Loading</div>
    else {
        return (
            <ContextProvider>
                <Menu />
                {
                    (authorized) ?
                        (
                            <Container>
                                <Left>
                                    <Bill>
                                        <h4>Billing Info</h4>
                                        <h5>{userData.name.length > 10 ? `${userData.name.slice(0, 10)}...` : userData.name}</h5>
                                        <p>{userData.phone}</p>
                                        {
                                            (userData.address.length < 0) ?
                                                (<>
                                                    <input type="text"
                                                        name="address"
                                                        id="address"
                                                        placeholder="Delivery address"
                                                        value={values.address}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur} />
                                                    { touched.address && errors.address && <div style={{ color: "red" }}>{errors.address}</div> }
                                                </>
                                                ) :
                                                (
                                                   <p>{values.address = userData.address}</p>
                                                )
                                        }
                                    </Bill>
                                    <PaymentBox>
                                        <h3>Payment Details</h3>
                                        <form onSubmit={handleSubmit}>
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
                                                {touched.expiryYear && errors.expiryYear && <div style={{ color: "red" }}>{errors.expiryYear}</div>}
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
                                        </form>
                                    </PaymentBox>
                                </Left>
                                <Right>
                                    <h4>My Product</h4>
                                    <ProductContainer>
                                        <h3>Total Products <span>{productData.length}</span></h3>
                                        {
                                            productData.map((val, index) => {
                                                return (
                                                    <ProductCard key={index}>
                                                        <img src={val.imageURL} alt="" />
                                                        <div className="body"
                                                            onClick={
                                                                () => {
                                                                    navigate(`/results?category=${encodeURIComponent(val.category)}&pid=${encodeURIComponent(val._id)}&pname=${encodeURIComponent(val.name)}`);
                                                                }
                                                            }
                                                        >
                                                            <h6>{
                                                                val.name.length > 22 ?
                                                                    (
                                                                        `${val.name.slice(0, 25)}....`
                                                                    ) : (val.name)
                                                            }</h6>
                                                            <p>{val.price}</p>
                                                        </div>
                                                        <div><FontAwesomeIcon icon={faXmark} style={{ width: "30px", height: "30px", color: "#4a7766", cursor: "pointer", position: "absolute", top: "5px", right: "5px", }}
                                                            onClick={() => { navigate(-1) }}
                                                        /></div>
                                                    </ProductCard>
                                                )
                                            })
                                        }
                                    </ProductContainer>
                                    <Price>
                                        <h5>Total Amount</h5>
                                        {
                                            (productData.length > 0) ?
                                                (
                                                    <h5 id="price">
                                                        ₹{
                                                            productData
                                                                .map(val => Number(val.price.replace(/[₹,]/g, "")))
                                                                .reduce((acc, curr) => acc + curr, 0)
                                                                .toLocaleString()
                                                        }
                                                    </h5>
                                                ) :
                                                (
                                                    <h5>₹ 0</h5>
                                                )
                                        }
                                    </Price>
                                </Right>
                            </Container>
                        ) : (
                            () => {
                                toast.error("Login First");
                                navigate("/");
                            }
                        )
                }
            </ContextProvider>
        )
    }
}