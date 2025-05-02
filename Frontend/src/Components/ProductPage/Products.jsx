import React, { useEffect, useState } from "react";
import Menu from "../Home/Menu";
import ContextProvider from "../../ContextProvider";
import FilterMenu from "./FilterMenu";
import styled from "styled-components";
import ProductContainer from "./ProductContainer";
import { useLocation } from "react-router-dom";
import Footer from "../Footer";

const ProductLayout = styled.div`
    display:flex;
    width:100%;
    padding:20px 0;
    gap:10px;
`;

export default function Products() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');
    const URL = `/categoryDt/${category}`;
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [errorMsg, setErrorMsg] = useState("");

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
    }, [])

    return (
        <ContextProvider>
            <Menu />
            {
                (isLoading) ?
                    (<div>Loading</div>) :
                    (
                        <>
                            <ProductLayout>
                                <FilterMenu productDt={data} category={category} />
                                <ProductContainer productDt={data} category={category} />
                            </ProductLayout>
                            <Footer />
                        </>
                    )
            }
        </ContextProvider>
    );
}