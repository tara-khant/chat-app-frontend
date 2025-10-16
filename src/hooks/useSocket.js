import { useEffect, useState, useCallback } from 'react';
import { io } from 'socket.io-client';
import { getMessagesByChat, sendMessage } from '../api/chat';

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL;

const useSocket = ({ activeChatId, setActiveChatId, setChats }) => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);

  // Initialize socket
  useEffect(() => {
    const newSocket = io(SOCKET_URL);
    setSocket(newSocket);

    newSocket.on('receiveMessage', (message) => {
      if (message.chatId === activeChatId) {
        setMessages((prev) => [...prev, message]);

        setChats((prevChats) => {
          const index = prevChats.findIndex((c) => c._id === message.chat._id);

          if (index !== -1) {
            const updatedChats = [...prevChats];
            updatedChats[index] = message.chat;
            return updatedChats;
          } else {
            return [...prevChats, message.chat];
          }
        });

        setActiveChatId(message.chat._id);
      }
    });

    return () => newSocket.disconnect();
  }, [activeChatId]);

  // Join chat
  const joinChat = useCallback(
    async (chatId) => {
      if (!socket) return;
      socket.emit('joinChat', chatId);
      const chatInfo = await getMessagesByChat(chatId);
      setMessages(chatInfo?.messages || []);
    },
    [socket]
  );

  // Send message
  const sendMessageHandler = async ({ text, user, chatId, setIsAiTyping }) => {
    const msg = {
      senderId: user.id,
      text,
      chatId,
      timestamp: new Date().toISOString(),
      type: 'user',
    };
    setMessages((prev) => [...prev, msg]);

    await sendMessage(chatId, user.id, text);
    socket.emit('sendMessage', { chatId, message: msg });
    setIsAiTyping(false);
  };

  return { socket, messages, sendMessage: sendMessageHandler, joinChat };
};

export default useSocket;
