import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled components for the Groups and Communities page
const GroupsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #000;
  color: #ffd700;
  border-radius: 10px;
  animation: ${fadeIn} 0.5s ease-out;
  max-width: 1200px;
  margin: 20px auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  color: #ffd700;
  font-size: 2.5rem;
  font-family: 'Star Jedi', sans-serif;
`;

const FilterButton = styled.button`
  padding: 10px 20px;
  background-color: #ffd700;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ffc700;
  }
`;

const GroupsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
`;

const GroupCard = styled.div`
  background-color: #1c1c1c;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: #333;
  }
`;

const GroupImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const GroupName = styled.h2`
  color: #ffd700;
  margin-bottom: 10px;
`;

const GroupDescription = styled.p`
  color: #ffd700;
`;

const JoinButton = styled.button`
  margin-top: 10px;
  padding: 10px 15px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background-color: #218838;
  }
`;

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

const GroupsAndCommunities = () => {
  const [groups, setGroups] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setGroups(sampleGroupsData);
  }, []);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

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
