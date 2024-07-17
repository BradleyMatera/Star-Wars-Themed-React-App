import React from 'react';
import styled from 'styled-components';

const MessagesContainer = styled.div`
  padding: 20px;
  color: #ffd700;
  background-color: #000;
  border-radius: 10px;
`;

const MessageList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const MessageItem = styled.li`
  margin-bottom: 10px;
  padding: 10px;
  background-color: #1c1c1c;
  border-radius: 5px;
`;

const Messages = () => {
  const messages = [
    { id: 1, from: "Obi-Wan Kenobi", content: "Use the Force, Luke!" },
    { id: 2, from: "Han Solo", content: "Never tell me the odds!" },
    { id: 3, from: "Yoda", content: "Do. Or do not. There is no try." },
  ];

  return (
    <MessagesContainer>
      <h1>Galactic Transmissions</h1>
      <MessageList>
        {messages.map(message => (
          <MessageItem key={message.id}>
            <strong>{message.from}:</strong> {message.content}
          </MessageItem>
        ))}
      </MessageList>
    </MessagesContainer>
  );
};

export default Messages;