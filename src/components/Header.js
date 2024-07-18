// Importing necessary libraries and components
import React, { Component } from 'react';
import styled from 'styled-components';
import { FaSearch, FaUser, FaCog, FaBell, FaSignOutAlt } from 'react-icons/fa';
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

// Creating a Header component as a class
class Header extends Component {
  state = {
    showUserDropdown: false
  };

  toggleUserDropdown = () => {
    this.setState(prevState => ({
      showUserDropdown: !prevState.showUserDropdown
    }));
  };

  render() {
    const { background, color, inputColor, iconColor } = this.props; // Destructuring props for use within the component
    const { showUserDropdown } = this.state;

    return (
      // The main wrapper for the header, using styled-components for styling
      <HeaderWrapper background={background}>
        {/* Logo section */}
        <Logo color={color}>Imperial Network</Logo>

        {/* Search bar section */}
        <SearchContainer>
          <FaSearch color={inputColor || 'white'} />
          <SearchInput placeholder="Search the galaxy..." inputColor={inputColor} />
        </SearchContainer>

        {/* Icons section */}
        <IconContainer>
          <Link to="/notifications">
            <IconWrapper iconColor={iconColor}><FaBell /></IconWrapper>
          </Link>
          <IconWrapper iconColor={iconColor} onClick={this.toggleUserDropdown}>
            <FaUser />
            <UserProfileDropdown $show={showUserDropdown}>
              <DropdownItem to="/profile">Profile</DropdownItem>
              <DropdownItem to="/settings">Settings</DropdownItem>
              <DropdownItem to="/logout">Logout</DropdownItem>
            </UserProfileDropdown>
          </IconWrapper>
          <Link to="/settings">
            <IconWrapper iconColor={iconColor}><FaCog /></IconWrapper>
          </Link>
          <Link to="/logout">
            <IconWrapper iconColor={iconColor}><FaSignOutAlt /></IconWrapper>
          </Link>
        </IconContainer>
      </HeaderWrapper>
    );
  }
}

export default Header;