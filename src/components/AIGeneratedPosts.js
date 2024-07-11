import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchOpenAIContent } from './apis';
import PostCard from './components/PostCard'; // Ensure you have the PostCard component

const AIGeneratedPostsContainer = styled.div`
  margin: 20px 0;
`;

const AIGeneratedPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const generatePosts = async () => {
      const prompt1 = 'Generate a Star Wars themed social media post.';
      const prompt2 = 'Generate another Star Wars themed social media post.';

      const post1 = await fetchOpenAIContent(prompt1);
      const post2 = await fetchOpenAIContent(prompt2);

      const generatedPosts = [
        {
          id: 1,
          avatar: 'https://via.placeholder.com/40', // Replace with Star Wars themed avatar
          username: 'AI Generated User 1',
          timestamp: 'Just now',
          content: post1,
          comments: [],
        },
        {
          id: 2,
          avatar: 'https://via.placeholder.com/40', // Replace with Star Wars themed avatar
          username: 'AI Generated User 2',
          timestamp: 'Just now',
          content: post2,
          comments: [],
        },
      ];

      setPosts(generatedPosts);
    };

    generatePosts();
  }, []);

  return (
    <AIGeneratedPostsContainer>
      {posts.map(post => (
        <PostCard
          key={post.id}
          avatar={post.avatar}
          username={post.username}
          timestamp={post.timestamp}
          content={post.content}
          comments={post.comments}
          onAddComment={() => {}} // Implement if needed
          onDelete={() => {}} // Implement if needed
          onEdit={() => {}} // Implement if needed
        />
      ))}
    </AIGeneratedPostsContainer>
  );
};

export default AIGeneratedPosts;