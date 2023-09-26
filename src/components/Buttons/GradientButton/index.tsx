import styled from 'styled-components';

interface Props {
  onClick?: () => void;
  text: string;
  color?: string;
  padding?: string;
  fontSize?: string;
  lineHeight?: string;
  background?: string;
  isContainIcon?: true;
  src?: string;
}

const GradientButton = ({
  onClick,
  text,
  color,
  padding,
  fontSize,
  lineHeight,
  background,
  isContainIcon,
  src,
}: Props) => {
  return (
    <GradientButtonStyled
      onClick={onClick}
      type="button"
      $color={color}
      $padding={padding}
      $fontSize={fontSize}
      $lineHeight={lineHeight}
      $background={background}
    >
      {text}
      {isContainIcon && <img src={src} />}
    </GradientButtonStyled>
  );
};

const GradientButtonStyled = styled.button<{
  $color?: string;
  $background?: string;
  $padding?: string;
  $fontSize?: string;
  $lineHeight?: string;
}>`
  display: flex;
  align-items: center;
  gap: 80px;
  background: ${({ $background }) =>
    $background || 'linear-gradient(#8bdfda, #369c96)'};
  border: none;
  border-radius: 8px;
  font-family: 'Chivo', sans-serif;
  padding: ${({ $padding }) => $padding || '6px 20px'};
  color: ${({ $color }) => $color || '#ffffff'};
  font-size: ${({ $fontSize }) => $fontSize || '14px'};
  line-height: ${({ $lineHeight }) => $lineHeight || '24.6px'};
  font-weight: 400;
  cursor: pointer;

  &:focus {
    background: linear-gradient(#8bdfda, #369c96);
  }
`;

export default GradientButton;
