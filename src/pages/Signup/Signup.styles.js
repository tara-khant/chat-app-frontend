import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f5f6fa;
`;

export const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 340px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  text-align: center;
  color: #273c75;
  margin-bottom: 1.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  width: 100%;
  background: #273c75;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 8px;
  font-weight: 600;

  &:hover {
    background: #40739e;
  }
`;

export const Text = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;

  a {
    color: #273c75;
    text-decoration: none;
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  }
`;
