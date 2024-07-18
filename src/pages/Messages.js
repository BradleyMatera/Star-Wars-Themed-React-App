import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled component for the messages container
const MessagesContainer = styled.div`
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

const Sidebar = styled.div`
  width: 300px;
  background-color: #1c1c1c;
  padding: 20px;
  border-right: 1px solid #333;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const SidebarTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #333;
  padding: 5px 10px;
  border-radius: 20px;
`;

const SearchInput = styled.input`
  border: none;
  background: none;
  outline: none;
  margin-left: 5px;
  flex-grow: 1;
  color: #ffd700;
`;

const MessageList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MessageListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #333;
  cursor: pointer;
  &:hover {
    background-color: #333;
  }
`;

const MessageListItemAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const MessageListItemContent = styled.div`
  flex-grow: 1;
`;

const MessageListItemName = styled.div`
  font-weight: bold;
  color: #ffd700;
`;

const MessageListItemText = styled.div`
  color: #aaa;
`;

const MessageCount = styled.div`
  background-color: #e0245e;
  color: #fff;
  border-radius: 50%;
  padding: 2px 8px;
  font-size: 12px;
  margin-left: 10px;
`;

const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #000;
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #333;
`;

const ChatTitle = styled.h2`
  font-size: 20px;
  margin: 0;
  color: #ffd700;
`;

const ChatMessages = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 20px 0;
  color: #ffd700;
`;

const ChatMessage = styled(motion.div)`
  display: flex;
  margin-bottom: 10px;
  &:nth-child(odd) {
    flex-direction: row-reverse;
  }
`;

const ChatMessageContent = styled.div`
  background-color: #1c1c1c;
  padding: 10px;
  border-radius: 10px;
  max-width: 70%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const ChatMessageAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 10px;
`;

const ChatInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #333;
  background-color: #1c1c1c;
`;

const ChatInput = styled.input`
  flex-grow: 1;
  border: none;
  padding: 10px;
  border-radius: 20px;
  background-color: #333;
  color: #ffd700;
  margin-right: 10px;
  outline: none;
`;

const SendButton = styled.button`
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

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [activeChat, setActiveChat] = useState(null);

  useEffect(() => {
    // Fetch messages from the Star Wars API
    const fetchMessages = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/people/');
        const data = await response.json();

        // Shuffle the character data to ensure different characters each time
        const shuffledCharacters = data.results.sort(() => 0.5 - Math.random());

        const characterMessages = await Promise.all(
          shuffledCharacters.slice(0, 5).map(async (character, index) => {
            const imageUrl = await fetchImage(character.name);
            return {
              id: index + 1,
              from: character.name,
              content: generateMessageContent(character),
              imageUrl: imageUrl
            };
          })
        );
        setMessages(characterMessages);
        setActiveChat(characterMessages[0]);
      } catch (error) {
        console.error('Failed to fetch messages:', error);
      }
    };

    // Fetch Star Wars related image from Unsplash
    const fetchImage = async (query) => {
      try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
          params: { query: `Star Wars ${query}`, per_page: 1 },
          headers: {
            Authorization: `Client-ID tYqbodUOR0MV7sAbu0MWu0YMDdMg8ZRay6CndTSHzKA`
          }
        });
        if (response.data.results.length > 0) {
          return response.data.results[0].urls.small;
        } else {
          return 'https://via.placeholder.com/50'; // Fallback image
        }
      } catch (error) {
        console.error('Error fetching image from Unsplash:', error);
        return 'https://via.placeholder.com/50'; // Fallback image
      }
    };

    // Generate realistic message content based on character data
    const generateMessageContent = (character) => {
      return `Hello, I am ${character.name}, known for my ${getRandomTrait()}. My height is ${character.height} cm and my mass is ${character.mass} kg.`;
    };

    // Generate random character traits for messages
    const getRandomTrait = () => {
      const traits = [
        'exceptional piloting skills',
        'legendary lightsaber duels',
        'mastery of the Force',
        'strategic brilliance in battles',
        'daring escapades across the galaxy'
      ];
      return traits[Math.floor(Math.random() * traits.length)];
    };

    fetchMessages();
  }, []);

  return (
    <MessagesContainer>
      <Sidebar>
        <SidebarHeader>
          <SidebarTitle>Messages</SidebarTitle>
          <SearchContainer>
            <FaSearch />
            <SearchInput placeholder="Search Messages" />
          </SearchContainer>
        </SidebarHeader>
        <MessageList>
          {messages.map((message) => (
            <MessageListItem key={message.id} onClick={() => setActiveChat(message)}>
              <MessageListItemAvatar src={message.imageUrl} alt={message.from} />
              <MessageListItemContent>
                <MessageListItemName>{message.from}</MessageListItemName>
                <MessageListItemText>{message.content}</MessageListItemText>
              </MessageListItemContent>
              <MessageCount>2</MessageCount>
            </MessageListItem>
          ))}
        </MessageList>
      </Sidebar>
      {activeChat && (
        <MainContent>
          <ChatHeader>
            <ChatTitle>{activeChat.from}</ChatTitle>
          </ChatHeader>
          <ChatMessages>
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ChatMessageAvatar src={message.imageUrl} alt={message.from} />
                <ChatMessageContent>
                <strong>{message.from}:</strong> {message.content}
                </ChatMessageContent>
              </ChatMessage>
            ))}
          </ChatMessages>
          <ChatInputContainer>
            <ChatInput placeholder="Type your message..." />
            <SendButton>Send</SendButton>
          </ChatInputContainer>
        </MainContent>
      )}
    </MessagesContainer>
  );
};

export default Messages;
