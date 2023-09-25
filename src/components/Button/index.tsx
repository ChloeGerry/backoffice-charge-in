import styled from 'styled-components';

interface Props {
  text: string;
  type: 'button' | 'submit' | 'reset';
  $textTransform?: string;
  onClick?: () => void;
  $variant: 'primary' | 'secondary' | 'tertiary' | 'destructive';
  $padding: string;
  $width?: string;
  $fontSize: string;
  $lineHeight: string;
  $marginTop?: string;
  isButtonContainIcon?: 'true';
  src?: string;
  $display?: string;
  $alignItems?: string;
  $justifyContent?: string;
  $gap?: string;
}

const Button = ({
  text,
  type,
  onClick,
  $textTransform,
  $variant,
  $padding,
  $width,
  $fontSize,
  $lineHeight,
  $marginTop,
  isButtonContainIcon,
  src,
  $display,
  $alignItems,
  $justifyContent,
  $gap,
}: Props) => {
  return (
    <ButtonStyled
      type={type}
      onClick={onClick}
      $textTransform={$textTransform!}
      $variant={$variant}
      $padding={$padding}
      $width={$width}
      $fontSize={$fontSize}
      $lineHeight={$lineHeight}
      $marginTop={$marginTop}
      $display={$display}
      $alignItems={$alignItems}
      $justifyContent={$justifyContent}
      $gap={$gap}
    >
      {isButtonContainIcon && <img src={src} />}
      {text}
    </ButtonStyled>
  );
};

const ButtonStyled = styled('button')<{
  $textTransform: string;
  $variant: string;
  $padding: string;
  $width?: string;
  $fontSize: string;
  $lineHeight: string;
  $marginTop?: string;
  $display?: string;
  $alignItems?: string;
  $justifyContent?: string;
  $gap?: string;
}>(
  ({
    $textTransform,
    $variant,
    $padding,
    $width,
    $fontSize,
    $lineHeight,
    $marginTop,
    $display,
    $alignItems,
    $justifyContent,
    $gap,
  }) => {
    let backgroundColorVariable: string = '';

    if ($variant === 'primary') {
      backgroundColorVariable = '#369C96';
    } else if ($variant === 'secondary') {
      backgroundColorVariable = '#304399';
    }

    return {
      display: $display,
      alignItems: $alignItems,
      justifyContent: $justifyContent,
      gap: $gap,
      color: '#ffffff',
      backgroundColor: backgroundColorVariable,
      padding: $padding,
      borderRadius: '8px',
      border: 'none',
      width: $width,
      marginTop: $marginTop,
      lineHeight: $lineHeight,
      fontSize: $fontSize,
      fontWeight: 400,
      cursor: 'pointer',
      textTransform: $textTransform,
    };
  }
);

export default Button;
