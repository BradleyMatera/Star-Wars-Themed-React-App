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

// Styled container for the main App layout, setting background and minimum height
const AppContainer = styled.div`
  background: linear-gradient(to right, #FF0000, #0000FF);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  // Using useState to manage posts data
  // useState is a Hook that adds state to functional components
  const [posts, setPosts] = useState([]);

  // Using useEffect to fetch initial data when the component mounts
  // useEffect is a Hook for handling side effects like data fetching
  useEffect(() => {
    // Fetch initial data here (posts, adImages)
    // Example:
    // fetchPosts();
  }, []);

  // Handler to add a new post
  // This function updates the state with a new post
  const handleAddPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  // Handler to add a new comment to a post
  // This function updates the state with a new comment on the specified post
  const handleAddComment = (postId, newComment) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, newComment] }
          : post
      )
    );
  };

  // Handler to delete a post
  // This function updates the state by removing the specified post
  const handleDeletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  // Handler to edit an existing post
  // This function updates the state with the modified post
  const handleEditPost = (postId, updatedPost) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, ...updatedPost } : post
      )
    );
  };

  // Handler for primary button click
  // This function performs actions when the primary button is clicked
  const handlePrimaryButtonClick = () => {
    // Handle primary button click
  };

  // Handler for secondary button click
  // This function performs actions when the secondary button is clicked
  const handleSecondaryButtonClick = () => {
    // Handle secondary button click
  };

  return (
    <Router>
      <AppContainer>
        {/* Include Header component */}
        <Header />
        {/* Include Left Navigation component */}
        <LeftNavigation />
        <Routes>
          {/* Define routes for navigation */}
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
          {/* Route for Dashboard view */}
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Route for Newsfeed view */}
          <Route path="/newsfeed" element={<Newsfeed />} />
          {/* Route for Messages view */}
          <Route path="/messages" element={<Messages />} />
          {/* Route for Settings view */}
          <Route path="/settings" element={<Settings />} />
          {/* Route for Profile view */}
          <Route path="/profile" element={<ProfilePage />} />
          {/* Route for Groups and Communities view */}
          <Route path="/groupscommunities" element={<GroupsAndCommunities />} />
          {/* Route for Events view */}
          <Route path="/events" element={<EventsPage />} />
          {/* Route for Notifications view */}
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
        {/* Include Footer component */}
        <Footer />
      </AppContainer>
    </Router>
  );
};

export default App;
