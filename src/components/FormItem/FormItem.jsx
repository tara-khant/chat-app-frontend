import { FormItemWrapper, Label, ErrorText } from './FormItem.styles';

const FormItem = ({ label, children, error, required }) => {
  return (
    <FormItemWrapper>
      {label && (
        <Label>
          {label} {required && <span style={{ color: 'red' }}>*</span>}
        </Label>
      )}
      {children}
      {error && <ErrorText>{error.message}</ErrorText>}
    </FormItemWrapper>
  );
};

export default FormItem;
