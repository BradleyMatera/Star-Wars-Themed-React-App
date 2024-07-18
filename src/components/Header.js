// Importing necessary libraries and components
import React, { useState } from 'react'; // Importing React and useState hook for managing state
import styled from 'styled-components'; // Importing styled-components for CSS-in-JS styling
import { FaSearch, FaUser, FaCog, FaBell } from 'react-icons/fa'; // Importing icons from react-icons library
import { Link } from 'react-router-dom'; // Importing Link component from react-router-dom for navigation
import Notifications from '../pages/Notifications'; // Importing Notifications component for the notifications dropdown
import headerImage from '../img/headerImage.png'; // Importing header background image

// Styled components for various parts of the header
const HeaderWrapper = styled.header`
  background: url(${headerImage}) no-repeat center center; // Setting background image for the header
  background-size: cover; // Ensuring the background image covers the entire header area
  padding: 1rem 2rem; // Padding for spacing
  display: flex; // Flexbox for layout
  justify-content: space-between; // Space between elements
  align-items: center; // Centering items vertically
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Adding shadow for depth
`;

const Logo = styled.h1`
  color: ${props => props.color || '#FFD700'}; // Dynamic color for the logo text
  font-size: 2rem; // Font size for the logo text
  font-weight: bold; // Bold font weight
  font-family: 'Star Jedi', sans-serif; // Custom font for the Star Wars theme
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); // Text shadow for a 3D effect
`;

const SearchContainer = styled.div`
  display: flex; // Flexbox for layout
  align-items: center; // Centering items vertically
  background-color: rgba(255, 255, 255, 0.8); // Semi-transparent white background color
  border-radius: 20px; // Rounded corners
  padding: 0.5rem 1rem; // Padding for spacing
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); // Adding shadow for depth
`;

const SearchInput = styled.input`
  background: transparent; // Transparent background
  border: none; // No border
  color: ${props => props.inputColor || '#000'}; // Dynamic color for the input text
  margin-left: 0.5rem; // Margin for spacing
  font-size: 1rem; // Font size for the input text
  font-family: 'Arial', sans-serif; // Font family for the input text

  &::placeholder {
    color: ${props => props.placeholderColor || '#888'}; // Color for placeholder text
  }

  &:focus {
    outline: none; // Removing the default focus outline
  }
`;

const IconContainer = styled.div`
  display: flex; // Flexbox for layout
  gap: 1rem; // Gap between icons
`;

const IconWrapper = styled.div`
  color: ${props => props.iconColor || '#FFD700'}; // Dynamic color for the icons
  font-size: 1.5rem; // Font size for the icons
  cursor: pointer; // Pointer cursor on hover
  position: relative; // Relative positioning for dropdowns
  transition: color 0.3s; // Smooth color transition on hover

  &:hover {
    color: ${props => props.hoverColor || '#FFA500'}; // Hover color for the icons
  }
`;

const UserProfileDropdown = styled.div`
  position: absolute; // Absolute positioning for dropdown
  top: 2.5rem; // Position below the icon
  right: 0; // Align to the right
  background: #1c1c1c; // Background color for the dropdown
  border-radius: 8px; // Rounded corners
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // Shadow for depth
  width: 150px; // Fixed width
  display: ${props => (props.$show ? 'block' : 'none')}; // Show/hide based on state
  z-index: 1000; // High z-index for visibility
`;

const NotificationsDropdown = styled.div`
  position: absolute; // Absolute positioning for dropdown
  top: 2.5rem; // Position below the icon
  right: 0; // Align to the right
  background: #fff; // Background color for the dropdown
  border-radius: 8px; // Rounded corners
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // Shadow for depth
  width: 300px; // Fixed width
  display: ${props => (props.$show ? 'block' : 'none')}; // Show/hide based on state
  z-index: 1000; // High z-index for visibility
  padding: 1rem; // Padding for spacing
`;

const DropdownItem = styled(Link)`
  display: block; // Block display for the link
  padding: 10px; // Padding for spacing
  color: #FFD700; // Color for the link text
  text-decoration: none; // Removing underline
  font-family: 'Arial', sans-serif; // Font family for the link text

  &:hover {
    background: #333; // Background color on hover
  }
`;

// Header functional component definition
const Header = ({ background, color, inputColor, iconColor, hoverColor, placeholderColor }) => {
  const [showUserDropdown, setShowUserDropdown] = useState(false); // State for managing user dropdown visibility
  const [showNotifications, setShowNotifications] = useState(false); // State for managing notifications dropdown visibility

  // Function to toggle user dropdown visibility
  const toggleUserDropdown = () => {
    setShowUserDropdown(prevState => !prevState); // Toggle visibility state
  };

  // Function to toggle notifications dropdown visibility
  const toggleNotifications = () => {
    setShowNotifications(prevState => !prevState); // Toggle visibility state
  };

  return (
    <HeaderWrapper background={background}>
      <Logo color={color}>Imperial Network</Logo> {/* Logo for the header */}

      <SearchContainer>
        <FaSearch color={inputColor || '#000'} /> {/* Search icon */}
        <SearchInput 
          placeholder="Search the galaxy..." 
          inputColor={inputColor} 
          placeholderColor={placeholderColor} 
        /> {/* Search input field */}
      </SearchContainer>

      <IconContainer>
        <IconWrapper iconColor={iconColor} hoverColor={hoverColor} onClick={toggleNotifications}>
          <FaBell /> {/* Notifications icon */}
          <NotificationsDropdown $show={showNotifications}>
            <Notifications /> {/* Notifications component */}
          </NotificationsDropdown>
        </IconWrapper>
        <IconWrapper iconColor={iconColor} hoverColor={hoverColor} onClick={toggleUserDropdown}>
          <FaUser /> {/* User profile icon */}
          <UserProfileDropdown $show={showUserDropdown}>
            <DropdownItem to="/profile">Profile</DropdownItem> {/* Link to profile */}
            <DropdownItem to="/settings">Settings</DropdownItem> {/* Link to settings */}
          </UserProfileDropdown>
        </IconWrapper>
        <Link to="/settings">
          <IconWrapper iconColor={iconColor} hoverColor={hoverColor}><FaCog /></IconWrapper> {/* Settings icon */}
        </Link>
      </IconContainer>
    </HeaderWrapper>
  );
};

export default Header;
