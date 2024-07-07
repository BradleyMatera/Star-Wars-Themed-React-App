import React from 'react';
import styled from 'styled-components';
import { FaSearch, FaUser, FaCog } from 'react-icons/fa';

const HeaderWrapper = styled.header({
  background: 'linear-gradient(to right, #3498db, #2ecc71)',
  padding: '1rem 2rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

const Logo = styled.h1({
  color: 'white',
  fontSize: '1.5rem',
  fontWeight: 'bold'
});

const SearchContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  borderRadius: '20px',
  padding: '0.5rem 1rem'
});

const SearchInput = styled.input({
  background: 'transparent',
  border: 'none',
  color: 'white',
  marginLeft: '0.5rem'
});

const IconContainer = styled.div({
  display: 'flex',
  gap: '1rem'
});

const IconWrapper = styled.div({
  color: 'white',
  fontSize: '1.2rem',
  cursor: 'pointer'
});

const Header = ({ title }) => (
  <HeaderWrapper>
    <Logo>{title}</Logo>
    <SearchContainer>
      <FaSearch color="white" />
      <SearchInput placeholder="Search..." />
    </SearchContainer>
    <IconContainer>
      <IconWrapper><FaUser /></IconWrapper>
      <IconWrapper><FaCog /></IconWrapper>
    </IconContainer>
  </HeaderWrapper>
);

export default Header;