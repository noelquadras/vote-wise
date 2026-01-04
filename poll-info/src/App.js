// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PoliticianList from './components/PoliticianList';
import PoliticianProfile from './components/PoliticianProfile';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <PoliticianList />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/politician/:id" 
          element={
            <ProtectedRoute>
              <PoliticianProfile />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
