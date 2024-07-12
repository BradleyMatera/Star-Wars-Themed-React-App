import React, { Component } from 'react';
import styled from 'styled-components';

// Styled components for layout and styling
const StatsContainer = styled.div`
  background-color: #222; // Dark background color for the stats container
  color: #fff; // White text color
  padding: 20px; // Padding inside the container
  border-radius: 8px; // Rounded corners
  text-align: center; // Center-aligned text
  margin-top: 20px; // Top margin to separate from other elements
`;

const Stat = styled.div`
  font-size: 1.5rem; // Larger font size for stats
  margin: 10px 0; // Vertical margin to space out stats
`;

const Button = styled.button`
  background-color: #1E90FF; // Blue background color for the button
  color: #fff; // White text color
  border: none; // No border
  padding: 10px 20px; // Padding inside the button
  border-radius: 5px; // Rounded corners for the button
  cursor: pointer; // Pointer cursor on hover
  margin: 5px; // Margin to space out buttons
  &:hover {
    background-color: #104E8B; // Darker blue background color on hover
  }
`;

class UserStats extends Component {
  constructor(props) {
    super(props);
    // Initialize state to track posts, comments, and likes
    this.state = {
      posts: 0,
      comments: 0,
      likes: 0,
    };
    // Bind event handler methods to the component instance
    this.addPost = this.addPost.bind(this);
    this.addComment = this.addComment.bind(this);
    this.addLike = this.addLike.bind(this);
  }

  // Lifecycle method to simulate fetching initial data
  componentDidMount() {
    // Simulate fetching initial data with a delay
    setTimeout(() => {
      this.setState({ posts: 5, comments: 10, likes: 20 });
    }, 1000);
  }

  // Method to add a post
  addPost() {
    this.setState((prevState) => ({ posts: prevState.posts + 1 }));
  }

  // Method to add a comment
  addComment() {
    this.setState((prevState) => ({ comments: prevState.comments + 1 }));
  }

  // Method to add a like
  addLike() {
    this.setState((prevState) => ({ likes: prevState.likes + 1 }));
  }

  render() {
    const { posts, comments, likes } = this.state; // Destructuring state for easier access
    const { titleColor, textColor } = this.props; // Destructuring props for customizing styles

    return (
      // Main container for user stats, styled with styled-components
      <StatsContainer>
        <h2 style={{ color: titleColor }}>User Statistics</h2>
        <Stat style={{ color: textColor }}>Posts: {posts}</Stat>
        <Stat style={{ color: textColor }}>Comments: {comments}</Stat>
        <Stat style={{ color: textColor }}>Likes: {likes}</Stat>
        {/* Buttons to interact with the component */}
        <Button onClick={this.addPost}>Add Post</Button>
        <Button onClick={this.addComment}>Add Comment</Button>
        <Button onClick={this.addLike}>Add Like</Button>
      </StatsContainer>
    );
  }
}

export default UserStats;