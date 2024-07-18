import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  padding: 20px;
  color: #ffd700;
  background-color: #000;
  border-radius: 10px;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h1`
  margin: 0;
`;

const Stats = styled.p`
  margin: 5px 0;
`;

const PostsContainer = styled.div`
  margin-top: 20px;
`;

const Post = styled.div`
  background-color: #1c1c1c;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch profile data and posts from the API
    const fetchProfile = async () => {
      // Placeholder data, replace with actual API calls
      const profileData = {
        name: "Luke Skywalker",
        avatar: "https://via.placeholder.com/100",
        height: "172 cm",
        mass: "77 kg"
      };
      const postsData = [
        { id: 1, content: "Just finished training with Master Yoda!" },
        { id: 2, content: "I sense a disturbance in the Force." }
      ];
      setProfile(profileData);
      setPosts(postsData);
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