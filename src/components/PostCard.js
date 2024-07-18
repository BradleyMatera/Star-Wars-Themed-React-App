import React, { useState } from 'react'; // Importing React and useState hook for managing state
import styled from 'styled-components'; // Importing styled-components for CSS-in-JS styling
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; // Importing icons for edit and delete actions

// Styled components for the post card
const Card = styled.div`
  background-color: ${props => props.backgroundColor || '#2c3e50'}; // Card background color
  border-radius: 8px; // Rounded corners for the card
  padding: 1rem; // Padding inside the card
  margin-bottom: 1rem; // Space below each card
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Adding shadow for depth
  color: ${props => props.textColor || '#ffffff'}; // Text color inside the card
`;

const PostHeader = styled.div`
  display: flex; // Flexbox layout for header
  align-items: center; // Centering items vertically
  margin-bottom: 1rem; // Margin below the header
`;

const Avatar = styled.img`
  width: 40px; // Avatar width
  height: 40px; // Avatar height
  border-radius: 50%; // Circular avatar
  margin-right: 1rem; // Margin to the right of the avatar
`;

const UserInfo = styled.div`
  display: flex; // Flexbox layout for user info
  flex-direction: column; // Column layout for user info
`;

const UserName = styled.span`
  font-weight: bold; // Bold text for username
  color: ${props => props.usernameColor || '#3333ff'}; // Username text color
`;

const Timestamp = styled.span`
  font-size: 0.8rem; // Smaller font size for timestamp
  color: ${props => props.timestampColor || '#777'}; // Timestamp text color
`;

const Content = styled.p`
  margin-bottom: 1rem; // Margin below the content
`;

const ActionButton = styled.button`
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

const CommentSection = styled.div`
  margin-top: 1rem; // Margin above the comment section
`;

const CommentInput = styled.input`
  width: 100%; // Full width for the input
  padding: 0.5rem; // Padding inside the input
  border: 1px solid #ddd; // Border color and style
  border-radius: 4px; // Rounded corners for the input
  margin-bottom: 0.5rem; // Margin below the input
  color: #333; // Text color inside the input
  background-color: #fff; // Background color for the input
`;

const Comment = styled.div`
  background-color: #f8f9fa; // Background color for the comment
  border-radius: 4px; // Rounded corners for the comment box
  padding: 0.5rem; // Padding inside the comment box
  margin-bottom: 0.5rem; // Margin below the comment box
  color: #333; // Text color for the comment
`;

// Functional PostCard component definition
const PostCard = ({
  id, // Add the id prop here
  avatar,
  username,
  title,
  description,
  timestamp,
  comments,
  onAddComment,
  onEdit,
  onDelete,
  backgroundColor,
  textColor,
  usernameColor,
  timestampColor,
  buttonColor,
  hoverColor
}) => {
  const [newComment, setNewComment] = useState(''); // State to hold new comment input value
  const [showComments, setShowComments] = useState(false); // State to toggle comments section visibility
  const [isEditing, setIsEditing] = useState(false); // State to toggle editing mode for post content
  const [editedContent, setEditedContent] = useState(description); // State to hold edited post content

  // Handler for adding a new comment
  const handleAddComment = () => {
    if (newComment.trim()) {
      onAddComment(id, newComment); // Use the id prop here
      setNewComment(''); // Clear the new comment input field
    }
  };

  // Handler for editing the post
  const handleEdit = () => {
    if (isEditing) {
      onEdit(id, editedContent); // Use the id prop here
    }
    setIsEditing(!isEditing); // Toggle editing mode
  };

  // Handler for toggling the comments section
  const toggleComments = () => {
    setShowComments(!showComments); // Toggle comments section visibility
  };

  // Handler for updating new comment input value
  const handleCommentChange = (e) => {
    setNewComment(e.target.value); // Update new comment input value
  };

  // Handler for updating post content while editing
  const handleContentChange = (e) => {
    setEditedContent(e.target.value); // Update edited post content
  };

  return (
    <Card backgroundColor={backgroundColor} textColor={textColor}>
      <PostHeader>
        <Avatar src={avatar} alt={username} />
        <UserInfo>
          <UserName usernameColor={usernameColor}>{username}</UserName>
          <Timestamp timestampColor={timestampColor}>{timestamp}</Timestamp>
        </UserInfo>
      </PostHeader>
      <h3>{title}</h3>
      {isEditing ? (
        <textarea
          value={editedContent}
          onChange={handleContentChange}
          style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', color: '#333', backgroundColor: '#fff' }}
        />
      ) : (
        <Content>{description}</Content>
      )}
      <div>
        <ActionButton buttonColor={buttonColor} hoverColor={hoverColor} onClick={handleEdit}>
          <FaEdit />
        </ActionButton>
        <ActionButton buttonColor={buttonColor} hoverColor={hoverColor} onClick={() => onDelete(id)}>
          <FaTrashAlt />
        </ActionButton>
      </div>
      <ActionButton buttonColor={buttonColor} hoverColor={hoverColor} onClick={toggleComments}>
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </ActionButton>
      {showComments && (
        <CommentSection>
          {comments.map((comment, index) => (
            <Comment key={index}>
              <UserName usernameColor={usernameColor}>{comment.username}</UserName>: {comment.content}
            </Comment>
          ))}
          <CommentInput
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={handleCommentChange}
          />
          <ActionButton buttonColor={buttonColor} hoverColor={hoverColor} onClick={handleAddComment}>
            Post Comment
          </ActionButton>
        </CommentSection>
      )}
    </Card>
  );
};

export default PostCard;
