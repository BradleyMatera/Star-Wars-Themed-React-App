// MessageStyledComponents.js
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const MessagesContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #000;
  color: #ffd700;
  border-radius: 10px;
  animation: ${fadeIn} 0.5s ease-out;
  max-width: 1200px;
  margin: 20px auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const Sidebar = styled.div`
  width: 300px;
  background-color: #1c1c1c;
  padding: 20px;
  border-right: 1px solid #333;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const SidebarTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #333;
  padding: 5px 10px;
  border-radius: 20px;
`;

export const SearchInput = styled.input`
  border: none;
  background: none;
  outline: none;
  margin-left: 5px;
  flex-grow: 1;
  color: #ffd700;
`;

export const MessageList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MessageListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #333;
  cursor: pointer;
  &:hover {
    background-color: #333;
  }
`;

export const MessageListItemAvatar = styled.div`
  font-size: 24px;
  margin-right: 10px;
`;

export const MessageListItemContent = styled.div`
  flex-grow: 1;
`;

export const MessageListItemName = styled.div`
  font-weight: bold;
  color: #ffd700;
`;

export const MessageListItemText = styled.div`
  color: #aaa;
`;

export const MessageCount = styled.div`
  background-color: #e0245e;
  color: #fff;
  border-radius: 50%;
  padding: 2px 8px;
  font-size: 12px;
  margin-left: 10px;
  display: ${props => (props.$unread ? 'block' : 'none')}; // Show only if there are unread messages
`;

export const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #000;
`;

export const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #333;
`;

export const ChatTitle = styled.h2`
  font-size: 20px;
  margin: 0;
  color: #ffd700;
`;

export const ChatMessage = styled(motion.div)`
  display: flex;
  margin-bottom: 10px;
  &:nth-child(odd) {
    flex-direction: row-reverse;
  }
`;

export const ChatMessageContent = styled.div`
  background-color: #1c1c1c;
  padding: 10px;
  border-radius: 10px;
  max-width: 70%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const ChatMessageAvatar = styled.div`
  font-size: 24px;
  margin: 0 10px;
`;

export const ChatInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #333;
  background-color: #1c1c1c;
`;

export const ChatInput = styled.input`
  flex-grow: 1;
  border: none;
  padding: 10px;
  border-radius: 20px;
  background-color: #333;
  color: #ffd700;
  margin-right: 10px;
  outline: none;
`;

export const SendButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;