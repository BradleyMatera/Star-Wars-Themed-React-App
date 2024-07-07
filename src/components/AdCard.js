import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchGif } from './apis';

const Card = styled.div({
  backgroundColor: 'white',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  marginBottom: '1rem'
});

const GifContainer = styled.div({
  width: '100%',
  height: '200px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f0f0f0'
});

const Gif = styled.img({
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'contain'
});

const Content = styled.div({
  padding: '1rem'
});

const Title = styled.h3({
  margin: '0 0 0.5rem 0',
  color: '#3498db'
});

const Subtitle = styled.p({
  margin: '0',
  color: '#777',
  fontSize: '0.9rem'
});

const AdCard = ({ title, subtitle }) => {
  const [gifUrl, setGifUrl] = useState('');

  useEffect(() => {
    fetchGif(title)
      .then(url => {
        if (url) {
          setGifUrl(url);
        }
      });
  }, [title]);

  return (
    <Card>
      <GifContainer>
        {gifUrl ? (
          <Gif src={gifUrl} alt={title} />
        ) : (
          <div>Loading...</div>
        )}
      </GifContainer>
      <Content>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Content>
    </Card>
  );
};

export default AdCard;