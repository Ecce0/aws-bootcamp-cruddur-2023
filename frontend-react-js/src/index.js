import React from 'react';
import App from './App';
import './index.css';
import { createRoot } from 'react-dom/client';

const container = document.getElementsByTagName('main')[0];
const root = createRoot(container);

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);