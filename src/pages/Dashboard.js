// Importing necessary libraries and components
// React is a JavaScript library for building user interfaces
// useState and useEffect are hooks provided by React for state management and side effects
import React, { useState, useEffect } from 'react';
// Importing Bar and Line components from react-chartjs-2 to render charts
import { Bar, Line } from 'react-chartjs-2';
// Importing Chart.js components to configure the charts
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
// Importing data for the charts from a local data file
import { characterData, planetData } from '../data';
// Importing styled components for the dashboard layout and styling
import {
  DashboardContainer,
  HeaderSection,
  MainTitle,
  SubTitle,
  ChartSection,
  ChartCard,
  StatCard,
  StatValue,
  StatLabel
} from '../styles/DashboardStyledComponents';

// Register necessary Chart.js components
// This allows Chart.js to understand and render the specific chart types being used
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Using useState to manage character and planet data for charts
  // useState hook initializes state variables and provides a way to update them
  const [characterChartData, setCharacterChartData] = useState([]);
  const [planetChartData, setPlanetChartData] = useState([]);

  // Using useEffect to fetch character and planet data when the component mounts
  // useEffect hook performs side effects like data fetching
  useEffect(() => {
    // Transforming character data for the chart
    // Mapping through characterData to extract necessary information
    const charData = characterData.map(char => ({
      name: char.name,
      height: char.height,
    }));
    setCharacterChartData(charData);

    // Transforming planet data for the chart
    // Mapping through planetData to extract necessary information
    const planetsData = planetData.map(planet => ({
      name: planet.name,
      population: planet.population,
    }));
    setPlanetChartData(planetsData);
  }, []); // Empty dependency array means this effect runs once after initial render

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
          {/* Render the bar chart if character data is available, otherwise show a loading message */}
          {characterChartData.length > 0 ? <Bar data={characterHeightData} /> : <p>Loading character data...</p>}
        </ChartCard>
        <ChartCard>
          <SubTitle>Planet Populations</SubTitle>
          {/* Render the line chart if planet data is available, otherwise show a loading message */}
          {planetChartData.length > 0 ? <Line data={planetPopulationData} /> : <p>Loading planet data...</p>}
        </ChartCard>
      </ChartSection>
    </DashboardContainer>
  );
};

export default Dashboard;