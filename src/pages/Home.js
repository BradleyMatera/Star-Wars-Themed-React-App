import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PostCard from '../components/PostCard';
import Form from '../components/Form';
import AdCard from '../components/AdCard';
import Button from '../components/Button';
import UserStats from '../components/UserStats';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 5xl;
  margin: auto;
  padding: 20px;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
  }
`;

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;

  @media (min-width: 768px) {
    max-width: 300px;
  }
`;

const MainContent = styled.main`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const AdContent = [
  {
    title: "Wanted Dead or Alive",
    subtitle: "Consider this man one-handed and dangerous!",
    query: "bounty hunter",
  },
  {
    title: "Embrace the Dark Side",
    subtitle: "Unleash your true power with the Sith",
    query: "sith lord",
  },
  {
    title: "Explore the Outer Rim",
    subtitle: "Discover new worlds and adventures",
    query: "space exploration",
  },
];

const Home = ({
  posts,
  adImages,
  userStats,
  handleAddPost,
  handleAddComment,
  handleDeletePost,
  handleEditPost,
  handlePrimaryButtonClick,
  handleSecondaryButtonClick,
}) => {
  const [adData, setAdData] = useState([]);

  useEffect(() => {
    const fetchAdImages = async () => {
      try {
        const adImagePromises = AdContent.map(async (ad) => {
          const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: `Star Wars ${ad.query}`, per_page: 1 },
            headers: {
              Authorization: `Client-ID tYqbodUOR0MV7sAbu0MWu0YMDdMg8ZRay6CndTSHzKA`,
            },
          });
          return {
            ...ad,
            imageUrl: response.data.results[0]?.urls.small || 'https://via.placeholder.com/400x200',
          };
        });

        const ads = await Promise.all(adImagePromises);
        setAdData(ads);
      } catch (error) {
        console.error('Error fetching ad images:', error);
      }
    };

    fetchAdImages();
  }, []);

  return (
    <HomeContainer>
      <Sidebar>
        {adData.map((ad, index) => (
          <AdCard
            key={index}
            title={ad.title}
            subtitle={ad.subtitle}
            imageUrl={ad.imageUrl}
          />
        ))}
      </Sidebar>
      <MainContent>
        <div className="flex justify-between mb-4">
          <Button primary onClick={handlePrimaryButtonClick}>
            Use the Force
          </Button>
          <Button onClick={handleSecondaryButtonClick}>
            Jedi Mind Trick
          </Button>
        </div>
        <Form onSubmit={handleAddPost} />
        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            avatar={post.avatar}
            username={post.username}
            title={post.title}
            description={post.description}
            timestamp={post.timestamp}
            comments={post.comments}
            onAddComment={handleAddComment}
            onDelete={handleDeletePost}
            onEdit={handleEditPost}
          />
        ))}
      </MainContent>
      <Sidebar>
        <UserStats
          posts={userStats.posts}
          comments={userStats.comments}
          likes={userStats.likes}
        />
      </Sidebar>
    </HomeContainer>
  );
};

export default Home;