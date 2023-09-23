import styled from 'styled-components';

interface Props {
  text: string;
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const Button = ({ text, type, onClick }: Props) => {
  return (
    <ButtonStyled type={type} onClick={onClick}>
      {text}
    </ButtonStyled>
  );
};

export default Button;

const ButtonStyled = styled.button`
  color: #ffffff;
  background-color: #369c96;
  padding: 22px 50px;
  border-radius: 8px;
  border: none;
  width: 100%;
  margin-top: 16px;
  line-height: 16.4px;
  font-size: 18px;
  font-weight: 400;
`;
