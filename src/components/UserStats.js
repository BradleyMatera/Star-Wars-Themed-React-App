import React, { Component } from 'react';
import styled from 'styled-components';

// Styled components for layout and styling
const StatsContainer = styled.div`
  background-color: #222; // Dark background color for the stats container
  color: #fff; // White text color
  padding: 20px; // Padding inside the container
  border-radius: 8px; // Rounded corners for the container
  text-align: center; // Center-align the text
  margin-top: 20px; // Top margin to separate from other elements
`;

const Stat = styled.div`
  font-size: 1.5rem; // Larger font size for stats
  margin: 10px 0; // Vertical margin to space out stats
`;

const Button = styled.button`
  background-color: #1E90FF; // Blue background color for the button
  color: #fff; // White text color
  border: none; // No border for the button
  padding: 10px 20px; // Padding inside the button for spacing
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
    // Bind event handler methods to the component instance to ensure correct 'this' context
    this.addPost = this.addPost.bind(this);
    this.addComment = this.addComment.bind(this);
    this.addLike = this.addLike.bind(this);
  }

  // Lifecycle method to simulate fetching initial data
  componentDidMount() {
    // Simulate fetching initial data with a delay using setTimeout
    setTimeout(() => {
      this.setState({ posts: 5, comments: 10, likes: 20 }); // Update state with initial data
    }, 1000); // 1 second delay
  }

  // Method to add a post by incrementing the posts count in state
  addPost() {
    this.setState((prevState) => ({ posts: prevState.posts + 1 })); // Update state with new post count
  }

  // Method to add a comment by incrementing the comments count in state
  addComment() {
    this.setState((prevState) => ({ comments: prevState.comments + 1 })); // Update state with new comment count
  }

  // Method to add a like by incrementing the likes count in state
  addLike() {
    this.setState((prevState) => ({ likes: prevState.likes + 1 })); // Update state with new like count
  }

  render() {
    const { posts, comments, likes } = this.state; // Destructuring state for easier access
    const { titleColor, textColor } = this.props; // Destructuring props for customizing styles

    return (
      // Main container for user stats, styled with styled-components
      <StatsContainer>
        <h2 style={{ color: titleColor }}>User Statistics</h2> {/* Title for the stats section */}
        <Stat style={{ color: textColor }}>Posts: {posts}</Stat> {/* Display current posts count */}
        <Stat style={{ color: textColor }}>Comments: {comments}</Stat> {/* Display current comments count */}
        <Stat style={{ color: textColor }}>Likes: {likes}</Stat> {/* Display current likes count */}
        {/* Buttons to interact with the component, each button calls its respective method */}
        <Button onClick={this.addPost}>Add Post</Button>
        <Button onClick={this.addComment}>Add Comment</Button>
        <Button onClick={this.addLike}>Add Like</Button>
      </StatsContainer>
    );
  }
}

export default UserStats;