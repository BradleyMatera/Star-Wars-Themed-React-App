import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SettingsContainer = styled.div`
  padding: 20px;
  color: #ffd700;
  background-color: #000;
  border-radius: 10px;
`;

const SettingItem = styled.div`
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #ffd700;
  color: #000;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
`;

const Settings = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout operations here
    navigate('/newsfeed');
  };

  return (
    <SettingsContainer>
      <h1>Galactic Settings</h1>
      <SettingItem>
        <h3>Hologram Quality</h3>
        <select>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </SettingItem>
      <SettingItem>
        <h3>Droid Maintenance Reminders</h3>
        <input type="checkbox" /> Enable
      </SettingItem>
      <Button onClick={handleLogout}>Return to Outer Rim</Button>
    </SettingsContainer>
  );
};

export default Settings;