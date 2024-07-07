import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.$primary ? '#1E90FF' : '#FFD700'};
  color: ${props => props.$primary ? '#fff' : '#000'};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.$primary ? '#104E8B' : '#DAA520'};
  }
`;

const Button = ({ children, primary, onClick }) => {
  return (
    <StyledButton $primary={primary} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;