// Importing necessary modules from React and styled-components
import React, { Component } from 'react';
import styled from 'styled-components';

// Importing custom components
import Header from './components/Header';
import LeftNavigation from './components/LeftNavigation';
import PostCard from './components/PostCard';
import Form from './components/Form';
import AdCard from './components/AdCard';
import Footer from './components/Footer';
import Button from './components/Button';
import UserStats from './components/UserStats';

// Importing functions to fetch data from APIs
import { fetchStarWarsCharacters, fetchStarWarsImages } from './apis';

// Importing images
import headerImage from './img/headerImage.png';
import LukeSkywalker from './img/LukeSkywalker.jpeg';
import C3PO from './img/c3PO.jpeg';
import Vader from './img/Vader.jpeg';

// Styling for the main app container
const AppContainer = styled.div`
  background-color: #1c1c1c;
  color: #ffffff;
  min-height: 100vh;
  font-family: Arial, sans-serif;
`;

// Styling for the main content area
const MainContent = styled.main`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  padding-top: 70px;
`;

// Styling for the feed area
const Feed = styled.div`
  flex: 2;
  margin-right: 1rem;
`;

// Styling for the sidebar
const Sidebar = styled.aside`
  flex: 1;
`;

// Styling for the button container
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

// Styling for the header image
const HeaderImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 300px; // Ensures the image doesn't become too tall
  object-fit: cover; // Ensures the image covers the area without distortion
`;

// Main App component as a class component
class App extends Component {
  constructor(props) {
    super(props);
    // Initializing state variables
    this.state = {
      posts: [],
      adImages: [],
      characters: [],
      color: '#1c1c1c', // Initial color for dynamic color change
      userStats: {
        posts: 0,
        comments: 0,
        likes: 0,
      },
    };
  }

  // Lifecycle method to fetch data and set up dynamic color change
  componentDidMount() {
    // Fetch Star Wars characters for avatars
    fetchStarWarsCharacters().then((data) => {
      this.setState({ characters: data });
      // Setting initial posts
      this.setState({
        posts: [
          {
            id: 1,
            avatar: data[0]?.image || LukeSkywalker,
            username: data[0]?.name || 'Luke Skywalker',
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
            avatar: data[1]?.image || C3PO,
            username: data[1]?.name || 'C-3PO',
            title: 'Protocol Droid Musings',
            description: 'The odds of successfully navigating an asteroid field are approximately 3,720 to 1.',
            timestamp: '5 hours ago',
            comments: [{ username: 'R2-D2', content: 'Beep boop!' }],
          },
          {
            id: 3,
            avatar: data[2]?.image || Vader,
            username: data[2]?.name || 'Darth Vader',
            title: 'The Dark Side',
            description: 'I find your lack of faith disturbing.',
            timestamp: '1 day ago',
            comments: [{ username: 'Emperor Palpatine', content: 'Good. Good.' }],
          },
        ],
      }, this.updateUserStats);
    });

    // Fetch Star Wars images for ads
    fetchStarWarsImages().then((data) => {
      this.setState({ adImages: data });
    });

    // Change color after component mounts
    setTimeout(() => {
      this.setState({ color: '#ff6347' }); // Change to a custom color from Coolors.co
    }, 3000);
  }

  // Handler to add a new post
  handleAddPost = ({ avatar, title, description }) => {
    const newPost = {
      id: this.state.posts.length + 1,
      avatar: avatar || this.state.characters[2]?.image || 'https://via.placeholder.com/40',
      username: this.state.characters[2]?.name || 'Current User',
      title,
      description,
      timestamp: 'Just now',
      comments: [],
    };
    this.setState(prevState => ({
      posts: [newPost, ...prevState.posts],
    }), this.updateUserStats);
  };

  // Handler to add a comment to a post
  handleAddComment = (postId, comment) => {
    this.setState(prevState => ({
      posts: prevState.posts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, { username: 'Current User', content: comment }] }
          : post
      ),
    }), this.updateUserStats);
  };

  // Handler to delete a post
  handleDeletePost = (postId) => {
    this.setState(prevState => ({
      posts: prevState.posts.filter((post) => post.id !== postId),
    }), this.updateUserStats);
  };

  // Handler to edit a post
  handleEditPost = (postId, newTitle, newDescription) => {
    this.setState(prevState => ({
      posts: prevState.posts.map((post) =>
        post.id === postId
          ? { ...post, title: newTitle, description: newDescription }
          : post
      ),
    }));
  };

  // Method to update user stats
  updateUserStats = () => {
    const totalPosts = this.state.posts.length;
    const totalComments = this.state.posts.reduce((sum, post) => sum + post.comments.length, 0);
    const totalLikes = this.state.posts.reduce((sum, post) => sum + (post.likes || 0), 0);

    this.setState({
      userStats: {
        posts: totalPosts,
        comments: totalComments,
        likes: totalLikes,
      },
    });
  };

  // Handler for primary button click
  handlePrimaryButtonClick = () => {
    alert("May the Force be with you!");
  };

  // Handler for secondary button click
  handleSecondaryButtonClick = () => {
    alert("These aren't the droids you're looking for.");
  };

  render() {
    return (
      <AppContainer style={{ backgroundColor: this.state.color }}>
        <Header />
        <HeaderImage src={headerImage} alt="Imperial Network Header" />
        <LeftNavigation />
        <MainContent>
          <Feed>
            <ButtonContainer>
              <Button primary onClick={this.handlePrimaryButtonClick}>
                Use the Force
              </Button>
              <Button onClick={this.handleSecondaryButtonClick}>
                Jedi Mind Trick
              </Button>
            </ButtonContainer>
            <Form onSubmit={this.handleAddPost} />
            {this.state.posts.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                avatar={post.avatar}
                username={post.username}
                title={post.title}
                description={post.description}
                timestamp={post.timestamp}
                comments={post.comments}
                onAddComment={this.handleAddComment}
                onDelete={this.handleDeletePost}
                onEdit={this.handleEditPost}
              />
            ))}
          </Feed>
          <Sidebar>
            {this.state.adImages.length > 0 && (
              <>
                <AdCard
                  title="Wanted Dead or Alive"
                  subtitle="Consider this man 1 handed and dangerous!"
                  imageUrl={this.state.adImages[0]?.image || 'https://via.placeholder.com/40'}
                />
                <AdCard
                  title="Embrace the Dark Side"
                  subtitle="Unleash your true power with the Sith"
                  imageUrl={this.state.adImages[1]?.image || 'https://via.placeholder.com/40'}
                />
                <AdCard
                  title="Explore the Outer Rim"
                  subtitle="Discover new worlds and adventures"
                  imageUrl={this.state.adImages[2]?.image || 'https://via.placeholder.com/40'}
                />
              </>
            )}
          </Sidebar>
        </MainContent>
        <UserStats 
          posts={this.state.userStats.posts}
          comments={this.state.userStats.comments}
          likes={this.state.userStats.likes}
        />
        <Footer />
      </AppContainer>
    );
  }
}

export default App;