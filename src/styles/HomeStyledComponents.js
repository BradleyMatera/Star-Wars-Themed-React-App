import styled from 'styled-components';

// Styled container for the Home component
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  gap: 20px;
  background-color: #000;
  color: #ffd700;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

// Styled sidebar component
export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;

  @media (max-width: 767px) {
    order: 2;
  }
`;

// Styled main content component
export const MainContent = styled.main`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 767px) {
    order: 1;
  }
`;

// Styled component for the ads section
export const AdsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;