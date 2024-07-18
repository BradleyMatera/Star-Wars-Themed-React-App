// Importing necessary libraries and components
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { characterData, planetData } from '../data';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

// Styled components for the dashboard layout and design
const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: #000; // Background color for the dashboard
  color: #ffd700; // Text color for the dashboard
  border-radius: 10px; // Rounded corners for the dashboard container
  max-width: 1200px; // Maximum width for the dashboard
  margin: 0 auto; // Center the dashboard container
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); // Shadow for depth effect
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainTitle = styled.h1`
  font-size: 24px; // Font size for the main title
  color: #ffd700; // Text color for the main title
`;

const SubTitle = styled.h2`
  font-size: 20px; // Font size for the subtitle
  color: #aaa; // Text color for the subtitle
  margin-bottom: 15px; // Margin below the subtitle
`;

const ChartSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap; // Wrap the charts if necessary
`;

const ChartCard = styled.div`
  flex: 1; // Flexible size for the chart card
  min-width: 300px; // Minimum width for the chart card
  background: #1c1c1c; // Background color for the chart card
  padding: 20px; // Padding inside the chart card
  border-radius: 8px; // Rounded corners for the chart card
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Shadow for depth effect
`;

const StatCard = styled.div`
  flex: 1; // Flexible size for the stat card
  background: #1c1c1c; // Background color for the stat card
  padding: 20px; // Padding inside the stat card
  border-radius: 8px; // Rounded corners for the stat card
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Shadow for depth effect
`;

const StatValue = styled.p`
  font-size: 36px; // Font size for the stat value
  margin: 0; // Remove margin
  color: #1e90ff; // Text color for the stat value
`;

const StatLabel = styled.p`
  font-size: 14px; // Font size for the stat label
  color: #777; // Text color for the stat label
  margin: 5px 0 0; // Margin for the stat label
`;

const Dashboard = () => {
  // Using useState to manage character and planet data for charts
  const [characterChartData, setCharacterChartData] = useState([]);
  const [planetChartData, setPlanetChartData] = useState([]);

  // Using useEffect to fetch character and planet data when the component mounts
  useEffect(() => {
    // Transforming character data for chart
    const charData = characterData.map(char => ({
      name: char.name,
      height: char.height,
    }));
    setCharacterChartData(charData);

    // Transforming planet data for chart
    const planetsData = planetData.map(planet => ({
      name: planet.name,
      population: planet.population,
    }));
    setPlanetChartData(planetsData);
  }, []);

  // Data for the character height bar chart
  const characterHeightData = {
    labels: characterChartData.map(char => char.name), // Character names as labels
    datasets: [
      {
        label: 'Character Heights', // Label for the dataset
        data: characterChartData.map(char => char.height), // Character heights as data
        backgroundColor: '#8884d8', // Bar color
      },
    ],
  };

  // Data for the planet population line chart
  const planetPopulationData = {
    labels: planetChartData.map(planet => planet.name), // Planet names as labels
    datasets: [
      {
        label: 'Planet Populations', // Label for the dataset
        data: planetChartData.map(planet => planet.population), // Planet populations as data
        borderColor: '#82ca9d', // Line color
        fill: false, // Do not fill the area under the line
      },
    ],
  };

  return (
    <DashboardContainer>
      {/* Header section with main title and subtitle */}
      <HeaderSection>
        <MainTitle>Welcome back, User!</MainTitle>
        <SubTitle>Take a look at the updated Star Wars overview</SubTitle>
      </HeaderSection>
      
      {/* Section displaying key statistics */}
      <ChartSection>
        <StatCard>
          <StatValue>45%</StatValue> {/* Overall Jedi Mastery */}
          <StatLabel>Overall Jedi Mastery</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>3</StatValue> {/* Galactic Missions Completed */}
          <StatLabel>Galactic Missions Completed</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>12</StatValue> {/* Planets Explored */}
          <StatLabel>Planets Explored</StatLabel>
        </StatCard>
      </ChartSection>
      
      {/* Section displaying charts */}
      <ChartSection>
        <ChartCard>
          <SubTitle>Character Heights</SubTitle>
          {characterChartData.length > 0 ? <Bar data={characterHeightData} /> : <p>Loading character data...</p>} {/* Bar chart for character heights */}
        </ChartCard>
        <ChartCard>
          <SubTitle>Planet Populations</SubTitle>
          {planetChartData.length > 0 ? <Line data={planetPopulationData} /> : <p>Loading planet data...</p>} {/* Line chart for planet populations */}
        </ChartCard>
      </ChartSection>
    </DashboardContainer>
  );
};

export default Dashboard;
