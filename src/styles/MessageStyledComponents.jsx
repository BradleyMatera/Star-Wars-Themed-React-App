import styled from "styled-components";

export const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000;
  color: #ffd700;
  border-radius: 10px;
  max-width: 1200px;
  margin: 20px auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  padding: 20px;
`;

export const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #1c1c1c;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const ChatTitle = styled.h2`
  font-size: 24px;
  color: #ffd700;
`;

export const MainContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  background-color: #1c1c1c;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const ChatMessage = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const ChatMessageAvatar = styled.div`
  font-size: 24px;
  margin-right: 10px;
`;

export const ChatMessageContent = styled.div`
  background-color: #333;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
`;

export const ChatInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #1c1c1c;
  border-radius: 10px;
`;

export const ChatInput = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 10px;
  margin-right: 10px;
`;

export const SendButton = styled.button`
  padding: 10px 20px;
  background-color: #ffd700;
  border: none;
  border-radius: 10px;
  color: #000;
  cursor: pointer;

  &:hover {
    background-color: #ffcc00;
  }
`;
