import styled from 'styled-components';

// Styled components for the post card
export const Card = styled.div`
  background-color: ${props => props.backgroundColor || '#2c3e50'}; // Card background color
  border-radius: 8px; // Rounded corners for the card
  padding: 1rem; // Padding inside the card
  margin-bottom: 1rem; // Space below each card
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Adding shadow for depth
  color: ${props => props.textColor || '#ffffff'}; // Text color inside the card
`;

export const PostHeader = styled.div`
  display: flex; // Flexbox layout for header
  align-items: center; // Centering items vertically
  margin-bottom: 1rem; // Margin below the header
`;

export const Avatar = styled.img`
  width: 40px; // Avatar width
  height: 40px; // Avatar height
  border-radius: 50%; // Circular avatar
  margin-right: 1rem; // Margin to the right of the avatar
`;

export const UserInfo = styled.div`
  display: flex; // Flexbox layout for user info
  flex-direction: column; // Column layout for user info
`;

export const UserName = styled.span`
  font-weight: bold; // Bold text for username
  color: ${props => props.usernameColor || '#3333ff'}; // Username text color
`;

export const Timestamp = styled.span`
  font-size: 0.8rem; // Smaller font size for timestamp
  color: ${props => props.timestampColor || '#777'}; // Timestamp text color
`;

export const Content = styled.p`
  margin-bottom: 1rem; // Margin below the content
`;

export const ActionButton = styled.button`
  background: none; // No background
  border: none; // No border
  color: ${props => props.buttonColor || '#1E90FF'}; // Button text color
  cursor: pointer; // Pointer cursor on hover
  margin-right: 1rem; // Margin to the right of the button
  font-weight: 500; // Medium font weight

  &:hover {
    color: ${props => props.hoverColor || '#FF0000'}; // Hover color for the button
  }
`;

export const CommentSection = styled.div`
  margin-top: 1rem; // Margin above the comment section
`;

export const CommentInput = styled.input`
  width: 100%; // Full width for the input
  padding: 0.5rem; // Padding inside the input
  border: 1px solid #ddd; // Border color and style
  border-radius: 4px; // Rounded corners for the input
  margin-bottom: 0.5rem; // Margin below the input
  color: #333; // Text color inside the input
  background-color: #fff; // Background color for the input
`;

export const Comment = styled.div`
  background-color: #f8f9fa; // Background color for the comment
  border-radius: 4px; // Rounded corners for the comment box
  padding: 0.5rem; // Padding inside the comment box
  margin-bottom: 0.5rem; // Margin below the comment box
  color: #333; // Text color for the comment
`;