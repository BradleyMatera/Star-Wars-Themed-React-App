import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import styled from 'styled-components';

// Defining styled components for the footer layout and styling
const FooterContainer = styled.footer`
  background: ${props => props.background || 'linear-gradient(to right, #FF0000, #0000FF)'};
  color: ${props => props.color || '#fff'};
  padding: 40px 20px 20px;
  font-family: 'helvetica neue', helvetica, arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Section = styled.div`
  flex-basis: 22%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-basis: 100%;
    text-align: center;
    margin-bottom: 30px;
  }
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 15px;
`;

const SectionText = styled.p`
  font-size: 14px;
  line-height: 1.5;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 10px;
`;

const StyledLink = styled.a`
  color: ${props => props.linkColor || '#fff'};
  text-decoration: none;
  font-size: 14px;
  line-height: 1.8;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const IconWrapper = styled.div`
  font-size: 20px;
  margin-right: 15px;
  cursor: pointer;

  &:hover {
    color: #FFA500;
  }
`;

const BottomBar = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 20px;
  padding-top: 20px;
  text-align: center;
  width: 100%;
`;

const Copyright = styled.p`
  font-size: 14px;
`;

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
