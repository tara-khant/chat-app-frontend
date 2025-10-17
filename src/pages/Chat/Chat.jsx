import React, { useState, useEffect } from 'react';
import { ChatSidebar, ChatArea } from '../../components/Chat';
import { getAllUsers } from '../../api/user';
import { createChat } from '../../api/chat';
import useSocket from '../../hooks/useSocket';
import useChats from '../../hooks/useChats';
import { Container } from './Chat.styles';
import NewChatModal from '../../components/NewChatModal';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'antd';
import { useMessage } from '../../context/MessageContext';

const Chat = ({ user }) => {
  const message = useMessage();
  const [isNewChatModalOpen, setIsNewChatModalOpen] = useState(false);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const navigate = useNavigate();
  const { chats, activeChatId, setActiveChatId, refreshChats, setChats } =
    useChats();
  const { socket, messages, sendMessage, joinChat } = useSocket({
    activeChatId,
    setActiveChatId,
    setChats,
    chats,
  });

  // Fetch all users
  useEffect(() => {
    getAllUsers().then(setAllUsers).catch(console.error);
  }, []);

  // Create new chat
  const handleCreateNewChat = async (members) => {
    try {
      const newChat = await createChat(members);
      await refreshChats();
      setActiveChatId(newChat._id);
    } catch {
      message.error('Failed to create chat');
    }
  };

  const handleLogoutConfirm = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    message.success('Logged out successfully');
    navigate('/login');
  };

  return (
    <Container>
      <ChatSidebar
        chats={chats}
        activeChatId={activeChatId}
        onSelectChat={setActiveChatId}
        onNewChat={() => setIsNewChatModalOpen(true)}
        user={user}
        setLogoutModalOpen={setLogoutModalOpen}
      />

      <ChatArea
        socket={socket}
        user={user}
        activeChatId={activeChatId}
        setActiveChatId={setActiveChatId}
        messages={messages}
        onSendMessage={sendMessage}
        joinChat={joinChat}
        setChats={setChats}
      />

      <NewChatModal
        isOpen={isNewChatModalOpen}
        onClose={() => setIsNewChatModalOpen(false)}
        onCreateChat={handleCreateNewChat}
        users={allUsers}
      />
      <Modal
        title="Confirm Logout"
        open={isLogoutModalOpen}
        onOk={handleLogoutConfirm}
        onCancel={() => setLogoutModalOpen(false)}
        okText="Yes"
        cancelText="No"
      >
        <p>Are you sure you want to log out?</p>
      </Modal>
    </Container>
  );
};

export default Chat;
