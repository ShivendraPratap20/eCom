import React, { useState } from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: #ECE7E2;
    width: 250px;
    transition: transform 0.3s ease-in-out;
    
    @media (min-width: 768px) {
        transform: translateX(0);
        position: static;
    }

    @media (max-width: 767px) {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        z-index: 999;
        transform: ${({ showFilter }) => showFilter ? 'translateX(0)' : 'translateX(-100%)'};
        width: 80%;
        max-width: 300px;
        box-shadow: 2px 0 5px rgba(0,0,0,0.2);
    }
`;

const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 8px;
    
    div {
        font-size: 1.2em;
        font-weight: 500;
    }

    .categoryName {
        background-color: #4A7766;
        color: whitesmoke;
        padding: 6px 12px;
        border-radius: 20px;
        text-align: center;
        font-size: 1.1em;
    }

    .brand-holder {
        display: flex;
        flex-direction: column;
        gap: 5px;
        font-size: 0.9em;
    }

    .brands {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-bottom: 10px;
        
        span {
            background-color: #4A7766;
            color: whitesmoke;
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 0.85em;
        }
    }
`;

export default function FilterMenu({productDt, search, showFilter, setShowFilter}) {
    const [category, setCategory] = useState([]);
    const handleChange = (item) => {
        setCategory((prev) => {
          if (prev.includes(item)) {
            return prev.filter((i) => i !== item);
          } else {
            return [...prev, item];
          }
        });
      };

    return (
        <FilterContainer showFilter={showFilter}>
            <h2>Filters</h2>
            <ItemContainer>
                <Item>
                    <div>Search for</div>
                    <span className="categoryName">{search}</span>
                </Item>
                <Item>
                    <div>Brands</div>
                    <div className="brands">
                    {
                        category.map((val, index) => {
                            return <span key={index}>{val}</span>
                        })
                    }
                    </div>
                    <div className="brand-holder">
                    {
                        productDt.map((val, index)=>{
                            return  <div key={index}>
                                        <input type="checkbox" name={val.brand} id={val.brand} 
                                            checked={category.includes(val.brand)}
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