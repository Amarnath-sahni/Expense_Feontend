// src/components/PrivateRoute.jsx
// Restricts routes to authenticated users only

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from '@reduxjs/toolkit';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // If not logged in, redirect to login page
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
