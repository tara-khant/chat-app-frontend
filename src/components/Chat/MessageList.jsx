import React from 'react';
import ChatMessage from '../ChatMessage/ChatMessage';

const MessageList = ({ messages }) => (
  <>
    {messages?.map((msg, index) => (
      <ChatMessage msg={msg} key={index} />
    ))}
  </>
);

export default MessageList;
