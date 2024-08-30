import React from "react";
import styled from "styled-components";
import { FaShippingFast, FaCommentDots, FaUserFriends } from "react-icons/fa";

const NotificationsContainer = styled.div`
  max-height: 300px;
  overflow-y: auto;
  padding: 0 1rem;
  background-color: #1c1c1c;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  color: #ffd700;
`;

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

const NotificationIcon = styled.div`
  font-size: 24px;
  margin-right: 10px;
  color: #ffd700;
`;

const NotificationText = styled.div`
  flex: 1;
`;

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      message: "Your order has been shipped!",
      icon: <FaShippingFast />,
    },
    { id: 2, message: "New comment on your post.", icon: <FaCommentDots /> },
    {
      id: 3,
      message: "Friend request from Luke Skywalker.",
      icon: <FaUserFriends />,
    },
  ];

  return (
    <NotificationsContainer>
      {notifications.map((notification) => (
        <NotificationItem key={notification.id}>
          <NotificationIcon>{notification.icon}</NotificationIcon>
          <NotificationText>{notification.message}</NotificationText>
        </NotificationItem>
      ))}
    </NotificationsContainer>
  );
};

export default Notifications;
