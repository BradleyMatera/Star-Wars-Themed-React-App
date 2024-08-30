import React, { useState, useEffect } from "react";
import { DashboardContainer, Title, StatItem, ButtonContainer } from "../styles/UserStatsStyledComponents";

const UserStats = () => {
  const [fleetSize, setFleetSize] = useState(5);
  const [missionsCompleted, setMissionsCompleted] = useState(3);
  const [resources, setResources] = useState(1000);

  useEffect(() => {
    setTimeout(() => {
      setFleetSize(10);
      setMissionsCompleted(5);
      setResources(5000);
    }, 1000);
  }, []);

  const addShipToFleet = () => {
    setFleetSize((prevFleetSize) => prevFleetSize + 1);
    setResources((prevResources) => prevResources - 100);
  };

  const completeMission = () => {
    setMissionsCompleted((prevMissionsCompleted) => prevMissionsCompleted + 1);
    setResources((prevResources) => prevResources + 200);
  };

  return (
    <DashboardContainer>
      <Title>User Stats</Title>
      <StatItem>Fleet Size: {fleetSize}</StatItem>
      <StatItem>Missions Completed: {missionsCompleted}</StatItem>
      <StatItem>Resources: {resources}</StatItem>
      <ButtonContainer>
        <button onClick={addShipToFleet}>Add Ship</button>
        <button onClick={completeMission}>Complete Mission</button>
      </ButtonContainer>
    </DashboardContainer>
  );
};

export default UserStats;
