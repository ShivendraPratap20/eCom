import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  width: 100%;
`;

const Label = styled.span`
  width: 60px;
  text-align: center;
`;

const StyledSlider = styled.input.attrs({ type: 'range' })`
  flex: 1;
  margin: 0 10px;
  -webkit-appearance: none;
  height: 6px;
  background: #4A7766;
  border-radius: 5px;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    background: #fff;
    border: 2px solid #4A7766;
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    background: #fff;
    border: 2px solid #4A7766;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const Slider = () => {
  return (
    <Container>
      <Label>10,000</Label>
      <StyledSlider min="10000" max="50000" />
      <Label>50,000+</Label>
    </Container>
  );
};

export default Slider;
