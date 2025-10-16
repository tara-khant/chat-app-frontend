import styled from 'styled-components';

export const MessageRow = styled.div`
  display: flex;
  justify-content: ${({ isUser }) => (isUser ? 'flex-end' : 'flex-start')};
  margin-bottom: 10px;
`;

export const Bubble = styled.div`
  max-width: 70%;
  padding: 12px 16px;
  border-radius: 16px;
  background-color: ${({ isUser }) => (isUser ? '#d1e7dd' : '#f0f0f0')};
  word-break: break-word;
  overflow-wrap: break-word;
  overflow: hidden;

  p {
    margin-bottom: 0;
  }

  & ul,
  & ol {
    padding-left: 20px;
    margin: 5px 0;
    word-break: break-word;
  }

  & li {
    margin-bottom: 4px;
  }

  & table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
  }

  & code {
    word-break: break-word;
  }

  & img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;
