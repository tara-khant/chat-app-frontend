import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from '../../validation/authValidation';
import PasswordInput from '../../components/PasswordInput';
import FormItem from '../../components/FormItem';
import { Container, Card, Title, Input, Button, Text } from './Signup.styles';
import { signupUser } from '../../api/auth';

const Signup = ({ setUser }) => {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data) => {
    try {
      setServerError('');
      const result = await signupUser({
        username: data.username,
        password: data.password,
      });

      localStorage.setItem('token', result.token);
      setUser(result.user);
      navigate('/chat');
    } catch (err) {
      setServerError(err.message);
    }
  };

  return (
    <Container>
      <Card>
        <Title>Create Account</Title>
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
              placeholder="Password"
            />
          </FormItem>

          <FormItem label="Confirm Password" error={errors.confirmPassword}>
            <PasswordInput
              name="confirmPassword"
              register={register}
              error={errors.confirmPassword}
              placeholder="Confirm Password"
            />
          </FormItem>

          {serverError && (
            <p style={{ color: 'red', marginBottom: '0.5rem' }}>
              {serverError}
            </p>
          )}

          <Button type="submit">Sign Up</Button>
        </form>

        <Text>
          Already have an account? <Link to="/login">Login</Link>
        </Text>
      </Card>
    </Container>
  );
};

export default Signup;
