import { PlusOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import {
  Sidebar,
  SidebarTitle,
  ChatList,
  ChatItem,
  NewChatButton,
  SidebarFooter,
} from './Chat.styles';
import { Avatar } from 'antd';

const ChatSidebar = ({
  chats,
  activeChatId,
  onSelectChat,
  onNewChat,
  user,
  setLogoutModalOpen,
}) => (
  <Sidebar>
    <NewChatButton onClick={onNewChat}>
      <PlusOutlined />
      New Chat
    </NewChatButton>
    <SidebarTitle>Chats</SidebarTitle>
    <ChatList>
      {chats.map((chat) => (
        <ChatItem
          key={chat?._id}
          onClick={() => onSelectChat(chat?._id)}
          style={{
            fontWeight: activeChatId === chat?._id ? 'bold' : 'normal',
            cursor: 'pointer',
          }}
        >
          {chat?.name || 'New Chat'}
        </ChatItem>
      ))}
    </ChatList>
    {user && (
      <SidebarFooter>
        <Avatar
          style={{ backgroundColor: '#87d068' }}
          icon={<UserOutlined />}
        />

        <div style={{ flex: 1, marginLeft: '8px' }}>
          <p style={{ margin: 0, fontSize: '14px', fontWeight: '500' }}>
            {user.username}
          </p>
        </div>

        <button
          style={{
            background: 'transparent',
            border: 'none',
            color: '#aaa',
            cursor: 'pointer',
            fontSize: '18px',
          }}
          onClick={() => setLogoutModalOpen(true)}
        >
          <LogoutOutlined />
        </button>
      </SidebarFooter>
    )}
  </Sidebar>
);

export default ChatSidebar;
