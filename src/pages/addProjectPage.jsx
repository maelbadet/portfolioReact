import React, { useState } from 'react';
import '../css/Modal.css';

const ProjectModal = ({ onClose }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify({ title, description, image }),
            });

            if (response.ok) {
                onClose();
            } else {
                alert('Erreur lors de l\'ajout du projet');
            }
        } catch (error) {
            console.error('Erreur lors de la requête:', error);
            alert('Erreur de connexion');
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>X</button>
                <form className="project-form" onSubmit={handleSubmit}>
                    <h2>Ajouter un Projet</h2>
                    <label>
                        Titre:
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Description:
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Image (URL):
                        <input
                            type="url"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            required
                        />
                    </label>
                    <button type="submit">Ajouter Projet</button>
                </form>
            </div>
        </div>
    );
};

export default ProjectModal;
