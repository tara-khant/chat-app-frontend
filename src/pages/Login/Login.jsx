import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../validation/authValidation';
import PasswordInput from '../../components/PasswordInput';
import FormItem from '../../components/FormItem';
import { Container, Card, Title, Input, Button, Text } from './Login.styles';
import { loginUser } from '../../api/auth';
import { useMessage } from '../../context/MessageContext';

const Login = ({ setUser }) => {
  const message = useMessage();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      const result = await loginUser({
        username: data.username,
        password: data.password,
      });

      localStorage.setItem('token', result.token);
      setUser(result.user);
      navigate('/chat');
      localStorage.setItem('user', JSON.stringify(result.user));
    } catch (err) {
      message.error(err.message);
    }
  };

  return (
    <Container>
      <Card>
        <Title>Login</Title>

        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <FormItem label="Username" required error={errors.username}>
            <Input
              type="text"
              placeholder="Enter your username"
              {...register('username')}
              autoComplete="off"
            />
          </FormItem>

          <FormItem label="Password" required error={errors.password}>
            <PasswordInput
              name="password"
              register={register}
              error={errors.password}
              placeholder="Enter your password"
            />
          </FormItem>
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
