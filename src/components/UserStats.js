// Importing necessary libraries and components
import React, { useState, useEffect } from 'react';
import { DashboardContainer, Title, StatItem, ButtonContainer, Button } from '../styles/UserStatsStyledComponents'; // Importing styled components

// Defining the functional UserStats component
const UserStats = () => {
  // useState hooks for managing state
  const [fleetSize, setFleetSize] = useState(5); // Initial fleet size state
  const [missionsCompleted, setMissionsCompleted] = useState(3); // Initial missions completed state
  const [resources, setResources] = useState(1000); // Initial resources state

  // useEffect hook to simulate fetching initial data
  useEffect(() => {
    // Simulate an API call to fetch initial data
    setTimeout(() => {
      setFleetSize(10); // Update fleet size after data fetch
      setMissionsCompleted(5); // Update missions completed after data fetch
      setResources(5000); // Update resources after data fetch
    }, 1000); // Delay of 1 second to simulate network latency
  }, []); // Empty dependency array ensures this runs only once on mount

  // Handler to add a ship to the fleet
  const addShipToFleet = () => {
    setFleetSize(prevFleetSize => prevFleetSize + 1); // Increase fleet size by 1
    setResources(prevResources => prevResources - 100); // Decrease resources by 100
  };

  // Handler to complete a mission
  const completeMission = () => {
    setMissionsCompleted(prevMissionsCompleted => prevMissionsCompleted + 1); // Increase missions completed by 1
    setResources(prevResources => prevResources + 200); // Increase resources by 200
  };

  // Handler to earn resources
  const earnResources = () => {
    setResources(prevResources => prevResources + 500); // Increase resources by 500
  };

  return (
    <DashboardContainer>
      <Title>Galactic Fleet Management</Title>
      <StatItem>Fleet Size: {fleetSize}</StatItem> {/* Display current fleet size */}
      <StatItem>Missions Completed: {missionsCompleted}</StatItem> {/* Display completed missions */}
      <StatItem>Resources: {resources}</StatItem> {/* Display current resources */}
      <ButtonContainer>
        <Button onClick={addShipToFleet}>Add Ship to Fleet</Button> {/* Button to add a ship */}
        <Button onClick={completeMission}>Complete Mission</Button> {/* Button to complete a mission */}
        <Button onClick={earnResources}>Earn Resources</Button> {/* Button to earn resources */}
      </ButtonContainer>
    </DashboardContainer>
  );
};

export default UserStats;