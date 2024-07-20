import styled, { keyframes } from 'styled-components';

// Animation for fade-in effect
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Define styled components for the EventsPage layout
export const EventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000;
  color: #ffd700;
  min-height: 100vh;
  padding: 20px;
  animation: ${fadeIn} 0.5s ease-out;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Sidebar = styled.div`
  width: 100%;
  background-color: #1c1c1c;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);

  @media (min-width: 768px) {
    width: 250px;
    margin-bottom: 0;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const EventCard = styled.div`
  background-color: #1c1c1c;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const EventDetails = styled.div`
  flex: 1;
`;

export const EventImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-top: 20px;

  @media (min-width: 768px) {
    width: 150px;
    height: 100px;
    margin-left: 20px;
    margin-top: 0;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FilterLabel = styled.label`
  font-weight: bold;
  color: #ffd700;
`;

export const DateInput = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #333;
  color: #ffd700;
`;