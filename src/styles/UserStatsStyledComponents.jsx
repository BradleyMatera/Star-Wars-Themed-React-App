import styled from "styled-components";

// Styled components for the layout and styling
export const DashboardContainer = styled.div`
  background-color: #2d2d2d; // Dark background color for the dashboard container
  color: #ffd700; // Gold text color for high contrast
  padding: 20px; // Padding inside the container
  border-radius: 10px; // Rounded corners for the container
  font-family: "Star Jedi", sans-serif; // Custom font for a Star Wars theme
  width: 90%; // Responsive width
  max-width: 600px; // Maximum width for the container
  margin: 40px auto; // Center the container with auto margins
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); // Shadow for visual depth
  overflow: hidden; // Prevent overflow
`;

export const Title = styled.h1`
  text-align: center; // Center the title text
  margin-bottom: 20px; // Margin below the title
  font-size: 24px; // Font size for the title
`;

export const StatItem = styled.p`
  font-size: 18px; // Font size for stat items
  margin: 10px 0; // Vertical margin for spacing
  text-align: center; // Center align the text
`;

export const ButtonContainer = styled.div`
  display: flex; // Use flexbox for button layout
  justify-content: center; // Center the buttons horizontally
  flex-wrap: wrap; // Wrap buttons to next line if needed
`;

export const Button = styled.button`
  background-color: #ffd700; // Gold background color for the button
  color: #2d2d2d; // Dark text color for contrast
  border: none; // No border for the button
  padding: 10px 15px; // Padding inside the button
  margin: 5px; // Margin around the button for spacing
  border-radius: 5px; // Rounded corners for the button
  cursor: pointer; // Pointer cursor on hover
  font-weight: bold; // Bold font weight
  font-family: "Star Jedi", sans-serif; // Custom font for a Star Wars theme
  transition: background-color 0.3s; // Smooth transition for hover effect
  &:hover {
    background-color: #ffc700; // Slightly darker gold on hover
  }
`;
