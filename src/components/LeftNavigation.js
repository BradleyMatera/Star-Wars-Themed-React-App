import React, { useState } from 'react';
import styled from 'styled-components';
import { FaNewspaper, FaEnvelope, FaPlay, FaBars } from 'react-icons/fa';

const NavWrapper = styled.nav`
  position: fixed;
  top: 60px;
  left: ${props => (props.$isMenuOpen ? '0' : '-240px')};
  width: 240px;
  height: calc(100vh - 60px);
  background-color: ${props => props.backgroundColor || '#2c3e50'};
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  transition: left 0.3s ease-in-out;
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

const LeftNavigation = ({ backgroundColor, linkColor, hoverColor, buttonColor }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <HamburgerButton onClick={toggleMenu} buttonColor={buttonColor}>
        <FaBars />
      </HamburgerButton>
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
};

export default LeftNavigation;