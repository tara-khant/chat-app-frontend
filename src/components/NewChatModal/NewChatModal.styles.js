import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const ModalBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 16px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  margin-bottom: 12px;
  font-size: 1rem;
`;

export const UserList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const UserItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? '#3b82f6' : 'white')};
  color: ${(props) => (props.selected ? 'white' : 'black')};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => (props.selected ? '#2563eb' : '#f3f4f6')};
  }

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    width: 100%;
  }

  input[type='checkbox'] {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  background-color: ${(props) => (props.primary ? '#3b82f6' : '#e5e7eb')};
  color: ${(props) => (props.primary ? 'white' : 'black')};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => (props.primary ? '#2563eb' : '#d1d5db')};
  }
`;
