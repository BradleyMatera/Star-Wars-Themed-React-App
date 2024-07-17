import React, { Component } from 'react';
import styled from 'styled-components';

// Styled component for the Card container
const Card = styled.div`
  background-color: ${props => props.backgroundColor || '#2c3e50'}; // Darker background for ads, default is '#2c3e50'
  border-radius: 8px; // Rounded corners
  overflow: hidden; // Hides overflow content
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Shadow for a slight 3D effect
  margin-bottom: 1rem; // Space below each card
  color: ${props => props.textColor || '#ffffff'}; // White text by default
  width: 90%; // Ensure the card is 90% of the parent's width
  max-width: 400px; // Max width for the card
  margin: 20px auto; // Center the card horizontally
`;

// Styled component for the image container
const ImageContainer = styled.div`
  width: 100%; // Full width
  height: 200px; // Fixed height
  display: flex; // Flexbox for centering content
  justify-content: center; // Center horizontally
  align-items: center; // Center vertically
  background-color: ${props => props.imageBackgroundColor || '#f0f0f0'}; // Light gray background for images
`;

// Styled component for the image itself
const Image = styled.img`
  max-width: 100%; // Ensures image doesn't overflow horizontally
  max-height: 100%; // Ensures image doesn't overflow vertically
  object-fit: contain; // Ensures the image is contained within the div
`;

// Styled component for the content section of the card
const Content = styled.div`
  padding: 1rem; // Padding inside the content area
`;

// Styled component for the title of the ad
const Title = styled.h3`
  margin: 0 0 0.5rem 0; // Margin below the title
  color: ${props => props.titleColor || '#FFD700'}; // Gold color for the title by default
`;

// Styled component for the subtitle of the ad
const Subtitle = styled.p`
  margin: 0; // No margin
  color: ${props => props.subtitleColor || '#777'}; // Default subtitle color is light gray
  font-size: 0.9rem; // Slightly smaller font size
`;

// Class component for the AdCard
class AdCard extends Component {
  render() {
    // Destructuring props for easier access
    const { title, subtitle, imageUrl, backgroundColor, textColor, imageBackgroundColor, titleColor, subtitleColor } = this.props;

    return (
      // Applying styled-components and passing down props for dynamic styling
      <Card backgroundColor={backgroundColor} textColor={textColor}>
        <ImageContainer imageBackgroundColor={imageBackgroundColor}>
          {imageUrl ? (
            <Image src={imageUrl} alt={title} /> // Display image if URL is provided
          ) : (
            <div>Loading...</div> // Display loading text if image URL is not provided
          )}
        </ImageContainer>
        <Content>
          <Title titleColor={titleColor}>{title}</Title> {/* Display the title */}
          <Subtitle subtitleColor={subtitleColor}>{subtitle}</Subtitle> {/* Display the subtitle */}
        </Content>
      </Card>
    );
  }
}

// Exporting the AdCard component to be used in other parts of the application
export default AdCard;
