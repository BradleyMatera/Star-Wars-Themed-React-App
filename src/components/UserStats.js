// Importing necessary libraries and components
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Defining styled components for the layout and styling
const DashboardContainer = styled.div`
  background-color: #2d2d2d; // Dark background color for the dashboard container
  color: #ffd700; // Gold text color for high contrast
  padding: 20px; // Padding inside the container
  border-radius: 10px; // Rounded corners for the container
  font-family: 'Star Jedi', sans-serif; // Custom font for a Star Wars theme
  width: 90%; // Responsive width
  max-width: 600px; // Maximum width for the container
  margin: 40px auto; // Center the container with auto margins
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); // Shadow for visual depth
  overflow: hidden; // Prevent overflow
`;

const Title = styled.h1`
  text-align: center; // Center the title text
  margin-bottom: 20px; // Margin below the title
  font-size: 24px; // Font size for the title
`;

const StatItem = styled.p`
  font-size: 18px; // Font size for stat items
  margin: 10px 0; // Vertical margin for spacing
  text-align: center; // Center align the text
`;

const ButtonContainer = styled.div`
  display: flex; // Use flexbox for button layout
  justify-content: center; // Center the buttons horizontally
  flex-wrap: wrap; // Wrap buttons to next line if needed
`;

const Button = styled.button`
  background-color: #ffd700; // Gold background color for the button
  color: #2d2d2d; // Dark text color for contrast
  border: none; // No border for the button
  padding: 10px 15px; // Padding inside the button
  margin: 5px; // Margin around the button for spacing
  border-radius: 5px; // Rounded corners for the button
  cursor: pointer; // Pointer cursor on hover
  font-weight: bold; // Bold font weight
  font-family: 'Star Jedi', sans-serif; // Custom font for a Star Wars theme
  transition: background-color 0.3s; // Smooth transition for hover effect
  &:hover {
    background-color: #ffc700; // Slightly darker gold on hover
  }
`;

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
