import styled from 'styled-components';
import { Link } from 'react-router-dom';

import SlideshowCard from '../Cards/SlideshowCard';
import NotificationItem from '../NotificationItem';
import GradientButton from '../Buttons/GradientButton';

const ProfilSlideshow = () => {
  return (
    <SlideshowCard top="80px" right="40px">
      <ProfilSlideshowTitle>Profil</ProfilSlideshowTitle>
      <NotificationItem
        userName="Prénom Nom "
        notificationInformation="prenom.nom@gmail.com"
        opacity="1"
        margin="0"
        padding="20px 24px"
      />
      <ProfilEditWrapper>
        <ProfilEditContent to="#">
          <img src="/assets/user-icon-black.svg" alt="user icon" />
          <p>Informations personnelles</p>
        </ProfilEditContent>
        <ProfilEditContent to="#">
          <img src="/assets/key-icon.svg" alt="password icon" />
          <p>Changer mon mot de passe</p>
        </ProfilEditContent>
      </ProfilEditWrapper>
      <ProfilButtonWrapper>
        <GradientButton
          text="Déconnexion"
          padding="6px 20px"
          fontSize="14px"
          lineHeight="24.6px"
          isContainIcon={true}
          src="/assets/exit-icon.svg"
          gap="7px"
        />
      </ProfilButtonWrapper>
    </SlideshowCard>
  );
};

const ProfilSlideshowTitle = styled.h3`
  font-size: 18px;
  line-height: 20px;
  font-weight: 600;
  padding: 18px 24px 20px 24px;
  border-bottom: 1px solid #e5e5e5;
  margin: 0;
`;

const ProfilEditWrapper = styled.div`
  border-bottom: 1px solid #e5e5e5;
  padding: 20px 24px;
  gap: 10px;
`;

const ProfilEditContent = styled(Link)`
  display: flex;
  gap: 10px;
  color: #000000;
  text-decoration: none;
`;

const ProfilButtonWrapper = styled.div`
  padding: 20px 24px 18px 20px;
  display: flex;
  justify-content: flex-end;
`;

export default ProfilSlideshow;
