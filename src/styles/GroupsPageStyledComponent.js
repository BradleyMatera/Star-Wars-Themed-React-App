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

// Styled components for the Groups and Communities page
export const GroupsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #000;
  color: #ffd700;
  border-radius: 10px;
  animation: ${fadeIn} 0.5s ease-out;
  max-width: 1200px;
  margin: 20px auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  color: #ffd700;
  font-size: 2.5rem;
  font-family: 'Star Jedi', sans-serif;
`;

export const FilterButton = styled.button`
  padding: 10px 20px;
  background-color: #ffd700;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ffc700;
  }
`;

export const GroupsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
`;

export const GroupCard = styled.div`
  background-color: #1c1c1c;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: #333;
  }
`;

export const GroupImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const GroupName = styled.h2`
  color: #ffd700;
  margin-bottom: 10px;
`;

export const GroupDescription = styled.p`
  color: #ffd700;
`;

export const JoinButton = styled.button`
  margin-top: 10px;
  padding: 10px 15px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background-color: #218838;
  }
`;