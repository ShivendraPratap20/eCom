import React, { useState } from "react";
import styled from "styled-components";
import Menu from "./Home/Menu";
import ContextProvider from "../ContextProvider";
import Footer from "./Footer";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    background-color: #ECE7E2;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
    width: 90%;
    max-width: 600px;
    margin: 20px auto;
    text-align: center;
    
    h1 {
        color: #4A7766;
        font-size: 1.8em;
        margin: 0;
    }
    
    h4 {
        font-size: 1.2em;
        margin: 0;
    }
    
    textarea {
        background-color: whitesmoke;
        padding: 10px;
        color: black;
        width: 100%;
        max-width: 500px;
        min-height: 100px;
        border-radius: 10px;
        border: none;
        outline: none;
        font-size: 1em;
        resize: vertical;
        
        &:focus {
            border: 2px solid #4A7766;
        }
    }
    
    button {
        padding: 12px 20px;
        border-radius: 8px;
        background-color: #4A7766;
        color: whitesmoke;
        font-size: 1em;
        border: none;
        cursor: pointer;
        width: 100%;
        max-width: 200px;
        transition: background-color 0.3s ease;
        
        &:hover {
            background-color: #3E6254;
        }
    }
    
    .success {
        color: #4A7766;
        font-size: 1em;
    }
    
    .failed {
        color: red;
        font-size: 1em;
    }
    
    @media (max-width: 575px) {
        padding: 15px;
        h1 {
            font-size: 1.5em;
        }
        h4 {
            font-size: 1em;
        }
        textarea {
            font-size: 0.9em;
        }
        button {
            max-width: 150px;
            font-size: 0.9em;
            padding: 10px 15px;
        }
    }
`;

export default function Help() {
    const [ques, setQues] = useState("");
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    const handler = () => {
        fetch("/help", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ ques }),
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                if (data.STATUS === "SUCCESS") {
                    setError(false);
                    setMessage(data.message);
                } else {
                    setError(true);
                    setMessage(data.message || "Failed to submit question");
                }
            })
            .catch((error) => {
                setError(true);
                setMessage("Error submitting question");
                console.log("Error while questioning", error);
            });
    };

    return (
        <ContextProvider>
            <Menu />
            <Container>
                <h1>Any Questions?</h1>
                <h4>Submit your question and we will help you</h4>
                <textarea
                    name="question"
                    id="question"
                    placeholder="Ask your question"
                    value={ques}
                    onChange={(e) => setQues(e.target.value)}
                />
                <button onClick={handler}>Post</button>
                {message && (
                    <div className={error ? "failed" : "success"}>{message}</div>
                )}
            </Container>
            <Footer/>
        </ContextProvider>
    );
}