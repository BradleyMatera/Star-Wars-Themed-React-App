import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const EventsContainer = styled.div`
  padding: 20px;
  color: #ffd700;
  background-color: #000;
  border-radius: 10px;
`;

const Event = styled.div`
  background-color: #1c1c1c;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events data from the API
    const fetchEvents = async () => {
      // Placeholder data, replace with actual API calls
      const eventsData = [
        { id: 1, name: "Galactic Senate Meeting", date: "2024-07-01", description: "Annual meeting of the Galactic Senate." },
        { id: 2, name: "Jedi Training Session", date: "2024-07-10", description: "Training session for new Jedi recruits." }
      ];
      setEvents(eventsData);
    };
    fetchEvents();
  }, []);

  return (
    <EventsContainer>
      <h1>Events</h1>
      {events.map(event => (
        <Event key={event.id}>
          <h2>{event.name}</h2>
          <p>Date: {event.date}</p>
          <p>{event.description}</p>
        </Event>
      ))}
    </EventsContainer>
  );
};

export default EventsPage;