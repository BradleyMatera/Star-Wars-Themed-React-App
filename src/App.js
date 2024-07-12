// Importing necessary modules from React and styled-components
import React, { Component } from 'react';
import styled from 'styled-components'; // Allows scoped CSS within components

// Importing custom components
import Header from './components/Header';
import LeftNavigation from './components/LeftNavigation';
import PostCard from './components/PostCard';
import Form from './components/Form';
import AdCard from './components/AdCard';
import Footer from './components/Footer';
import Button from './components/Button';

// Importing functions to fetch data from APIs
import { fetchStarWarsCharacters, fetchStarWarsImages } from './apis';

// Importing images
import LukeSkywalker from './img/LukeSkywalker.jpeg';
import C3PO from './img/c3PO.jpeg';

// Styling for the main app container
const AppContainer = styled.div({
  backgroundColor: '#1c1c1c', // Dark background for a Star Wars feel
  color: '#ffffff', // White text for contrast
  minHeight: '100vh',
  fontFamily: 'Arial, sans-serif',
});

// Styling for the main content area
const MainContent = styled.main({
  display: 'flex',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '1rem',
  paddingTop: '70px',
});

// Styling for the feed area
const Feed = styled.div({
  flex: 2,
  marginRight: '1rem',
});

// Styling for the sidebar
const Sidebar = styled.aside({
  flex: 1,
});

// Main App component as a class component
class App extends Component {
  constructor(props) {
    super(props);
    // Initializing state variables
    this.state = {
      posts: [], // State to hold post objects
      adImages: [], // State to hold advertisement images
      characters: [], // State to hold Star Wars characters
      color: '#1c1c1c', // Initial color for dynamic color change
    };
  }

  // Lifecycle method to fetch data when the component mounts
  componentDidMount() {
    // Fetch Star Wars characters for avatars
    fetchStarWarsCharacters().then((data) => {
      this.setState({ characters: data }); // Set fetched characters to state
      // Setting mock posts using fetched characters
      this.setState({
        posts: [
          {
            id: 1,
            avatar: data[0]?.image || LukeSkywalker, // Use fetched image or fallback
            username: data[0]?.name || 'Luke Skywalker', // Use fetched name or fallback
            timestamp: '2 hours ago',
            content: 'Just finished training with Master Yoda!',
            comments: [
              { username: 'Leia Organa', content: 'Great job!' },
              { username: 'Han Solo', content: 'May the Force be with you!' },
            ],
          },
          {
            id: 2,
            avatar: data[1]?.image || C3PO, // Use fetched image or fallback
            username: data[1]?.name || 'C-3PO', // Use fetched name or fallback
            timestamp: '5 hours ago',
            content: 'The Dark Side is strong within me.',
            comments: [{ username: 'Emperor Palpatine', content: 'Good. Good.' }],
          },
        ],
      });
    });

    // Fetch Star Wars images for ads
    fetchStarWarsImages().then((data) => {
      this.setState({ adImages: data }); // Set fetched images to state
    });

    // Change the color of an element after mounting
    setTimeout(() => {
      this.setState({ color: '#3498db' }); // Change color to a new value
    }, 2000);
  }

  // Handler to add a new post
  handleAddPost = ({ avatar, title, description }) => {
    const newPost = {
      id: this.state.posts.length + 1,
      avatar: avatar || 'https://via.placeholder.com/40', // Use provided avatar or fallback
      username: 'Current User', // Use current user as username
      timestamp: 'Just now',
      content: `${title} - ${description}`, // Combine title and description
      comments: [],
    };
    this.setState({ posts: [newPost, ...this.state.posts] }); // Add new post to the beginning of the posts array
  };

  // Handler to add a comment to a post
  handleAddComment = (postId, comment) => {
    this.setState({
      posts: this.state.posts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, { username: 'Current User', content: comment }] }
          : post
      ),
    });
  };

  // Handler to delete a post
  handleDeletePost = (postId) => {
    this.setState({ posts: this.state.posts.filter((post) => post.id !== postId) }); // Filter out the post with the given id
  };

  // Handler to edit a post
  handleEditPost = (postId, newContent) => {
    this.setState({
      posts: this.state.posts.map((post) =>
        post.id === postId ? { ...post, content: newContent } : post
      ),
    });
  };

  render() {
    return (
      <AppContainer style={{ backgroundColor: this.state.color }}>
        <Header />
        <LeftNavigation />
        <MainContent>
          <Feed>
            <Form onSubmit={this.handleAddPost} />
            {/* <AIGeneratedPosts /> */}
            {this.state.posts.map((post) => (
              <PostCard
                key={post.id}
                avatar={post.avatar}
                username={post.username}
                timestamp={post.timestamp}
                content={post.content}
                comments={post.comments}
                onAddComment={(comment) => this.handleAddComment(post.id, comment)}
                onDelete={() => this.handleDeletePost(post.id)}
                onEdit={(newContent) => this.handleEditPost(post.id, newContent)}
              />
            ))}
            <Button primary onClick={() => alert('Primary Button Clicked')}>
              Primary Button
            </Button>
            <Button onClick={() => alert('Secondary Button Clicked')}>Secondary Button</Button>
          </Feed>
          <Sidebar>
            {this.state.adImages.length > 0 && (
              <>
                <AdCard
                  title="Wanted Dead or Alive"
                  subtitle="Consider this man 1 handed and dangerous!"
                  imageUrl={this.state.adImages[0]?.image}
                />
                <AdCard
                  title="Embrace the Dark Side"
                  subtitle="Unleash your true power with the Sith"
                  imageUrl={this.state.adImages[1]?.image}
                />
                <AdCard
                  title="Explore the Outer Rim"
                  subtitle="Discover new worlds and adventures"
                  imageUrl={this.state.adImages[2]?.image}
                />
              </>
            )}
          </Sidebar>
        </MainContent>
        <Footer />
      </AppContainer>
    );
  }
}

export default App;