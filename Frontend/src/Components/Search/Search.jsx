import React, { useEffect, useState } from "react";
import Menu from "../Home/Menu";
import ContextProvider from "../../ContextProvider";
import FilterMenu from "./FilterMenu";
import styled from "styled-components";
import SearchContainer from "./SearchContainer";
import { useLocation } from "react-router-dom";
import Footer from "../Footer";

const SearchLayout = styled.div`
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

export default function Search(){
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const search = queryParams.get('search');
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [errorMsg, setErrorMsg] = useState("");
    const [showFilter, setShowFilter] = useState(false);
    

    useEffect(()=>{
        fetch(`/search?keywords=${search}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if(data == null){
                    console.log("Null");
                }
                else{console.log('Fetched search Data:', data);
                setData(data);
                setIsLoading(false);
            }
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                setErrorMsg(error);
            });
    },[search])

    return(
        <ContextProvider>
            <Menu/>
            <FilterToggleButton onClick={() => setShowFilter(!showFilter)}>
                {showFilter ? '×' : '≡'}
            </FilterToggleButton>
                {
                    (isLoading)?
                    (<div>Loading...</div>):
                    (<SearchLayout>
                        <FilterMenu productDt={data} 
                            search={search} 
                            showFilter={showFilter}
                            setShowFilter={setShowFilter}/>
                        <SearchContainer productDt={data} search={search}/>
                    </SearchLayout>
                    )
                }
            <Footer/>
        </ContextProvider>
    )
}