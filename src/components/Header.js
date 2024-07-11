import React from 'react';
import styled from 'styled-components';
import { FaSearch, FaUser, FaCog } from 'react-icons/fa';

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
`;

const Header = ({ background, color, inputColor, iconColor }) => (
  <HeaderWrapper background={background}>
    <Logo color={color}>Imperial Network</Logo>
    <SearchContainer>
      <FaSearch color={inputColor || 'white'} />
      <SearchInput placeholder="Search the galaxy..." inputColor={inputColor} />
    </SearchContainer>
    <IconContainer>
      <IconWrapper iconColor={iconColor}><FaUser /></IconWrapper>
      <IconWrapper iconColor={iconColor}><FaCog /></IconWrapper>
    </IconContainer>
  </HeaderWrapper>
);

export default Header;