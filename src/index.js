import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { fetchCharacterData, fetchPlanetData } from './db'; // Import fetch functions from db.js

const setDatasets = (data) => {
  if (!data || !Array.isArray(data.datasets)) {
    console.error("Data is undefined or not an array");
    return;
  }

  // Your logic to set datasets
  console.log("Data fetched:", data);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Fetch data and set datasets
fetchCharacterData().then(data => setDatasets(data));
fetchPlanetData().then(data => setDatasets(data));