import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: ${props => props.background || 'linear-gradient(to right, #FF0000, #0000FF)'};
  color: ${props => props.color || '#fff'};
  padding: 40px 20px 20px;
  font-family: 'helvetica neue', helvetica, arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
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

export const Section = styled.div`
  flex-basis: 22%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-basis: 100%;
    text-align: center;
    margin-bottom: 30px;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 15px;
`;

export const SectionText = styled.p`
  font-size: 14px;
  line-height: 1.5;
`;

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const LinkItem = styled.li`
  margin-bottom: 10px;
`;

export const StyledLink = styled.a`
  color: ${props => props.linkColor || '#fff'};
  text-decoration: none;
  font-size: 14px;
  line-height: 1.8;

  &:hover {
    text-decoration: underline;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const IconWrapper = styled.div`
  font-size: 20px;
  margin-right: 15px;
  cursor: pointer;

  &:hover {
    color: #FFA500;
  }
`;

export const BottomBar = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 20px;
  padding-top: 20px;
  text-align: center;
  width: 100%;
`;

export const Copyright = styled.p`
  font-size: 14px;
`;