// Import the necessary library for creating React components
import React, { Component } from 'react';

// Define a class component named UserStats that extends the React Component class
class UserStats extends Component {
  // The constructor is called when the component is created
  constructor(props) {
    super(props);
    // Initialize the state to track posts, comments, and likes
    this.state = {
      posts: 0,    // State property to hold the number of posts
      comments: 0, // State property to hold the number of comments
      likes: 0     // State property to hold the number of likes
    };
    // Bind the event handler methods to the current instance of the component
    this.addPost = this.addPost.bind(this);
    this.addComment = this.addComment.bind(this);
    this.addLike = this.addLike.bind(this);
  }

  // Lifecycle method that is called after the component is mounted to the DOM
  componentDidMount() {
    // Simulate fetching initial data with a delay
    setTimeout(() => {
      // Update the state with the fetched data (simulated)
      this.setState({ posts: 5, comments: 10, likes: 20 });
    }, 1000); // Delay of 1000 milliseconds (1 second)
  }

  // Event handler method to add a post
  addPost() {
    // Update the state using the previous state to increment the posts count by 1
    this.setState(prevState => ({ posts: prevState.posts + 1 }));
  }

  // Event handler method to add a comment
  addComment() {
    // Update the state using the previous state to increment the comments count by 1
    this.setState(prevState => ({ comments: prevState.comments + 1 }));
  }

  // Event handler method to add a like
  addLike() {
    // Update the state using the previous state to increment the likes count by 1
    this.setState(prevState => ({ likes: prevState.likes + 1 }));
  }

  // The render method returns the JSX that defines the component's UI
  render() {
    // Destructure the state to extract posts, comments, and likes for easy use in the JSX
    const { posts, comments, likes } = this.state;

    // Return the JSX structure of the component
    return (
      <div>
        {/* Display the component title */}
        <h1>User Stats</h1>
        {/* Display the current number of posts */}
        <p>Posts: {posts}</p>
        {/* Display the current number of comments */}
        <p>Comments: {comments}</p>
        {/* Display the current number of likes */}
        <p>Likes: {likes}</p>
        {/* Button to add a post, calls the addPost method when clicked */}
        <button onClick={this.addPost}>Add Post</button>
        {/* Button to add a comment, calls the addComment method when clicked */}
        <button onClick={this.addComment}>Add Comment</button>
        {/* Button to add a like, calls the addLike method when clicked */}
        <button onClick={this.addLike}>Add Like</button>
      </div>
    );
  }
}

// Export the UserStats component so it can be used in other parts of the application
export default UserStats;