import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const authToken = localStorage.getItem('authToken');
  
  if (!authToken) {
    // Si no hay token, redirigir a la página de inicio de sesión
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;