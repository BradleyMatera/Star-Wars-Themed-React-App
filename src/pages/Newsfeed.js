import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { motion } from 'framer-motion';

// Styled component for the news feed container
const FeedContainer = styled.div`
  padding: 20px;
  background-color: #000;
  color: #ffd700;
  border-radius: 10px;
  max-width: 1200px;
  margin: 0 auto;
`;

// Styled component for individual news items with animations
const NewsItem = styled(motion.div)`
  margin-bottom: 20px;
  padding: 20px;
  background-color: #1c1c1c;
  border-radius: 5px;
  border: 1px solid #ffd700;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Styled component for news images
const NewsImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 400px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

// Styled component for news content
const NewsContent = styled.div`
  text-align: center;
`;

// Newsfeed component fetching and displaying news items
const Newsfeed = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch news from the Star Wars API and Unsplash API
    const fetchNews = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/people/');
        const data = await response.json();

        // Fetch images for each character using the Unsplash API
        const newsItems = await Promise.all(
          data.results.slice(0, 3).map(async (character, index) => {
            const imageUrl = await fetchImage(character.name);
            return {
              id: index + 1,
              title: `Breaking News: ${character.name}`,
              content: generateNewsContent(character),
              imageUrl: imageUrl
            };
          })
        );

        setNews(newsItems);
      } catch (error) {
        console.error('Failed to fetch news:', error);
      }
    };

    // Fetch image from Unsplash API based on query
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
          return 'https://via.placeholder.com/150'; // Fallback image
        }
      } catch (error) {
        console.error('Error fetching image from Unsplash:', error);
        return 'https://via.placeholder.com/150'; // Fallback image
      }
    };

    // Generate realistic news content based on character data
    const generateNewsContent = (character) => {
      const homeworldId = character.homeworld.match(/\/(\d+)\/$/)[1];
      const randomEvent = getRandomEvent();
      return `${character.name}, known for their incredible ${randomEvent}, was last seen on planet #${homeworldId}. Standing at ${character.height} cm tall and weighing ${character.mass} kg, ${character.name} has become a figure of great interest in the galaxy. Stay tuned for more updates on their whereabouts and activities.`;
    };

    // Generate random news events
    const getRandomEvent = () => {
      const events = [
        'feats in lightsaber combat',
        'strategic brilliance in battles',
        'mysterious Force abilities',
        'daring escapades in the Outer Rim',
        'influence over intergalactic politics'
      ];
      return events[Math.floor(Math.random() * events.length)];
    };

    fetchNews();
  }, []);

  return (
    <FeedContainer>
      <h1>Galactic News Network</h1>
      {news.map(item => (
        <NewsItem
          key={item.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <NewsImage src={item.imageUrl} alt={item.title} />
          <NewsContent>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </NewsContent>
        </NewsItem>
      ))}
    </FeedContainer>
  );
};

export default Newsfeed;
