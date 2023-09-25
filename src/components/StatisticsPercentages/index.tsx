import styled from 'styled-components';

interface Props {
  number: number | string;
  src?: string;
  color: string;
  percentage: number;
  isNumberAPrice?: true;
}

const StatisticsPercentage = ({
  number,
  src,
  color,
  percentage,
  isNumberAPrice,
}: Props) => {
  return (
    <StatisticsPercentageWrapper>
      {isNumberAPrice ? (
        <StatisticsPriceWrapper>
          <StatisticsNumber>{number}€</StatisticsNumber>
          <StatisticsCardText>HT</StatisticsCardText>
        </StatisticsPriceWrapper>
      ) : (
        <StatisticsNumber>{number}</StatisticsNumber>
      )}
      <StatisticsNumberWrapper>
        {src && <img src={src} />}
        <StatisticsPercentageItem $color={color}>
          {percentage}%
        </StatisticsPercentageItem>
      </StatisticsNumberWrapper>
    </StatisticsPercentageWrapper>
  );
};

const StatisticsPercentageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
`;

const StatisticsPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StatisticsNumber = styled.span`
  font-size: 28px;
  line-height: 33px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
`;

const StatisticsCardText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 21.6px;
  color: #8fa2a2;
`;

const StatisticsNumberWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`;

const StatisticsPercentageItem = styled.span<{ $color: string }>`
  color: ${({ $color }) => $color};
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
`;

export default StatisticsPercentage;
