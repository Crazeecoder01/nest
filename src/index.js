import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ToggleColorMode from './Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ToggleColorMode />
  </React.StrictMode>
);

