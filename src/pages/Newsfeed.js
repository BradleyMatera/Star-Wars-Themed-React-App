import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FeedContainer = styled.div`
  padding: 20px;
  background-color: #000;
  color: #ffd700;
  border-radius: 10px;
`;

const NewsItem = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  background-color: #1c1c1c;
  border-radius: 5px;
`;

const Newsfeed = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Simulating fetching data
    const fetchedNews = [
      { id: 1, title: "Death Star Construction Ahead of Schedule", content: "Emperor Palpatine pleased with progress." },
      { id: 2, title: "Rebel Alliance Gains New Allies", content: "More systems joining the fight against the Empire." },
      { id: 3, title: "Jabba the Hutt Announces Podrace Tournament", content: "Grand prize: A year's supply of blue milk." },
    ];
    setNews(fetchedNews);
  }, []);

  return (
    <FeedContainer>
      <h1>Galactic News Network</h1>
      {news.map(item => (
        <NewsItem key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </NewsItem>
      ))}
    </FeedContainer>
  );
};

export default Newsfeed;