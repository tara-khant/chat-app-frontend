import React from 'react';
import { FormItemWrapper, Label, ErrorText } from './FormItem.styles';

const FormItem = ({ label, children, error }) => {
  return (
    <FormItemWrapper>
      {label && <Label>{label}</Label>}
      {children}
      {error && <ErrorText>{error.message}</ErrorText>}
    </FormItemWrapper>
  );
};

export default FormItem;
