// Importing necessary libraries and components
import React, { useState, useEffect } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { characterData, planetData } from '../data';
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
} from '../styles/DashboardStyledComponents'; // Importing styled components

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

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