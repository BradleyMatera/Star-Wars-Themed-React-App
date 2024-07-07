import React from 'react';
import styled from 'styled-components';
import { FaNewspaper, FaEnvelope, FaPlay, FaBars } from 'react-icons/fa';

const NavWrapper = styled.nav`
  position: fixed;
  top: 60px;
  left: ${props => props.$isOpen ? '0' : '-240px'};
  width: 240px;
  height: calc(100vh - 60px);
  background-color: #f6f8fa;
  transition: left 0.3s ease-in-out;
  z-index: 1000;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
`;

const NavList = styled.ul({
  listStyleType: 'none',
  padding: '20px 0',
  margin: 0
});

const NavItem = styled.li({
  padding: '10px 20px'
});

const NavLink = styled.a({
  display: 'flex',
  alignItems: 'center',
  color: '#333',
  textDecoration: 'none',
  fontSize: '16px'
});

const IconWrapper = styled.span({
  marginRight: '10px'
});

const HamburgerButton = styled.button({
  position: 'fixed',
  top: '70px',
  left: '10px',
  zIndex: 1001,
  background: 'none',
  border: 'none',
  fontSize: '24px',
  cursor: 'pointer'
});

const LeftNavigation = ({ isOpen, toggleMenu }) => (
  <>
    <HamburgerButton onClick={toggleMenu}>
      <FaBars />
    </HamburgerButton>
    <NavWrapper $isOpen={isOpen}>
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

export default LeftNavigation;