import React, {createContext, useContext, useState, useEffect, Children} from 'react';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(() => localStorage.getItem('token') || null);
    const [user, setUser] = useState(() => {
        try {
            const savedUser = localStorage.getItem('user');
            return savedUser ? JSON.parse(savedUser) : null;
        } catch {
            return null;
        }
    });

    const login = (newToken, userData) => {
        setToken(newToken);
        setUser(userData);
        localStorage.setItem('token', newToken);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    };

    const updateUser = (updateUserData) => {
        setUser(updateUserData);
        localStorage.setItem('user', JSON.stringify(updateUserData));
    };

    return (
        <AuthContext.Provider value={{token, user, login, logout, updateUser, isAuthenticated: !!token}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);