import React from 'react';
import styled from 'styled-components';

// Styled component for the notifications container
const NotificationsContainer = styled.div`
  padding: 20px;
  color: #ffd700;
  background-color: #000;
  border-radius: 10px;
`;

// Styled component for individual notification items
const NotificationItem = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  background-color: #1c1c1c;
  border-radius: 5px;
  border: 1px solid #ffd700;
  color: #fff;
`;

// Notifications component displaying a list of notifications
const Notifications = () => {
  // Sample notifications data
  const notifications = [
    { id: 1, message: "Your order has been shipped!" },
    { id: 2, message: "New comment on your post." },
    { id: 3, message: "Friend request from Luke Skywalker." },
  ];

  return (
    <NotificationsContainer>
      <h1>Notifications</h1>
      {notifications.map(notification => (
        <NotificationItem key={notification.id}>
          {notification.message}
        </NotificationItem>
      ))}
    </NotificationsContainer>
  );
};

export default Notifications;
