// ProfileStyledComponents.js

import styled, { keyframes } from "styled-components"; // Add keyframes import

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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #000;
  color: #ffd700;
  border-radius: 10px;
  max-width: 1200px;
  margin: 20px auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 1s ease-in-out; // Use the animation
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Stats = styled.p`
  font-size: 18px;
  margin: 5px 0;
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
