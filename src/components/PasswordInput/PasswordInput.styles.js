import styled from 'styled-components';

export const InputGroup = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 40px 10px 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

export const Icon = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #666;
  font-size: 1.1rem;
`;
