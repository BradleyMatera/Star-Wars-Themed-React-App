import React, { useState, useEffect } from "react";
import {
  ProfileContainer,
  ProfileHeader,
  Avatar,
  ProfileInfo,
  Name,
  Stats,
} from "../styles/ProfileStyledComponents";

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Simulate fetching profile data
    setTimeout(() => {
      setProfile({
        avatar: "https://via.placeholder.com/150",
        name: "Darth Vader",
        username: "darthvader",
        phone: "666-666-6666",
        street: "Death Star",
        city: "Galactic Empire",
        state: "Outer Rim",
        postcode: "12345",
      });
    }, 1000);
  }, []);

  return (
    <ProfileContainer>
      {profile ? (
        <>
          <ProfileHeader>
            <Avatar src={profile.avatar} alt={profile.name} />
            <ProfileInfo>
              <Name>{profile.name}</Name>
              <Stats>Username: {profile.username}</Stats>
              <Stats>Phone: {profile.phone}</Stats>
              <Stats>
                Address: {profile.street}, {profile.city}, {profile.state}{" "}
                {profile.postcode}
              </Stats>
            </ProfileInfo>
          </ProfileHeader>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </ProfileContainer>
  );
};

export default ProfilePage;
