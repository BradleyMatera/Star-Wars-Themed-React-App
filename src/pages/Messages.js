import React, { useState, useEffect, useRef } from 'react';
import { useAnimate, useAnimationFrame } from 'framer-motion';
import { FaSearch, FaUser, FaRobot } from 'react-icons/fa';
import {
  MessagesContainer,
  Sidebar,
  SidebarHeader,
  SidebarTitle,
  SearchContainer,
  SearchInput,
  MessageList,
  MessageListItem,
  MessageListItemAvatar,
  MessageListItemContent,
  MessageListItemName,
  MessageListItemText,
  MessageCount,
  MainContent,
  ChatHeader,
  ChatTitle,
  ChatMessage,
  ChatMessageContent,
  ChatMessageAvatar,
  ChatInputContainer,
  ChatInput,
  SendButton,
} from '../components/MessageStyledComponents'; // Importing all styled components

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [chatContent, setChatContent] = useState('');
  const [chatHistory, setChatHistory] = useState({});
  const [unreadCounts, setUnreadCounts] = useState({});
  const [scope] = useAnimate();

  const ref = useRef(null);

  useAnimationFrame((time) => {
    if (ref.current) {
      ref.current.style.backgroundColor = `hsl(${time % 360}, 100%, 75%)`;
    }
  });

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/people/');
        const data = await response.json();
        const shuffledCharacters = data.results.sort(() => 0.5 - Math.random());

        const characterMessages = shuffledCharacters.slice(0, 5).map((character, index) => {
          const icon = index % 2 === 0 ? <FaUser /> : <FaRobot />;
          return {
            id: index + 1,
            from: character.name,
            content: generateMessageContent(character),
            icon: icon,
          };
        });

        setMessages(characterMessages);
        setActiveChat(characterMessages[0]);
        const initialChatHistory = {};
        characterMessages.forEach(message => {
          initialChatHistory[message.id] = [message];
        });
        setChatHistory(initialChatHistory);
        const initialUnreadCounts = {};
        characterMessages.forEach(message => {
          initialUnreadCounts[message.id] = 0;
        });
        setUnreadCounts(initialUnreadCounts);
      } catch (error) {
        console.error('Failed to fetch messages:', error);
      }
    };

    const generateMessageContent = (character) => {
      return `Hey there, it's ${character.name}. Just wanted to say that I'm ${getRandomTrait()}!`;
    };

    const getRandomTrait = () => {
      const traits = [
        'great at podracing',
        'a master of disguise',
        'known for my witty one-liners',
        'the best pilot in the galaxy',
        'undefeated in arm-wrestling'
      ];
      return traits[Math.floor(Math.random() * traits.length)];
    };

    fetchMessages();
  }, []);

  useEffect(() => {
    if (activeChat) {
      setUnreadCounts(prevCounts => ({
        ...prevCounts,
        [activeChat.id]: 0
      }));
    }
  }, [activeChat]);

  const handleSendMessage = () => {
    if (chatContent.trim() && activeChat) {
      const newMessage = {
        id: Date.now(),
        from: 'You',
        content: chatContent,
        icon: <FaUser />,
      };
      setChatHistory(prevHistory => ({
        ...prevHistory,
        [activeChat.id]: [...prevHistory[activeChat.id], newMessage],
      }));
      setChatContent('');

      setUnreadCounts(prevCounts => ({
        ...prevCounts,
        [activeChat.id]: prevCounts[activeChat.id] + 1
      }));
    }
  };

  return (
    <MessagesContainer>
      <Sidebar>
        <SidebarHeader>
          <SidebarTitle>Messages</SidebarTitle>
          <SearchContainer>
            <FaSearch />
            <SearchInput placeholder="Search Messages" />
          </SearchContainer>
        </SidebarHeader>
        <MessageList>
          {messages.map((message) => (
            <MessageListItem key={message.id} onClick={() => setActiveChat(message)}>
              <MessageListItemAvatar>{message.icon}</MessageListItemAvatar>
              <MessageListItemContent>
                <MessageListItemName>{message.from}</MessageListItemName>
                <MessageListItemText>{message.content.split('\n')[0]}</MessageListItemText>
              </MessageListItemContent>
              <MessageCount $unread={unreadCounts[message.id] > 0}>{unreadCounts[message.id]}</MessageCount>
            </MessageListItem>
          ))}
        </MessageList>
      </Sidebar>
      {activeChat && (
        <MainContent ref={scope}>
          <ChatHeader>
            <ChatTitle>{activeChat.from}</ChatTitle>
          </ChatHeader>
          {chatHistory[activeChat.id].map((message, index) => (
            <ChatMessage key={index} initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <ChatMessageAvatar>{message.icon}</ChatMessageAvatar>
              <ChatMessageContent>{message.content}</ChatMessageContent>
            </ChatMessage>
          ))}
          <ChatInputContainer ref={ref}>
            <ChatInput
              placeholder="Type your message..."
              value={chatContent}
              onChange={(e) => setChatContent(e.target.value)}
            />
            <SendButton onClick={handleSendMessage}>Send</SendButton>
          </ChatInputContainer>
        </MainContent>
      )}
    </MessagesContainer>
  );
};

export default Messages;