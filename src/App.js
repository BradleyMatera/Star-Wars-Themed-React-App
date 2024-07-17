import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LeftNavigation from './components/LeftNavigation';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Newsfeed from './pages/Newsfeed';
import Messages from './pages/Messages';
import Settings from './pages/Settings';
import Footer from './components/Footer';
import { fetchStarWarsCharacters, fetchStarWarsImages } from './apis';
import headerImage from './img/headerImage.png';
import LukeSkywalker from './img/LukeSkywalker.jpeg';
import C3PO from './img/c3PO.jpeg';
import Vader from './img/Vader.jpeg';
import './styles/tailwind.css';


const AppContainer = styled.div`
  background-color: #1c1c1c;
  color: #ffffff;
  min-height: 100vh;
  font-family: Arial, sans-serif;
`;

const MainContent = styled.main`
  padding-top: 60px;
`;

const HeaderImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: cover;
`;

const App = () => {
  const [posts, setPosts] = useState([]);
  const [adImages, setAdImages] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [color, setColor] = useState('#1c1c1c');
  const [userStats, setUserStats] = useState({
    posts: 0,
    comments: 0,
    likes: 0,
  });
  const [characterData, setCharacterData] = useState([]);
  const [planetData, setPlanetData] = useState([]);

  const updateUserStats = useCallback(() => {
    const totalPosts = posts.length;
    const totalComments = posts.reduce((sum, post) => sum + post.comments.length, 0);
    const totalLikes = posts.reduce((sum, post) => sum + (post.likes || 0), 0);

    setUserStats({
      posts: totalPosts,
      comments: totalComments,
      likes: totalLikes,
    });
  }, [posts]);

  const handleAddPost = ({ avatar, title, description }) => {
    const newPost = {
      id: posts.length + 1,
      avatar: avatar || characters[2]?.image || 'https://via.placeholder.com/40',
      username: characters[2]?.name || 'Current User',
      title,
      description,
      timestamp: 'Just now',
      comments: [],
    };
    setPosts([newPost, ...posts]);
    updateUserStats();
  };

  const handleAddComment = (postId, comment) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, comments: [...post.comments, { username: 'Current User', content: comment }] } : post
    ));
    updateUserStats();
  };

  const handleDeletePost = postId => {
    setPosts(posts.filter(post => post.id !== postId));
    updateUserStats();
  };

  const handleEditPost = (postId, newTitle, newDescription) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, title: newTitle, description: newDescription } : post
    ));
  };

  const handlePrimaryButtonClick = () => {
    alert("May the Force be with you!");
  };

  const handleSecondaryButtonClick = () => {
    alert("These aren't the droids you're looking for.");
  };

  useEffect(() => {
    const fetchData = async () => {
      const charactersData = await fetchStarWarsCharacters();
      setCharacters(charactersData);
      setPosts([
        {
          id: 1,
          avatar: charactersData[0]?.image || LukeSkywalker,
          username: charactersData[0]?.name || 'Luke Skywalker',
          title: 'Jedi Training',
          description: 'Just finished training with Master Yoda!',
          timestamp: '2 hours ago',
          comments: [
            { username: 'Leia Organa', content: 'Great job!' },
            { username: 'Han Solo', content: 'May the Force be with you!' },
          ],
        },
        {
          id: 2,
          avatar: charactersData[1]?.image || C3PO,
          username: charactersData[1]?.name || 'C-3PO',
          title: 'Protocol Droid Musings',
          description: 'The odds of successfully navigating an asteroid field are approximately 3,720 to 1.',
          timestamp: '5 hours ago',
          comments: [{ username: 'R2-D2', content: 'Beep boop!' }],
        },
        {
          id: 3,
          avatar: charactersData[2]?.image || Vader,
          username: charactersData[2]?.name || 'Darth Vader',
          title: 'The Dark Side',
          description: 'I find your lack of faith disturbing.',
          timestamp: '1 day ago',
          comments: [{ username: 'Emperor Palpatine', content: 'Good. Good.' }],
        },
      ]);

      setCharacterData([
        { id: "Luke Skywalker", dataIndex: 172 },
        { id: "Darth Vader", dataIndex: 202 },
        { id: "Leia Organa", dataIndex: 150 },
      ]);

      setPlanetData([
        { x: 1, y: 200000, name: "Tatooine" },
        { x: 2, y: 2000000000, name: "Alderaan" },
        { x: 3, y: 0, name: "Hoth" },
      ]);

      const imagesData = await fetchStarWarsImages();
      setAdImages(imagesData);
    };

    fetchData();
    setTimeout(() => setColor('#ff6347'), 3000);
  }, []);

  return (
    <Router>
      <AppContainer style={{ backgroundColor: color }}>
        <Header />
        <HeaderImage src={headerImage} alt="Imperial Network Header" />
        <LeftNavigation />
        <MainContent>
          <Routes>
            <Route path="/" element={
              <Home 
                posts={posts}
                adImages={adImages}
                userStats={userStats}
                handleAddPost={handleAddPost}
                handleAddComment={handleAddComment}
                handleDeletePost={handleDeletePost}
                handleEditPost={handleEditPost}
                handlePrimaryButtonClick={handlePrimaryButtonClick}
                handleSecondaryButtonClick={handleSecondaryButtonClick}
              />
            } />
            <Route path="/dashboard" element={
              <Dashboard characterData={characterData} planetData={planetData} />
            } />
            <Route path="/newsfeed" element={<Newsfeed />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
};

export default App;