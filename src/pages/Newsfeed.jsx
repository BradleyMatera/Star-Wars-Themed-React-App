import React, { useState, useEffect } from "react";
import axios from "axios";
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
} from "../styles/NewsfeedStyledComponents";

const Newsfeed = () => {
  const [news, setNews] = useState([]);
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/people/");
        const data = await response.json();
        const newsItems = await Promise.all(
          data.results.slice(0, 6).map(async (character, index) => {
            const imageUrl = await fetchImage(character.name);
            return {
              id: index + 1,
              title: `Breaking News: ${character.name}`,
              content: generateNewsContent(character),
              imageUrl: imageUrl,
            };
          })
        );
        setNews(newsItems);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    const fetchAds = async () => {
      const adQueries = [
        "Sith",
        "Stormtrooper",
        "Tatooine",
        "Jedi",
        "Death Star",
      ];
      const adPromises = adQueries.map((query) =>
        axios.get("https://api.unsplash.com/search/photos", {
          params: { query, per_page: 1 },
          headers: {
            Authorization: `Client-ID tYqbodUOR0MV7sAbu0MWu0YMDdMg8ZRay6CndTSHzKA`,
          },
        })
      );

      try {
        const adResponses = await Promise.all(adPromises);
        const adsData = adResponses.map((response, index) => ({
          image:
            response.data.results[0]?.urls.small ||
            "https://via.placeholder.com/150",
          title: `Ad ${index + 1}`,
          text: `Join the ${adQueries[index]} program now!`,
        }));
        setAds(adsData);
      } catch (error) {
        console.error("Error fetching ads from Unsplash:", error);
      }
    };

    fetchAds();
  }, []);

  const fetchImage = async (query) => {
    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: { query: `Star Wars ${query}`, per_page: 1 },
          headers: {
            Authorization: `Client-ID tYqbodUOR0MV7sAbu0MWu0YMDdMg8ZRay6CndTSHzKA`,
          },
        }
      );
      const imageUrl = response.data.results[0]?.urls?.regular;
      return imageUrl;
    } catch (error) {
      console.error("Error fetching image:", error);
      throw error;
    }
  };

  const generateNewsContent = (character) => {
    return `In a galaxy far, far away, ${character.name} has been making headlines. Stay tuned for more updates!`;
  };

  return (
    <FeedContainer>
      <MainContent>
        <SectionTitle>Galactic News Network</SectionTitle>
        <NewsSection>
          {news.map((item) => (
            <NewsItem
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <NewsImage src={`../img/${item.imageUrl}`} alt={item.title} />
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
            <AdImage src={`../img/${ad.image}`} alt={`Ad ${index + 1}`} />
            <AdTitle>{ad.title}</AdTitle>
            <AdText>{ad.text}</AdText>
          </AdItem>
        ))}
      </Sidebar>
    </FeedContainer>
  );
};

export default Newsfeed;
