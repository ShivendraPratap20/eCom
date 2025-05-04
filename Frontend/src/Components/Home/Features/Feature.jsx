import React from "react";
import styled from "styled-components";

const H2 = styled.h1`
  width: 100%;
  padding: 20px;
  text-align: center;
  color: #4A7766;
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  margin: 0;
  @media (max-width: 480px) {
    padding: 15px 10px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 20px;
  background-color: #ECE7E2;
  width: 95%;
  margin: 0 auto;
  margin-top: 10px;
  color: white;
  flex-wrap: wrap;
  gap: 20px;
  border-radius: 10px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: 90%;
    padding: 25px;
  }

  @media (min-width: 1024px) {
    width: 85%;
    gap: 25px;
  }

  @media (min-width: 1280px) {
    width: 80%;
    max-width: 1200px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #4A7766;
  gap: 15px;
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 100%;
    max-width: 100px;
    height: auto;
    aspect-ratio: 1/1;
    object-fit: contain;
    @media (min-width: 768px) {
      max-width: 120px;
    }
  }

  h3 {
    margin: 0;
    font-size: clamp(1.1rem, 1.5vw, 1.3rem);
    font-weight: 600;
    line-height: 1.3;
  }

  h4 {
    margin: 0;
    font-size: clamp(1rem, 1.3vw, 1.2rem);
    font-weight: 500;
  }

  @media (min-width: 480px) {
    width: calc(50% - 15px);
    padding: 15px;
  }

  @media (min-width: 768px) {
    width: calc(33.33% - 20px);
    padding: 20px;
  }

  @media (min-width: 1024px) {
    h3 {
      font-size: clamp(1.1rem, 1.2vw, 1.4rem);
    }
  }
`;

export default function Feature() {
  return (
    <>
      <H2>We Guarantee</H2>
      <Wrapper>
        <Card>
          <img src="https://res.cloudinary.com/dqraj6g9a/image/upload/v1746162101/delivery_wfulge.png" alt="Fast delivery truck icon" />
          <h4>Fast Delivery</h4>
        </Card>
        <Card>
          <img src="https://res.cloudinary.com/dqraj6g9a/image/upload/v1746162101/quality_hqauyu.png" alt="Quality assurance badge icon" />
          <h3>Quality Products</h3>
        </Card>
        <Card>
          <img src="https://res.cloudinary.com/dqraj6g9a/image/upload/v1746162101/replace_pdzy8w.png" alt="Return/Exchange arrows icon" />
          <h3>Easy Returns & Replacements</h3>
        </Card>
      </Wrapper>
    </>
  );
}