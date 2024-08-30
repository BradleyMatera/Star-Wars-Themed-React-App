import styled from "styled-components";
import { FaPowerOff } from "react-icons/fa"; // Ensure this import is used

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
export const SettingsContainer = styled.div`
  padding: 20px;
  color: #ffd700;
  background-color: #000;
  border-radius: 10px;
  animation: ${fadeIn} 0.5s ease-out;
  max-width: 1200px;
  margin: 20px auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
`;

export const ContentSection = styled.div`
  flex: 2;
  padding: 20px;
`;

export const AdSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5rem;
  font-family: "Star Jedi", sans-serif;
`;

export const Section = styled.div`
  margin-bottom: 40px;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SettingItem = styled.div`
  margin-bottom: 20px;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: #333;
    padding-left: 10px;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
`;

export const Button = styled.button`
  background-color: #ffd700;
  color: #000;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  &:hover {
    background-color: #ffc700;
  }
`;

export const Icon = styled(FaPowerOff)`
  margin-right: 10px;
`;

export const ImagePlaceholder = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const AdCard = styled.div`
  background-color: #2c3e50;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  color: #ffffff;
  text-align: center;
  padding: 10px;
  width: 90%;
  max-width: 400px;
`;

export const AdImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: cover;
`;

export const AdTitle = styled.h3`
  color: #ffd700;
  margin: 10px 0;
`;

export const AdSubtitle = styled.p`
  color: #aaaaaa;
`;
