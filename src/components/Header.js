// Importing necessary libraries and components
import React, { useState } from 'react'; // Importing React and useState hook for managing state
import { FaSearch, FaUser, FaCog, FaBell } from 'react-icons/fa'; // Importing icons from react-icons library
import { Link } from 'react-router-dom'; // Importing Link component from react-router-dom for navigation
import Notifications from '../pages/Notifications'; // Importing Notifications component for the notifications dropdown
import { HeaderWrapper, Logo, SearchContainer, SearchInput, IconContainer, IconWrapper, UserProfileDropdown, NotificationsDropdown, DropdownItem } from '../styles/HeaderStyledComponents'; // Importing styled components

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