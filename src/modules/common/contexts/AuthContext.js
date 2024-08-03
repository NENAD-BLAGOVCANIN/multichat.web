import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { login } from '../../authentication/api/login';

const AuthContext = createContext();

// Custom hook for accessing the auth context
export const useAuth = () => {
    return useContext(AuthContext);
};

// AuthProvider component to wrap your app and provide the auth state
export const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
    const [userId, setUserId] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Function to log in
    const handleLogin = async (email, password) => {
        const response = await login(email, password);
        if (response.access) {
            const decodedToken = jwtDecode(response.access);
            setAuthenticated(true);
            setEmail(email);
            setToken(response.access);
            setUserId(decodedToken.user_id); // Extract user ID from token
            localStorage.setItem('accessToken', response.access);
            navigate('/');
            return { success: true };
        } else {
            return { success: false, message: response.message || 'Login failed' };
        }
    };

    const handleLogout = () => {
        setAuthenticated(false);
        setEmail('');
        setToken('');
        setUserId('');
        localStorage.removeItem('accessToken');
        navigate('/');
    };

    const checkTokenExpiration = (token) => {
        const decodedToken = jwtDecode(token);
        if (decodedToken.exp * 1000 < Date.now()) {
            handleLogout();
        }
    };

    useEffect(() => {
        const storedToken = localStorage.getItem('accessToken');
        if (storedToken) {
            checkTokenExpiration(storedToken);
            const decodedToken = jwtDecode(storedToken);
            setAuthenticated(true);
            setToken(storedToken);
            setEmail(decodedToken.email);
            setUserId(decodedToken.user_id); // Extract user ID from token
        }
        setLoading(false);
    }, []);

    const value = {
        authenticated,
        email,
        token,
        userId, // Include user ID in the context value
        login: handleLogin,
        logout: handleLogout,
        loading
    };

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};
