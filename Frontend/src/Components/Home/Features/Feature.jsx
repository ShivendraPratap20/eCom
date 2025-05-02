import React from "react";
import styled from "styled-components";

const H2 = styled.h1`
  width: 100%;
  padding: 20px;
  text-align: center;
  color: #4A7766;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #ECE7E2;
  width: 70%;
  margin: auto;
  margin-top: 20px;
  color: white;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #4A7766;
  gap: 10px;
  width: 25%;
  border-radius: 10px;
  padding: 10px;
  text-align: center;

  img {
    width: 100%;
    max-width: 200px;
    height: auto;
  }

  h3, h4 {
    width: 100%;
    margin: 0;
  }

  @media (max-width: 1024px) {
    width: 30%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 15px;
  }
`;

export default function Feature() {
  return (
    <>
      <H2>We Guarantee</H2>
      <Wrapper>
        <Card>
          <img src="https://res.cloudinary.com/dqraj6g9a/image/upload/v1746162101/delivery_wfulge.png" alt="Delivery" />
          <h4>Fast Delivery</h4>
        </Card>
        <Card>
          <img src="https://res.cloudinary.com/dqraj6g9a/image/upload/v1746162101/quality_hqauyu.png" alt="Quality" />
          <h3>Quality Products</h3>
        </Card>
        <Card>
          <img src="https://res.cloudinary.com/dqraj6g9a/image/upload/v1746162101/replace_pdzy8w.png" alt="Replacement" />
          <h3>Replacement / Return Policy</h3>
        </Card>
      </Wrapper>
    </>
  );
}
