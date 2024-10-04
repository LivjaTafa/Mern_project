import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css'; 
import {AuthProvider} from  './context/AuthContext'
import { EventProvider } from './context/EventContex';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
