import React, { use, useState } from "react";
import styled from "styled-components";
import Menu from "./Home/Menu";
import ContextProvider from "../ContextProvider";

const Container = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    width:60%;
    height:300px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:10px;
    background-color:#ECE7E2;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius:10px;
    padding:15px;
    text-align:center;
    h1{
        color:#4A7766;
    }
    textarea{
        background-color:whitesmoke;
        padding:10px;
        color:black;
        width:70%;
        border-radius:10px;
        border:none;
        outline:none;
        &:focus{
            border:3px solid #4A7766;
        }
    }
    button{
        padding:10px;
        border-radius:10px;
        background-color:#4A7766;
        color:whitesmoke;
        font-size:1.3em;
        width:30%;
    }
    .success{
        color:#4A7766;
    }
    @media (max-width: 767.98px){
        width:80%;
    }
`;

export default function Help(){
    const [ques, setQues] = useState(null);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null)
    const handler = ()=>{
        fetch("/help", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ques}),
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                if (data.STATUS === "SUCCESS") { 
                    setError(false); 
                    setMessage(data.message);
                } else if (data.STATUS === "FAILED") {
                }
            })
            .catch((error) => {
                setError(true)
                setMessage(data.message);
                console.log("Error while questioning", error);
            });
    }

    return(
        <ContextProvider>
            <Menu/>
            <Container>
                <h1>Any Question?</h1>
                <h4>Put your question and we will help you</h4>
                <textarea type="text" name="question" id="question" placeholder="Ask your Question" 
                    onChange={(e)=>{setInterval(()=>{
                        setQues(e.target.value);
                    }), 1000}}
                />
                <button onClick={()=>{handler()}}>Post</button>
                {
                    (!error)? (
                        <div className="success">{message}</div>
                    ):(
                        <div className="failed">{message}</div>
                    )
                }
        </Container>
        </ContextProvider>
    )
}