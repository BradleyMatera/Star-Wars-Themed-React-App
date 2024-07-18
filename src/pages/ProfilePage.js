import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';

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
const ProfileContainer = styled.div`
  padding: 20px;
  color: #ffd700;
  background-color: #000;
  border-radius: 10px;
  animation: ${fadeIn} 0.5s ease-out;
  max-width: 1000px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Name = styled.h1`
  margin: 0;
  color: #ffd700;
`;

const Stats = styled.p`
  margin: 5px 0;
  color: #aaa;
`;

const ProfileForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
  color: #ffd700;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 1rem;
  background-color: #333;
  color: #ffd700;
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 1rem;
  background-color: #333;
  color: #ffd700;
`;

const Button = styled.button`
  grid-column: span 2;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #45a049;
  }
`;

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    phone: '',
    address: '',
    nation: '',
    gender: '',
    language: '',
    dob: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    google: '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileResponse = await axios.get('https://swapi.dev/api/people/1/');
        const profileData = {
          name: profileResponse.data.name,
          avatar: 'https://via.placeholder.com/100', // Replace with actual avatar if available
          height: `${profileResponse.data.height} cm`,
          mass: `${profileResponse.data.mass} kg`,
        };

        setProfile(profileData);
      } catch (error) {
        console.error('Failed to fetch profile data:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <ProfileContainer>
      {profile ? (
        <>
          <ProfileHeader>
            <Avatar src={profile.avatar} alt={profile.name} />
            <ProfileInfo>
              <Name>{profile.name}</Name>
              <Stats>Height: {profile.height}</Stats>
              <Stats>Mass: {profile.mass}</Stats>
            </ProfileInfo>
          </ProfileHeader>
          <ProfileForm onSubmit={handleSubmit}>
            <FormControl>
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" value={formData.password} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <Label htmlFor="address">Address</Label>
              <Input id="address" name="address" value={formData.address} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <Label htmlFor="nation">Nation</Label>
              <Input id="nation" name="nation" value={formData.nation} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <Label htmlFor="gender">Gender</Label>
              <Select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Select>
            </FormControl>
            <FormControl>
              <Label htmlFor="language">Language</Label>
              <Select id="language" name="language" value={formData.language} onChange={handleChange}>
                <option value="">Select Language</option>
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
              </Select>
            </FormControl>
            <FormControl>
              <Label htmlFor="dob">Date of Birth</Label>
              <Input id="dob" name="dob" type="date" value={formData.dob} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <Label htmlFor="twitter">Twitter</Label>
              <Input id="twitter" name="twitter" value={formData.twitter} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <Label htmlFor="facebook">Facebook</Label>
              <Input id="facebook" name="facebook" value={formData.facebook} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <Label htmlFor="linkedin">LinkedIn</Label>
              <Input id="linkedin" name="linkedin" value={formData.linkedin} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <Label htmlFor="google">Google</Label>
              <Input id="google" name="google" value={formData.google} onChange={handleChange} />
            </FormControl>
            <Button type="submit">Save</Button>
          </ProfileForm>
        </>
      ) : (
        <p>Loading profile...</p>
      )}
    </ProfileContainer>
  );
};

export default ProfilePage;
