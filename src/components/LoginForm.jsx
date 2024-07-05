import React, { useState } from 'react';
import '../css/LoginForm.css';

const LoginForm = ({ handleLogin, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                handleLogin(data.token);
            } else {
                if (data.message) {
                    setError(data.message);
                } else {
                    setError('Erreur inattendue lors de la connexion');
                }
            }
        } catch (error) {
            setError('Erreur de connexion');
        }
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h2>Connexion</h2>
            {error && <p className="error-message">{error}</p>}
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>
            <label>
                Mot de passe:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Se Connecter</button>
        </form>
    );
};

export default LoginForm;
