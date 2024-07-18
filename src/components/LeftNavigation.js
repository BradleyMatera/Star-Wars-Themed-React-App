import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHome, FaNewspaper, FaEnvelope, FaChartBar, FaCog, FaUser, FaUsers, FaCalendarAlt, FaBell, FaBars } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

// Styled components for navigation
const NavWrapper = styled.nav`
  position: fixed;
  top: 60px;
  left: ${props => (props.$isMenuOpen ? '0' : '-240px')};
  width: 240px;
  height: calc(100vh - 60px);
  background-color: ${props => props.$backgroundColor || '#2c3e50'};
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

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${props => props.$linkColor || '#ffffff'};
  text-decoration: none;
  font-size: 16px;
  &:hover {
    color: ${props => props.$hoverColor || '#FFD700'};
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
  color: ${props => props.$buttonColor || '#ffffff'};
`;

const LeftNavigation = ({ backgroundColor, linkColor, hoverColor, buttonColor }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <HamburgerButton onClick={toggleMenu} $buttonColor={buttonColor}>
        <FaBars />
      </HamburgerButton>
      <NavWrapper $isMenuOpen={isMenuOpen} $backgroundColor={backgroundColor}>
        <NavList>
          <NavItem>
            <NavLink to="/" $linkColor={linkColor} $hoverColor={hoverColor} className={location.pathname === "/" ? "active" : ""}>
              <IconWrapper><FaHome /></IconWrapper>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/dashboard" $linkColor={linkColor} $hoverColor={hoverColor} className={location.pathname === "/dashboard" ? "active" : ""}>
              <IconWrapper><FaChartBar /></IconWrapper>
              Dashboard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/newsfeed" $linkColor={linkColor} $hoverColor={hoverColor} className={location.pathname === "/newsfeed" ? "active" : ""}>
              <IconWrapper><FaNewspaper /></IconWrapper>
              Newsfeed
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/messages" $linkColor={linkColor} $hoverColor={hoverColor} className={location.pathname === "/messages" ? "active" : ""}>
              <IconWrapper><FaEnvelope /></IconWrapper>
              Messages
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/notifications" $linkColor={linkColor} $hoverColor={hoverColor} className={location.pathname === "/notifications" ? "active" : ""}>
              <IconWrapper><FaBell /></IconWrapper>
              Notifications
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/settings" $linkColor={linkColor} $hoverColor={hoverColor} className={location.pathname === "/settings" ? "active" : ""}>
              <IconWrapper><FaCog /></IconWrapper>
              Settings
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/profile" $linkColor={linkColor} $hoverColor={hoverColor} className={location.pathname === "/profile" ? "active" : ""}>
              <IconWrapper><FaUser /></IconWrapper>
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/groupscommunities" $linkColor={linkColor} $hoverColor={hoverColor} className={location.pathname === "/groupscommunities" ? "active" : ""}>
              <IconWrapper><FaUsers /></IconWrapper>
              Groups
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/events" $linkColor={linkColor} $hoverColor={hoverColor} className={location.pathname === "/events" ? "active" : ""}>
              <IconWrapper><FaCalendarAlt /></IconWrapper>
              Events
            </NavLink>
          </NavItem>
        </NavList>
      </NavWrapper>
    </>
  );
};

export default LeftNavigation;