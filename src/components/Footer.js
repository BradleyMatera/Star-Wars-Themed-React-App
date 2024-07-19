import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import {
  FooterContainer,
  Content,
  Section,
  SectionTitle,
  SectionText,
  LinkList,
  LinkItem,
  StyledLink,
  SocialIcons,
  IconWrapper,
  BottomBar,
  Copyright
} from '../styles/FooterStyledComponents'; // Importing styled components

// Defining the Footer functional component
const Footer = ({ background, color, linkColor }) => {
  return (
    <FooterContainer background={background} color={color}>
      <Content>
        <Section>
          <SectionTitle>About Us</SectionTitle>
          <SectionText>We are dedicated to providing galactic domination solutions for your empire's needs.</SectionText>
        </Section>
        <Section>
          <SectionTitle>Quick Links</SectionTitle>
          <LinkList>
            <LinkItem><StyledLink href="/terms" linkColor={linkColor}>Terms of the Dark Side</StyledLink></LinkItem>
            <LinkItem><StyledLink href="/privacy" linkColor={linkColor}>Privacy Policy (We See Everything)</StyledLink></LinkItem>
            <LinkItem><StyledLink href="/faq" linkColor={linkColor}>Imperial FAQ</StyledLink></LinkItem>
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

export default Footer;