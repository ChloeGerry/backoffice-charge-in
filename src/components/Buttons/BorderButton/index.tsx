import styled from 'styled-components';

interface Props {
  text: string;
}

const BorderButton = ({ text }: Props) => {
  return <BorderButtonWrapper>{text}</BorderButtonWrapper>;
};

const BorderButtonWrapper = styled.div`
  color: #369c96;
  border: 1px solid #369c96;
  border-radius: 8px;
  padding: 10px 22px;
  font-size: 18px;
  line-height: 26px;
`;

export default BorderButton;
