import React from 'react';
import PropTypes from 'prop-types';
import PostCard from '../components/PostCard'; // Ensure PostCard is imported

const HomePage = ({
  posts,
  // Remove unused props
  // handleAddPost,
  // handleAddComment,
  // handleDeletePost,
  // handleEditPost,
  // handlePrimaryButtonClick,
  // handleSecondaryButtonClick,
}) => {
  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

HomePage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  // Remove unused prop types
  // handleAddPost: PropTypes.func.isRequired,
  // handleAddComment: PropTypes.func.isRequired,
  // handleDeletePost: PropTypes.func.isRequired,
  // handleEditPost: PropTypes.func.isRequired,
  // handlePrimaryButtonClick: PropTypes.func.isRequired,
  // handleSecondaryButtonClick: PropTypes.func.isRequired,
};

export default HomePage;
