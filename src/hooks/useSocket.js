import { useEffect, useState, useCallback } from 'react';
import { io } from 'socket.io-client';
import { createChat, getMessagesByChat, sendMessage } from '../api/chat';

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL;

const useSocket = ({ activeChatId, setActiveChatId, setChats, chats }) => {
  const [messagesMap, setMessagesMap] = useState({});
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(SOCKET_URL);
    setSocket(newSocket);

    chats.forEach((chat) => {
      newSocket.emit('joinChat', chat?._id);
    });

    newSocket.on('receiveMessage', (message) => {
      const { chatId } = message;

      setMessagesMap((prev) => {
        const chatMessages = prev[chatId] || [];
        return { ...prev, [chatId]: [...chatMessages, message] };
      });

      setChats((prevChats) => {
        const index = prevChats.findIndex((c) => c._id === message.chatId);
        if (index !== -1) {
          const updatedChats = [...prevChats];
          updatedChats[index] = message.chat;
          return updatedChats;
        } else {
          return [...prevChats, message.chat];
        }
      });

      if (chatId === activeChatId) {
        setActiveChatId(chatId);
      }
    });

    return () => newSocket.disconnect();
  }, [activeChatId, chats]);

  const joinChat = useCallback(
    async (chatId) => {
      if (!socket) return;

      socket.emit('joinChat', chatId);
      const chatInfo = await getMessagesByChat(chatId);

      setMessagesMap((prev) => ({
        ...prev,
        [chatId]: chatInfo?.messages || [],
      }));
    },
    [socket]
  );

  const sendMessageHandler = async ({ text, user, chatId, setIsAiTyping }) => {
    if (!text.trim() || !socket) return;

    let currentChatId = chatId;

    if (!currentChatId) {
      const newChat = await createChat([user.id]);
      currentChatId = newChat._id;

      setChats((prev) => [...prev, newChat]);
      setActiveChatId(newChat._id);

      socket.emit('joinChat', newChat._id);
    }

    const msg = {
      senderId: user.id,
      text,
      chatId: currentChatId,
      timestamp: new Date().toISOString(),
      type: 'user',
    };

    setMessagesMap((prev) => {
      const chatMessages = prev[currentChatId] || [];
      return { ...prev, [currentChatId]: [...chatMessages, msg] };
    });

    await sendMessage(currentChatId, user.id, text);
    socket.emit('sendMessage', { chatId: currentChatId, message: msg });

    if (setIsAiTyping) setIsAiTyping(false);
  };

  const messages = activeChatId ? messagesMap[activeChatId] || [] : [];

  return { socket, messages, sendMessage: sendMessageHandler, joinChat };
};

export default useSocket;
