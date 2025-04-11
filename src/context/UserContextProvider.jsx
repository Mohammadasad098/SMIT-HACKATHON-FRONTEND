import React, { useState, useEffect } from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({ children }) => {
    const [isUser, setIsUser] = useState(localStorage.getItem("accessToken") || null);

    useEffect(() => {
        const handleStorageChange = () => {
            setIsUser(localStorage.getItem("accessToken"));
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    return (
        <UserContext.Provider value={{ isUser, setIsUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
