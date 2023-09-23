import styled from 'styled-components';

interface Props {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  htmlFor: string;
  src?: string;
  isInputPassword: boolean;
  flexDirection?: string;
  fontSize?: string;
  checked?: boolean;
}

const Form = ({
  id,
  label,
  type,
  placeholder,
  htmlFor,
  src,
  isInputPassword,
  fontSize,
  flexDirection,
  checked,
}: Props) => {
  return (
    <FormWrapper $flexDirection={flexDirection}>
      <FormLabel $fontSize={fontSize} htmlFor={htmlFor}>
        {label}
      </FormLabel>
      <FormInput
        id={id}
        type={type}
        placeholder={placeholder}
        checked={checked}
      />
      {isInputPassword && <FormEyeIcon src={src} />}
    </FormWrapper>
  );
};

export default Form;

const FormWrapper = styled.div<{ $flexDirection?: string }>`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection || 'column'};
  gap: 10px;
  margin-bottom: 18px;
`;

const FormLabel = styled.label<{ $fontSize?: string }>`
  font-size: ${({ $fontSize }) => $fontSize || '18px'};
  font-weight: 400;
  line-height: 25.31px;
`;

const FormInput = styled.input`
  color: #dce6e5;
  border: 1px solid #dce6e5;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  padding: 5px 9px;
  border-radius: 3px;
`;

const FormEyeIcon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 85%;
  top: 56.9%;
`;
