import React, { Component } from 'react';
import styled from 'styled-components';

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

class GalacticFleetDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fleetSize: 5,
      missionsCompleted: 3,
      resources: 1000
    };
  }

  componentDidMount() {
    // Simulate fetching initial data
    setTimeout(() => {
      this.setState({ fleetSize: 10, missionsCompleted: 5, resources: 5000 });
    }, 1000);
  }

  addShipToFleet = () => {
    this.setState(prevState => ({
      fleetSize: prevState.fleetSize + 1,
      resources: prevState.resources - 100
    }));
  }

  completeMission = () => {
    this.setState(prevState => ({
      missionsCompleted: prevState.missionsCompleted + 1,
      resources: prevState.resources + 200
    }));
  }

  earnResources = () => {
    this.setState(prevState => ({ resources: prevState.resources + 500 }));
  }

  render() {
    const { fleetSize, missionsCompleted, resources } = this.state;
    return (
      <DashboardContainer>
        <Title>Galactic Fleet Management</Title>
        <StatItem>Fleet Size: {fleetSize}</StatItem>
        <StatItem>Missions Completed: {missionsCompleted}</StatItem>
        <StatItem>Resources: {resources}</StatItem>
        <ButtonContainer>
          <Button onClick={this.addShipToFleet}>Add Ship to Fleet</Button>
          <Button onClick={this.completeMission}>Complete Mission</Button>
          <Button onClick={this.earnResources}>Earn Resources</Button>
        </ButtonContainer>
      </DashboardContainer>
    );
  }
}

export default GalacticFleetDashboard;
