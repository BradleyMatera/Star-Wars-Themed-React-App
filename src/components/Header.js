// Importing necessary libraries and components
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch, FaUser, FaCog, FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Styled components for various parts of the header
const HeaderWrapper = styled.header`
  background: ${props => props.background || 'linear-gradient(to right, #FF0000, #0000FF)'};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: ${props => props.color || 'white'};
  font-size: 1.5rem;
  font-weight: bold;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 0.5rem 1rem;
`;

const SearchInput = styled.input`
  background: transparent;
  border: none;
  color: ${props => props.inputColor || 'white'};
  margin-left: 0.5rem;

  &:focus {
    outline: none;
  }
`;

const IconContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  color: ${props => props.iconColor || 'white'};
  font-size: 1.2rem;
  cursor: pointer;
  position: relative;
`;

const UserProfileDropdown = styled.div`
  position: absolute;
  top: 2.5rem;
  right: 0;
  background: #1c1c1c;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 150px;
  display: ${props => (props.$show ? 'block' : 'none')}; /* Using transient prop */
  z-index: 1000;
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 10px;
  color: white;
  text-decoration: none;
  &:hover {
    background: #333;
  }
`;

// Header functional component definition
const Header = ({ background, color, inputColor, iconColor }) => {
  const [showUserDropdown, setShowUserDropdown] = useState(false); // State for managing dropdown visibility

  // Function to toggle dropdown visibility
  const toggleUserDropdown = () => {
    setShowUserDropdown(prevState => !prevState);
  };

  return (
    <HeaderWrapper background={background}>
      <Logo color={color}>Imperial Network</Logo>

      <SearchContainer>
        <FaSearch color={inputColor || 'white'} />
        <SearchInput placeholder="Search the galaxy..." inputColor={inputColor} />
      </SearchContainer>

      <IconContainer>
        <Link to="/notifications">
          <IconWrapper iconColor={iconColor}><FaBell /></IconWrapper>
        </Link>
        <IconWrapper iconColor={iconColor} onClick={toggleUserDropdown}>
          <FaUser />
          <UserProfileDropdown $show={showUserDropdown}>
            <DropdownItem to="/profile">Profile</DropdownItem>
            <DropdownItem to="/settings">Settings</DropdownItem>
          </UserProfileDropdown>
        </IconWrapper>
        <Link to="/settings">
          <IconWrapper iconColor={iconColor}><FaCog /></IconWrapper>
        </Link>
      </IconContainer>
    </HeaderWrapper>
  );
};

export default Header;
