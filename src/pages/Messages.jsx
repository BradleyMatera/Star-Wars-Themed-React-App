import React, { useState } from "react";
import {
  MessagesContainer,
  ChatHeader,
  ChatTitle,
  MainContent,
  ChatMessage,
  ChatMessageAvatar,
  ChatMessageContent,
  ChatInputContainer,
  ChatInput,
  SendButton,
} from "../styles/MessageStyledComponents";

const Messages = () => {
  const [activeChat, setActiveChat] = useState(null);
  const [chatContent, setChatContent] = useState("");
  const [chatHistory, setChatHistory] = useState({
    1: [{ icon: "👤", content: "Hello!" }],
  });

  const handleSendMessage = () => {
    if (activeChat && chatContent) {
      setChatHistory((prevHistory) => ({
        ...prevHistory,
        [activeChat.id]: [
          ...prevHistory[activeChat.id],
          { icon: "👤", content: chatContent },
        ],
      }));
      setChatContent("");
    }
  };

  return (
    <MessagesContainer>
      {activeChat ? (
        <>
          <ChatHeader>
            <ChatTitle>{activeChat.name}</ChatTitle>
          </ChatHeader>
          <MainContent>
            {chatHistory[activeChat.id].map((message, index) => (
              <ChatMessage key={index}>
                <ChatMessageAvatar>{message.icon}</ChatMessageAvatar>
                <ChatMessageContent>{message.content}</ChatMessageContent>
              </ChatMessage>
            ))}
          </MainContent>
          <ChatInputContainer>
            <ChatInput
              value={chatContent}
              onChange={(e) => setChatContent(e.target.value)}
              placeholder="Type a message..."
            />
            <SendButton onClick={handleSendMessage}>Send</SendButton>
          </ChatInputContainer>
        </>
      ) : (
        <p>Select a chat to start messaging</p>
      )}
    </MessagesContainer>
  );
};

export default Messages;
