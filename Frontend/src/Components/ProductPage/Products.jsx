import React, { useEffect, useState } from "react";
import Menu from "../Home/Menu";
import ContextProvider from "../../ContextProvider";
import FilterMenu from "./FilterMenu";
import styled from "styled-components";
import ProductContainer from "./ProductContainer";
import { useLocation } from "react-router-dom";
import Footer from "../Footer";

const ProductLayout = styled.div`
    display: flex;
    width: 100%;
    padding: 20px 0;
    gap: 10px;
    @media (max-width: 767px) {
        padding: 10px 0;
        flex-direction: column;
    }
`;

const FilterToggleButton = styled.button`
    display: none;
    @media (max-width: 767px) {
        display: block;
        position: fixed;
        bottom: 20px;
        left: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #4A7766;
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        &:hover {
            background-color: #3E6254;
        }
    }
`;

export default function Products() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');
    const URL = `http://localhost:8000/categoryDt/${category}`;
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [errorMsg, setErrorMsg] = useState("");
    const [showFilter, setShowFilter] = useState(false);

    useEffect(() => {
        fetch(URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data == null) {
                    console.log("Null");
                }
                else {
                    console.log('Fetched Data:', data);
                    setData(data);
                    setIsLoading(false);
                }
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                setErrorMsg(error);
            });
    }, []);

    return (
        <ContextProvider>
            <Menu />
            <FilterToggleButton onClick={() => setShowFilter(!showFilter)}>
                {showFilter ? '×' : '≡'}
            </FilterToggleButton>
            {
                (isLoading) ? (
                    <div>Loading</div>
                ) : (
                    <>
                        <ProductLayout>
                            <FilterMenu 
                                productDt={data} 
                                category={category} 
                                showFilter={showFilter}
                                setShowFilter={setShowFilter}
                            />
                            <ProductContainer productDt={data} category={category} />
                        </ProductLayout>
                        <Footer />
                    </>
                )
            }
        </ContextProvider>
    );
}