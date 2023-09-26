import styled from 'styled-components';

interface Props {
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  text: string;
  textTransform?: string;
  padding: string;
  width?: string;
  fontSize: string;
  lineHeight: string;
  marginTop?: string;
  backgroundColor: string;
}

const BasicButton = ({
  type,
  onClick,
  text,
  textTransform,
  padding,
  width,
  fontSize,
  lineHeight,
  marginTop,
  backgroundColor,
}: Props) => {
  return (
    <BasicButtonStyled
      type={type}
      onClick={onClick}
      $textTransform={textTransform!}
      $padding={padding}
      $width={width}
      $fontSize={fontSize}
      $lineHeight={lineHeight}
      $marginTop={marginTop}
      $backgroundColor={backgroundColor}
    >
      {text}
    </BasicButtonStyled>
  );
};

const BasicButtonStyled = styled.button<{
  $textTransform?: string;
  $padding: string;
  $width?: string;
  $fontSize: string;
  $lineHeight: string;
  $marginTop?: string;
  $backgroundColor: string;
}>`
  text-transform: ${({ $textTransform }) => $textTransform};
  padding: ${({ $padding }) => $padding};
  width: ${({ $width }) => $width};
  font-size: ${({ $fontSize }) => $fontSize};
  line-height: ${({ $lineHeight }) => $lineHeight};
  margin-top: ${({ $marginTop }) => $marginTop};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  font-family: Chivo, sans-serif;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export default BasicButton;
