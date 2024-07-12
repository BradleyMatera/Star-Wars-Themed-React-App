// Importing React and styled-components library
import React, { Component } from 'react';
import styled from 'styled-components';

// Creating a styled button component using styled-components
const StyledButton = styled.button`
  background-color: ${props => props.$primary ? '#1E90FF' : '#FFD700'}; // Sets the background color based on the $primary prop. If true, it uses a blue color, otherwise gold.
  color: ${props => props.$primary ? '#fff' : '#000'}; // Sets the text color based on the $primary prop. If true, text is white, otherwise black.
  border: none; // No border for the button
  padding: 10px 20px; // Padding inside the button for spacing
  border-radius: 5px; // Rounded corners for the button
  font-size: 16px; // Font size of the button text
  cursor: pointer; // Changes cursor to pointer when hovering over the button
  transition: background-color 0.3s; // Smooth transition effect for background color change
  &:hover {
    background-color: ${props => props.$primary ? '#104E8B' : '#DAA520'}; // Sets the hover background color based on the $primary prop. If true, it uses a darker blue color, otherwise darker gold.
  }
`;

// Creating a Button component as a class
class Button extends Component {
  // render method to return JSX
  render() {
    const { children, primary, onClick } = this.props; // Destructuring props for use in the component

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
  }
}

export default Button;