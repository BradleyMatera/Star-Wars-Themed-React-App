import React from 'react';
import styled from 'styled-components';
import BarChartComponent from '../components/BarChartComponent';
import LineChartComponent from '../components/LineChartComponent';

const DashboardContainer = styled.div`
  width: 100%;
  color: #ffd700;
  background-color: #000;
  padding: 20px;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-family: 'Star Jedi', sans-serif;
  text-align: center;
`;

const SubTitle = styled.h3`
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Dashboard = ({ characterData, planetData }) => {
  return (
    <DashboardContainer>
      <Title>Galactic Dashboard</Title>
      <SubTitle>Character Heights</SubTitle>
      <LineChartComponent data={characterData} />
      <SubTitle>Planet Populations</SubTitle>
      <BarChartComponent data={planetData} />
    </DashboardContainer>
  );
};

export default Dashboard;
