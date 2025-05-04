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
    width: 90%;
    max-width: 1000px;
    margin: 24px auto;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    background-color: #ECE7E2;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    @media (max-width: 768px) {
        width: 95%;
        padding: 12px;
        margin: 16px auto;
    }
    @media (max-width: 480px) {
        padding: 10px;
    }
`;

const LogoTxt = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    .profile {
        display: flex;
        align-items: center;
        justify-content: center;
        width: clamp(120px, 25vw, 160px);
        height: clamp(120px, 25vw, 160px);
        border-radius: 50%;
        background-color: #4A7766;
    }
    .profilePic{
       width: clamp(60px, 20vw, 100px);
        height: clamp(60px, 20vw, 100px);
        object-fit: contain;
    }
    @media (max-width: 480px) {
        .profile {
            width: clamp(80px, 20vw, 100px);
            height: clamp(80px, 20vw, 100px);
        }
        .profilePic{
            width: clamp(40px, 12vw, 60px);
            height: clamp(40px, 12vw, 60px);
        }
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;
    background-color: whitesmoke;
    padding: 16px;
    border-radius: 12px;
    input {
        background: transparent;
        font-size: clamp(1rem, 2.5vw, 1.2rem);
        border: none;
        color: black;
        width: 100%;
        &:focus {
            border: 2px solid black;
            border-radius: 4px;
            outline: none;
        }
    }
    span {
        font-size: clamp(1rem, 2.5vw, 1.2rem);
        color: #4A7766;
        font-weight: 600;
    }
    #cart {
        padding: 10px;
        background-color: #4A7766;
        color: white;
        border-radius: 8px;
        border: none;
        font-size: clamp(0.9rem, 2.5vw, 1rem);
        cursor: pointer;
        transition: background-color 0.2s;
        &:hover {
            background-color: #3a5f50;
        }
    }
    #logout {
        position: absolute;
        top: 12px;
        right: 12px;
        padding: 8px 16px;
        background-color: transparent;
        color: #4A7766;
        border: 2px solid #4A7766;
        border-radius: 8px;
        font-size: clamp(0.9rem, 2.5vw, 1rem);
        cursor: pointer;
        transition: all 0.2s;
        &:hover {
            background-color: #4A7766;
            color: whitesmoke;
        }
    }
    @media (max-width: 480px) {
        padding: 12px;
        #logout {
            padding: 6px 12px;
            font-size: clamp(0.8rem, 2vw, 0.9rem);
        }
    }
`;

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    h4 {
        font-size: clamp(1.1rem, 3vw, 1.3rem);
        margin: 0;
    }
`;

const PdCard = styled.div`
    height: 300px;
    overflow: auto;
    padding: 8px;
    @media (max-width: 480px) {
        height: 250px;
    }
`;

export default function User() {
    const { authorized, userData, loading, error } = useAuth();
    const { setIsOpen } = useContext(Contxt);
    const [disable, setDisable] = useState(true);
    const [adrs, setAdrss] = useState("");
    const inputRef = useRef();
    const navigate = useNavigate();

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
                if (result.status == "SUCCESS") toast.success(result.message);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }

    const logout = () => {
        fetch("/logout", {
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
            console.log(userData.address);
            setAdrss(userData.address);
        }
    }, [loading]);

    if (loading) return <div>Loading...</div>;
    return (
        (authorized) ? (
            <ContextProvider>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <Menu />
                <Wrapper>
                    <Container>
                        <LogoTxt>
                            <div className="profile">
                                <FontAwesomeIcon icon={faUser} style={{ color: "white"}} className="profilePic" />
                            </div>
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
                            {disable ? (
                                <FontAwesomeIcon
                                    icon={faPencil}
                                    style={{ color: "#4A7766", width: "20px", height: "20px" }}
                                    onClick={() => { setDisable(prev => !prev); inputRef.current.focus(); }}
                                />
                            ) : (
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    style={{ color: "#4A7766", width: "20px", height: "20px" }}
                                    onClick={() => {
                                        setDisable(prev => !prev);
                                        setAddress(userData._id, adrs);
                                        inputRef.current.blur();
                                    }}
                                />
                            )}
                        </Head>
                        <input
                            type="text"
                            disabled={disable}
                            ref={inputRef}
                            placeholder="Address"
                            value={adrs}
                            onChange={(e) => { setAdrss(e.target.value); }}
                        />
                    </Container>
                    <Container>
                        <h4>Total orders: <span>{userData.orders.length}</span></h4>
                        <PdCard>
                            {userData.orders.map((val, index) => (
                                <ProductCard key={index}>
                                    <img src={val.imageURL} alt="" />
                                    <div
                                        className="body"
                                        onClick={() => {
                                            navigate(`/results?category=${encodeURIComponent(val.category)}&pid=${encodeURIComponent(val._id)}&pname=${encodeURIComponent(val.name)}`);
                                        }}
                                    >
                                        <h6>
                                            {val.name.length > 22 ? `${val.name.slice(0, 25)}...` : val.name}
                                        </h6>
                                        <p>{val.salePrice}</p>
                                    </div>
                                </ProductCard>
                            ))}
                        </PdCard>
                    </Container>
                    <Container>
                        <h4>Total Products in Cart: <span>{userData.cartProduct.length}</span></h4>
                        <button id="cart" onClick={() => { setIsOpen(prev => !prev); }}>
                            See Cart
                        </button>
                    </Container>
                </Wrapper>
                <Footer />
            </ContextProvider>
        ) : (
            <div>Login First</div>
        )
    );
}