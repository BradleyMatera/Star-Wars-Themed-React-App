# Imperial Network Application

## Overview

This application is a mock Star Wars-themed social network platform called "Imperial Network." It allows users to interact with various features like profiles, messages, newsfeeds, groups, events, and settings. The app demonstrates the usage of React.js, React Router, Hooks, styled-components, and chart libraries.

## Objectives & Outcomes

Successful completion of this activity will show that you can:

- Style the application using CSS-in-JS
- Add React Router library
- Allow users to change views
- Create a custom navigation
- Use React Hooks
- Understand the concepts of useState and useEffect


### Hooks - Implementing React Hooks

- **useState**: Used extensively to manage state in functional components.
- **useEffect**: Used for fetching data from APIs and handling side effects.

### Navigation - React Router

- **Custom Navigation**: Created a custom navigation bar using React Router.
- **Routing**: Implemented routes for Dashboard, Newsfeed, Messages, Settings, Profile, Groups, and Events pages.

### Chart Libraries - Add Recharts to your application

- **Recharts**: Used to display data visualizations on the Dashboard view.

### Styling your application

- **Styled Components**: Used styled-components to style each component professionally.

## Detailed Implementation

## Criteria Checklist

### React Hooks

- **Implemented React Hooks**: Used `useState` and `useEffect` to manage state and side effects.

### useState

- **State Management**: Managed state for posts, user stats, ad images, and characters.

  ```javascript
  const [posts, setPosts] = useState([]);
  ```

### useEffect

- **Side Effects**: Used `useEffect` to fetch Star Wars characters and update state.

  ```javascript
  useEffect(() => {
    fetchData();
  }, []);
  ```

### React Router

- **Routing**: Added routing to navigate between different views: Dashboard, Newsfeed, Messages, Settings, Profile, Groups, and Events.

  ```javascript
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/newsfeed" element={<Newsfeed />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/groups" element={<Groups />} />
      <Route path="/events" element={<Events />} />
    </Routes>
  </Router>
  ```

### CSS-in-JS

- **Styled Components**: Styled the application using styled-components.

  ```javascript
  const HeaderWrapper = styled.header`
    background: linear-gradient(to right, #FF0000, #0000FF);
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  ```

### Chart Libraries

- **Data Visualization**: Integrated Recharts to display charts on the Dashboard view.

  ```javascript
  import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={characterChartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="height" fill="#8884d8" />
    </BarChart>
  </ResponsiveContainer>
  ```

## Features

1. **Home**
2. **Dashboard**
3. **Newsfeed**
4. **Messages**
5. **Settings**
6. **Profile Pages**
7. **Groups and Communities**
8. **Events**

### Views/Pages

- **Functional Components**: Created new views for Dashboard, Newsfeed, Messages, Settings, Profile, Groups, and Events.
- **Titles**: Added titles for each view.

### Custom Navigation

- **Navigation Component**: Added a custom navigation component using React Router.

  ```javascript
  <NavLink to="/dashboard">Dashboard</NavLink>
  <NavLink to="/newsfeed">Newsfeed</NavLink>
  <NavLink to="/messages">Messages</NavLink>
  <NavLink to="/settings">Settings</NavLink>
  <NavLink to="/profile">Profile</NavLink>
  <NavLink to="/groups">Groups</NavLink>
  <NavLink to="/events">Events</NavLink>
  ```

### Profile Pages

- **Detailed Profiles**: Created profile pages with user details, stats, and recent activity.

### Groups and Communities

- **Groups**: Added functionality to create and join groups based on common interests like planets, starships, or factions.

### Events

- **Event Management**: Integrated an event management system for scheduling and joining events.

## Additional Resources

- **Styled Components**: [styled-components](https://styled-components.com/)
- **React Router**: [react-router](https://reactrouter.com/)
- **Recharts**: [recharts](https://recharts.org/en-US/)
- **Star Wars API**: [swapi.dev](https://swapi.dev/)
- **Unsplash API**: [unsplash.com](https://unsplash.com/developers)

## Implementation Details

### Home

- Managed posts, ad images, and user stats.
- Used styled-components for layout and styling.
- Implemented functions to handle adding, editing, and deleting posts.

### Dashboard

- Displayed character and planet data using Recharts.
- Styled the dashboard using styled-components.

### Newsfeed

- Fetched and displayed Star Wars-themed news articles.
- Styled the newsfeed using styled-components.

### Messages

- Fetched and displayed messages from Star Wars characters.
- Used Unsplash API to fetch related images.
- Styled the messages using styled-components.

### Settings

- Added settings options for hologram quality, droid maintenance reminders, and profile picture.
- Integrated Unsplash API for profile picture.
- Styled the settings page using styled-components.

### Navigation

- Created a responsive navigation component using styled-components.
- Added links to all views: Home, Dashboard, Newsfeed, Messages, Settings, Profile, Groups, and Events.

### Header

- Added a search bar, notifications, user profile dropdown, and settings.
- Styled the header using styled-components.

### Footer

- Added sections for About Us, Quick Links, Contact Us, and Follow Us.
- Styled the footer using styled-components.

## APIs Used

- **Star Wars API**: Provides data for Star Wars characters, planets, and other entities.
  - [SWAPI](https://swapi.dev/)
- **Unsplash API**: Provides images related to Star Wars.
  - [Unsplash API](https://unsplash.com/developers)

## Getting Started

1. **Clone the Repository**:

```
git clone https://github.com/your-repo/imperial-network.git
```

2. **Install Dependencies**:
   ```
   npm install
   ```
3. **Start the Application**:
   ```
   npm start
   ```
4. **Navigate Through the Application**: Use the navigation bar to switch between different views such as Home, Dashboard, Newsfeed, Messages, Settings, Profile, Groups, and Events.

## Conclusion

The Imperial Network application is a comprehensive example of a modern web application built with React.js. It showcases the use of React Router, Hooks, styled-components, and API integrations to create a dynamic and engaging user experience. 

By following the checklist and criteria, this application demonstrates proficiency in using React.js to create a fully functional Star Wars-themed social network platform.

## Challenges and Decisions

During the development of the Imperial Network application, several challenges arose, particularly with the integration of data visualization libraries and API management. One significant challenge was with using the Recharts library for displaying charts on the Dashboard view.

### Problems with Recharts

1. **Invariant Errors**: When attempting to implement Recharts, the application consistently threw invariant errors related to the `xAxisId` and `yAxisId` properties. These errors indicated that specifying these IDs on graphical components like `Bar` and `Line` required corresponding `XAxis` and `YAxis` components, which were correctly defined but still led to persistent issues. These invariant errors disrupted the rendering process and made the charts unusable.

2. **Canvas Reuse Issues**: Another critical problem encountered was the canvas reuse error. This error message indicated that the canvas element was already in use and must be destroyed before it could be reused. Despite following standard procedures for managing the lifecycle of the charts, this error remained unresolved, leading to further complications in rendering the charts properly.

3. **Compatibility with React Hooks**: Recharts also showed compatibility issues when used in conjunction with React Hooks. The state management and side effects handling, essential for updating chart data dynamically, often led to unexpected behavior and crashes, making it difficult to maintain a stable user experience.

### Decision to Use Chart.js with react-chartjs-2

Given these persistent issues with Recharts, the decision was made to switch to Chart.js, integrated with the `react-chartjs-2` library. This decision was based on several factors:

1. **Stable Integration**: Chart.js provided a more stable integration with React Hooks, allowing for smooth updates and dynamic data handling without the invariant errors experienced with Recharts.

2. **Better Error Handling**: The error handling and debugging process with Chart.js were more straightforward, enabling quicker resolution of issues and a more reliable development workflow.

3. **Flexibility and Customization**: Chart.js offered greater flexibility and customization options for creating diverse and interactive charts, which were crucial for the dynamic and engaging user experience intended for the Dashboard view.

Switching to Chart.js with `react-chartjs-2` resolved the major issues faced with Recharts, allowing for successful implementation of the data visualization features in the Imperial Network application. This decision exemplified the importance of adaptability and finding alternative solutions to overcome technical challenges during the development process.