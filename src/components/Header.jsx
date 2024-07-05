import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import ProjectModal from '../components/ProjectModal';
import { useUser } from './UserContext';

const Header = ({ toggleDarkMode, isDarkMode }) => {
    const { user, logout } = useUser();
    const [showModal, setShowModal] = useState(false);

    const [localDarkMode, setLocalDarkMode] = useState(isDarkMode);

    useEffect(() => {
        setLocalDarkMode(isDarkMode);
    }, [isDarkMode]);

    const handleToggleDarkMode = () => {
        toggleDarkMode();
        setLocalDarkMode(!localDarkMode);
    };

    const switchChecked = localDarkMode ? 'checked' : '';

    const handleToggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <header className={`header ${user ? 'logged-in' : ''}`}>
            <div className="headerLeft">
                <h1>Badet Mael</h1>
            </div>
            <div className="headerRight">
                <nav className="navContainer">
                    {user ? (
                        <>
                            <button className="logout-button" onClick={logout}>Déconnexion</button>
                            <button onClick={handleToggleModal}>Modifier les Projets</button>
                        </>
                    ) : (
                        <Link to="/"><button>Se Connecter</button></Link>
                    )}
                    <label className="switch">
                        <input type="checkbox" checked={switchChecked} onChange={handleToggleDarkMode} />
                        <span className="slider"></span>
                    </label>
                </nav>
            </div>
            {showModal && <ProjectModal onClose={handleToggleModal} />}
        </header>
    );
};

export default Header;
