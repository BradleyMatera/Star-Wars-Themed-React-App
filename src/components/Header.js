import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch, FaUser, FaCog, FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Notifications from '../pages/Notifications';
import headerImage from '../img/headerImage.png'; // Adjust the path according to your project structure

// Styled components for various parts of the header
const HeaderWrapper = styled.header`
  background: url(${headerImage}) no-repeat center center;
  background-size: cover;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  color: ${props => props.color || '#FFD700'};
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Star Jedi', sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 0.5rem 1rem;
`;

const SearchInput = styled.input`
  background: transparent;
  border: none;
  color: ${props => props.inputColor || '#FFD700'};
  margin-left: 0.5rem;
  font-size: 1rem;
  font-family: 'Arial', sans-serif;

  &:focus {
    outline: none;
  }
`;

const IconContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  color: ${props => props.iconColor || '#FFD700'};
  font-size: 1.5rem;
  cursor: pointer;
  position: relative;
  transition: color 0.3s;

  &:hover {
    color: ${props => props.hoverColor || '#FFA500'};
  }
`;

const UserProfileDropdown = styled.div`
  position: absolute;
  top: 2.5rem;
  right: 0;
  background: #1c1c1c;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 150px;
  display: ${props => (props.$show ? 'block' : 'none')};
  z-index: 1000;
`;

const NotificationsDropdown = styled.div`
  position: absolute;
  top: 2.5rem;
  right: 0;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 300px;
  display: ${props => (props.$show ? 'block' : 'none')};
  z-index: 1000;
  padding: 1rem;
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 10px;
  color: #FFD700;
  text-decoration: none;
  font-family: 'Arial', sans-serif;

  &:hover {
    background: #333;
  }
`;

// Header functional component definition
const Header = ({ background, color, inputColor, iconColor, hoverColor }) => {
  const [showUserDropdown, setShowUserDropdown] = useState(false); // State for managing user dropdown visibility
  const [showNotifications, setShowNotifications] = useState(false); // State for managing notifications dropdown visibility

  // Function to toggle user dropdown visibility
  const toggleUserDropdown = () => {
    setShowUserDropdown(prevState => !prevState);
  };

  // Function to toggle notifications dropdown visibility
  const toggleNotifications = () => {
    setShowNotifications(prevState => !prevState);
  };

  return (
    <HeaderWrapper background={background}>
      <Logo color={color}>Imperial Network</Logo>

      <SearchContainer>
        <FaSearch color={inputColor || '#FFD700'} />
        <SearchInput placeholder="Search the galaxy..." inputColor={inputColor} />
      </SearchContainer>

      <IconContainer>
        <IconWrapper iconColor={iconColor} hoverColor={hoverColor} onClick={toggleNotifications}>
          <FaBell />
          <NotificationsDropdown $show={showNotifications}>
            <Notifications />
          </NotificationsDropdown>
        </IconWrapper>
        <IconWrapper iconColor={iconColor} hoverColor={hoverColor} onClick={toggleUserDropdown}>
          <FaUser />
          <UserProfileDropdown $show={showUserDropdown}>
            <DropdownItem to="/profile">Profile</DropdownItem>
            <DropdownItem to="/settings">Settings</DropdownItem>
          </UserProfileDropdown>
        </IconWrapper>
        <Link to="/settings">
          <IconWrapper iconColor={iconColor} hoverColor={hoverColor}><FaCog /></IconWrapper>
        </Link>
      </IconContainer>
    </HeaderWrapper>
  );
};

export default Header;
