import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link for styled components

// Styled components for navigation
export const NavWrapper = styled.nav`
  position: fixed; // Fixing the navigation to the left side
  top: 60px; // Positioning below the header
  left: ${props => (props.$isMenuOpen ? '0' : '-240px')}; // Sliding menu in and out
  width: 240px; // Width of the navigation
  height: calc(100vh - 60px); // Full height minus header height
  background-color: ${props => props.$backgroundColor || '#000'}; // Dynamic background color
  border-top-right-radius: 15px; // Rounded top right corner
  border-bottom-right-radius: 15px; // Rounded bottom right corner
  transition: left 0.3s ease-in-out; // Smooth transition for sliding
  z-index: 1000; // Ensure it stays on top
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5); // Adding shadow for depth
`;

export const NavList = styled.ul`
  list-style-type: none; // Removing default list styles
  padding: 20px 0; // Padding for spacing
  margin: 0; // Removing default margin
`;

export const NavItem = styled.li`
  padding: 10px 20px; // Padding for each navigation item
  transition: all 0.3s ease-out;
  &:hover {
    background-color: #333;
    padding-left: 10px;
  }
`;

export const NavLink = styled(Link)`
  display: flex; // Flexbox for layout
  align-items: center; // Centering items vertically
  color: ${props => props.$linkColor || '#ffd700'}; // Dynamic color for the links
  text-decoration: none; // Removing underline
  font-size: 16px; // Font size for the links
  &:hover {
    color: ${props => props.$hoverColor || '#ff4500'}; // Hover color for the links
  }
`;

export const IconWrapper = styled.span`
  margin-right: 10px; // Margin for spacing between icon and text
  font-size: 1.5rem;
`;

export const HamburgerButton = styled.button`
  position: fixed; // Fixing the button to the top left
  top: 70px; // Positioning below the header
  left: 10px; // Positioning to the left
  z-index: 1001; // Ensure it stays on top of the navigation
  background: none; // No background
  border: none; // No border
  font-size: 24px; // Font size for the icon
  cursor: pointer; // Pointer cursor on hover
  color: ${props => props.$buttonColor || '#ffd700'}; // Dynamic color for the button
`;