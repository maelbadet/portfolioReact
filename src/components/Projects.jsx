import React, { useEffect, useState } from 'react';
import '../css/projects.css';
import { useUser } from './UserContext';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const { user } = useUser();

    useEffect(() => {
        if (user) {
            fetchProjects();
        } else {
            console.log('User not logged in');
        }
    }, [user]);

    const fetchProjects = () => {
        fetch('http://localhost:3000/api/projects', {
            headers: {
                'Authorization': `Bearer ${user}`,
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setProjects(data);
            })
            .catch(error => console.error('Error fetching projects:', error));
    };

    const handleDeleteProject = async (id) => {
        if (!user) {
            alert('Vous devez être connecté pour supprimer un projet.');
            return;
        }

        try {
            const response = await fetch(`http://localhost:3000/api/projects/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${user}`,
                    'Content-Type': 'application/json'
                },
            });

            if (response.ok) {
                setProjects(projects.filter(project => project.id !== id));
            } else {
                const errorMessage = await response.text();
                console.error('Failed to delete project:', errorMessage);
                alert(`Erreur lors de la suppression du projet: ${errorMessage}`);
            }
        } catch (error) {
            console.error('Error deleting project:', error);
            alert('Erreur de connexion');
        }
    };

    return (
        <section className="projects">
            <h2>Mes Projets</h2>
            {projects.length === 0 ? (
                <p>Aucun projet disponible</p>
            ) : (
                <div className="project-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            {user && (
                                <div className="project-actions">
                                    <button className="delete-button" onClick={() => handleDeleteProject(project.id)}>Supprimer</button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Projects;
