import axios from './axiosConfig';

// Create chat
export const createChat = async (members) => {
  try {
    const res = await axios.post('/chats', { members });
    return res.data;
  } catch (error) {
    console.error('Error creating chat:', error);
    throw error;
  }
};

// Send message to chat
export const sendMessage = async (chatId, senderId, text) => {
  try {
    const res = await axios.post('/chats/message', { chatId, senderId, text });
    return res.data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};

// Get chats of a user
export const getChatsByUser = async () => {
  try {
    const res = await axios.get('/chats');
    return res.data;
  } catch (error) {
    console.error('Error fetching user chats:', error);
    throw error;
  }
};

// Get messages of a chat
export const getMessagesByChat = async (chatId) => {
  try {
    const res = await axios.get(`/chats/${chatId}`);
    return res.data;
  } catch (error) {
    console.error('Error fetching chat messages:', error);
    throw error;
  }
};
