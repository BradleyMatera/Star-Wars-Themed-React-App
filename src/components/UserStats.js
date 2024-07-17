import React, { Component } from 'react';
import styled from 'styled-components';

const StatsContainer = styled.div`
  background-color: #000;
  color: #ffd700;
  padding: 20px;
  border-radius: 10px;
  font-family: 'Star Jedi', sans-serif;
`;

const Title = styled.h1`
  text-align: center;
`;

const StatItem = styled.p`
  font-size: 18px;
`;

const Button = styled.button`
  background-color: #ffd700;
  color: #000;
  border: none;
  padding: 10px 15px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-family: 'Star Jedi', sans-serif;
`;

class UserStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      missions: 0,
      forcePower: 0,
      credits: 0
    };
    this.completeMission = this.completeMission.bind(this);
    this.increaseForcePower = this.increaseForcePower.bind(this);
    this.earnCredits = this.earnCredits.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ missions: 5, forcePower: 50, credits: 1000 });
    }, 1000);
  }

  completeMission() {
    this.setState(prevState => ({ 
      missions: prevState.missions + 1,
      credits: prevState.credits + 200
    }));
  }

  increaseForcePower() {
    this.setState(prevState => ({ forcePower: prevState.forcePower + 10 }));
  }

  earnCredits() {
    this.setState(prevState => ({ credits: prevState.credits + 100 }));
  }

  render() {
    const { missions, forcePower, credits } = this.state;
    return (
      <StatsContainer>
        <Title>Galactic Hero Stats</Title>
        <StatItem>Missions Completed: {missions}</StatItem>
        <StatItem>Force Power: {forcePower}</StatItem>
        <StatItem>Credits: {credits}</StatItem>
        <Button onClick={this.completeMission}>Complete Mission</Button>
        <Button onClick={this.increaseForcePower}>Train Force Power</Button>
        <Button onClick={this.earnCredits}>Earn Credits</Button>
      </StatsContainer>
    );
  }
}

export default UserStats;