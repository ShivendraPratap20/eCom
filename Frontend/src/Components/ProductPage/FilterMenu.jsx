import React, { useState } from "react";
import Slider from "./Slider";
import styled from "styled-components";

const FilterContainer = styled.div`
    display:flex;
    padding:10px;
    width:20%;
    flex-direction:column;
    background-color:#ECE7E2;
    @media (min-width: 576px) and (max-width: 867px){
        width:40%;
    }
    @media (max-width:575px){
        width:50%;
    }
`;
const ItemContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:space-between;
    justify-content:center;
`;
const Item = styled.div`
    display:flex;
    flex-direction:column;
    padding:10px;
    gap:5px;
    div{
        font-size: 1.3em;
        font-weight: 500;
    }
    .categoryName{
        background-color:#4A7766;
        color:whitesmoke;
        padding:5px;
        border-radius:30px; 
        text-align:center;
        font-size:1.2em;
        font-weight:500;
    }
    .brand-holder{
        font-size:0.8em;
    }
    .brands{
        display:flex;
        gap:5px;
        width:100%;
        flex-wrap:wrap;
        span{
            font-size:0.8em;
            background-color:#4A7766;
            color:whitesmoke;
            padding:5px;
            border-radius:5px;
            font-weight:400;
        }
    }
`;

export default function FilterMenu({productDt, category}) {
    const [acategory, setaCategory] = useState([]);

    const handleChange = (item) => {
        setaCategory((prev) => {
          if (prev.includes(item)) {
            return prev.filter((i) => i !== item);
          } else {
            return [...prev, item];
          }
        });
      };

    return (
        <FilterContainer>
            <h2>Filters</h2>
            <ItemContainer>
                <Item>
                    <div>Categories</div>
                    <span className="categoryName">{category}</span>
                </Item>
                <Item>
                    <div>Brands</div>
                    <div className="brands">
                    {
                        acategory.map((val, index) => {
                            return <span key={index}>{val}</span>
                        })
                    }
                    </div>
                    <div className="brand-holder">
                       {
                        productDt.map((val, index)=>{
                            return  <div key={index}>
                                        <input type="checkbox" name={val.brand} id={val.brand} 
                                            checked={acategory.includes(val.brand)}
                                            onChange={() => handleChange(val.brand)}
                                        />
                                        <label htmlFor={val.brand}>{val.brand}</label>
                             </div>
                        })
                       }
                    </div>
                </Item>
            </ItemContainer>
        </FilterContainer>
    )
}