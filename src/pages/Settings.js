import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaRegBell, FaUserCircle, FaPalette, FaShieldAlt } from 'react-icons/fa';
import {
  SettingsContainer,
  ContentSection,
  AdSection,
  Header,
  Section,
  SectionTitle,
  SettingItem,
  Select,
  Checkbox,
  Button,
  Icon,
  ImagePlaceholder,
  AdCard,
  AdImage,
  AdTitle,
  AdSubtitle
} from '../styles/SettingsStyledComponents'; // Importing all styled components

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