import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// Styled component for the profile container
const ProfileContainer = styled.div`
  padding: 20px;
  color: #ffd700;
  background-color: #000;
  border-radius: 10px;
`;

// Styled component for the profile header
const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

// Styled component for the avatar image
const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
`;

// Styled component for the profile information section
const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

// Styled component for the name text
const Name = styled.h1`
  margin: 0;
`;

// Styled component for the statistics text
const Stats = styled.p`
  margin: 5px 0;
`;

// Styled component for the posts container
const PostsContainer = styled.div`
  margin-top: 20px;
`;

// Styled component for individual posts
const Post = styled.div`
  background-color: #1c1c1c;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

// ProfilePage component definition
const ProfilePage = () => {
  const [profile, setProfile] = useState(null); // State for profile data
  const [posts, setPosts] = useState([]); // State for posts data

  useEffect(() => {
    // Fetch profile data and posts from the API
    const fetchProfile = async () => {
      try {
        const profileResponse = await axios.get('https://swapi.dev/api/people/1/');
        const profileData = {
          name: profileResponse.data.name,
          avatar: 'https://via.placeholder.com/100', // Replace with actual avatar if available
          height: `${profileResponse.data.height} cm`,
          mass: `${profileResponse.data.mass} kg`,
        };

        // Placeholder for actual posts API
        const postsData = [
          { id: 1, content: 'Just finished training with Master Yoda!' },
          { id: 2, content: 'I sense a disturbance in the Force.' },
        ];

        setProfile(profileData);
        setPosts(postsData);
      } catch (error) {
        console.error('Failed to fetch profile data:', error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <ProfileContainer>
      {profile ? (
        <>
          <ProfileHeader>
            <Avatar src={profile.avatar} alt={profile.name} />
            <ProfileInfo>
              <Name>{profile.name}</Name>
              <Stats>Height: {profile.height}</Stats>
              <Stats>Mass: {profile.mass}</Stats>
            </ProfileInfo>
          </ProfileHeader>
          <PostsContainer>
            {posts.map(post => (
              <Post key={post.id}>{post.content}</Post>
            ))}
          </PostsContainer>
        </>
      ) : (
        <p>Loading profile...</p>
      )}
    </ProfileContainer>
  );
};

export default ProfilePage;
