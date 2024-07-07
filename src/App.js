import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import LeftNavigation from './components/LeftNavigation';
import PostCard from './components/PostCard';
import Form from './components/Form';
import AdCard from './components/AdCard';

const AppContainer = styled.div({
  backgroundColor: '#f4f6f8',
  minHeight: '100vh'
});

const MainContent = styled.main({
  display: 'flex',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '1rem',
  paddingTop: '70px'
});

const Feed = styled.div({
  flex: 2,
  marginRight: '1rem'
});

const Sidebar = styled.aside({
  flex: 1
});

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      avatar: "https://example.com/avatar1.jpg",
      username: "John Doe",
      timestamp: "2 hours ago",
      content: "Just completed a fantastic project with my team!",
      comments: [
        { username: "Jane Smith", content: "Great job!" },
        { username: "Bob Johnson", content: "Congrats on the success!" }
      ]
    }
  ]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAddPost = (content) => {
    const newPost = {
      id: posts.length + 1,
      avatar: "https://example.com/default-avatar.jpg",
      username: "Current User",
      timestamp: "Just now",
      content,
      comments: []
    };
    setPosts([newPost, ...posts]);
  };

  const handleAddComment = (postId, comment) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, comments: [...post.comments, { username: "Current User", content: comment }] }
        : post
    ));
  };

  return (
    <AppContainer>
      <Header title="NexusNet" />
      <LeftNavigation isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <MainContent>
        <Feed>
          <Form onSubmit={handleAddPost} />
          {posts.map(post => (
            <PostCard 
              key={post.id}
              {...post}
              onAddComment={(comment) => handleAddComment(post.id, comment)}
            />
          ))}
        </Feed>
        <Sidebar>
          <AdCard 
            imageUrl="https://example.com/ad1.jpg"
            title="Boost Your Skills"
            subtitle="Master the latest tech with our online courses"
          />
          <AdCard 
            imageUrl="https://example.com/ad2.jpg"
            title="NexusNet Premium"
            subtitle="Unlock exclusive features and grow your network faster"
          />
        </Sidebar>
      </MainContent>
    </AppContainer>
  );
};

export default App;