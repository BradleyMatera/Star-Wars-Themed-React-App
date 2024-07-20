// Importing necessary libraries and components
// React is a JavaScript library for building user interfaces
// useState and useEffect are hooks provided by React for state management and side effects
import React, { useState, useEffect } from 'react';

// Importing styled components for the Groups and Communities page layout and styling
import {
  GroupsContainer,
  Header,
  Title,
  FilterButton,
  GroupsGrid,
  GroupCard,
  GroupImage,
  GroupName,
  GroupDescription,
  JoinButton
} from '../styles/GroupsPageStyledComponent';

// Sample groups data for demonstration purposes
const sampleGroupsData = [
  { id: 1, name: "Rebel Pilots", description: "Group for Rebel Pilots to share strategies.", imageUrl: 'https://via.placeholder.com/100' },
  { id: 2, name: "Sith Lords", description: "Discussion forum for Sith Lords.", imageUrl: 'https://via.placeholder.com/100' },
  { id: 3, name: "Jedi Council", description: "A place for Jedi Masters to discuss.", imageUrl: 'https://via.placeholder.com/100' },
  { id: 4, name: "Bounty Hunters", description: "The guild for all bounty hunters.", imageUrl: 'https://via.placeholder.com/100' },
  { id: 5, name: "Galactic Senators", description: "A community for the senators of the galaxy.", imageUrl: 'https://via.placeholder.com/100' },
  { id: 6, name: "Clone Troopers", description: "Discussion and training forum for clone troopers.", imageUrl: 'https://via.placeholder.com/100' },
  { id: 7, name: "Smugglers", description: "A place for smugglers to share tips and tricks.", imageUrl: 'https://via.placeholder.com/100' },
  { id: 8, name: "Droid Engineers", description: "Community for droid engineers and enthusiasts.", imageUrl: 'https://via.placeholder.com/100' },
];

// GroupsAndCommunities component
const GroupsAndCommunities = () => {
  // Using useState to manage groups data and filter state
  const [groups, setGroups] = useState([]);
  const [filter, setFilter] = useState('all');

  // Using useEffect to set the initial groups data when the component mounts
  useEffect(() => {
    setGroups(sampleGroupsData);
  }, []);

  // Handler for filter button click
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // Filtering groups based on the selected filter
  const filteredGroups = groups.filter(group => filter === 'all' || group.category === filter);

  return (
    <GroupsContainer>
      <Header>
        <Title>Groups and Communities</Title>
        <FilterButton onClick={() => handleFilterChange(filter === 'all' ? 'my-groups' : 'all')}>
          {filter === 'all' ? 'Show My Groups' : 'Show All Groups'}
        </FilterButton>
      </Header>
      <GroupsGrid>
        {filteredGroups.map(group => (
          <GroupCard key={group.id}>
            <GroupImage src={group.imageUrl} alt={group.name} />
            <GroupName>{group.name}</GroupName>
            <GroupDescription>{group.description}</GroupDescription>
            <JoinButton>Join Group</JoinButton>
          </GroupCard>
        ))}
      </GroupsGrid>
    </GroupsContainer>
  );
};

export default GroupsAndCommunities;