import React, { useEffect, useRef, useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import {
  ChatArea as ChatContainer,
  MessagesContainer,
  InputArea,
} from './Chat.styles';
import { Spin } from 'antd';

const ChatArea = ({
  socket,
  user,
  activeChatId,
  messages,
  onSendMessage,
  joinChat,
  setActiveChatId,
  setChats,
}) => {
  const [isAiTyping, setIsAiTyping] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (socket && activeChatId) joinChat(activeChatId);
  }, [socket, activeChatId, joinChat]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <ChatContainer>
      <MessagesContainer>
        <MessageList messages={messages} />
        <div ref={messagesEndRef}></div>
      </MessagesContainer>
      {isAiTyping && (
        <div style={{ textAlign: 'center', margin: '8px 0' }}>
          <Spin tip="AI is typing..." />
        </div>
      )}
      <InputArea>
        <MessageInput
          onSendMessage={onSendMessage}
          user={user}
          activeChatId={activeChatId}
          setIsAiTyping={setIsAiTyping}
          setActiveChatId={setActiveChatId}
          setChats={setChats}
        />
      </InputArea>
    </ChatContainer>
  );
};

export default ChatArea;
