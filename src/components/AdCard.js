import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #2c3e50; // Darker background for ads
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  color: #ffffff; // White text
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
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
  color: #FFD700; // Gold for title
`;

const Subtitle = styled.p`
  margin: 0;
  color: #777;
  font-size: 0.9rem;
`;

const AdCard = ({ title, subtitle, imageUrl }) => {
  return (
    <Card>
      <ImageContainer>
        {imageUrl ? (
          <Image src={imageUrl} alt={title} />
        ) : (
          <div>Loading...</div>
        )}
      </ImageContainer>
      <Content>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Content>
    </Card>
  );
};

export default AdCard;