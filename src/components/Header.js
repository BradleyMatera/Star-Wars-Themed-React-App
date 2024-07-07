import React from 'react';
import styled from 'styled-components';
import { FaSearch, FaUser, FaCog } from 'react-icons/fa';

const HeaderWrapper = styled.header`
  background: linear-gradient(to right, #1E90FF, #FFD700); // Star Wars blue and gold
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'helvetica neue', helvetica, arial, sans-serif;
`;

const Logo = styled.h1`
  color: white;
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
  color: white;
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
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
`;

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