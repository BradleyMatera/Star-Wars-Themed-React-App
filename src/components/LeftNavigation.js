import React, { useState } from 'react';
import styled from 'styled-components';
import { FaNewspaper, FaEnvelope, FaPlay, FaBars } from 'react-icons/fa';

const NavWrapper = styled.nav({
  position: 'fixed',
  top: '60px',
  left: '0',
  width: '240px',
  height: 'calc(100vh - 60px)',
  backgroundColor: '#2c3e50',
  borderTopRightRadius: '15px',
  borderBottomRightRadius: '15px',
  transition: 'left 0.3s ease-in-out',
  zIndex: 1000,
  boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
});

const NavList = styled.ul({
  listStyleType: 'none',
  padding: '20px 0',
  margin: '0',
});

const NavItem = styled.li({
  padding: '10px 20px',
});

const NavLink = styled.a({
  display: 'flex',
  alignItems: 'center',
  color: '#ffffff',
  textDecoration: 'none',
  fontSize: '16px',

  '&:hover': {
    color: '#FFD700', // Gold hover effect
  },
});

const IconWrapper = styled.span({
  marginRight: '10px',
});

const HamburgerButton = styled.button({
  position: 'fixed',
  top: '70px',
  left: '10px',
  zIndex: 1001,
  background: 'none',
  border: 'none',
  fontSize: '24px',
  cursor: 'pointer',
  color: '#ffffff',
});

const LeftNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <HamburgerButton onClick={toggleMenu}>
        <FaBars />
      </HamburgerButton>
      <NavWrapper style={{ left: isMenuOpen ? '0' : '-240px' }}>
        <NavList>
          <NavItem>
            <NavLink href="#newsfeed">
              <IconWrapper><FaNewspaper /></IconWrapper>
              Newsfeed
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#messages">
              <IconWrapper><FaEnvelope /></IconWrapper>
              Messages
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#watch">
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