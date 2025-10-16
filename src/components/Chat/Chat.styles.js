import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #ffff;
`;

export const Sidebar = styled.div`
  width: 300px;
  background-color: #f3f4f6;
  border-right: 1px solid #e5e7eb;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

export const SidebarTitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 16px;
  color: #6a6868ff;
`;

export const ChatList = styled.ul`
  flex: 1;
  overflow-y: auto;
  list-style: none;
  padding: 0;
`;

export const ChatItem = styled.li`
  margin-bottom: 5px;
  font-size: 14px;
  padding: 8px 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;

  &:hover {
    background-color: #e1e1e1ff;
  }
`;

export const ChatArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #fffff;
`;

export const MessagesContainer = styled.div`
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

export const SenderName = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
`;

export const InputArea = styled.div`
  display: flex;
  padding: 16px;
  border-top: 1px solid #e5e7eb;
`;

export const InputField = styled.input`
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 25px;
  outline: none;
  font-size: 1rem;
`;

export const SendButton = styled.button`
  background-color: #3b82f6;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
  font-weight: bold;
`;

export const NewChatButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 5px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
  margin-bottom: 20px;

  &:hover {
    background-color: #e1e1e1ff;
  }

  &:active {
    transform: scale(0.97);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const SidebarFooter = styled.div`
  padding: 12px;
  border-top: 1px solid #a4a4a4ff;
  display: flex;
  align-items: center;
  gap: 12px;
`;
