import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import { UserProvider } from './components/UserContext';
import './css/styles.css';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        const savedDarkMode = localStorage.getItem('isDarkMode');
        if (savedDarkMode !== null) {
            setIsDarkMode(JSON.parse(savedDarkMode));
        }
    }, []);
    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode;
            localStorage.setItem('isDarkMode', JSON.stringify(newMode));
            return newMode;
        });
    };

    return (
        <UserProvider>
            <Router>
                <div className={`App ${isDarkMode ? 'dark' : ''}`}>
                    <Header toggleDarkMode={toggleDarkMode} />
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/home" element={<Presentation />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </UserProvider>
    );
}

export default App;
