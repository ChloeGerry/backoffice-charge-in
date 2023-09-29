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
      <div>
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
      </div>
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
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  accent-color: #304399;
  border: 1px solid #dce6e5;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  padding: 5px 0 5px 9px;
  border-radius: 3px;
  width: -webkit-fill-available;
`;

const FormEyeIcon = styled.img`
  position: absolute;
  right: 11%;
  padding-top: 2px;
  margin-right: 9px;

  @media (max-width: 980px) {
    right: 12%;
  }
  @media (max-width: 855px) {
    right: 6%;
  }
  @media (max-width: 855px) {
    right: 8%;
  }
`;

export default Form;
