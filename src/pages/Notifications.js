import React from 'react';
import styled from 'styled-components';

// Styled component for the notifications container
const NotificationsContainer = styled.div`
  max-height: 300px;
  overflow-y: auto;
  padding: 0 1rem;
  background-color: #1c1c1c;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  color: #ffd700;
`;

// Styled component for individual notification items
const NotificationItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #333;
  border-bottom: 1px solid #444;
  color: #fff;

  &:last-child {
    border-bottom: none;
  }
`;

const NotificationImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const NotificationText = styled.div`
  flex: 1;
`;

// Notifications component displaying a list of notifications
const Notifications = () => {
  // Sample notifications data
  const notifications = [
    { id: 1, message: "Your order has been shipped!", imageUrl: "https://via.placeholder.com/40" },
    { id: 2, message: "New comment on your post.", imageUrl: "https://via.placeholder.com/40" },
    { id: 3, message: "Friend request from Luke Skywalker.", imageUrl: "https://via.placeholder.com/40" },
  ];

  return (
    <NotificationsContainer>
      {notifications.map(notification => (
        <NotificationItem key={notification.id}>
          <NotificationImage src={notification.imageUrl} alt="Profile" />
          <NotificationText>{notification.message}</NotificationText>
        </NotificationItem>
      ))}
    </NotificationsContainer>
  );
};

export default Notifications;
