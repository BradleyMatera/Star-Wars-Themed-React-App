// Importing necessary libraries and components
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

// Styled components for the post card
const Card = styled.div`
  background-color: ${props => props.backgroundColor || '#2c3e50'};
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: ${props => props.textColor || '#ffffff'};
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 1rem;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  font-weight: bold;
  color: ${props => props.usernameColor || '#3333ff'};
`;

const Timestamp = styled.span`
  font-size: 0.8rem;
  color: ${props => props.timestampColor || '#777'};
`;

const Content = styled.p`
  margin-bottom: 1rem;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.buttonColor || '#1E90FF'};
  cursor: pointer;
  margin-right: 1rem;
  font-weight: 500;

  &:hover {
    color: ${props => props.hoverColor || '#FF0000'};
  }
`;

const CommentSection = styled.div`
  margin-top: 1rem;
`;

const CommentInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 0.5rem;
`;

const Comment = styled.div`
  background-color: #f8f9fa;
  border-radius: 4px;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  color: #333;
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
  const [newComment, setNewComment] = useState('');
  const [showComments, setShowComments] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(description);

  // Handler for adding a new comment
  const handleAddComment = () => {
    if (newComment.trim()) {
      onAddComment(id, newComment); // Use the id prop here
      setNewComment('');
    }
  };

  // Handler for editing the post
  const handleEdit = () => {
    if (isEditing) {
      onEdit(id, editedContent); // Use the id prop here
    }
    setIsEditing(!isEditing);
  };

  // Handler for toggling the comments section
  const toggleComments = () => {
    setShowComments(!showComments);
  };

  // Handler for updating new comment input value
  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  // Handler for updating post content while editing
  const handleContentChange = (e) => {
    setEditedContent(e.target.value);
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
          style={{ width: '100%', padding: '0.5rem', borderRadius: '4px' }}
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
          <ActionButton buttonColor={buttonColor} hoverColor={hoverColor} onClick={handleAddComment}>Post Comment</ActionButton>
        </CommentSection>
      )}
    </Card>
  );
};

export default PostCard;
