import styled from 'styled-components';

interface Props {
  text: string;
  onClick?: () => void;
  src: string;
  backgroundColor: string;
}

const IconButton = ({ text, onClick, src, backgroundColor }: Props) => {
  return (
    <IconButtonStyled
      type="button"
      onClick={onClick}
      $backgroundColor={backgroundColor}
    >
      <img src={src} />
      {text}
    </IconButtonStyled>
  );
};

const IconButtonStyled = styled.button<{ $backgroundColor: string }>`
  width: 32.1%;
  padding: 10px 16px;
  font-size: 16px;
  line-height: 24.6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  cursor: pointer;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;

export default IconButton;
