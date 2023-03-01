import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const el_main = document.getElementsByTagName('main')[0];
const root = ReactDOM.createRoot(el_main);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)