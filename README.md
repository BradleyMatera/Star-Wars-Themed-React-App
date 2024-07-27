### ⚠️ **DISCLAIMER:** This project is a work in progress. The installation commands and setup process may change as development continues.

> 📝 **Note:** Please use the commands provided below as a template rather than following them word for word. Adjust as necessary for your specific environment, project state, installation directory paths, and version and branch names.

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

The Imperial Network application is a mock Star Wars-themed social network platform. It allows users to interact with various features like profiles, messages, newsfeeds, groups, events, and settings. The app demonstrates the usage of React.js, React Router, Hooks, styled-components, and chart libraries.

## 🎯 Objectives & Outcomes

Successful completion of this activity will show that you can:

- 🎨 Style the application using CSS-in-JS
- 🚀 Add the React Router library
- 🔀 Allow users to change views
- 🧭 Create custom navigation
- 🎣 Use React Hooks
- 🧠 Understand the concepts of `useState` and `useEffect`

## 📝 Updates

<details>
<summary>7/27/24 - Week 4.3: User Profile</summary>
<p>
  This week, we focused on implementing a user profile view using React Hooks and the Random User Generator API. Key updates include:

  - **User Profile Component**: Created a new user profile component with fields for first name, last name, street, city, state, postcode, username, password, phone, and picture.
  - **API Integration**: Utilized `useEffect` and `fetch` with `async/await` to retrieve data from the Random User Generator API.
  - **New Feature**: Added a notification feature to enhance user experience.
  - **Styling**: All components styled using CSS-in-JS for a cohesive look.
  - **Comments**: Detailed comments added throughout the code to explain React Hooks, fetch methods, and other functionalities.
</p>
</details>

<details>
<summary>7/19/24 - Unified Approach</summary>
<p>
  This update includes significant refactoring to unify the codebase:

  - **Styled Components**: Migrated to styled-components for consistent styling across the app.
  - **Anime.js**: Added for enhanced UI animations.
  - **useAnimationFrame Hook**: Used for background color transitions.
  - **Error Fixes**: Resolved ESLint warnings and improved component usability.
</p>
</details>

<details>
<summary>7/14/24 - Initial Implementation</summary>
<p>
  Initial setup and implementation of the Imperial Network application, focusing on:

  - **React Router**: Implemented for navigation between views.
  - **React Hooks**: Extensive use of `useState` and `useEffect`.
  - **Chart.js and react-chartjs-2**: Integrated for data visualization.
  - **CSS-in-JS**: Adopted for styling.
</p>
</details>

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
