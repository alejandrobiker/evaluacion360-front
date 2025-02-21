import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/');
    };

    return (
        <div>
            <h1>Bienvenido a la Página de Inicio</h1>
            <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    );  
};

export default HomePage;