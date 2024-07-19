import React, { useState } from 'react'; // Importing React and useState hook for managing state
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; // Importing icons for edit and delete actions
import {
  Card,
  PostHeader,
  Avatar,
  UserInfo,
  UserName,
  Timestamp,
  Content,
  ActionButton,
  CommentSection,
  CommentInput,
  Comment
} from '../styles/PostCardStyledComponents'; // Importing styled components

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