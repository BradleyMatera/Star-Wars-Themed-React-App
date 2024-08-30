import React from 'react';
import { NavWrapper, NavItem } from '../styles/LeftNavigationStyledComponents'; // Correct imports

const LeftNavigation = () => {
  return (
    <NavWrapper>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/profile">Profile</NavItem>
      <NavItem to="/messages">Messages</NavItem>
      {/* Add other navigation items here */}
    </NavWrapper>
  );
};

export default LeftNavigation;
