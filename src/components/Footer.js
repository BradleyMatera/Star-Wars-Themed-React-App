import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import styled from 'styled-components';

const FooterContainer = styled.footer({
   background: 'linear-gradient(to right, #FF0000, #0000FF)',
  color: '#fff',
  padding: '40px 20px 20px',
  fontFamily: "'helvetica neue', helvetica, arial, sans-serif",
});

const Content = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  maxWidth: '1200px',
  margin: '0 auto',
});

const Section = styled.div({
  flexBasis: '22%',
  marginBottom: '20px',
});

const SectionTitle = styled.h3({
  fontSize: '18px',
  marginBottom: '15px',
});

const SectionText = styled.p({
  fontSize: '14px',
  lineHeight: '1.5',
});

const LinkList = styled.ul({
  listStyle: 'none',
  padding: 0,
});

const LinkItem = styled.li({
  marginBottom: '10px',
});

const Link = styled.a({
  color: '#fff',
  textDecoration: 'none',
  fontSize: '14px',
  lineHeight: '1.8',

  '&:hover': {
    textDecoration: 'underline',
  },
});

const SocialIcons = styled.div({
  display: 'flex',
});

const IconWrapper = styled.div({
  fontSize: '20px',
  marginRight: '15px',
  cursor: 'pointer',
});

const BottomBar = styled.div({
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  marginTop: '20px',
  paddingTop: '20px',
  textAlign: 'center',
});

const Copyright = styled.p({
  fontSize: '14px',
});

const Footer = () => {
  return (
    <FooterContainer>
      <Content>
        <Section>
          <SectionTitle>About Us</SectionTitle>
          <SectionText>We are dedicated to providing galactic domination solutions for your empire's needs.</SectionText>
        </Section>
        <Section>
          <SectionTitle>Quick Links</SectionTitle>
          <LinkList>
            <LinkItem><Link href="/terms">Terms of the Dark Side</Link></LinkItem>
            <LinkItem><Link href="/privacy">Privacy Policy (We See Everything)</Link></LinkItem>
            <LinkItem><Link href="/faq">Imperial FAQ</Link></LinkItem>
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