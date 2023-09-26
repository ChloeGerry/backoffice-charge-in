import styled from 'styled-components';

interface Props {
  src: string;
  title: string;
  margin?: string;
}

const MainTitle = ({ src, title, margin }: Props) => {
  return (
    <MainTitleWrapper $margin={margin}>
      <MainTitleIcon src={src} />
      <MainTitleStyled>{title}</MainTitleStyled>
    </MainTitleWrapper>
  );
};

const MainTitleWrapper = styled.div<{ $margin?: string }>`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: ${({ $margin }) => $margin};
`;

const MainTitleIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const MainTitleStyled = styled.h1`
  font-size: 40px;
  margin: 0;
`;

export default MainTitle;
