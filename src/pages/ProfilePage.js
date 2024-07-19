import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  ProfileContainer,
  ProfileHeader,
  Avatar,
  ProfileInfo,
  Name,
  Stats,
  ProfileForm,
  FormControl,
  Label,
  Input,
  Select,
  Button
} from '../components/ProfileStyledComponents'; // Importing all styled components

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