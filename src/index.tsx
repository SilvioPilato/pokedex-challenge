import React from 'react';
import ReactDOM from 'react-dom/client';
import "milligram/dist/milligram.css"
import { App } from './app';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);