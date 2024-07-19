// ProfileStyledComponents.js

import styled, { keyframes } from 'styled-components';

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled components
export const ProfileContainer = styled.div`
  padding: 20px;
  color: #ffd700;
  background-color: #000;
  border-radius: 10px;
  animation: ${fadeIn} 0.5s ease-out;
  max-width: 1000px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Name = styled.h1`
  margin: 0;
  color: #ffd700;
`;

export const Stats = styled.p`
  margin: 5px 0;
  color: #aaa;
`;

export const ProfileForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  color: #ffd700;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 1rem;
  background-color: #333;
  color: #ffd700;
`;

export const Select = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 1rem;
  background-color: #333;
  color: #ffd700;
`;

export const Button = styled.button`
  grid-column: span 2;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #45a049;
  }
`;