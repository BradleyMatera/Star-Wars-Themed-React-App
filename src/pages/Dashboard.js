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
  background-color: #000;
  color: #ffd700;
  border-radius: 10px;
  max-width: 1200px;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainTitle = styled.h1`
  font-size: 24px;
  color: #ffd700;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  color: #aaa;
  margin-bottom: 15px;
`;

const ChartSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
`;

const ChartCard = styled.div`
  flex: 1;
  min-width: 300px;
  background: #1c1c1c;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StatCard = styled.div`
  flex: 1;
  background: #1c1c1c;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StatValue = styled.p`
  font-size: 36px;
  margin: 0;
  color: #1e90ff;
`;

const StatLabel = styled.p`
  font-size: 14px;
  color: #777;
  margin: 5px 0 0;
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
    labels: characterChartData.map(char => char.name),
    datasets: [
      {
        label: 'Character Heights',
        data: characterChartData.map(char => char.height),
        backgroundColor: '#8884d8',
      },
    ],
  };

  // Data for the planet population line chart
  const planetPopulationData = {
    labels: planetChartData.map(planet => planet.name),
    datasets: [
      {
        label: 'Planet Populations',
        data: planetChartData.map(planet => planet.population),
        borderColor: '#82ca9d',
        fill: false,
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
          <StatValue>45%</StatValue>
          <StatLabel>Overall Jedi Mastery</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>3</StatValue>
          <StatLabel>Galactic Missions Completed</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>12</StatValue>
          <StatLabel>Planets Explored</StatLabel>
        </StatCard>
      </ChartSection>
      
      {/* Section displaying charts */}
      <ChartSection>
        <ChartCard>
          <SubTitle>Character Heights</SubTitle>
          {characterChartData.length > 0 ? <Bar data={characterHeightData} /> : <p>Loading character data...</p>}
        </ChartCard>
        <ChartCard>
          <SubTitle>Planet Populations</SubTitle>
          {planetChartData.length > 0 ? <Line data={planetPopulationData} /> : <p>Loading planet data...</p>}
        </ChartCard>
      </ChartSection>
    </DashboardContainer>
  );
};

export default Dashboard;
