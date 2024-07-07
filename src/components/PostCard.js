import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const Card = styled.div({
  backgroundColor: '#2c3e50', // Darker background for posts
  borderRadius: '8px',
  padding: '1rem',
  marginBottom: '1rem',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  color: '#ffffff', // White text
});

const PostHeader = styled.div({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1rem',
});

const Avatar = styled.img({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  marginRight: '1rem',
});

const UserInfo = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

const UserName = styled.span({
  fontWeight: 'bold',
  color: '#3333ff', // Gold for username
});

const Timestamp = styled.span({
  fontSize: '0.8rem',
  color: '#777',
});

const Content = styled.p({
  marginBottom: '1rem',
});

const ActionButton = styled.button({
  background: 'none',
  border: 'none',
  color: '#1E90FF', // Blue for action buttons
  cursor: 'pointer',
  marginRight: '1rem',
  fontWeight: '500',

  '&:hover': {
    color: '#FF0000', // Red on hover
  },
});

const CommentSection = styled.div({
  marginTop: '1rem',
});

const CommentInput = styled.input({
  width: '100%',
  padding: '0.5rem',
  border: '1px solid #ddd',
  borderRadius: '4px',
  marginBottom: '0.5rem',
});

const Comment = styled.div({
  backgroundColor: '#f8f9fa',
  borderRadius: '4px',
  padding: '0.5rem',
  marginBottom: '0.5rem',
  color: '#333',
});

const PostCard = ({ avatar, username, timestamp, content, comments, onAddComment, onDelete, onEdit }) => {
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
    <Card>
      <PostHeader>
        <Avatar src={avatar} alt={username} />
        <UserInfo>
          <UserName>{username}</UserName>
          <Timestamp>{timestamp}</Timestamp>
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
        <ActionButton onClick={handleEdit}>
          <FaEdit />
        </ActionButton>
        <ActionButton onClick={onDelete}>
          <FaTrashAlt />
        </ActionButton>
      </div>
      <ActionButton onClick={() => setShowComments(!showComments)}>
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </ActionButton>
      {showComments && (
        <CommentSection>
          {comments.map((comment, index) => (
            <Comment key={index}>
              <UserName>{comment.username}</UserName>: {comment.content}
            </Comment>
          ))}
          <CommentInput
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <ActionButton onClick={handleAddComment}>Post Comment</ActionButton>
        </CommentSection>
      )}
    </Card>
  );
};

export default PostCard;