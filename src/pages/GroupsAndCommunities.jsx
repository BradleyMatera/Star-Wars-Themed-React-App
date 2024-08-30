import React, { useState, useEffect } from 'react';
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

const GroupsAndCommunities = () => {
  const [groups, setGroups] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetch('https://api.example.com/groups')
      .then(response => response.json())
      .then(data => setGroups(data));
  }, []);

  return (
    <GroupsContainer>
      <Header>
        <Title>Groups and Communities</Title>
        <FilterButton onClick={() => setFilter(filter === '' ? 'all' : '')}>
          {filter === '' ? 'Show All' : 'Filter'}
        </FilterButton>
      </Header>
      <GroupsGrid>
        {groups.map(group => (
          <GroupCard key={group.id}>
            <GroupImage src={group.imageUrl} alt={group.name} />
            <GroupName>{group.name}</GroupName>
            <GroupDescription>{group.description}</GroupDescription>
            <JoinButton>Join</JoinButton>
          </GroupCard>
        ))}
      </GroupsGrid>
    </GroupsContainer>
  );
};

export default GroupsAndCommunities;