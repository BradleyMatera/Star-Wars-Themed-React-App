import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import LeftNavigation from './components/LeftNavigation';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Newsfeed from './pages/Newsfeed';
import Messages from './pages/Messages';
import Settings from './pages/Settings';
import ProfilePage from './pages/ProfilePage';
import GroupsAndCommunities from './pages/GroupsAndCommunities';
import EventsPage from './pages/EventsPage';
import Notifications from './pages/Notifications';
import './styles/tailwind.css';

const AppContainer = styled.div`
  background: linear-gradient(to right, #FF0000, #0000FF);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch initial data here (posts, adImages)
    // Example:
    // fetchPosts();
  }, []);

  const handleAddPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const handleAddComment = (postId, newComment) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, newComment] }
          : post
      )
    );
  };

  const handleDeletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  const handleEditPost = (postId, updatedPost) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, ...updatedPost } : post
      )
    );
  };

  const handlePrimaryButtonClick = () => {
    alert("May the Force be with you!");
  };

  const handleSecondaryButtonClick = () => {
    alert("These aren't the droids you're looking for.");
  };

  return (
    <Router>
      <AppContainer>
        <Header />
        <LeftNavigation />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                posts={posts}
                handleAddPost={handleAddPost}
                handleAddComment={handleAddComment}
                handleDeletePost={handleDeletePost}
                handleEditPost={handleEditPost}
                handlePrimaryButtonClick={handlePrimaryButtonClick}
                handleSecondaryButtonClick={handleSecondaryButtonClick}
              />
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/newsfeed" element={<Newsfeed />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/groupscommunities" element={<GroupsAndCommunities />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
        <Footer />
      </AppContainer>
    </Router>
  );
};

export default App;
