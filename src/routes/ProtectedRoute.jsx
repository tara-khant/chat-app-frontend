import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ user, children }) => {
  const storedUser = user || JSON.parse(localStorage.getItem('user'));
  if (!storedUser) return <Navigate to="/login" />;
  return children;
};

export default ProtectedRoute;
