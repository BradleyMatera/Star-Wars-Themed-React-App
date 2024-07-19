// Import necessary libraries
import styled from 'styled-components';

// Styled components for the dashboard layout and design
export const DashboardContainer = styled.div`
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

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainTitle = styled.h1`
  font-size: 24px; // Font size for the main title
  color: #ffd700; // Text color for the main title
`;

export const SubTitle = styled.h2`
  font-size: 20px; // Font size for the subtitle
  color: #aaa; // Text color for the subtitle
  margin-bottom: 15px; // Margin below the subtitle
`;

export const ChartSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap; // Wrap the charts if necessary
`;

export const ChartCard = styled.div`
  flex: 1; // Flexible size for the chart card
  min-width: 300px; // Minimum width for the chart card
  background: #1c1c1c; // Background color for the chart card
  padding: 20px; // Padding inside the chart card
  border-radius: 8px; // Rounded corners for the chart card
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Shadow for depth effect
`;

export const StatCard = styled.div`
  flex: 1; // Flexible size for the stat card
  background: #1c1c1c; // Background color for the stat card
  padding: 20px; // Padding inside the stat card
  border-radius: 8px; // Rounded corners for the stat card
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Shadow for depth effect
`;

export const StatValue = styled.p`
  font-size: 36px; // Font size for the stat value
  margin: 0; // Remove margin
  color: #1e90ff; // Text color for the stat value
`;

export const StatLabel = styled.p`
  font-size: 14px; // Font size for the stat label
  color: #777; // Text color for the stat label
  margin: 5px 0 0; // Margin for the stat label
`;