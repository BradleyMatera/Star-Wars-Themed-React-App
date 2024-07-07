import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div({
  backgroundColor: 'white',
  borderRadius: '8px',
  padding: '1rem',
  marginBottom: '1rem',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
});

const PostHeader = styled.div({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1rem'
});

const Avatar = styled.img({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  marginRight: '1rem'
});

const UserInfo = styled.div({
  display: 'flex',
  flexDirection: 'column'
});

const UserName = styled.span({
  fontWeight: 'bold'
});

const Timestamp = styled.span({
  fontSize: '0.8rem',
  color: '#777'
});

const Content = styled.p({
  marginBottom: '1rem'
});

const ActionButton = styled.button({
  background: 'none',
  border: 'none',
  color: '#3498db',
  cursor: 'pointer',
  marginRight: '1rem',
  fontWeight: '500'
});

const CommentSection = styled.div({
  marginTop: '1rem'
});

const CommentInput = styled.input({
  width: '100%',
  padding: '0.5rem',
  border: '1px solid #ddd',
  borderRadius: '4px',
  marginBottom: '0.5rem'
});

const Comment = styled.div({
  backgroundColor: '#f8f9fa',
  borderRadius: '4px',
  padding: '0.5rem',
  marginBottom: '0.5rem'
});

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