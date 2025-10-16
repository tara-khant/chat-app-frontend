import axios from './axiosConfig';

// Create chat
export const createChat = async (members) => {
  const res = await axios.post('/chats', { members });
  return res.data;
};

// Create chat
export const sendMessage = async (chatId, senderId, text) => {
  const res = await axios.post('/chats/message', { chatId, senderId, text });
  return res.data;
};

// Get chats of a user
export const getChatsByUser = async () => {
  const res = await axios.get('/chats');
  return res.data;
};

// Get messages of a chat
export const getMessagesByChat = async (chatId) => {
  const res = await axios.get(`/chats/${chatId}`);
  return res.data;
};
