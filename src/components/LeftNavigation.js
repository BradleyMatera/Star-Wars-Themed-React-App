// Importing necessary libraries and components
import React, { useState } from 'react'; // Importing React and useState hook for managing state
import styled from 'styled-components'; // Importing styled-components for CSS-in-JS styling
import { GiDeathStar, GiLaserBurst, GiStarfighter, GiSpaceship, GiPlanetCore, GiEvilTower, GiTechnoHeart, GiStarGate } from 'react-icons/gi'; // Importing additional icons from react-icons library
import { FaBars } from 'react-icons/fa'; // Importing FaBars icon from react-icons library
import { Link, useLocation } from 'react-router-dom'; // Importing Link and useLocation from react-router-dom for navigation

// Styled components for navigation
const NavWrapper = styled.nav`
  position: fixed; // Fixing the navigation to the left side
  top: 60px; // Positioning below the header
  left: ${props => (props.$isMenuOpen ? '0' : '-240px')}; // Sliding menu in and out
  width: 240px; // Width of the navigation
  height: calc(100vh - 60px); // Full height minus header height
  background-color: ${props => props.$backgroundColor || '#000'}; // Dynamic background color
  border-top-right-radius: 15px; // Rounded top right corner
  border-bottom-right-radius: 15px; // Rounded bottom right corner
  transition: left 0.3s ease-in-out; // Smooth transition for sliding
  z-index: 1000; // Ensure it stays on top
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5); // Adding shadow for depth
`;

const NavList = styled.ul`
  list-style-type: none; // Removing default list styles
  padding: 20px 0; // Padding for spacing
  margin: 0; // Removing default margin
`;

const NavItem = styled.li`
  padding: 10px 20px; // Padding for each navigation item
  transition: all 0.3s ease-out;
  &:hover {
    background-color: #333;
    padding-left: 10px;
  }
`;

const NavLink = styled(Link)`
  display: flex; // Flexbox for layout
  align-items: center; // Centering items vertically
  color: ${props => props.$linkColor || '#ffd700'}; // Dynamic color for the links
  text-decoration: none; // Removing underline
  font-size: 16px; // Font size for the links
  &:hover {
    color: ${props => props.$hoverColor || '#ff4500'}; // Hover color for the links
  }
`;

const IconWrapper = styled.span`
  margin-right: 10px; // Margin for spacing between icon and text
  font-size: 1.5rem;
`;

const HamburgerButton = styled.button`
  position: fixed; // Fixing the button to the top left
  top: 70px; // Positioning below the header
  left: 10px; // Positioning to the left
  z-index: 1001; // Ensure it stays on top of the navigation
  background: none; // No background
  border: none; // No border
  font-size: 24px; // Font size for the icon
  cursor: pointer; // Pointer cursor on hover
  color: ${props => props.$buttonColor || '#ffd700'}; // Dynamic color for the button
`;

// LeftNavigation functional component definition
const LeftNavigation = ({ backgroundColor, linkColor, hoverColor, buttonColor }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for managing menu visibility
  const location = useLocation(); // Hook for accessing the current location

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle visibility state
  };

  return (
    <>
      <HamburgerButton onClick={toggleMenu} $buttonColor={buttonColor}>
        <FaBars /> {/* Hamburger icon */}
      </HamburgerButton>
      <NavWrapper $isMenuOpen={isMenuOpen} $backgroundColor={backgroundColor}>
        <NavList>
          <NavItem>
            <NavLink to="/" $linkColor={linkColor} $hoverColor={hoverColor} className={location.pathname === "/" ? "active" : ""}>
              <IconWrapper><GiSpaceship /></IconWrapper>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/dashboard" $linkColor={linkColor} $hoverColor={hoverColor} className={location.pathname === "/dashboard" ? "active" : ""}>
              <IconWrapper><GiTechnoHeart /></IconWrapper>
              Dashboard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/newsfeed" $linkColor={linkColor} $hoverColor={hoverColor} className={location.pathname === "/newsfeed" ? "active" : ""}>
              <IconWrapper><GiPlanetCore /></IconWrapper>
              Newsfeed
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/messages" $linkColor={linkColor} $hoverColor={hoverColor} className={location.pathname === "/messages" ? "active" : ""}>
              <IconWrapper><GiStarGate /></IconWrapper>
              Messages
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/notifications" $linkColor={linkColor} $hoverColor={hoverColor} className={location.pathname === "/notifications" ? "active" : ""}>
              <IconWrapper><GiEvilTower /></IconWrapper>
              Notifications
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/settings" $linkColor={linkColor} $hoverColor={hoverColor} className={location.pathname === "/settings" ? "active" : ""}>
              <IconWrapper><GiDeathStar /></IconWrapper>
              Settings
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/profile" $linkColor={linkColor} $hoverColor={hoverColor} className={location.pathname === "/profile" ? "active" : ""}>
              <IconWrapper><GiStarfighter /></IconWrapper>
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/groupscommunities" $linkColor={linkColor} $hoverColor={hoverColor} className={location.pathname === "/groupscommunities" ? "active" : ""}>
              <IconWrapper><GiLaserBurst /></IconWrapper>
              Groups
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/events" $linkColor={linkColor} $hoverColor={hoverColor} className={location.pathname === "/events" ? "active" : ""}>
              <IconWrapper><GiSpaceship /></IconWrapper>
              Events
            </NavLink>
          </NavItem>
        </NavList>
      </NavWrapper>
    </>
  );
};

export default LeftNavigation;
