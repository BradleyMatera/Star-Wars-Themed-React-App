// Importing necessary libraries and components
// React is a JavaScript library for building user interfaces
// useState and useEffect are hooks provided by React for state management and side effects
import React, { useState, useEffect } from 'react';
// Importing mapbox-gl to render interactive maps
import mapboxgl from 'mapbox-gl';
// Importing Mapbox CSS for proper map styling
import 'mapbox-gl/dist/mapbox-gl.css'; 

// Importing styled components for the EventsPage layout and styling
import {
  EventsContainer,
  Sidebar,
  MainContent,
  EventCard,
  EventDetails,
  EventImage,
  MapContainer,
  FilterContainer,
  FilterLabel,
  DateInput,
} from '../styles/EventsPageStyledComponent';

// Mapbox access token for API authentication
mapboxgl.accessToken = 'pk.eyJ1IjoiZnNicmFuZG9uYnJvd24iLCJhIjoiY2t1Z2I5a3I4MDA2ODJucXQ0bGw2a2FtYSJ9.9a7D_ZISjezOIdhySMDzfA';

// Placeholder events data
// This is static data for demonstration purposes
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
  // Using useState to manage events data and filter date
  const [events] = useState(eventsData); // Use static data directly
  const [filterDate, setFilterDate] = useState('');

  // Using useEffect to initialize the map when the component mounts
  useEffect(() => {
    // Initialize the map
    const map = new mapboxgl.Map({
      container: 'mapContainer', // HTML container ID
      style: 'mapbox://styles/mapbox/streets-v11', // Mapbox style
      center: [-74.5, 40], // Initial map center [lng, lat]
      zoom: 2, // Initial map zoom level
    });

    // Add markers for each event
    events.forEach(event => {
      new mapboxgl.Marker()
        .setLngLat(event.location) // Set marker at event location
        .setPopup(new mapboxgl.Popup({ offset: 25 }).setText(event.name)) // Add a popup with event name
        .addTo(map); // Add marker to map
    });

    // Clean up on component unmount
    return () => map.remove();
  }, [events]);

  // Handler for filter date change
  const handleFilterChange = (e) => {
    setFilterDate(e.target.value);
  };

  // Filter events based on selected date
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