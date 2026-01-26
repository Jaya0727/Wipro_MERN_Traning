<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import './index.css';
import { ThemeProvider } from "./context/ThemeContext";
ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
  <AuthProvider>
    <App />
  </AuthProvider>
  </ThemeProvider>
);
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
>>>>>>> f03efc8c054698558f1783fdd2236a615bc2173b
