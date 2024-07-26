import React, { useState, useEffect } from 'react';
// Importing styled components for consistent styling
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
  Button
} from '../styles/ProfileStyledComponents';

const ProfilePage = () => {
  // useState Hook to manage the user's profile data and form data
  // Initially, profile data is set to null to indicate that data fetching is in progress
  const [profile, setProfile] = useState(null);
  // Form data is initialized with empty strings
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    state: '',
    postcode: '',
    username: '',
    password: '',
    phone: '',
    picture: ''
  });

  // useEffect Hook to fetch data from the Random User Generator API when the component mounts
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Fetch API is used here to make an HTTP request to the API
        const response = await fetch('https://randomuser.me/api/');
        // Parsing the JSON response
        const data = await response.json();
        // Extracting necessary fields from the fetched data
        const userData = data.results[0];
        const profileData = {
          name: `${userData.name.first} ${userData.name.last}`,
          avatar: userData.picture.large,
          street: userData.location.street.name,
          city: userData.location.city,
          state: userData.location.state,
          postcode: userData.location.postcode,
          username: userData.login.username,
          phone: userData.phone,
          password: userData.login.password
        };
        // Setting the fetched data to the profile state
        setProfile(profileData);
        // Populating form data state for user profile editing
        setFormData({
          firstName: userData.name.first,
          lastName: userData.name.last,
          street: userData.location.street.name,
          city: userData.location.city,
          state: userData.location.state,
          postcode: userData.location.postcode,
          username: userData.login.username,
          password: userData.login.password,
          phone: userData.phone,
          picture: userData.picture.large
        });
      } catch (error) {
        // Error handling if the fetch request fails
        console.error('Failed to fetch profile data:', error);
      }
    };

    // Calling fetchProfile to initiate data fetching
    fetchProfile();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  // Function to handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Updating the formData state with the new input values
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, simply logging the form data to the console
    // This is where form submission logic would go, such as API calls to update user data
    console.log('Form submitted:', formData);
  };

  return (
    <ProfileContainer>
      {profile ? (
        <>
          {/* ProfileHeader displays the user's avatar and basic information */}
          <ProfileHeader>
            <Avatar src={profile.avatar} alt={profile.name} />
            <ProfileInfo>
              <Name>{profile.name}</Name>
              <Stats>Username: {profile.username}</Stats>
              <Stats>Phone: {profile.phone}</Stats>
              <Stats>Address: {profile.street}, {profile.city}, {profile.state} {profile.postcode}</Stats>
            </ProfileInfo>
          </ProfileHeader>

          {/* ProfileForm allows users to update their profile details */}
          <ProfileForm onSubmit={handleSubmit}>
            {/* FormControl is a reusable component for consistent form styling */}
            <FormControl>
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <Label htmlFor="street">Street</Label>
              <Input id="street" name="street" value={formData.street} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <Label htmlFor="city">City</Label>
              <Input id="city" name="city" value={formData.city} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <Label htmlFor="state">State</Label>
              <Input id="state" name="state" value={formData.state} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <Label htmlFor="postcode">Postcode</Label>
              <Input id="postcode" name="postcode" value={formData.postcode} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <Label htmlFor="username">Username</Label>
              <Input id="username" name="username" value={formData.username} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" value={formData.password} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
            </FormControl>
            {/* Button to submit the form data */}
            <Button type="submit">Save</Button>
          </ProfileForm>
        </>
      ) : (
        // Loading message displayed while profile data is being fetched
        <p>Loading profile...</p>
      )}
    </ProfileContainer>
  );
};

export default ProfilePage;