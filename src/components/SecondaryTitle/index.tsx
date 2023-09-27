import styled from 'styled-components';

interface Props {
  title: string;
  importantPart?: string;
  colorTitle: string;
  colorImportantPart?: string;
  margin?: string;
  titleNumber?: number;
}

const SecondaryTitle = ({
  title,
  importantPart,
  colorTitle,
  colorImportantPart,
  margin,
  titleNumber,
}: Props) => {
  return (
    <>
      <SectionTitle $colorTitle={colorTitle} $margin={margin}>
        {title}
        {importantPart && (
          <ChargeInTitle $colorImportantPart={colorImportantPart}>
            {importantPart}
          </ChargeInTitle>
        )}
      </SectionTitle>
      {titleNumber && <TitleNumber>{titleNumber}</TitleNumber>}
    </>
  );
};

const SectionTitle = styled.h2<{ $colorTitle?: string; $margin?: string }>`
  font-size: 27px;
  line-height: 35px;
  font-weight: 600;
  color: ${({ $colorTitle }) => $colorTitle};
  margin: ${({ $margin }) => $margin || '0'};
`;

const ChargeInTitle = styled.strong<{ $colorImportantPart?: string }>`
  color: ${({ $colorImportantPart }) => $colorImportantPart};
`;

const TitleNumber = styled.p`
  margin: 0;
  background-color: #f4f8f6;
  padding: 0px 10px;
  border-radius: 4px;
  font-size: 20px;
  line-height: 32px;
`;

export default SecondaryTitle;
