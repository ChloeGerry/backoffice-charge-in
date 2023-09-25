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
      <ChartWrapper>{progression}</ChartWrapper>
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

const ChartWrapper = styled.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(#0c354f, #326b8f) padding-box,
    linear-gradient(#8bdfda, #369c96) border-box;
  background-size: 100% 100%, 100% 76%;
  border: 15px solid transparent;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 18px;
  line-height: 22.4px;
  font-weight: 400;

  &::before {
    background: #1b2655;
    background-size: 100% 100%;
  }
`;

export default KPIContent;
