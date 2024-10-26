import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import UserStats from './components/UserStats';
import Notifications from './pages/Notifications';
import Dashboard from './pages/Dashboard';
import ProfilePage from './pages/ProfilePage';
import Messages from './pages/Messages';
import './App.css';
import { fetchCharacterData, fetchPlanetData } from './db'; // Import fetch functions from db.js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [characterData, setCharacterData] = useState(null);
  const [planetData, setPlanetData] = useState(null);

  useEffect(() => {
    fetchCharacterData().then(fetchedData => setCharacterData(fetchedData));
    fetchPlanetData().then(fetchedData => setPlanetData(fetchedData));
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <h1>Hello, Star Wars Themed React App!</h1>
        <React.Fragment>
          <UserStats />
          <Notifications />
          {characterData ? <Dashboard data={characterData} /> : <p>Loading character data...</p>}
          {planetData ? <Dashboard data={planetData} /> : <p>Loading planet data...</p>}
          <ProfilePage />
          <Messages />
        </React.Fragment>
      </main>
      <Footer />
    </div>
  );
}

export default App;
