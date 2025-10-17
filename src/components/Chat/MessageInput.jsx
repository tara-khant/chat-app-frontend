import React, { useState } from 'react';
import { InputContainer, InputField, SendButton } from './Chat.styles';
import { FiSend } from 'react-icons/fi';

const MessageInput = ({
  onSendMessage,
  user,
  activeChatId,
  setIsAiTyping,
  setActiveChatId,
  setChats,
}) => {
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    setIsAiTyping(true);

    onSendMessage({
      text: input,
      user,
      chatId: activeChatId,
      setActiveChatId,
      setChats,
      setIsAiTyping,
    });
    setInput('');
  };

  return (
    <InputContainer>
      <InputField
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
      <SendButton onClick={handleSend}>
        <FiSend size={18} />
      </SendButton>
    </InputContainer>
  );
};

export default MessageInput;
