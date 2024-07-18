import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled components for the Groups and Communities page
const GroupsContainer = styled.div`
  padding: 20px;
  color: #ffd700;
  background-color: #000;
  border-radius: 10px;
`;

const Group = styled.div`
  background-color: #1c1c1c;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

// Define the GroupsAndCommunities component
const GroupsAndCommunities = () => {
  // useState hook to manage groups data
  const [groups, setGroups] = useState([]);

  // useEffect hook to fetch groups data from an API when the component mounts
  useEffect(() => {
    const fetchGroups = async () => {
      // Placeholder data, replace with actual API calls
      const groupsData = [
        { id: 1, name: "Rebel Pilots", description: "Group for Rebel Pilots to share strategies." },
        { id: 2, name: "Sith Lords", description: "Discussion forum for Sith Lords." }
      ];
      setGroups(groupsData);
    };

    fetchGroups();
  }, []); // The effect runs only once when the component mounts

  return (
    <GroupsContainer>
      <h1>Groups and Communities</h1>
      {groups.map(group => (
        <Group key={group.id}>
          <h2>{group.name}</h2>
          <p>{group.description}</p>
        </Group>
      ))}
    </GroupsContainer>
  );
};

export default GroupsAndCommunities;
