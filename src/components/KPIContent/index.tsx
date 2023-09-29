import styled from 'styled-components';

interface Props {
  KPIInformation: string;
  progression: number;
}

const KPIContent = ({ KPIInformation, progression }: Props) => {
  return (
    <KPIWrapper>
      <div>
        <KPIInformationText>{KPIInformation}</KPIInformationText>
        <KPIStatus>{progression === 100 ? 'Complété' : 'En cours'}</KPIStatus>
      </div>
      <ChartContainer>
        <ChartCircularProgress $progression={progression / 100}>
          <ProgressValue>{progression}%</ProgressValue>
        </ChartCircularProgress>
      </ChartContainer>
    </KPIWrapper>
  );
};

const KPIWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const KPIInformationText = styled.p`
  color: #6a93ac;
  font-size: 18px;
  line-height: 26px;
  margin: 0;
`;

const KPIStatus = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  font-family: 'Poppins', sans-serif;
  margin: 0;
`;

const ChartContainer = styled.div`
  width: 100px;
`;

const ChartCircularProgress = styled.div<{ $progression: number }>`
  position: relative;
  height: 100px;
  width: 100px;
  background: ${({ $progression }) =>
    `conic-gradient(#8bdfda 0deg, #369C96 70deg,  #369C96 180deg, #8bdfda ${Math.round(
      $progression * 360
    )}deg, #1b2655 0deg)`};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    height: 70px;
    width: 70px;
    border-radius: 50%;
    background: linear-gradient(#0c354f, #326b8f);
  }
`;

const ProgressValue = styled.div`
  position: relative;
  color: #ffffff;
  font-size: 18px;
  line-height: 22.4px;
  font-weight: 400;
`;

export default KPIContent;
