import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAuth();

    // Si no está autenticado, redirigir a /auth
    if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
    }

    return children;
}