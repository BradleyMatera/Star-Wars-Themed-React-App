import React from 'react';
import styled from 'styled-components';

const PrimaryButton = styled.button({
  backgroundColor: '#1E90FF',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  fontSize: '16px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: '#104E8B',
  },
});

const SecondaryButton = styled.button({
  backgroundColor: '#FFD700',
  color: '#000',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  fontSize: '16px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: '#DAA520',
  },
});

const Button = ({ children, primary, onClick }) => {
  if (primary) {
    return <PrimaryButton onClick={onClick}>{children}</PrimaryButton>;
  }
  return <SecondaryButton onClick={onClick}>{children}</SecondaryButton>;
};

export default Button;