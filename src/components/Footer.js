// Importing necessary libraries and components
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import styled from 'styled-components';

// Defining styled components for the footer layout and styling
// FooterContainer: Main container for the footer
const FooterContainer = styled.footer`
  background: ${props => props.background || 'linear-gradient(to right, #FF0000, #0000FF)'}; // Default gradient background
  color: ${props => props.color || '#fff'}; // Default text color
  padding: 40px 20px 20px; // Padding for spacing
  font-family: 'helvetica neue', helvetica, arial, sans-serif; // Font styling
`;

// Content: Wrapper for the footer content
const Content = styled.div`
  display: flex; // Flexbox for layout
  flex-wrap: wrap; // Wrap content for responsiveness
  justify-content: space-between; // Space between sections
  max-width: 1200px; // Maximum width for centering
  margin: 0 auto; // Center content
`;

// Section: Each section in the footer
const Section = styled.div`
  flex-basis: 22%; // Base width for each section
  margin-bottom: 20px; // Spacing between sections
`;

// SectionTitle: Title for each footer section
const SectionTitle = styled.h3`
  font-size: 18px; // Font size for title
  margin-bottom: 15px; // Spacing below the title
`;

// SectionText: Text within each footer section
const SectionText = styled.p`
  font-size: 14px; // Font size for text
  line-height: 1.5; // Line height for readability
`;

// LinkList: Wrapper for list of links
const LinkList = styled.ul`
  list-style: none; // Remove default list styling
  padding: 0; // Remove default padding
`;

// LinkItem: Each item in the list of links
const LinkItem = styled.li`
  margin-bottom: 10px; // Spacing between link items
`;

// Link: Styled link component
const Link = styled.a`
  color: ${props => props.linkColor || '#fff'}; // Default link color
  text-decoration: none; // Remove default underline
  font-size: 14px; // Font size for links
  line-height: 1.8; // Line height for readability
  &:hover {
    text-decoration: underline; // Underline on hover
  }
`;

// SocialIcons: Wrapper for social media icons
const SocialIcons = styled.div`
  display: flex; // Flexbox for layout
`;

// IconWrapper: Wrapper for each icon
const IconWrapper = styled.div`
  font-size: 20px; // Icon size
  margin-right: 15px; // Spacing between icons
  cursor: pointer; // Pointer cursor on hover
`;

// BottomBar: Bottom section of the footer
const BottomBar = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1); // Top border
  margin-top: 20px; // Margin above the bottom bar
  padding-top: 20px; // Padding inside the bottom bar
  text-align: center; // Center text
`;

// Copyright: Styled component for the copyright text
const Copyright = styled.p`
  font-size: 14px; // Font size for copyright text
`;

// Defining the Footer functional component
// This component will be used in App.js as the footer of the application
const Footer = ({ background, color, linkColor }) => {
  return (
    // The main container for the footer, using styled-components for styling
    <FooterContainer background={background} color={color}>
      <Content>
        {/* Each Section represents a part of the footer */}
        <Section>
          <SectionTitle>About Us</SectionTitle>
          <SectionText>We are dedicated to providing galactic domination solutions for your empire's needs.</SectionText>
        </Section>
        <Section>
          <SectionTitle>Quick Links</SectionTitle>
          <LinkList>
            <LinkItem><Link href="/terms" linkColor={linkColor}>Terms of the Dark Side</Link></LinkItem>
            <LinkItem><Link href="/privacy" linkColor={linkColor}>Privacy Policy (We See Everything)</Link></LinkItem>
            <LinkItem><Link href="/faq" linkColor={linkColor}>Imperial FAQ</Link></LinkItem>
          </LinkList>
        </Section>
        <Section>
          <SectionTitle>Contact Us</SectionTitle>
          <SectionText>Email: emperor@darkside.com</SectionText>
          <SectionText>Phone: (666) 666-6666</SectionText>
        </Section>
        <Section>
          <SectionTitle>Follow Us</SectionTitle>
          <SocialIcons>
            {/* Wrapping each icon with IconWrapper styled-component for styling and spacing */}
            <IconWrapper><FaFacebookF /></IconWrapper>
            <IconWrapper><FaTwitter /></IconWrapper>
            <IconWrapper><FaLinkedinIn /></IconWrapper>
            <IconWrapper><FaInstagram /></IconWrapper>
          </SocialIcons>
        </Section>
      </Content>
      <BottomBar>
        <Copyright>&copy; 2024 Sith Enterprises. All rights reserved.</Copyright>
      </BottomBar>
    </FooterContainer>
  );
};

// Exporting the Footer component for use in other parts of the application
// This will be included in App.js as the footer section of the app
export default Footer;
