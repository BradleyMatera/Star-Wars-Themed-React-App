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
} from '../styles/NewsfeedStyledComponents'; // Importing all styled components

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

// Function to fetch an image from the Unsplash API based on a search query
// This function is async because it performs an asynchronous operation (fetching data from an API)
const fetchImage = async (query) => {
  try {
    // Make a GET request to the Unsplash API using axios
    // The URL endpoint for the Unsplash API is provided
    // Axios allows you to easily include parameters and headers in the request
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      // Parameters for the API request
      // 'query' is the search term, and 'per_page' limits the number of results to 1
      params: { query: `Star Wars ${query}`, per_page: 1 },
      // Headers for the API request
      // Authorization header includes the API key (Client-ID) for authentication
      headers: {
        Authorization: `Client-ID tYqbodUOR0MV7sAbu0MWu0YMDdMg8ZRay6CndTSHzKA`
      }
    });

    // Extracting the first image from the response data
    const imageUrl = response.data.results[0]?.urls?.regular;

    // Handling the extracted image URL (e.g., setting state or returning the URL)
    return imageUrl;

  } catch (error) {
    // Handle any errors that occur during the request
    console.error('Error fetching image:', error);
    throw error;
  }
};

// Example usage of fetchImage function
fetchImage('Yoda').then((url) => {
  console.log('Fetched image URL:', url);
});

// Explanation:
// - Axios is used to simplify making HTTP requests and handling responses.
// - The 'fetchImage' function is designed to retrieve images from the Unsplash API based on a search query.
// - The API key (Client-ID) is required for authentication when making requests to the Unsplash API.

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