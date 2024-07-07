import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #1877f2;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #166fe5;
  }
`;

const Button = ({ text, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;