import React from 'react';
import { Navigate } from 'react-router-dom';
import UsuarioService from '../../services/usuario-service';

const ProtectedRoute = ({ children }) => {
  return UsuarioService.isAuthenticated() ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
