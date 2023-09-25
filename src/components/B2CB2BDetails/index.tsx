import styled from 'styled-components';

interface Props {
  exitValue: string;
  entriesValue: string;
  flexDirection?: string;
  gap?: string;
}

const B2CB2BDetails = ({
  exitValue,
  entriesValue,
  flexDirection,
  gap,
}: Props) => {
  return (
    <B2CDetailsWrapper $flexDirection={flexDirection} $gap={gap}>
      <div>
        <Title>B2C</Title>
        <Values>{exitValue}</Values>
      </div>
      <div>
        <Title>B2B</Title>
        <Values>{entriesValue}</Values>
      </div>
    </B2CDetailsWrapper>
  );
};

const B2CDetailsWrapper = styled.div<{
  $flexDirection?: string;
  $gap?: string;
}>`
  display: flex;
  gap: ${({ $gap }) => $gap || '64px'};
  flex-direction: ${({ $flexDirection }) => $flexDirection};
`;

const Title = styled.p`
  font-size: 16px;
  color: #8fa2a2;
  line-height: 21.6px;
  font-weight: 400;
  margin: 0;
`;

const Values = styled.span`
  color: #0c354f;
  font-size: 16px;
  line-height: 19.6px;
  font-weight: 400;
`;

export default B2CB2BDetails;
