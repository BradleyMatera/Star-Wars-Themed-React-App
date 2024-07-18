import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaPowerOff, FaRegBell, FaUserCircle, FaPalette, FaShieldAlt } from 'react-icons/fa';

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled components
const SettingsContainer = styled.div`
  padding: 20px;
  color: #ffd700;
  background-color: #000;
  border-radius: 10px;
  animation: ${fadeIn} 0.5s ease-out;
  max-width: 1200px;
  margin: 20px auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
`;

const ContentSection = styled.div`
  flex: 2;
  padding: 20px;
`;

const AdSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5rem;
  font-family: 'Star Jedi', sans-serif;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SettingItem = styled.div`
  margin-bottom: 20px;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: #333;
    padding-left: 10px;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const Button = styled.button`
  background-color: #ffd700;
  color: #000;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  &:hover {
    background-color: #ffc700;
  }
`;

const Icon = styled(FaPowerOff)`
  margin-right: 10px;
`;

const ImagePlaceholder = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const AdCard = styled.div`
  background-color: #2c3e50;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  color: #ffffff;
  text-align: center;
  padding: 10px;
  width: 90%;
  max-width: 400px;
`;

const AdImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: cover;
`;

const AdTitle = styled.h3`
  color: #FFD700;
  margin: 10px 0;
`;

const AdSubtitle = styled.p`
  color: #aaaaaa;
`;

const Settings = () => {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState('');
  const [ads, setAds] = useState([]);

  // Fetch Star Wars related image from Unsplash
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
          params: { query: 'Star Wars', per_page: 1 },
          headers: {
            Authorization: `Client-ID tYqbodUOR0MV7sAbu0MWu0YMDdMg8ZRay6CndTSHzKA`
          }
        });
        if (response.data.results.length > 0) {
          setImageUrl(response.data.results[0].urls.small);
        }
      } catch (error) {
        console.error('Error fetching image from Unsplash:', error);
      }
    };

    const fetchAds = async () => {
      const adQueries = ['Sith', 'Stormtrooper', 'Tatooine', 'Jedi', 'Death Star'];
      const adPromises = adQueries.map(query =>
        axios.get('https://api.unsplash.com/search/photos', {
          params: { query, per_page: 1 },
          headers: {
            Authorization: `Client-ID tYqbodUOR0MV7sAbu0MWu0YMDdMg8ZRay6CndTSHzKA`
          }
        })
      );

      try {
        const adResponses = await Promise.all(adPromises);
        const adsData = adResponses.map((response, index) => ({
          image: response.data.results[0]?.urls.small || 'https://via.placeholder.com/200',
          title: `Ad ${index + 1}`,
          subtitle: `Join the ${adQueries[index]} program now!`
        }));
        setAds(adsData);
      } catch (error) {
        console.error('Error fetching ads from Unsplash:', error);
      }
    };

    fetchImage();
    fetchAds();
  }, []);

  const handleLogout = () => {
    // Perform logout operations here
    navigate('/newsfeed');
  };

  return (
    <SettingsContainer>
      <ContentSection>
        <Header>Galactic Settings</Header>
        
        <Section>
          <SectionTitle><FaUserCircle />Profile Settings</SectionTitle>
          <SettingItem>
            <h3>Profile Picture</h3>
            {imageUrl ? <ImagePlaceholder src={imageUrl} alt="Profile Placeholder" /> : <p>Loading...</p>}
          </SettingItem>
        </Section>
        
        <Section>
          <SectionTitle><FaRegBell />Notification Settings</SectionTitle>
          <SettingItem>
            <h3>Droid Maintenance Reminders</h3>
            <Checkbox type="checkbox" /> Enable
          </SettingItem>
          <SettingItem>
            <h3>Hologram Quality Notifications</h3>
            <Checkbox type="checkbox" /> Enable
          </SettingItem>
        </Section>
        
        <Section>
          <SectionTitle><FaPalette />Display Settings</SectionTitle>
          <SettingItem>
            <h3>Hologram Quality</h3>
            <Select>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </Select>
          </SettingItem>
        </Section>

        <Section>
          <SectionTitle><FaShieldAlt />Security Settings</SectionTitle>
          <SettingItem>
            <h3>Enable Two-Factor Authentication</h3>
            <Checkbox type="checkbox" /> Enable
          </SettingItem>
        </Section>
        
        <Button onClick={handleLogout}>
          <Icon />Return to Outer Rim
        </Button>
      </ContentSection>

      <AdSection>
        {ads.map((ad, index) => (
          <AdCard key={index}>
            <AdImage src={ad.image} alt={`Ad ${index + 1}`} />
            <AdTitle>{ad.title}</AdTitle>
            <AdSubtitle>{ad.subtitle}</AdSubtitle>
          </AdCard>
        ))}
      </AdSection>
    </SettingsContainer>
  );
};

export default Settings;