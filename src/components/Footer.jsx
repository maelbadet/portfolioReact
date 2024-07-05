import React from 'react';
import '../css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <h1 className="contact-title">Me contacter</h1>
            <div className="contact-details">
                <div className="contact-info">
                    <p>Badet Mael</p>
                    <p>15 chemin des carreaux</p>
                    <p>Code Postal: 16290</p>
                    <p>Ville: Saint-Saturnin</p>
                </div>
                <div className="contact-info">
                    <p>Téléphone: 0651544941</p>
                    <p>Email: mael.badet@livecampus.tech</p>
                    <p>Autres ...</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
