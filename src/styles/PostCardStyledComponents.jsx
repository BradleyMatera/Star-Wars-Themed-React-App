import styled from "styled-components";

// Card Container
export const Card = styled.div`
  background-color: ${(props) => props.backgroundColor || "#2c3e50"};
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.textColor || "#ffffff"};
`;

// Post Header, including Avatar and User Info
export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

// Avatar Component - Displaying Profile Picture
export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 1rem;
`;

// User Information Section
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

// UserName Styling - For Displaying User Names
export const UserName = styled.span`
  font-weight: bold;
  color: ${(props) => props.usernameColor || "#3333ff"};
`;

// Timestamp Display for Posts
export const Timestamp = styled.span`
  font-size: 0.8rem;
  color: ${(props) => props.timestampColor || "#777"};
`;

// Content Area for the Post
export const Content = styled.p`
  margin-bottom: 1rem;
`;

// Action Button Styling - For Post Actions like "Like" or "Comment"
export const ActionButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.buttonColor || "#1E90FF"};
  cursor: pointer;
  margin-right: 1rem;
  font-weight: 500;

  &:hover {
    color: ${(props) => props.hoverColor || "#FF0000"};
  }
`;

// Comment Section for Displaying Comments Under Posts
export const CommentSection = styled.div`
  margin-top: 1rem;
`;

// Input for Adding Comments
export const CommentInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  color: #333;
  background-color: #fff;
`;

// Individual Comment Display
export const Comment = styled.div`
  background-color: #f8f9fa;
  border-radius: 4px;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  color: #333;
`;
