import styled from 'styled-components';

interface Props {
  icon: string;
  text: string;
  children: React.ReactNode;
}

const StatisticsCard = ({ icon, text, children }: Props) => {
  return (
    <CardWrapper>
      <CardIcon src={icon} />
      <CardText>{text}</CardText>
      {children}
    </CardWrapper>
  );
};

const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  width: 17.8%;
  border-radius: 16px;
  padding: 24px 30px;
  background: #ffffff;
  box-shadow: 0 4px 16px 0 rgba(176, 189, 189, 0.16);
`;

const CardIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const CardText = styled.p`
  color: #8fa2a2;
  font-size: 18px;
  line-height: 26px;
  margin: 0;
`;

export default StatisticsCard;
