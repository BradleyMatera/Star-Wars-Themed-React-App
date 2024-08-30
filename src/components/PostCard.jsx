import React from 'react';
import { Card, Avatar, UserName, Content, PostHeader, UserInfo, Timestamp, ActionButton, CommentSection, CommentInput, Comment } from '../styles/PostCardStyledComponents';
import "../tailwind.css";
import "../styles/PostCardStyledComponents";
const PostCard = () => {
  return (
    <Card>
      {/* If Avatar is a styled component, ensure it accepts 'src' or adjust it accordingly */}
<Avatar src="../img/LukeSkywalker.jpeg" alt="Post Avatar" />
      <UserName>Post Title</UserName>
      <Content>Post content goes here...</Content>
      {/* Add other post card elements here */}
    </Card>
  );
};

export default PostCard;
