import { useState, useEffect } from 'react';
import { getChatsByUser } from '../api/chat';

const useChats = () => {
  const [chats, setChats] = useState([]);
  const [activeChatId, setActiveChatId] = useState(null);

  const refreshChats = async () => {
    const allChats = await getChatsByUser();
    setChats(allChats);
    if (allChats.length > 0 && !activeChatId) setActiveChatId(allChats[0]._id);
  };

  useEffect(() => {
    refreshChats();
  }, []);

  return { chats, activeChatId, setActiveChatId, refreshChats, setChats };
};

export default useChats;
