import styled from 'styled-components';

interface Props {
  title: string;
  importantPart: string;
  colorTitle: string;
  colorImportantPart: string;
}

const SecondaryTitle = ({
  title,
  importantPart,
  colorTitle,
  colorImportantPart,
}: Props) => {
  return (
    <SectionTitle $colorTitle={colorTitle}>
      {title}
      <ChargeInTitle $colorImportantPart={colorImportantPart}>
        {importantPart}
      </ChargeInTitle>
    </SectionTitle>
  );
};

const SectionTitle = styled.h2<{ $colorTitle: string }>`
  font-size: 27px;
  line-height: 35px;
  font-weight: 600;
  color: ${({ $colorTitle }) => $colorTitle};
  margin: 0;
`;

const ChargeInTitle = styled.strong<{ $colorImportantPart: string }>`
  color: ${({ $colorImportantPart }) => $colorImportantPart};
`;

export default SecondaryTitle;
