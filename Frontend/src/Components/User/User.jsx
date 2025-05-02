import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useAuth from "../../Auth/Auth";
import Menu from "../Home/Menu";
import ContextProvider from "../../ContextProvider";
import { ProductCard } from "../SideBar";
import { Contxt } from "../../ContextProvider";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPencil, faCheck } from '@fortawesome/free-solid-svg-icons';
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    width:60%;
    margin:auto;
    border-radius:10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color:#ECE7E2;
    display:flex;
    flex-direction:column;
    gap:10px;
    padding:10px;
`;
const LogoTxt = styled.div`
    display:flex;
    flex-direction:column;
    gap:5px;
    align-items:center;
    .profile{
    display:flex;
        align-items:center;
        justify-content:center;
        width:180px;
        height:180px;
        border-radius:50%;
        background-color: #4A7766;
    }
`;
const Container = styled.div`
    display:flex;
    flex-direction:column;
    gap:5px;
    position:relative;
    background-color:whitesmoke;
    padding:10px;   
    border-radius:20px;
    input{
        background:transparent;
        font-size:1.4em;
        border:none;
        color:black;
        &:focus{
            border: 2px solid black;
        }
    }
    span{
        font-size: 1.4em;
        color: #4A7766;
        font-weight: 600;
    }
    #cart{
        padding:5px;
        background-color:#4A7766;
        color:white;
        border:none;
        border-radius:10px;
        &:hover{
            cursor:pointer;
            
        }
    }
    #logout{
        position:absolute;
        top:10px;
        right:15px;    
        padding:10px;
        background-color:transparent;
        color:#4A7766;
        border:2px solid #4A7766;
        border-radius:10px;
        &:hover{
            cursor:pointer;
            background-color:#4A7766;
            color:whitesmoke;
        }
        }
`;
const Head = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:10px;
`;
const PdCard = styled.div`
    height:300px;
    overflow:auto;
`;
export default function User() {
    const { authorized, userData, loading, error } = useAuth();
    const { setIsOpen } = useContext(Contxt);
    const [disable, setDisable] = useState(true);
    const [adrs, setAdrss] = useState("");
    const inputRef = useRef();
    const navigate = useNavigate();

    const setAddress = (userID, adrs) => {
        fetch("https://ecom-f5re.onrender.com/setAddress", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ _id: userID, address: adrs })
        })
            .then(response => response.json())
            .then(result => {
                console.log("Success:", result);
                if (result.status == "SUCCESS") toast.success(result.message);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }

    const logout = () => {
        fetch("https://ecom-f5re.onrender.com/logout", {
            method: "GET",
            credentials: "include"
        })
            .then(response => response.json())
            .then(result => {
                console.log("Success:", result);
                if (result.status == "SUCCESS") { toast.success(result.message); navigate("/"); }
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }

    useEffect(() => {
        if (!loading) {
            console.log(userData.address)
            setAdrss(userData.address);
        }
    }, [loading])
    if (loading) return <div>Loading</div>
    else
        return (
            (authorized) ?
                (
                    <ContextProvider>
                        <Menu />
                        <Wrapper>
                            <Container>
                                <LogoTxt>
                                    <div className="profile"><FontAwesomeIcon icon={faUser} size="2xl" style={{ color: "white", height: "100px", width: "100px" }} /></div>
                                    <Head>
                                        <h4>{userData.name}</h4>
                                    </Head>
                                </LogoTxt>
                                <button id="logout" onClick={() => { logout() }}>LogOut</button>
                            </Container>
                            <Container>
                                <Head>
                                    <h4>Contact Details</h4>
                                </Head>
                                <input type="text" disabled placeholder={userData.email} />
                                <input type="text" disabled placeholder={userData.phone} />
                            </Container>
                            <Container>
                                <Head>
                                    <h4>Address Details</h4>
                                    {
                                        disable ?
                                            (<FontAwesomeIcon icon={faPencil} style={{ color: "#4A7766", width: "20px", height: "20px" }}
                                                onClick={() => { setDisable(prev => !prev); inputRef.current.focus() }} />) : (
                                                <FontAwesomeIcon icon={faCheck} style={{ color: "#4A7766", width: "20px", height: "20px" }}
                                                    onClick={() => {
                                                        setDisable(prev => !prev);
                                                        setAddress(userData._id, adrs);
                                                        inputRef.current.blur()
                                                    }} />
                                            )
                                    }
                                </Head>
                                <input type="text" disabled={disable} ref={inputRef} placeholder="Address" value={adrs} onChange={(e) => { setAdrss(e.target.value) }} />
                            </Container>
                            <Container>
                                <h4>Total orders: <span>{userData.orders.length}</span></h4>
                                <PdCard>
                                    {
                                        userData.orders.map((val, index) => {
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
                                                </ProductCard>
                                            )
                                        })
                                    }
                                </PdCard>
                            </Container>
                            <Container>
                                <h4>Total Products in Cart: <span>{userData.cartProduct.length}</span></h4>
                                <button id="cart" onClick={() => { setIsOpen(prev => !prev) }}>
                                    See Cart
                                </button>
                            </Container>
                        </Wrapper>
                        <Footer />
                    </ContextProvider>
                ) : (
                    <div>Login First</div>
                )
        )
}
