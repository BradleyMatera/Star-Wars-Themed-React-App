import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: ${props => props.backgroundColor || '#2c3e50'}; // Darker background for ads
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  color: ${props => props.textColor || '#ffffff'}; // White text
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.imageBackgroundColor || '#f0f0f0'};
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Title = styled.h3`
  margin: 0 0 0.5rem 0;
  color: ${props => props.titleColor || '#FFD700'}; // Gold for title
`;

const Subtitle = styled.p`
  margin: 0;
  color: ${props => props.subtitleColor || '#777'};
  font-size: 0.9rem;
`;

const AdCard = ({ title, subtitle, imageUrl, backgroundColor, textColor, imageBackgroundColor, titleColor, subtitleColor }) => {
  return (
    <Card backgroundColor={backgroundColor} textColor={textColor}>
      <ImageContainer imageBackgroundColor={imageBackgroundColor}>
        {imageUrl ? (
          <Image src={imageUrl} alt={title} />
        ) : (
          <div>Loading...</div>
        )}
      </ImageContainer>
      <Content>
        <Title titleColor={titleColor}>{title}</Title>
        <Subtitle subtitleColor={subtitleColor}>{subtitle}</Subtitle>
      </Content>
    </Card>
  );
};

export default AdCard;