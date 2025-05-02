import React, { createContext, useEffect, useState } from "react";

const Contxt = createContext();
const HMDT_URL = "/hmdt";
export default function ContextProvider({ children }) {
    const [display, setDisplay] = useState("none");
    const [isOpen, setIsOpen] = useState(false);
    const [hmdt, setHmdt] = useState({});
    const [hmdtError, setHmdtError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(HMDT_URL)
            .then(response => {
                if (!response.ok) {
                    setHmdtError(true);
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if(data == null){
                    console.log("Null");
                }
                else{console.log('Fetched Data:', data);
                setHmdt(prev => ({ ...prev, ...data }));
                setLoading(false);
            }
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                setErrorMsg(error);
            });
    }, []);

    if(!loading)
        return (
            <Contxt.Provider value={{ display, setDisplay, isOpen, setIsOpen, hmdt,hmdtError, errorMsg, loading }}>
                {children}
            </Contxt.Provider>
        )
}
export { Contxt };