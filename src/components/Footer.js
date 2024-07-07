import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #2980b9, #2c3e50);
  color: #fff;
  padding: 40px 20px 20px;
  font-family: 'helvetica neue', helvetica, arial, sans-serif;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.div`
  flex-basis: 22%;
  margin-bottom: 20px;
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

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  line-height: 1.8;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  display: flex;
`;

const IconWrapper = styled.div`
  font-size: 20px;
  margin-right: 15px;
  cursor: pointer;
`;

const BottomBar = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 20px;
  padding-top: 20px;
  text-align: center;
`;

const Copyright = styled.p`
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Content>
        <Section>
          <SectionTitle>About Us</SectionTitle>
          <SectionText>TempleChat in located in a galaxy far far away.</SectionText>
        </Section>
        <Section>
          <SectionTitle>Quick Links</SectionTitle>
          <LinkList>
            <LinkItem><Link href="/terms">Terms of Service</Link></LinkItem>
            <LinkItem><Link href="/privacy">Privacy Policy</Link></LinkItem>
            <LinkItem><Link href="/faq">FAQ</Link></LinkItem>
          </LinkList>
        </Section>
        <Section>
          <SectionTitle>Contact Us</SectionTitle>
          <SectionText>Email: info@example.com</SectionText>
          <SectionText>Phone: (123) 456-7890</SectionText>
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
        <Copyright>&copy; 2024 Your Company Name. All rights reserved.</Copyright>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;