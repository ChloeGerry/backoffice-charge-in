import styled from 'styled-components';

import NotificationItem from '../NotificationItem';
import GradientButton from '../Buttons/GradientButton';

const NotificationsSlideshow = () => {
  return (
    <NotificationsWrapper>
      <NotificationsTitle>Notifications</NotificationsTitle>
      <NotificationItem opacity="1" />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationsFooter>
        <NumbersOfNotifications>28 notifications</NumbersOfNotifications>
        <GradientButton text="Tout effacer" />
      </NotificationsFooter>
    </NotificationsWrapper>
  );
};

const NotificationsWrapper = styled.article`
  box-shadow: 0 4px 16px 0 rgba(180, 189, 189, 0.25);
  border-radius: 12px;
  background-color: #ffffff;
`;

const NotificationsTitle = styled.h3`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  padding: 18px 0 20px 24px;
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
