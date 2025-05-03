import React, { useContext } from "react";
import styled from "styled-components";
import {Contxt} from "../../ContextProvider";
import { useNavigate } from "react-router-dom";

const H2 = styled.h2`
  color: #4A7766;
  text-align: center;
  padding: 15px 10px; /* Added vertical padding for better spacing */
  font-size: 2em; /* Slightly larger for better visibility */

  @media (max-width: 768px) {
    font-size: 1.75em;
    padding: 10px;
  }

  @media (max-width: 576px) {
    font-size: 1.5em;
  }
`;

const TabContainer = styled.div`
  width: 95%; /* Take up more width on smaller screens */
  max-width: 600px; /* Maintain a maximum width on larger screens */
  background-color: #ECE7E2;
  padding: 15px 10px; /* Adjusted padding */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px auto; /* Added vertical margin for spacing */
  border-radius: 10px;
  overflow-x: auto; /* Enable horizontal scrolling */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  /* Styling the scrollbar for WebKit browsers (Chrome, Safari) */
  &::-webkit-scrollbar {
    height: 8px; /* Adjust height as needed */
    background-color: #f1f1f1; /* Color of the track */
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #4A7766; /* Color of the thumb */
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #3E6254; /* Darker color on hover */
  }

  /* Styling the scrollbar for Firefox */
  scrollbar-width: thin;
  scrollbar-color: #4A7766 #f1f1f1;
`;

const TabCard = styled.div`
  padding: 10px; /* Increased padding for better touch area */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px; /* Increased gap */
  flex-shrink: 0; /* Prevent shrinking to maintain equal spacing */
  width: auto; /* Adjust width based on content */
  margin: 0 5px; /* Add some horizontal margin between cards */

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.05); /* Add a subtle hover effect */
    transition: transform 0.2s ease-in-out;
  }

  @media (max-width: 576px) {
    padding: 8px;
    gap: 5px;
  }
`;

const TabCardImg = styled.img`
  width: 70px; /* Slightly smaller on larger screens */
  height: 70px;
  border-radius: 10px;
  object-fit: cover; /* Ensure images fit nicely */

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
  font-size: 1em; /* Adjusted font size */
  font-weight: 450;
  white-space: nowrap; /* Prevent text from wrapping */

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
              <TabCardImg src={val.imageURL} alt={val.text} /> {/* Added alt attribute for accessibility */}
              <TabCardText>{val.text}</TabCardText>
            </TabCard>
          ))
        )}
      </TabContainer>
    </>
  );
}