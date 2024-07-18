import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { motion } from 'framer-motion';

// Styled component for the messages container
const MessagesContainer = styled.div`
  padding: 20px;
  color: #ffd700;
  background-color: #000;
  border-radius: 10px;
  max-width: 600px;
  margin: 0 auto;
`;

// Styled component for the list of messages
const MessageList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

// Styled component for individual message items with animations
const MessageItem = styled(motion.li)`
  margin-bottom: 10px;
  padding: 15px;
  background-color: #1c1c1c;
  border-radius: 5px;
  border: 1px solid #ffd700;
  display: flex;
  align-items: center;
`;

// Styled component for character images
const CharacterImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;

// Messages component fetching and displaying character messages
const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch messages from the Star Wars API
    const fetchMessages = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/people/');
        const data = await response.json();

        // Shuffle the character data to ensure different characters each time
        const shuffledCharacters = data.results.sort(() => 0.5 - Math.random());

        const characterMessages = await Promise.all(
          shuffledCharacters.slice(0, 3).map(async (character, index) => {
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
      <h1>Galactic Transmissions</h1>
      <MessageList>
        {messages.map(message => (
          <MessageItem
            key={message.id}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CharacterImage src={message.imageUrl} alt={message.from} />
            <div>
              <strong>{message.from}:</strong> {message.content}
            </div>
          </MessageItem>
        ))}
      </MessageList>
    </MessagesContainer>
  );
};

export default Messages;
