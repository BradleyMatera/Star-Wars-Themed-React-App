import React from 'react';
import PostCard from '../components/PostCard';
import Form from '../components/Form';
import AdCard from '../components/AdCard';
import Button from '../components/Button';
import UserStats from '../components/UserStats';

const Home = ({ 
  posts, 
  adImages, 
  userStats, 
  handleAddPost, 
  handleAddComment, 
  handleDeletePost, 
  handleEditPost,
  handlePrimaryButtonClick,
  handleSecondaryButtonClick
}) => {
  return (
    <div className="flex flex-col md:flex-row max-w-5xl mx-auto p-4 space-y-4 md:space-y-0">
      <aside className="md:w-1/4 flex flex-col space-y-4">
        {adImages.length > 0 && (
          <>
            <AdCard
              title="Wanted Dead or Alive"
              subtitle="Consider this man 1 handed and dangerous!"
              imageUrl={adImages[0]?.image || 'https://via.placeholder.com/40'}
            />
            <AdCard
              title="Embrace the Dark Side"
              subtitle="Unleash your true power with the Sith"
              imageUrl={adImages[1]?.image || 'https://via.placeholder.com/40'}
            />
            <AdCard
              title="Explore the Outer Rim"
              subtitle="Discover new worlds and adventures"
              imageUrl={adImages[2]?.image || 'https://via.placeholder.com/40'}
            />
          </>
        )}
      </aside>
      <main className="md:flex-2 flex flex-col space-y-4">
        <div className="flex justify-between mb-4">
          <Button primary onClick={handlePrimaryButtonClick}>
            Use the Force
          </Button>
          <Button onClick={handleSecondaryButtonClick}>
            Jedi Mind Trick
          </Button>
        </div>
        <Form onSubmit={handleAddPost} />
        {posts.map((post) => (
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
        ))}
      </main>
      <aside className="md:w-1/4 flex flex-col space-y-4">
        <UserStats 
          posts={userStats.posts}
          comments={userStats.comments}
          likes={userStats.likes}
        />
      </aside>
    </div>
  );
};

export default Home;
