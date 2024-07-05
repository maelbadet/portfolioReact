import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import '../css/LoginPage.css';
import { useUser } from '../components/UserContext';

const LoginPage = () => {
    const { user, login } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/home');
        }
    }, [user, navigate]);

    const onLoginSuccess = (userData) => {
        login(userData);
        navigate('/home');
    };

    return (
        <div className="login-page">
            <LoginForm handleLogin={onLoginSuccess} />
        </div>
    );
};

export default LoginPage;
