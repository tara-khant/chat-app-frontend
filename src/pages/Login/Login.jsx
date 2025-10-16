import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../validation/authValidation';
import PasswordInput from '../../components/PasswordInput';
import FormItem from '../../components/FormItem';
import { Container, Card, Title, Input, Button, Text } from './Login.styles';
import { loginUser } from '../../api/auth';

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      setServerError('');
      const result = await loginUser({
        username: data.username,
        password: data.password,
      });

      localStorage.setItem('token', result.token);
      setUser(result.user);
      navigate('/chat');
      localStorage.setItem('user', JSON.stringify(result.user));
    } catch (err) {
      setServerError(err.message);
    }
  };

  return (
    <Container>
      <Card>
        <Title>Login</Title>

        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <FormItem label="Username" error={errors.username}>
            <Input
              type="text"
              placeholder="Enter your username"
              {...register('username')}
              autoComplete="off"
            />
          </FormItem>

          <FormItem label="Password" error={errors.password}>
            <PasswordInput
              name="password"
              register={register}
              error={errors.password}
              placeholder="Enter your password"
            />
          </FormItem>

          {serverError && (
            <p style={{ color: 'red', marginBottom: '0.5rem' }}>
              {serverError}
            </p>
          )}

          <Button type="submit">Login</Button>
        </form>

        <Text>
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </Text>
      </Card>
    </Container>
  );
};

export default Login;
