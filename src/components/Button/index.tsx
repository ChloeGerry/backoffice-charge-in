import styled from 'styled-components';

interface Props {
  text: string;
  type: 'button' | 'submit' | 'reset';
  $textTransform?: string;
  onClick?: () => void;
  variant: 'primary' | 'secondary' | 'tertiary' | 'destructive';
}

const Button = ({ text, type, onClick, $textTransform, variant }: Props) => {
  return (
    <ButtonStyled
      type={type}
      onClick={onClick}
      $textTransform={$textTransform!}
      $variant={variant}
    >
      {text}
    </ButtonStyled>
  );
};

const ButtonStyled = styled('button')<{ $textTransform: string }>(
  ({ $textTransform, $variant }) => {
    return {
      color: '#ffffff',
      backgroundColor: '#369c96',
      padding: '22px 50px',
      borderRadius: '8px',
      border: 'none',
      width: '100%',
      marginTop: '24px',
      lineHeight: '16.4px',
      fontSize: '18px',
      fontWeight: 400,
      cursor: 'pointer',
      textTransform: $textTransform,
    };
  }
);

export default Button;
