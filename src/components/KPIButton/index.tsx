import styled from 'styled-components';

interface Props {
  text: '1er trimestre' | '2ème trimestre' | '3ème trimestre' | 'année 2023';
}

const KPIButton = ({ text }: Props) => {
  return <KPIButtonWrapper>{text}</KPIButtonWrapper>;
};

const KPIButtonWrapper = styled.button`
  background: #0c354f;
  border-radius: 8px;
  padding: 6px 12px;
  border: none;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  line-height: 21.6px;
  font-family: 'Chivo', sans-serif;
  cursor: pointer;

  &:focus {
    background: linear-gradient(#8bdfda, #369c96);
  }
`;

export default KPIButton;
