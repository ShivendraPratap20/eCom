import React, { useEffect, useState } from "react";
import Menu from "../Home/Menu";
import ContextProvider from "../../ContextProvider";
import FilterMenu from "./FilterMenu";
import styled from "styled-components";
import SearchContainer from "./SearchContainer";
import { useLocation } from "react-router-dom";
import Footer from "../Footer";

const SearchLayout = styled.div`
    display:flex;
    width:100%;
    padding:20px 0;
    gap:10px;
`;

export default function Search(){
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const search = queryParams.get('search');
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(()=>{
        fetch(`http://localhost:8000/search?keywords=${search}`)
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
                {
                    (isLoading)?
                    (<div>Loading...</div>):
                    (<SearchLayout>
                        <FilterMenu productDt={data} search={search}/>
                        <SearchContainer productDt={data} search={search}/>
                    </SearchLayout>
                    )
                }
            <Footer/>
        </ContextProvider>
    )
}