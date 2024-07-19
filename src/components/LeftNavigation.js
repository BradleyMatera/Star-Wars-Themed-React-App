import React, { useState } from 'react'; // Importing React and useState hook for managing state
import { GiDeathStar, GiLaserBurst, GiStarfighter, GiSpaceship, GiPlanetCore, GiEvilTower, GiTechnoHeart, GiStarGate } from 'react-icons/gi'; // Importing additional icons from react-icons library
import { FaBars } from 'react-icons/fa'; // Importing FaBars icon from react-icons library
import { useLocation } from 'react-router-dom'; // Importing useLocation from react-router-dom for navigation
import { NavWrapper, NavList, NavItem, NavLink, IconWrapper, HamburgerButton } from '../styles/LeftNavigationStyledComponents'; // Importing styled components

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