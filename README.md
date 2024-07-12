# Star Wars Themed React Application

## Overview

This project is a one-page application built using React.js, styled with CSS-in-JS (styled-components). The theme of the application is Star Wars, and it includes various reusable components styled professionally. The project adheres to best practices and conventions.

## Features

- **Button Component**: A reusable button component with primary and secondary styles.
- **Form Component**: A form component for adding posts, including input fields for post title and description.
- **Header Component**: A header component featuring a logo, search bar, user/settings icons, and a header image.
- **Left-side Navigation Component**: A navigation component with links to Newsfeed, Messages, and Watch sections.
- **AdCard Component**: An advertisement card component displaying ads with images, titles, and subtitles.
- **PostCard Component**: A post card component for displaying user posts, including avatars, titles, descriptions, and comments.
- **UserStats Component**: A user statistics component displaying the number of posts, comments, and likes.

## Components

### Button Component

- Dynamic using props to apply primary and secondary styles.
- Styled using CSS-in-JS.

### Form Component

- Includes input fields for post title and description.
- Styled with CSS-in-JS for professional appearance.

### Header Component

- Includes a logo, search feature with an icon, avatar and settings icons (using React Icons), and a header image.
- Gradient background with responsive styling.

### Left-side Navigation Component

- Includes links to Newsfeed, Messages, and Watch sections.
- Styled with CSS-in-JS, featuring rounded corners and a dark theme.

### AdCard Component

- Displays ads with images, titles, and subtitles.
- Styled using CSS-in-JS for a professional look.

### PostCard Component

- Displays avatar, title, description, edit and delete buttons (using React Icons), and the ability to view and add comments.
- Styled using CSS-in-JS.

### UserStats Component

- Displays user statistics including the number of posts, comments, and likes.
- Styled using CSS-in-JS.

## Styling and Craftsmanship

- **CSS-in-JS**: All components are styled using styled-components.
- **Colors**: Custom color palette from Coolors.co.
- **React Icons**: Used to enhance the visual appeal of the components.

## File Setup and Branch Management

1. **Initial Setup**: Used `create-react-app` for the initial setup.
2. **Branch Management**:
    - Master branch contains only a `README.md` file.
    - Development done on the `dev` branch.
    - Final submission on the `01_Components` branch.
    - Further updates and new features on the `02_Application` branch.

## How to Run the Project

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm start`.
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Development and Production

### Running the Development Server

To run the development server, use the following command:

```bash
npm start
```

This will start the development server and open [http://localhost:3000](http://localhost:3000) in your default web browser. The development server automatically reloads the page whenever you make changes to the source files.

### Building for Production

To create a production build of the project, use the following command:

```bash
npm run build
```

This will generate an optimized and minified build of the project in the `build` directory. The production build is ready to be deployed to a web server.

### Serving the Production Build

To serve the production build locally, you can use the `serve` package. First, install `serve` globally if you haven't already:

```bash
npm install -g serve
```

Then, use the following command to serve the production build:

```bash
serve -s build
```

This will serve the production build at [http://localhost:5000](http://localhost:5000).

## Contact

For any queries or issues, contact:
- **Email**: emperor@darkside.com
- **Phone**: (666) 666-6666

---

&copy; 2024 Sith Enterprises. All rights reserved.

## Changes Implemented in 02_Application Branch

1. **Header Image**:
    - Added a header image to the Header component for a more immersive Star Wars theme.

2. **UserStats Component**:
    - Created a new UserStats component to display user statistics (posts, comments, and likes).
    - Included buttons to increment the stats.

3. **PostCard Component**:
    - Redesigned to include avatars, titles, descriptions, edit and delete buttons, and comments.
    - Ensured proper handling of images and state updates.

4. **AdCard Component**:
    - Ensured proper handling of images and dynamic content.
    - Styled for a consistent look and feel.

5. **Button Component**:
    - Enhanced to include primary and secondary styles with dynamic props.
    - Styled using CSS-in-JS for a professional appearance.

6. **Dynamic Color Change**:
    - Implemented in App.js using componentDidMount lifecycle method and setTimeout.
    - Background color changes dynamically after initial render.

7. **State Management in App.js**:
    - Managed state to hold post objects, including avatars, post titles, and descriptions.
    - Implemented add and delete post functionalities using state and methods.
    - Displayed posts from the state using the PostCard component.
    - Updated user statistics based on posts and comments.

## Relevant Articles and Resources

### React Documentation

- [Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx)
- [JavaScript in JSX with Curly Braces](https://react.dev/learn/javascript-in-jsx-with-curly-braces)
- [Your First Component](https://react.dev/learn/your-first-component)
- [Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component)
- [Rules of Hooks](https://react.dev/reference/rules/rules-of-hooks)
- [React useEffect](https://react.dev/reference/react/useEffect)

### FreeCodeCamp Articles

- [React Class Components](https://www.freecodecamp.org/news/react-class-components/)
- [React Lifecycle Methods](https://www.freecodecamp.org/news/react-lifecycle-methods/)
- [Using Hooks in React](https://www.freecodecamp.org/news/an-introduction-to-react-hooks/)
- [React State Management](https://www.freecodecamp.org/news/react-state-management/)

### CodePen

- [React Component Lifecycle](https://codepen.io/gaearon/pen/oWWQNa)
- [Getting Started with React on CodePen](https://forum.freecodecamp.org/t/getting-started-with-react-on-codepen/262689)
- [React State Management](https://codepen.io/lbain/pen/ENpzBZ)