// Importing necessary libraries and components
// React is a JavaScript library for building user interfaces
// useState and useEffect are hooks provided by React for state management and side effects
import React, { useState, useEffect } from 'react';
// Importing styled-components to handle component-level styling in JavaScript
import axios from 'axios';
// Importing custom components
import PostCard from '../components/PostCard';
import Form from '../components/Form';
import AdCard from '../components/AdCard';
import UserStats from '../components/UserStats';
import Button from '../components/Button';
// Importing images
import LukeSkywalker from '../img/LukeSkywalker.jpeg';
import C3PO from '../img/c3PO.jpeg';
import Vader from '../img/Vader.jpeg';

// Importing styled components for the Home layout and styling
import {
  HomeContainer,
  Sidebar,
  MainContent,
  AdsSection
} from '../styles/HomeStyledComponents';

// Static content for ad cards
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

// Home component definition
const Home = () => {
  // State for storing ad data
  const [adData, setAdData] = useState([]);
  // State for storing posts
  const [postList, setPostList] = useState([]);

  // useEffect hook to fetch ad images on component mount
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
        setAdData(ads); // Setting the fetched ad data
      } catch (error) {
        console.error('Error fetching ad images:', error); // Error handling
      }
    };

    fetchAdImages(); // Invoke the fetch function
  }, []);

  // Handler to add a new post
  const handleAddNewPost = ({ avatar, title, description }) => {
    const newPost = {
      id: postList.length + 1,
      avatar: avatar || 'https://via.placeholder.com/40',
      username: 'Current User',
      title,
      description,
      timestamp: 'Just now',
      comments: [],
    };
    setPostList([newPost, ...postList]);
  };

  // Handler to add a new comment to a specific post
  const handleAddComment = (postId, comment) => {
    setPostList(postList.map(post =>
      post.id === postId ? { ...post, comments: [...post.comments, { username: 'Current User', content: comment }] } : post
    ));
  };

  // Handler to delete a specific post
  const handleDeletePost = (postId) => {
    setPostList(postList.filter(post => post.id !== postId));
  };

  // Handler to edit a specific post
  const handleEditPost = (postId, newContent) => {
    setPostList(postList.map(post =>
      post.id === postId ? { ...post, description: newContent } : post
    ));
  };

  // Initial fake posts
  useEffect(() => {
    const initialPosts = [
      {
        id: 1,
        avatar: LukeSkywalker,
        username: 'Luke Skywalker',
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
        avatar: C3PO,
        username: 'C-3PO',
        title: 'Protocol Droid Musings',
        description: 'The odds of successfully navigating an asteroid field are approximately 3,720 to 1.',
        timestamp: '5 hours ago',
        comments: [{ username: 'R2-D2', content: 'Beep boop!' }],
      },
      {
        id: 3,
        avatar: Vader,
        username: 'Darth Vader',
        title: 'The Dark Side',
        description: 'I find your lack of faith disturbing.',
        timestamp: '1 day ago',
        comments: [{ username: 'Emperor Palpatine', content: 'Good. Good.' }],
      },
    ];
    setPostList(initialPosts);
  }, []);

  // Handlers for button clicks to display messages
  const handlePrimaryButtonClick = () => {
    alert("May the Force be with you!");
  };

  const handleSecondaryButtonClick = () => {
    alert("These aren't the droids you're looking for.");
  };

  return (
    <HomeContainer>
      <Sidebar>
        <AdsSection>
          {adData.map((ad, index) => (
            <AdCard
              key={index}
              title={ad.title}
              subtitle={ad.subtitle}
              imageUrl={ad.imageUrl}
              $backgroundColor="#2c3e50"
              $textColor="#ffffff"
              $imageBackgroundColor="#f0f0f0"
              $titleColor="#FFD700"
              $subtitleColor="#777"
            />
          ))}
        </AdsSection>
        <UserStats
          posts={postList.length}
          comments={postList.reduce((acc, post) => acc + post.comments.length, 0)}
          likes={0} // Assuming there is a likes count in userStats
        />
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
        <Form onSubmit={handleAddNewPost} />
        {postList.length > 0 ? (
          postList.map((post) => (
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
          ))
        ) : (
          <p>No posts available</p>
        )}
      </MainContent>
    </HomeContainer>
  );
};

export default Home;