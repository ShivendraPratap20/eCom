import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
    margin-top:20px;
    background-color:rgba(0, 0, 0, 0.8);
    display:flex;
    width:100%;
    padding:20px 10px;
    font-size:1.2em;
    .box{
        width:50%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        gap:10px;  
        color:whitesmoke;
        text-align:justify;
        .para{
            width:60%;
            
        }
    .socialIcons{
        display:flex;
        gap:10px;
        img{
            width:40px;
            height:40px;
            &:hover{
                cursor:pointer;
            }
        }
    }
    .imgtxt{
        display:flex;
        align-items:center;
        justify-content:center;
        gap:5px;
    }
    }
    @media (max-width:767.98px){
        flex-direction:column;
        .box{
            width:100%;
        }
    }
`;
const ImgTxt = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:5px;
    h1{
        color:#4A7766;
    }
    img{
        width:90px;
        height:90px;
        
    }
`;

export default function Footer(){
    return(
        <Wrapper>
            <div className="box">
                <ImgTxt>
                    <img src="https://res.cloudinary.com/dqraj6g9a/image/upload/v1745584931/logo_oehann.png" alt="" />
                    <h1>eCom</h1>
                </ImgTxt>
                <div className="para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere ex illum minus. Aspernatur culpa, quasi porro voluptatibus qui neque sit vitae, voluptatem veniam ducimus nesciunt libero, tempora delectus consequatur?
                </div>
            </div>
            <div className="box">
                <h5>Follow us on</h5>
                <div className="socialIcons">
                    <img src="https://res.cloudinary.com/dqraj6g9a/image/upload/v1746002945/linked_uj3yue.png" alt="" />
                    <img src="https://res.cloudinary.com/dqraj6g9a/image/upload/v1746002944/insta_j5qmv9.png" alt="" />
                    <img src="https://res.cloudinary.com/dqraj6g9a/image/upload/v1746002944/fb_pqkdbr.png" alt="" />
                    <img src="https://res.cloudinary.com/dqraj6g9a/image/upload/v1746003257/social_jkwqwj.png" alt="" />
                </div>
                <h5>Contact Info</h5>
                    <div className="imgtxt">
                        <FontAwesomeIcon icon={faPhone} style={{color: "#ffffff",}} />
                        <p>+1 2234 5424</p>
                    </div>
                    <div className="imgtxt">
                        <FontAwesomeIcon icon={faEnvelope} style={{color: "#ffffff",}} />
                        <p>shivendragkp2002@gmail.com</p>
                    </div>
            </div>
        </Wrapper>
    )
}