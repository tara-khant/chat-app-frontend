import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { InputGroup, Input, Icon } from './PasswordInput.styles';

const PasswordInput = ({ register, name, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <div>
      <InputGroup>
        <Input
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder || 'Password'}
          {...register(name)}
        />
        <Icon onClick={toggleShowPassword}>
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </Icon>
      </InputGroup>
    </div>
  );
};

export default PasswordInput;
