import React from 'react';
import styled from 'styled-components';
const StyledButton = styled.button`
  background-color: ${props => props.$primary ? '#1E90FF' : '#FFD700'}; // Background color changes based on '$primary' prop
  color: ${props => props.$primary ? '#fff' : '#000'}; // Text color changes based on '$primary' prop
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.$primary ? '#104E8B' : '#DAA520'}; // Hover background color changes based on '$primary' prop
  }
`;

const Button = ({ children, primary, onClick }) => {
  return (
    // Rendering the styled button with dynamic props
    // '$primary' prop changes the button's background and text color based on its value
    // 'onClick' prop triggers the provided function when the button is clicked
    // 'children' prop displays the content passed as children in the button element
    // prop is short for properties, you know what those are.
    <StyledButton $primary={primary} onClick={onClick}>
      {children} {/* Displaying the content passed as children */}
    </StyledButton>
  );
};

export default Button;