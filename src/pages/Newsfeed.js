import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  FeedContainer,
  MainContent,
  SectionTitle,
  NewsSection,
  NewsItem,
  NewsImage,
  NewsContent,
  NewsTitle,
  NewsText,
  Sidebar,
  AdItem,
  AdImage,
  AdTitle,
  AdText,
} from '../components/NewsfeedStyledComponents'; // Importing all styled components

const Newsfeed = () => {
  const [news, setNews] = useState([]);
  const [ads, setAds] = useState([]);

  // useEffect hook to fetch news data
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/people/');
        const data = await response.json();

        // Fetch images for each character using the Unsplash API
        const newsItems = await Promise.all(
          data.results.slice(0, 6).map(async (character, index) => {
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

  // useEffect hook to fetch ad data
  useEffect(() => {
    const fetchAds = async () => {
      const adQueries = ['Sith', 'Stormtrooper', 'Tatooine', 'Jedi', 'Death Star'];
      const adPromises = adQueries.map(query =>
        axios.get('https://api.unsplash.com/search/photos', {
          params: { query, per_page: 1 },
          headers: {
            Authorization: `Client-ID tYqbodUOR0MV7sAbu0MWu0YMDdMg8ZRay6CndTSHzKA`
          }
        })
      );

      try {
        const adResponses = await Promise.all(adPromises);
        const adsData = adResponses.map((response, index) => ({
          image: response.data.results[0]?.urls.small || 'https://via.placeholder.com/150',
          title: `Ad ${index + 1}`,
          text: `Join the ${adQueries[index]} program now!`
        }));
        setAds(adsData);
      } catch (error) {
        console.error('Error fetching ads from Unsplash:', error);
      }
    };

    fetchAds();
  }, []);

  return (
    <FeedContainer>
      <MainContent>
        <SectionTitle>Galactic News Network</SectionTitle>
        <NewsSection>
          {news.map(item => (
            <NewsItem
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <NewsImage src={item.imageUrl} alt={item.title} />
              <NewsContent>
                <NewsTitle>{item.title}</NewsTitle>
                <NewsText>{item.content}</NewsText>
              </NewsContent>
            </NewsItem>
          ))}
        </NewsSection>
      </MainContent>
      <Sidebar>
        {ads.map((ad, index) => (
          <AdItem key={index}>
            <AdImage src={ad.image} alt={`Ad ${index + 1}`} />
            <AdTitle>{ad.title}</AdTitle>
            <AdText>{ad.text}</AdText>
          </AdItem>
        ))}
      </Sidebar>
    </FeedContainer>
  );
};

export default Newsfeed;