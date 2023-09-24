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
  gap?: string;
  marginBottom?: string;
  lineHeight?: string;
  width?: string;
  height?: string;
  checked?: boolean;
  onClick?: () => void;
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
  gap,
  marginBottom,
  lineHeight,
  width,
  height,
  checked,
  onClick,
}: Props) => {
  return (
    <FormWrapper
      $flexDirection={flexDirection}
      $gap={gap}
      $marginBottom={marginBottom}
    >
      <FormLabel
        $fontSize={fontSize}
        htmlFor={htmlFor}
        $lineHeight={lineHeight}
      >
        {label}
      </FormLabel>
      <FormInput
        id={id}
        type={type}
        placeholder={placeholder}
        checked={checked}
        onClick={onClick}
        $width={width}
        $height={height}
      />
      {isInputPassword && <FormEyeIcon src={src} alt="Eye icon" />}
    </FormWrapper>
  );
};

const FormWrapper = styled.div<{
  $flexDirection?: string;
  $gap?: string;
  $marginBottom?: string;
}>`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection || 'column'};
  gap: ${({ $gap }) => $gap || '10px'};
  margin-bottom: ${({ $marginBottom }) => $marginBottom || '18px'};
`;

const FormLabel = styled.label<{ $fontSize?: string; $lineHeight?: string }>`
  font-size: ${({ $fontSize }) => $fontSize || '18px'};
  font-weight: 400;
  line-height: ${({ $lineHeight }) => $lineHeight || '25.31px'};
`;

const FormInput = styled.input<{ $width?: string; $height?: string }>`
  /* color: #dce6e5; */
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  accent-color: #304399;
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

export default Form;
