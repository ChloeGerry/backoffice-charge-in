import styled from 'styled-components';

import SlideshowCard from '../Cards/SlideshowCard';
import NotificationItem from '../NotificationItem';
import GradientButton from '../Buttons/GradientButton';

const NotificationsSlideshow = () => {
  return (
    <SlideshowCard right="92px">
      <NotificationsTitle>Notifications</NotificationsTitle>
      <NotificationItem
        userName="Prénom Nom "
        notificationDescription="a ajouté un installateur"
        notificationInformation="Il y a 3 jours"
        opacity="1"
      />
      <NotificationItem
        userName="Prénom Nom "
        notificationDescription="a ajouté un installateur"
        notificationInformation="Il y a 3 jours"
      />
      <NotificationItem
        userName="Prénom Nom "
        notificationDescription="a ajouté un installateur"
        notificationInformation="Il y a 3 jours"
      />
      <NotificationItem
        userName="Prénom Nom "
        notificationDescription="a ajouté un installateur"
        notificationInformation="Il y a 3 jours"
      />
      <NotificationsFooter>
        <NumbersOfNotifications>28 notifications</NumbersOfNotifications>
        <GradientButton text="Tout effacer" />
      </NotificationsFooter>
    </SlideshowCard>
  );
};

const NotificationsTitle = styled.h3`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  padding: 18px 24px 20px 24px;
  border-bottom: 1px solid #e5e5e5;
`;

const NotificationsFooter = styled.div`
  display: flex;
  padding: 16px 24px 18px 24px;
  align-items: center;
  justify-content: space-between;
`;

const NumbersOfNotifications = styled.p`
  color: #8fa2a2;
  line-height: 17.6px;
  font-size: 14px;
  font-weight: 400;
  margin: 0;
`;

export default NotificationsSlideshow;
