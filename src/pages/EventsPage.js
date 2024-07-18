import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'; // Import Mapbox CSS

// Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoiZnNicmFuZG9uYnJvd24iLCJhIjoiY2t1Z2I5a3I4MDA2ODJucXQ0bGw2a2FtYSJ9.9a7D_ZISjezOIdhySMDzfA';

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Define styled components for the EventsPage layout
const EventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000;
  color: #ffd700;
  min-height: 100vh;
  padding: 20px;
  animation: ${fadeIn} 0.5s ease-out;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Sidebar = styled.div`
  width: 100%;
  background-color: #1c1c1c;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);

  @media (min-width: 768px) {
    width: 250px;
    margin-bottom: 0;
  }
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const EventCard = styled.div`
  background-color: #1c1c1c;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const EventDetails = styled.div`
  flex: 1;
`;

const EventImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-top: 20px;

  @media (min-width: 768px) {
    width: 150px;
    height: 100px;
    margin-left: 20px;
    margin-top: 0;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FilterLabel = styled.label`
  font-weight: bold;
  color: #ffd700;
`;

const DateInput = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #333;
  color: #ffd700;
`;

// Placeholder events data
const eventsData = [
  {
    id: 1,
    name: "Galactic Senate Meeting",
    date: "2024-07-01",
    description: "Annual meeting of the Galactic Senate.",
    imageUrl: "https://via.placeholder.com/150",
    location: [-74.5, 40], // Example coordinates [lng, lat]
  },
  {
    id: 2,
    name: "Jedi Training Session",
    date: "2024-07-10",
    description: "Training session for new Jedi recruits.",
    imageUrl: "https://via.placeholder.com/150",
    location: [-75.5, 41], // Example coordinates [lng, lat]
  },
  // Add more events as needed
];

// EventsPage component
const EventsPage = () => {
  const [events] = useState(eventsData); // Use static data directly
  const [filterDate, setFilterDate] = useState('');

  useEffect(() => {
    // Initialize the map
    const map = new mapboxgl.Map({
      container: 'mapContainer',
      style: 'mapbox://styles/mapbox/streets-v11', // Use a Mapbox style
      center: [-74.5, 40], // Initial map center [lng, lat]
      zoom: 2, // Initial map zoom level
    });

    // Add markers for each event
    events.forEach(event => {
      new mapboxgl.Marker()
        .setLngLat(event.location)
        .setPopup(new mapboxgl.Popup({ offset: 25 }).setText(event.name))
        .addTo(map);
    });

    // Clean up on component unmount
    return () => map.remove();
  }, [events]);

  const handleFilterChange = (e) => {
    setFilterDate(e.target.value);
  };

  const filteredEvents = filterDate
    ? events.filter(event => event.date === filterDate)
    : events;

  return (
    <EventsContainer>
      <Sidebar>
        <h2>Filter Events</h2>
        <FilterContainer>
          <FilterLabel htmlFor="filterDate">By Date</FilterLabel>
          <DateInput
            type="date"
            id="filterDate"
            value={filterDate}
            onChange={handleFilterChange}
          />
        </FilterContainer>
        {/* Add more filters as needed */}
      </Sidebar>
      <MainContent>
        <h1>Upcoming Events</h1>
        <MapContainer id="mapContainer"></MapContainer>
        {filteredEvents.map(event => (
          <EventCard key={event.id}>
            <EventDetails>
              <h2>{event.name}</h2>
              <p>{event.date}</p>
              <p>{event.description}</p>
            </EventDetails>
            <EventImage src={event.imageUrl} alt={event.name} />
          </EventCard>
        ))}
      </MainContent>
    </EventsContainer>
  );
};

export default EventsPage;
