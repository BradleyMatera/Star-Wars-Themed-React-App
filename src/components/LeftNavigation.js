// Importing necessary libraries and components
import React, { Component } from 'react';
import styled from 'styled-components';
import { FaNewspaper, FaEnvelope, FaPlay, FaBars } from 'react-icons/fa';

// Styled components for various parts of the navigation menu
const NavWrapper = styled.nav`
  position: fixed;
  top: 60px;
  left: ${props => (props.$isMenuOpen ? '0' : '-240px')}; // Position based on menu state
  width: 240px;
  height: calc(100vh - 60px);
  background-color: ${props => props.backgroundColor || '#2c3e50'};
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  transition: left 0.3s ease-in-out; // Smooth transition effect for menu
  z-index: 1000;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 20px 0;
  margin: 0;
`;

const NavItem = styled.li`
  padding: 10px 20px;
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  color: ${props => props.linkColor || '#ffffff'};
  text-decoration: none;
  font-size: 16px;

  &:hover {
    color: ${props => props.hoverColor || '#FFD700'}; // Gold hover effect
  }
`;

const IconWrapper = styled.span`
  margin-right: 10px;
`;

const HamburgerButton = styled.button`
  position: fixed;
  top: 70px;
  left: 10px;
  z-index: 1001;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${props => props.buttonColor || '#ffffff'};
`;

// Creating a LeftNavigation component as a class
class LeftNavigation extends Component {
  constructor(props) {
    super(props);
    // Initializing state to manage the menu's open/close status
    this.state = {
      isMenuOpen: false // Initial state of the menu
    };
  }

  // Method to toggle the menu state
  toggleMenu = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen // Toggling the menu state
    }));
  };

  render() {
    const { backgroundColor, linkColor, hoverColor, buttonColor } = this.props;
    const { isMenuOpen } = this.state;

    return (
      <>
        {/* Hamburger button to toggle the menu */}
        <HamburgerButton onClick={this.toggleMenu} buttonColor={buttonColor}>
          <FaBars />
        </HamburgerButton>
        {/* Navigation menu */}
        <NavWrapper $isMenuOpen={isMenuOpen} backgroundColor={backgroundColor}>
          <NavList>
            <NavItem>
              <NavLink href="#newsfeed" linkColor={linkColor} hoverColor={hoverColor}>
                <IconWrapper><FaNewspaper /></IconWrapper>
                Newsfeed
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#messages" linkColor={linkColor} hoverColor={hoverColor}>
                <IconWrapper><FaEnvelope /></IconWrapper>
                Messages
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#watch" linkColor={linkColor} hoverColor={hoverColor}>
                <IconWrapper><FaPlay /></IconWrapper>
                Watch
              </NavLink>
            </NavItem>
          </NavList>
        </NavWrapper>
      </>
    );
  }
}

export default LeftNavigation;