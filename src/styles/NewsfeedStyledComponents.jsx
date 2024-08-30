import styled from "styled-components";
import { motion } from "framer-motion";

// Styled component for the news feed container
export const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #000;
  color: #ffd700;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

// Styled component for the main content area
export const MainContent = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// Styled component for the section title
export const SectionTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #ffd700;
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

// Styled component for the news section
export const NewsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// Styled component for individual news items with animations
export const NewsItem = styled(motion.div)`
  padding: 20px;
  background-color: #1c1c1c;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

// Styled component for news images
export const NewsImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

// Styled component for news content
export const NewsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// Styled component for news title
export const NewsTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffd700;
`;

// Styled component for news text
export const NewsText = styled.p`
  font-size: 1rem;
  color: #aaa;
`;

// Styled component for advertisements section
export const Sidebar = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// Styled component for individual ad items
export const AdItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #2c3e50;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  padding: 20px;
  color: #fff;
`;

// Styled component for ad images
export const AdImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

// Styled component for ad title
export const AdTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffd700;
`;

// Styled component for ad text
export const AdText = styled.p`
  font-size: 1rem;
  color: #aaa;
`;
