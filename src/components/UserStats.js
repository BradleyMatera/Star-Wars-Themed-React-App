// Importing necessary libraries and components
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Defining styled components for the layout and styling
const DashboardContainer = styled.div`
  background-color: #2d2d2d;
  color: #ffd700;
  padding: 20px;
  border-radius: 10px;
  font-family: 'Star Jedi', sans-serif;
  width: 90%;
  max-width: 600px;
  margin: 40px auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
`;

const StatItem = styled.p`
  font-size: 18px;
  margin: 10px 0;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled.button`
  background-color: #ffd700;
  color: #2d2d2d;
  border: none;
  padding: 10px 15px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-family: 'Star Jedi', sans-serif;
  transition: background-color 0.3s;
  &:hover {
    background-color: #ffc700;
  }
`;

// Defining the functional UserStats component
const UserStats = () => {
  // useState hooks for managing state
  const [fleetSize, setFleetSize] = useState(5);
  const [missionsCompleted, setMissionsCompleted] = useState(3);
  const [resources, setResources] = useState(1000);

  // useEffect hook to simulate fetching initial data
  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setFleetSize(10);
      setMissionsCompleted(5);
      setResources(5000);
    }, 1000);
  }, []);

  // Handler to add a ship to the fleet
  const addShipToFleet = () => {
    setFleetSize(prevFleetSize => prevFleetSize + 1);
    setResources(prevResources => prevResources - 100);
  };

  // Handler to complete a mission
  const completeMission = () => {
    setMissionsCompleted(prevMissionsCompleted => prevMissionsCompleted + 1);
    setResources(prevResources => prevResources + 200);
  };

  // Handler to earn resources
  const earnResources = () => {
    setResources(prevResources => prevResources + 500);
  };

  return (
    <DashboardContainer>
      <Title>Galactic Fleet Management</Title>
      <StatItem>Fleet Size: {fleetSize}</StatItem>
      <StatItem>Missions Completed: {missionsCompleted}</StatItem>
      <StatItem>Resources: {resources}</StatItem>
      <ButtonContainer>
        <Button onClick={addShipToFleet}>Add Ship to Fleet</Button>
        <Button onClick={completeMission}>Complete Mission</Button>
        <Button onClick={earnResources}>Earn Resources</Button>
      </ButtonContainer>
    </DashboardContainer>
  );
};

export default UserStats;
