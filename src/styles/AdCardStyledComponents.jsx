import styled from "styled-components";

// Styled component for the Card container
// This will be used in Home.js, placed inside the AdsSection and Sidebar components
export const Card = styled.div`
  background-color: ${(props) => props.$backgroundColor || "#2c3e50"};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  color: ${(props) => props.$textColor || "#ffffff"};
  width: 100%;
  max-width: 300px;
  margin: 20px auto;
`;

// Styled component for the image container
// This will hold the image in the AdCard component
export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.$imageBackgroundColor || "#f0f0f0"};
`;

// Styled component for the image itself
// This will be used to display the ad image in the AdCard component
export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

// Styled component for the content section of the card
// This will contain the title and subtitle of the ad
export const Content = styled.div`
  padding: 1rem;
`;

// Styled component for the title of the ad
// This will be used to display the title in the AdCard component
export const Title = styled.h3`
  margin: 0 0 0.5rem 0;
  color: ${(props) => props.$titleColor || "#FFD700"};
`;

// Styled component for the subtitle of the ad
// This will be used to display the subtitle in the AdCard component
export const Subtitle = styled.p`
  margin: 0;
  color: ${(props) => props.$subtitleColor || "#777"};
  font-size: 0.9rem;
`;
