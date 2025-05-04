import React, { useContext } from "react";
import styled from "styled-components";
import {Contxt} from "../../ContextProvider";
import { useNavigate } from "react-router-dom";

const H2 = styled.h2`
  color: #4A7766;
  text-align: center;
  padding: 15px 10px; 
  font-size: 2em;
  @media (max-width: 768px) {
    font-size: 1.75em;
    padding: 10px;
  }

  @media (max-width: 576px) {
    font-size: 1.5em;
  }
`;

const TabContainer = styled.div`
  width: 95%; 
  max-width: 600px; 
  background-color: #ECE7E2;
  padding: 15px 10px; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px auto; 
  border-radius: 10px;
  overflow-x: auto; 
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  &::-webkit-scrollbar {
    height: 8px; 
    background-color: #f1f1f1; 
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #4A7766; 
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #3E6254; 
  }

  scrollbar-width: thin;
  scrollbar-color: #4A7766 #f1f1f1;
`;

const TabCard = styled.div`
  padding: 10px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px; 
  flex-shrink: 0; 
  width: auto; 
  margin: 0 5px; 

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.05); 
    transition: transform 0.2s ease-in-out;
  }

  @media (max-width: 576px) {
    padding: 8px;
    gap: 5px;
  }
`;

const TabCardImg = styled.img`
  width: 70px; 
  height: 70px;
  border-radius: 10px;
  object-fit: cover; 

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 576px) {
    width: 50px;
    height: 50px;
  }
`;

const TabCardText = styled.p`
  text-align: center;
  font-size: 1em; 
  font-weight: 450;
  white-space: nowrap; 

  @media (max-width: 768px) {
    font-size: 0.9em;
  }

  @media (max-width: 576px) {
    font-size: 0.8em;
  }
`;

export default function Tab() {
  const navigate = useNavigate();
  const { hmdt, loading } = useContext(Contxt);

  return (
    <>
      <H2>Looking For</H2>
      <TabContainer>
        {loading ? (
          <div>Loading</div>
        ) : (
          hmdt.tabCard.map((val, index) => (
            <TabCard
              key={index}
              onClick={() =>
                navigate(`/products?category=${encodeURIComponent(val.category)}`)
              }
            >
              <TabCardImg src={val.imageURL} alt={val.text} /> 
              <TabCardText>{val.text}</TabCardText>
            </TabCard>
          ))
        )}
      </TabContainer>
    </>
  );
}