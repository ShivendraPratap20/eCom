import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Contxt } from '../ContextProvider';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faUser } from "@fortawesome/free-solid-svg-icons";
import useAuth from '../Auth/Auth';
import { toast } from 'react-toastify';

const Heading = styled.h2`
  padding:10px 0;
  color:#4A7766;
`;
const MiddleHeading = styled.h4`
  color:black;
  font-size:1.4em;
`;
const Container = styled.div`
  display:flex;
  flex-direction:column;
  gap:10px;
  position:relative;
  justify-content:space-between;
  align-items:space-between;  
  color:black;
  Span{
    color:#4A7766;
    font-size:1.5em;
  }
`
const Card = styled.div`
  display:flex;
  gap:12px;
  width:100%;
  align-items:center;
  background-color:#4A7766;
  color:whitesmoke;
  padding:10px;
  border-radius:10px;
  img{
    width:50px;
    height:50px;
  }
  .body{

  }
`;
const ProductContainer = styled.div`
height:55vh;
width:100%;
padding:0 5px;
margin-top:20px;  
overflow:auto;
`;
const ProductCard = styled.div`
background-color:whitesmoke;
display:flex;
position:relative;
align-items:center;
padding:5px;
border-radius:10px;
margin-bottom:5px;
gap:10px;
  img{
    width:60px;
    height:60px;
    gap:5px;
  }
  .body{
    h5, p, h6{
      padding:0;
      margin:0;
    }
    p{
      color:#4A7766;
      font-weight:700;
    }
  }
    &:hover{
      cursor:pointer;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
`
const Bottom = styled.div`
  display:grid;
  grid-template-row:auto auto;
  grid-template-column:auto auto;
  gap:5px 5px;
  width:100%;
  button{
    grid-column-start:1;
    grid-column-end:3;
    background-color:#4A7766;
    color:whitesmoke;
    padding:10px;
    border-radius:10px;
  }
`;
const LogInDiv = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:10px;
  height:100%;
  button{
    padding:10px;
    background-color:#4A7766;
    color:whitesmoke;
    border-radius:10px;
    border:none;
    font-size:1.5em;
    width:50%;
  }
`;
const SideBar = () => {
  const { isOpen, setIsOpen } = useContext(Contxt);
  const navigate = useNavigate();
  const { authorized,  loading, error, userData, verifyAuth} = useAuth();

  const removeProductFromCart = (userID, productID)=>{
    fetch(`http://localhost:8000/removeProduct?userID=${userID}&productID=${productID}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {console.log(data); toast.success("Product removed from the cart"); verifyAuth();})
      .catch(error => console.error('Error:', error));
  };
  useEffect(()=>{
    verifyAuth();
  }, [isOpen]);
  if (loading) {
    return (<div>Loading...</div>)
  } else {
    return (
      <div className={`sidebar ${isOpen ? 'visible' : ''}`}>
        <FontAwesomeIcon icon={faXmark} style={{ width: "50px", height: "50px", color: "#4a7766", position: "absolute", top: "0px", right: "0px", cursor: "pointer" }}
          onClick={() => { setIsOpen(prev => !prev); }}
        />
        <Heading>My Cart</Heading>
        {
          (authorized) ?
            (<Container>
              <Card>
                <FontAwesomeIcon icon={faUser} style={{ color: "white", height: "60px", width: "60px" }} />
                <div className="body">
                  <h4>{userData.name.length > 10 ? `${userData.name.slice(0, 10)}...` : userData.name}</h4>
                  <h6>{userData.phone}</h6>
                </div>
              </Card>
              <ProductContainer>
                <h3>Total Products <span>{userData.cartProduct.length}</span></h3>
                {
                  loading ? (<div>Loading...</div>) :
                    (
                      userData.cartProduct.map((val, index) => {
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
                              <p>{val.salePrice}</p>
                            </div>
                            <div><FontAwesomeIcon icon={faXmark} style={{ width: "30px", height: "30px", color: "#4a7766", cursor: "pointer", position: "absolute", top: "5px", right: "5px", }} 
                              onClick={()=>{removeProductFromCart(userData._id, val._id)}}
                            /></div>
                          </ProductCard>
                        )
                      })
                    )
                }
              </ProductContainer>
              <Bottom>
                <h5>Total Amount</h5>
                {
                  (userData.cartProduct.length > 0) ?
                    (
                      <h5>
                        ₹{
                          userData.cartProduct
                            .map(val => Number(val.salePrice.replace(/[₹,]/g, "")))
                            .reduce((acc, curr) => acc + curr, 0)
                            .toLocaleString()
                        }
                      </h5>
                    ) :
                    (
                      <h5>₹ 0</h5>
                    )
                }
                <button onClick={
                  () => {
                    if(userData.cartProduct.length>0)
                      navigate(`/payment?pd=${encodeURIComponent(JSON.stringify(userData.cartProduct))}`)
                    else
                    toast.warning("Add some product to cart");
                  }
                }>Check Out All</button>
              </Bottom>
            </Container>) : (
              <LogInDiv>
                <MiddleHeading>You need to SignIn first!</MiddleHeading>
                <button onClick={() => {navigate("/signin")}}>
                  Login
                </button>
              </LogInDiv>
            )
        }
      </div>
    );
  }


};

export default SideBar;
export { Card, ProductContainer, ProductCard, LogInDiv, MiddleHeading, Bottom };