import styled from 'styled-components';
import { useState } from 'react';

import NotificationsSlideshow from '../../NotificationsSlideshow';

const Header = () => {
  const [areNotificationsOpen, setNotifications] = useState<boolean>(false);

  console.log('areNotificationsOpen', areNotificationsOpen);

  return (
    <HeaderWrapper>
      <HeaderUserNameWrapper>
        Bonjour,<HeaderUserName> Prénom Nom</HeaderUserName>
      </HeaderUserNameWrapper>
      <HeaderNavigationwrapper>
        <div>
          <HeaderNotificationIcon
            src="/assets/notifications-icon.svg"
            onClick={() => setNotifications(!areNotificationsOpen)}
          />
          {areNotificationsOpen && <NotificationsSlideshow />}
          <HeaderNotificationNumberIcon src="/assets/notifications-number.svg" />
        </div>
        <img src="/assets/profil-icon.svg" />
      </HeaderNavigationwrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid #afb2b6;
  gap: 24px;
`;

const HeaderUserNameWrapper = styled.span`
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  margin-bottom: 30px;
  color: #282828;
`;

const HeaderUserName = styled.strong`
  color: #369c96;
`;

const HeaderNavigationwrapper = styled.nav`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  gap: 24px;
`;

const HeaderNotificationIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const HeaderNotificationNumberIcon = styled.img`
  width: 18px;
  height: 18px;
  top: 37px;
  position: absolute;
  right: 103px;
`;

export default Header;
