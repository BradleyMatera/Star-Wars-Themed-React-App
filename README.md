# Star Wars Themed React Application

## Overview

This project is a one-page application built using React.js, styled with CSS-in-JS (styled-components). The theme of the application is Star Wars, and it includes various reusable components styled professionally. The project adheres to best practices and conventions discussed in the course.

## Features

- **Button Component**: A reusable button component with primary and secondary styles.
- **Form Component**: A form component for adding posts, including input fields for post title and description.
- **Header Component**: A header component featuring a logo, search bar, and user/settings icons.
- **Left-side Navigation Component**: A navigation component with links to Newsfeed, Messages, and Watch sections.
- **AdCard Component**: An advertisement card component displaying ads with images, titles, and subtitles.
- **PostCard Component**: A post card component for displaying user posts, including avatars, titles, descriptions, comments, and options to edit and delete posts.

## Components

### Button Component

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

## Branch Management

This project uses multiple branches to manage different aspects of the development process:

### Master Branch

The `master` branch contains only the `README.md` file and `.gitignore`. This branch serves as the main branch of the repository, but it does not include the application code. This is to ensure the main branch remains clean and contains only essential information about the project.

### Development Branch (`dev`)

The `dev` branch contains the complete application code. All development work is done on this branch. This includes adding new features, fixing bugs, and making improvements. The `dev` branch is regularly updated with the latest changes.

### Testing Branch

The `testing` branch is used for testing new features and changes before they are merged into the `dev` branch. This branch allows you to ensure that everything works correctly without affecting the main development branch. After thorough testing, changes from the `testing` branch can be merged into the `dev` branch.

## Running the Project

### Running the Development Server

To run the development server, use the following command:

```sh
npm start
```

This will start the development server and open [http://localhost:3000](http://localhost:3000) in your default web browser. The development server automatically reloads the page whenever you make changes to the source files.

### Building for Production

To create a production build of the project, use the following command:

```sh
npm run build
```

This will generate an optimized and minified build of the project in the `build` directory. The production build is ready to be deployed to a web server.

### Serving the Production Build

To serve the production build locally, you can use the `serve` package. First, install `serve` globally if you haven't already:

```sh
npm install -g serve
```

Then, use the following command to serve the production build:

```sh
serve -s build
```

This will serve the production build at [http://localhost:5000](http://localhost:5000).

## Contact

For any queries or issues, contact:
- **Email**: emperor@darkside.com
- **Phone**: (666) 666-6666

---

&copy; 2024 Sith Enterprises. All rights reserved.