import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Contxt } from "../../ContextProvider";
import useAuth from "../../Auth/Auth";
import SideBar from "../SideBar";
import { toast } from "react-toastify"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faQuestion, faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const Wrapper = styled.div`
    padding:10px;
    background-color:#4A7766;
    @media (min-width:979px){
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
`;
const Nav = styled.nav`
    display:flex;
    justify-content:space-between;
    align-items:center;
    a{
        text-decoration:none;
    }
    .logo-txt{
        margin:0;
        padding:0;
        text-align:center;
        color:whitesmoke;
    }
    .searchInput{
        display:flex;
        align-items:center;
        gap:5px;
            input{
                background-color:whitesmoke;
                color:black;
                padding:5px;
                border:none;
                border-radius:10px;
            }
            .searchIcon{
                width:30px;
                height:30px;    
            }
    }
    .icons{
            .menuIcon{
            transition: background-color 0.3s ease;
                &:hover{
                    background-color: #3E6254;
                }
            }
    }
    @media (max-width:576px){
        .logo-txt{
            img{
                width:40px;
                height:40px;
            }
            p{
                font-size:1.3em;
                font-weight:500;
            }
        }
        .searchInput{
            width:60%;
            input{
                width:70%;
            }
            .searchIcon{
                width:20px;
                height:20px;

            }
            
        }
    }
    @media (min-width:577px) and (max-width:978px ){
        .logo-txt{
            img{
                width:70px;
                height:70px;
            }
            p{
                font-size:1.7em;
                font-weight:600;
            }
        }
        .searchInput{
            width:74%;
            display:flex;
            align-items:center;
            justify-content:center;
            gap:5px;
            input{
                background: white;
                outline: none;
                border: none;
                padding: 10px;
                margin:0;
                border-radius: 10px;
                width:70%;
            }
        }
    }
    @media (min-width:979px){
        width:55%;
        .logo-txt{
            display:flex;
            align-items:center;
            gap:10px;
            img{
                width:90px;
                height:90px;
            }
            p{
                font-size:2.1em;
                font-weight:600;
            }
        }
        .searchInput{
            display:flex;
            justify-content:center;
            align-items:center;
            width:60%;
            input{
                width:70%;
                margin-right:10px;
                padding:10px;
                background-color:whitesmoke;
                color:black;
                border:none;
                border-radius:10px;
            }
            
        }
        .searchInput{
            display:block;
        }
        .icons{
            display:none;
        }
    }
`;
const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items: space-evenly;
    gap:10px;
        #login{
            border:2px solid whitesmoke;
        }
    button{
        color:whitesmoke;
        width:100%;
        background-color:transparent;
        padding:5px;
        border:none;
        transition: background-color 0.3s ease;
        a{
            text-decoration:none;
            color:whitesmoke;
        }
        &:hover{
            background-color: #3E6254;
            border:2px solid whitesmoke;
        }
    }
    @media (min-width:979px){
       flex-direction:row; 
    }
`;

export default function Menu() {
    const [display, setDisplay] = useState("none");
    const [search, setSearch] = useState(null);
    const navigate = useNavigate();
    const { authorized, userData, loading, error } = useAuth();
    const { setIsOpen } = useContext(Contxt);
    const Box = styled.div`
        display:${display};
        margin-top:10px;
        @media (min-width:979px){
            display:block;
            margin:0;
            width:40%;
        }
    `;
    const searhHandler = ()=>{
        (search == null || search == " ") ? 
            (toast.warn(`Type something`)) : 
            (navigate(`/search?search=${encodeURIComponent(search)}`))
    }
    return (
        <><SideBar />
            <Wrapper>
                <Nav>
                    <Link to={'/'}>
                        <div className="logo-txt">
                            <img src="https://res.cloudinary.com/dqraj6g9a/image/upload/v1745584931/logo_oehann.png" alt="" />
                            <p>eCom</p>
                        </div>
                    </Link>
                    <div className="searchInput">
                        <input type="text" name="search" id="search" placeholder="Search your item"
                            onChange={(e) => {
                                setSearch(e.target.value);
                            }}
                            onKeyDown={(e)=>{
                                e.key === 'Enter' && searhHandler()
                            }}
                        />
                        <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" style={{ color: "#ffffff" }} className="searchIcon"
                            onClick={() => {
                                searhHandler()
                            }}
                        />
                    </div>
                    <div className="icons">
                        <FontAwesomeIcon icon={faBars} style={{ width: "30px", height: "30px", color: "#ffffff" }} className="menuIcon"
                            onClick={() => {
                                (display == "none") ? (setDisplay("block")) : (setDisplay("none"));
                            }}
                        />
                    </div>
                </Nav>
                <Box>
                    <Container>
                        <button id="login" onClick={
                            () => {
                                (authorized & !loading) ? (navigate("/profile")) : (navigate("/signin"))
                            }}>
                            <FontAwesomeIcon icon={faUser} size="2xl" style={{ marginRight: "15px" }} />
                            {
                                (authorized & !loading) ? (userData.name.length > 10 ? `${userData.name.slice(0, 10)}...` : userData.name) : ("Login")
                            }
                        </button>
                        <button
                            onClick={() => { setIsOpen(prev => !prev) }}
                        ><FontAwesomeIcon icon={faCartShopping} size="2xl" style={{ marginRight: "15px" }} />Cart</button>
                        <button onClick={() => {
                            (!authorized) ?
                                (toast.error("Login First")) : (navigate(`/help`))
                        }}><FontAwesomeIcon icon={faQuestion} size="2xl" style={{ marginRight: "15px" }} />Help</button>
                    </Container>
                </Box>
            </Wrapper></>
    )
}