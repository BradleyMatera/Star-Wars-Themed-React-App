# > ⚠️ **DISCLAIMER:** This project is a work in progress. The installation commands and setup process may change as development continues. Please use the commands provided below as a template rather than following then word for word and adjust as necessary for your specific environment and project state as well as the installation directory paths and version and branch names

> 📝 **Note:** Make sure you have Node.js (version 14 or later) and npm installed on your machine before starting the setup process.

## 🌌 Imperial Network Application

## 📚 Table of Contents

- [Overview](#-overview)
- [Objectives & Outcomes](#-objectives--outcomes)
- [Summary of Changes](#-summary-of-changes)
- [Features](#-features)
- [Criteria Checklist](#-criteria-checklist)
- [Challenges and Decisions](#-challenges-and-decisions)
- [Additional Resources](#-additional-resources)
- [Getting Started](#-getting-started)
- [Conclusion](#-conclusion)

## 🌟 Overview

This application is a mock Star Wars-themed social network platform called "Imperial Network." It allows users to interact with various features like profiles, messages, newsfeeds, groups, events, and settings. The app demonstrates the usage of React.js, React Router, Hooks, styled-components, and chart libraries.

## 🎯 Objectives & Outcomes

Successful completion of this activity will show that you can:

- 🎨 Style the application using CSS-in-JS
- 🚀 Add React Router library
- 🔀 Allow users to change views
- 🧭 Create a custom navigation
- 🎣 Use React Hooks
- 🧠 Understand the concepts of `useState` and `useEffect`

## 📝 Summary of Changes

### Detailed Implementation

<details>
<summary>Click to expand</summary>

#### 🎨 CSS-in-JS for Styling

**Styled Components**: Replaced traditional CSS with styled-components across the entire application to promote a uniform and modular styling approach.

```js
const HeaderWrapper = styled.header`
  background: linear-gradient(to right, #FF0000, #0000FF);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
```

#### 🚀 React Router Integration

**Routing**: Implemented React Router to handle navigation between different views: Home, Dashboard, Newsfeed, Messages, Settings, Profile, Groups, and Events.

```js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/newsfeed" element={<Newsfeed />} />
    <Route path="/messages" element={<Messages />} />
    <Route path="/settings" element={<Settings />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/groupscommunities" element={<Groups />} />
    <Route path="/events" element={<Events />} />
  </Routes>
</Router>
```

#### 🎣 React Hooks Implementation

**useState**: Used extensively to manage state in functional components.

```js
const [posts, setPosts] = useState([]);
```

**useEffect**: Used for fetching data from APIs and handling side effects.

```js
useEffect(() => {
  fetchData();
}, []);
```

#### 📊 Data Visualization with Chart.js and react-chartjs-2

**Charts**: Integrated Chart.js with react-chartjs-2 to display character heights and planet populations on the Dashboard view.

```js
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const characterHeightData = {
  labels: characterChartData.map(char => char.name),
  datasets: [
    {
      label: 'Character Heights',
      data: characterChartData.map(char => char.height),
      backgroundColor: '#8884d8',
    },
  ],
};

const planetPopulationData = {
  labels: planetChartData.map(planet => planet.name),
  datasets: [
    {
      label: 'Planet Populations',
      data: planetChartData.map(planet => planet.population),
      borderColor: '#82ca9d',
      fill: false,
    },
  ],
};
```

</details>

### 🔄 Unified Approach

The refactor focused on unifying the codebase by:

- ✨ **Consistent Styling**: Using styled-components across all components ensured consistent and modular styling.
- 🧩 **Functional Components and Hooks**: Adopting functional components and React Hooks (`useState`, `useEffect`) provided a modern approach to state management and side effects.
- 🔁 **Reusable Components**: Creating reusable components (like AdCard, PostCard, Button) helped maintain a clean and DRY (Don't Repeat Yourself) codebase.
- 📦 **Modular Design**: Ensuring each component had a single responsibility and was easy to maintain and extend.

## 🚀 Features

- 🏠 **Home**
- 📊 **Dashboard**
- 📰 **Newsfeed**
- 💬 **Messages**
- ⚙️ **Settings**
- 👤 **Profile Pages**
- 👥 **Groups and Communities**
- 📅 **Events**

### 🖼️ Views/Pages

**Functional Components**: Created new views for Dashboard, Newsfeed, Messages, Settings, Profile, Groups, and Events.
**Titles**: Added titles for each view.

### 🧭 Custom Navigation

**Navigation Component**: Added a custom navigation component using React Router.

```js
<NavLink to="/dashboard">Dashboard</NavLink>
<NavLink to="/newsfeed">Newsfeed</NavLink>
<NavLink to="/messages">Messages</NavLink>
<NavLink to="/settings">Settings</NavLink>
<NavLink to="/profile">Profile</NavLink>
<NavLink to="/groupscommunities">Groups</NavLink>
<NavLink to="/events">Events</NavLink>
```

### 👤 Profile Pages

**Detailed Profiles**: Created profile pages with user details, stats, and recent activity.

### 👥 Groups and Communities

**Groups**: Added functionality to create and join groups based on common interests like planets, starships, or factions.

### 📅 Events

**Event Management**: Integrated an event management system for scheduling and joining events.

## ✅ Criteria Checklist

### React Hooks

**Implemented React Hooks**: Used `useState` and `useEffect` to manage state and side effects.

- **useState**
  - State Management: Managed state for posts, user stats, ad images, and characters.

  ```js
  const [posts, setPosts] = useState([]);
  ```

- **useEffect**
  - Side Effects: Used `useEffect` to fetch Star Wars characters and update state.

  ```js
  useEffect(() => {
    fetchData();
  }, []);
  ```

### React Router

**Routing**: Added routing to navigate between different views: Dashboard, Newsfeed, Messages, Settings, Profile, Groups, and Events.

### CSS-in-JS

**Styled Components**: Styled the application using styled-components.

### Chart Libraries

**Data Visualization**: Integrated Chart.js with react-chartjs-2 to display charts on the Dashboard view.

## 🧠 Challenges and Decisions

During the development of the Imperial Network application, several challenges arose, particularly with the integration of data visualization libraries and API management. One significant challenge was with using the Recharts library for displaying charts on the Dashboard view.

### 🚫 Problems with Recharts

- **Invariant Errors**: Persistent issues with `xAxisId` and `yAxisId` properties.
- **Canvas Reuse Issues**: Difficulties in managing the lifecycle of charts.
- **Compatibility with React Hooks**: Unexpected behavior and crashes when updating chart data dynamically.

### ✅ Decision to Use Chart.js with react-chartjs-2

Given these persistent issues with Recharts, we switched to Chart.js with react-chartjs-2, which provided:

- 🔄 **Stable Integration**: Smooth updates and dynamic data handling.
- 🛠️ **Better Error Handling**: More straightforward debugging and issue resolution.
- 🎨 **Flexibility and Customization**: Greater options for creating interactive charts.

This decision exemplified the importance of adaptability and finding alternative solutions to overcome technical challenges during the development process.

## 📚 Additional Resources

- 🎨 **Styled Components**: [styled-components](https://styled-components.com/)
- 🚀 **React Router**: [react-router](https://reactrouter.com/)
- 📊 **Chart.js**: [chart.js](https://www.chartjs.org/)
- 📈 **react-chartjs-2**: [react-chartjs-2](https://react-chartjs-2.js.org/)
- 🌌 **Star Wars API**: [swapi.dev](https://swapi.dev/)
- 🖼️ **Unsplash API**: [unsplash.com](https://unsplash.com/)

## 🚀 Getting Started

### Clone the Repository

```sh
git clone https://github.com/your-repo/imperial-network.git
```

### Install Dependencies

```sh
npm install
```

### Start the Application

```sh
npm start
```

### Navigate Through the Application

Use the navigation bar to switch between different views such as Home, Dashboard, Newsfeed, Messages, Settings, Profile, Groups, and Events.

## 🎉 Conclusion

The Imperial Network application is a comprehensive example of a modern web application built with React.js. It showcases the use of React Router, Hooks, styled-components, and API integrations to create a dynamic and engaging user experience.

By following the checklist and criteria, this application demonstrates proficiency in using React.js to create a fully functional Star Wars-themed social network platform. The decision to switch from Recharts to Chart.js with react-chartjs-2 resolved major issues, providing a stable and flexible solution for data visualization. The consistent use of styled-components ensures cohesive design, while React Router and Hooks enable efficient navigation and state management. This project serves as a robust example of modern web development practices.