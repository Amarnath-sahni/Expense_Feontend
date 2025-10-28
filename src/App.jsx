import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/common/Navbar';
import Dashboard from './Components/dashboard/Dashboard';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}
