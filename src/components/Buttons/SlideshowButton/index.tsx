import styled from 'styled-components';

interface Props {
  text: string;
  backgroundColor: string;
}

const SlideShowButton = ({ text, backgroundColor }: Props) => {
  return (
    <ButtonWrapper type="button" $backgroundColor={backgroundColor}>
      <TextWrapper>{text}</TextWrapper>
      <ButtonIcon src="/assets/down-arrow-icon-bold.svg" />
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button<{ $backgroundColor: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  color: #ffffff;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;

const TextWrapper = styled.div`
  border-right: 1px solid white;
  padding: 10px 22px;
`;

const ButtonIcon = styled.img`
  padding-right: 16px;
`;

export default SlideShowButton;
