import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const Card = styled.div`
  background-color: #2c3e50; // Darker background for posts
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  color: #ffffff; // White text
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
  color: #FFD700; // Gold for username
`;

const Timestamp = styled.span`
  font-size: 0.8rem;
  color: #777;
`;

const Content = styled.p`
  margin-bottom: 1rem;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: #1E90FF; // Blue for action buttons
  cursor: pointer;
  margin-right: 1rem;
  font-weight: 500;

  &:hover {
    color: #FF0000; // Red on hover
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
`;

const PostCard = ({ avatar, username, timestamp, content, comments, onAddComment }) => {
  const [newComment, setNewComment] = useState('');
  const [showComments, setShowComments] = useState(false);

  const handleAddComment = () => {
    if (newComment.trim()) {
      onAddComment(newComment);
      setNewComment('');
    }
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
      <Content>{content}</Content>
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