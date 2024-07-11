import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const Card = styled.div`
  background-color: ${props => props.backgroundColor || '#2c3e50'}; // Darker background for posts
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: ${props => props.textColor || '#ffffff'}; // White text
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
  color: ${props => props.usernameColor || '#3333ff'}; // Blue for username
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
  color: ${props => props.buttonColor || '#1E90FF'}; // Blue for action buttons
  cursor: pointer;
  margin-right: 1rem;
  font-weight: 500;

  &:hover {
    color: ${props => props.hoverColor || '#FF0000'}; // Red on hover
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

const PostCard = ({ avatar, username, timestamp, content, comments, onAddComment, onDelete, onEdit, backgroundColor, textColor, usernameColor, timestampColor, buttonColor, hoverColor }) => {
  const [newComment, setNewComment] = useState('');
  const [showComments, setShowComments] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  const handleAddComment = () => {
    if (newComment.trim()) {
      onAddComment(newComment);
      setNewComment('');
    }
  };

  const handleEdit = () => {
    if (isEditing) {
      onEdit(editedContent);
    }
    setIsEditing(!isEditing);
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
      {isEditing ? (
        <textarea
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', borderRadius: '4px' }}
        />
      ) : (
        <Content>{content}</Content>
      )}
      <div>
        <ActionButton buttonColor={buttonColor} hoverColor={hoverColor} onClick={handleEdit}>
          <FaEdit />
        </ActionButton>
        <ActionButton buttonColor={buttonColor} hoverColor={hoverColor} onClick={onDelete}>
          <FaTrashAlt />
        </ActionButton>
      </div>
      <ActionButton buttonColor={buttonColor} hoverColor={hoverColor} onClick={() => setShowComments(!showComments)}>
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
            onChange={(e) => setNewComment(e.target.value)}
          />
          <ActionButton buttonColor={buttonColor} hoverColor={hoverColor} onClick={handleAddComment}>Post Comment</ActionButton>
        </CommentSection>
      )}
    </Card>
  );
};

export default PostCard;