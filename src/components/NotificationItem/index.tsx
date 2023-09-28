import styled from 'styled-components';

interface Props {
  opacity?: string;
}

const NotificationItem = ({ opacity }: Props) => {
  return (
    <NotificationWrapper $opacity={opacity}>
      <NotificationProfilIcon src="/assets/profil-icon.svg" alt="profil icon" />
      <div>
        <NotificationText>
          <NotificationName>Prénom Nom</NotificationName> a ajouté un
          installateur
        </NotificationText>
        <NotificationDate>Il y a 3 jours</NotificationDate>
      </div>
    </NotificationWrapper>
  );
};

const NotificationWrapper = styled.div<{ $opacity?: string }>`
  margin: 20px 24px 0px 24px;
  padding-bottom: 18px;
  display: flex;
  gap: 16px;
  border-bottom: 1px solid #e5e5e5;
  opacity: ${({ $opacity }) => $opacity || 0.5};
`;

const NotificationProfilIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const NotificationText = styled.p`
  font-size: 14px;
  color: #000000;
  line-height: 16.6px;
  font-weight: 400;
  margin: 0;
`;

const NotificationName = styled.strong`
  font-weight: 600;
`;

const NotificationDate = styled.p`
  color: #8fa2a2;
  font-size: 12px;
  line-height: 24.6px;
  font-weight: 400;
  margin: 0;
`;

export default NotificationItem;
