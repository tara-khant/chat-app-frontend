import React, { useState, useMemo } from 'react';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  UserList,
  UserItem,
} from './NewChatModal.styles';

const NewChatModal = ({ isOpen, onClose, users, onCreateChat }) => {
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const [search, setSearch] = useState('');

  const filteredUsers = useMemo(() => {
    if (!search) return users;
    return users.filter((u) =>
      u.username.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  if (!isOpen) return null;

  const toggleUserSelection = (userId) => {
    setSelectedUserIds((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  const handleCreateChat = () => {
    onCreateChat(selectedUserIds);

    setSelectedUserIds([]);
    setSearch('');
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <h2>Create New Chat</h2>
        </ModalHeader>

        <ModalBody>
          <Input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ marginBottom: '12px' }}
          />

          <UserList>
            {filteredUsers.length === 0 ? (
              <p style={{ padding: '8px' }}>No users found</p>
            ) : (
              filteredUsers.map((user) => (
                <UserItem key={user._id}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedUserIds.includes(user._id)}
                      onChange={() => toggleUserSelection(user._id)}
                    />
                    <span>{user.username}</span>
                  </label>
                </UserItem>
              ))
            )}
          </UserList>
        </ModalBody>

        <ModalFooter>
          <Button onClick={onClose}>Cancel</Button>
          <Button primary onClick={handleCreateChat}>
            Create Chat
          </Button>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

export default NewChatModal;
