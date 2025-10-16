import React, { useState } from 'react';
import { InputField, SendButton } from './Chat.styles';
import { message as antdMessage } from 'antd';

const MessageInput = ({ onSendMessage, user, activeChatId, setIsAiTyping }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim() || !activeChatId) {
      antdMessage.warning('Cannot send empty message or no chat selected');
      return;
    }
    setIsAiTyping(true);
    onSendMessage({ text: input, user, chatId: activeChatId, setIsAiTyping });
    setInput('');
  };

  return (
    <>
      <InputField
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
    </>
  );
};

export default MessageInput;
