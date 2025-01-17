import styled from "styled-components";
import headerImage from "../img/headerImage.png"; // Ensure this path is correct
import { Link } from "react-router-dom"; // Add this import

// Styled components for various parts of the header
export const HeaderWrapper = styled.header`
  background: url(${headerImage}) no-repeat center center; // Setting background image for the header
  background-size: cover; // Ensuring the background image covers the entire header area
  padding: 1rem 2rem; // Padding for spacing
  display: flex; // Flexbox for layout
  justify-content: space-between; // Space between elements
  align-items: center; // Centering items vertically
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Adding shadow for depth
  flex-wrap: wrap; // Allow wrapping of elements on smaller screens

  @media (max-width: 768px) {
    padding: 1rem; // Reduce padding on smaller screens
  }

  @media (max-width: 480px) {
    flex-direction: column; // Stack elements vertically on very small screens
    padding: 0.5rem; // Reduce padding further on very small screens
  }
`;

export const Logo = styled.h1`
  color: #FFD700; // Dynamic color for the logo text
  font-size: 2rem; // Font size for the logo text
  font-weight: bold; // Bold font weight
  font-family: "Star Jedi", sans-serif; // Custom font for the Star Wars theme
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); // Text shadow for a 3D effect
  flex: 1 1 auto; // Allow the logo to grow and shrink

  @media (max-width: 768px) {
    font-size: 1.5rem; // Reduce font size on smaller screens
    text-align: center; // Center the logo text on smaller screens
    flex-basis: 100%; // Make logo take full width on smaller screens
    margin-bottom: 0.5rem; // Add margin below the logo on smaller screens
  }

  @media (max-width: 480px) {
    font-size: 1.2rem; // Further reduce font size on very small screens
    margin-bottom: 0.25rem; // Reduce margin below the logo on very small screens
  }
`;

export const SearchContainer = styled.div`
  display: flex; // Flexbox for layout
  align-items: center; // Centering items vertically
  background-color: rgba(
    255,
    255,
    255,
    0.8
  ); // Semi-transparent white background color
  border-radius: 20px; // Rounded corners
  padding: 0.5rem 1rem; // Padding for spacing
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); // Adding shadow for depth
  flex: 2 1 auto; // Allow the search container to grow and shrink
  margin: 0 1rem; // Add margin for spacing

  @media (max-width: 768px) {
    flex-basis: 100%; // Make search container take full width on smaller screens
    margin: 0.5rem 0; // Add vertical margin on smaller screens
  }

  @media (max-width: 480px) {
    padding: 0.25rem 0.5rem; // Reduce padding on very small screens
    margin: 0.25rem 0; // Further reduce vertical margin on very small screens
  }
`;

export const SearchInput = styled.input`
  background: transparent; // Transparent background
  border: none; // No border
  color: ${(props) =>
    props.inputColor || "#000"}; // Dynamic color for the input text
  margin-left: 0.5rem; // Margin for spacing
  font-size: 1rem; // Font size for the input text
  font-family: "Arial", sans-serif; // Font family for the input text

  &::placeholder {
    color: ${(props) =>
      props.placeholderColor || "#888"}; // Color for placeholder text
  }

  &:focus {
    outline: none; // Removing the default focus outline
  }

  @media (max-width: 480px) {
    font-size: 0.9rem; // Reduce font size on very small screens
  }
`;

export const IconContainer = styled.div`
  display: flex; // Flexbox for layout
  gap: 1rem; // Gap between icons
  flex: 1 1 auto; // Allow the icon container to grow and shrink

  @media (max-width: 768px) {
    justify-content: center; // Center the icons on smaller screens
    flex-basis: 100%; // Make icon container take full width on smaller screens
    margin-top: 0.5rem; // Add margin above the icons on smaller screens
  }

  @media (max-width: 480px) {
    margin-top: 0.25rem; // Reduce margin above the icons on very small screens
  }
`;

export const IconWrapper = styled.div`
  color: ${(props) =>
    props.iconColor || "#FFD700"}; // Dynamic color for the icons
  font-size: 1.5rem; // Font size for the icons
  cursor: pointer; // Pointer cursor on hover
  position: relative; // Relative positioning for dropdowns
  transition: color 0.3s; // Smooth color transition on hover

  &:hover {
    color: ${(props) =>
      props.hoverColor || "#FFA500"}; // Hover color for the icons
  }

  @media (max-width: 480px) {
    font-size: 1.2rem; // Reduce font size on very small screens
  }
`;

export const UserProfileDropdown = styled.div`
  position: absolute; // Absolute positioning for dropdown
  top: 2.5rem; // Position below the icon
  right: 0; // Align to the right
  background: #1c1c1c; // Background color for the dropdown
  border-radius: 8px; // Rounded corners
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // Shadow for depth
  width: 150px; // Fixed width
  display: ${(props) =>
    props.$show ? "block" : "none"}; // Show/hide based on state
  z-index: 1000; // High z-index for visibility
`;

export const NotificationsDropdown = styled.div`
  position: absolute; // Absolute positioning for dropdown
  top: 2.5rem; // Position below the icon
  right: 0; // Align to the right
  background: #fff; // Background color for the dropdown
  border-radius: 8px; // Rounded corners
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // Shadow for depth
  width: 300px; // Fixed width
  display: ${(props) =>
    props.$show ? "block" : "none"}; // Show/hide based on state
  z-index: 1000; // High z-index for visibility
  padding: 1rem; // Padding for spacing
`;

export const DropdownItem = styled(Link)`
  display: block; // Block display for the link
  padding: 10px; // Padding for spacing
  color: #ffd700; // Color for the link text
  text-decoration: none; // Removing underline
  font-family: "Arial", sans-serif; // Font family for the link text

  &:hover {
    background: #333; // Background color on hover
  }
`;
