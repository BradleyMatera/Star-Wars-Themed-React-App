import React from 'react';
import { Card, ImageContainer, Image, Content, Title, Subtitle } from '../styles/AdCardStyledComponents'; // Importing styled components

// AdCard component to display an advertisement
// This component will be used in Home.js within the AdsSection and Sidebar
const AdCard = ({ title, subtitle, imageUrl, $backgroundColor, $textColor, $imageBackgroundColor, $titleColor, $subtitleColor }) => {
  return (
    <Card $backgroundColor={$backgroundColor} $textColor={$textColor}>
      <ImageContainer $imageBackgroundColor={$imageBackgroundColor}>
        {imageUrl ? (
          <Image src={imageUrl} alt={title} />
        ) : (
          <div>Loading...</div>
        )}
      </ImageContainer>
      <Content>
        <Title $titleColor={$titleColor}>{title}</Title>
        <Subtitle $subtitleColor={$subtitleColor}>{subtitle}</Subtitle>
      </Content>
    </Card>
  );
};

export default AdCard;
