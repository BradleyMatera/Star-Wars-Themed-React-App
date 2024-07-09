import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import LeftNavigation from './components/LeftNavigation';
import PostCard from './components/PostCard';
import Form from './components/Form';
import AdCard from './components/AdCard';
import Footer from './components/Footer';
import Button from './components/Button';
import { fetchStarWarsCharacters, fetchStarWarsImages } from './apis';
import LukeSkywalker from './img/LukeSkywalker.jpeg';
import C3PO from './img/c3PO.jpeg';

const AppContainer = styled.div`
  background-color: #1c1c1c; /* Dark background for a Star Wars feel */
  color: #ffffff; /* White text for contrast */
  min-height: 100vh;
  font-family: Arial, sans-serif;
`;

const MainContent = styled.main`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  padding-top: 70px;
`;

const Feed = styled.div`
  flex: 2;
  margin-right: 1rem;
`;

const Sidebar = styled.aside`
  flex: 1;
`;

const App = () => {
  const [posts, setPosts] = useState([]);
  const [adImages, setAdImages] = useState([]);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Fetch Star Wars characters for avatars
    fetchStarWarsCharacters().then((data) => {
      setCharacters(data);
      // Setting mock posts using fetched characters
      setPosts([
        {
          id: 1,
          avatar: data[0]?.image || LukeSkywalker,
          username: data[0]?.name || 'Luke Skywalker',
          timestamp: '2 hours ago',
          content: 'Just finished training with Master Yoda!',
          comments: [
            { username: 'Leia Organa', content: 'Great job!' },
            { username: 'Han Solo', content: 'May the Force be with you!' },
          ],
        },
        {
          id: 2,
          avatar: data[1]?.image || C3PO,
          username: data[1]?.name || 'C-3PO',
          timestamp: '5 hours ago',
          content: 'The Dark Side is strong within me.',
          comments: [{ username: 'Emperor Palpatine', content: 'Good. Good.' }],
        },
      ]);
    });

    // Fetch Star Wars images for ads
    fetchStarWarsImages().then((data) => {
      setAdImages(data);
    });
  }, []);

  const handleAddPost = ({ title, description }) => {
    const newPost = {
      id: posts.length + 1,
      avatar: characters[2]?.image || 'https://via.placeholder.com/40',
      username: characters[2]?.name || 'Current User',
      timestamp: 'Just now',
      content: `${title} - ${description}`,
      comments: [],
    };
    setPosts([newPost, ...posts]);
  };

  const handleAddComment = (postId, comment) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, { username: 'Current User', content: comment }] }
          : post
      )
    );
  };

  const handleDeletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  const handleEditPost = (postId, newContent) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, content: newContent } : post
      )
    );
  };

  return (
    <AppContainer>
      <Header />
      <LeftNavigation />
      <MainContent>
        <Feed>
          <Form onSubmit={handleAddPost} />
          {posts.map((post) => (
            <PostCard
              key={post.id}
              avatar={post.avatar}
              username={post.username}
              timestamp={post.timestamp}
              content={post.content}
              comments={post.comments}
              onAddComment={(comment) => handleAddComment(post.id, comment)}
              onDelete={() => handleDeletePost(post.id)}
              onEdit={(newContent) => handleEditPost(post.id, newContent)}
            />
          ))}
          <Button primary onClick={() => alert('Primary Button Clicked')}>
            Primary Button
          </Button>
          <Button onClick={() => alert('Secondary Button Clicked')}>Secondary Button</Button>
        </Feed>
        <Sidebar>
          {adImages.length > 0 && (
            <>
              <AdCard
                title="Join the Jedi Order"
                subtitle="Train with the best and become a Jedi Master"
                imageUrl={adImages[0]?.image}
              />
              <AdCard
                title="Embrace the Dark Side"
                subtitle="Unleash your true power with the Sith"
                imageUrl={adImages[1]?.image}
              />
              <AdCard
                title="Explore the Outer Rim"
                subtitle="Discover new worlds and adventures"
                imageUrl={adImages[2]?.image}
              />
            </>
          )}
        </Sidebar>
      </MainContent>
      <Footer />
    </AppContainer>
  );
};

export default App;