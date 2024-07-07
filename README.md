# Star Wars Themed React Application

## Overview

This project is a one-page application built using React.js, styled with CSS-in-JS (styled-components). The theme of the application is Star Wars, and it includes various reusable components styled professionally. The project adheres to best practices and conventions.

## Features

- **Button Component**: A reusable button component with primary and secondary styles.
- **Form Component**: A form component for adding posts, including input fields for post title and description.
- **Header Component**: A header component featuring a logo, search bar, and user/settings icons.
- **Left-side Navigation Component**: A navigation component with links to Newsfeed, Messages, and Watch sections.
- **AdCard Component**: An advertisement card component displaying ads with images, titles, and subtitles.
- **PostCard Component**: A post card component for displaying user posts, including avatars, titles, descriptions, and comments.

## Components

### Button Component

- Dynamic using props (initially) and later refactored to remove props for styling.
- Styled professionally using CSS-in-JS.

### Form Component

- Includes input fields for post title and description.
- Styled with CSS-in-JS and ensures proper functionality.

### Header Component

- Includes a logo, search feature with an icon, and avatar and settings icons (using React Icons).
- Gradient background with responsive and professional styling.

### Left-side Navigation Component

- Includes links to Newsfeed, Messages, and Watch sections.
- Styled with CSS-in-JS, featuring rounded corners and a dark theme.

### AdCard Component

- Displays ads with images, titles, and subtitles.
- Styled professionally using CSS-in-JS.

### PostCard Component

- Includes an avatar, title, description, edit and delete buttons (using React Icons), and the ability to view and add comments.
- Styled professionally using CSS-in-JS.

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

## How to Run the Project

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm start`.
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Development and Production

### Running the Development Server

To run the development server, use the following command:


npm start


This will start the development server and open [http://localhost:3000](http://localhost:3000) in your default web browser. The development server automatically reloads the page whenever you make changes to the source files.

### Building for Production

To create a production build of the project, use the following command:


npm run build


This will generate an optimized and minified build of the project in the `build` directory. The production build is ready to be deployed to a web server.

### Serving the Production Build

To serve the production build locally, you can use the `serve` package. First, install `serve` globally if you haven't already:


npm install -g serve


Then, use the following command to serve the production build:


serve -s build


This will serve the production build at [http://localhost:5000](http://localhost:5000).



## Contact

For any queries or issues, contact:
- **Email**: emperor@darkside.com
- **Phone**: (666) 666-6666

---

&copy; 2024 Sith Enterprises. All rights reserved.