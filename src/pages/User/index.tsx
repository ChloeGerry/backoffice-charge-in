import styled from 'styled-components';

import NavigationLeft from '../../components/NavigationLeft';
import Header from '../../components/layouts/Header';
import MainTitle from '../../components/MainTitle';
import SlideShowButton from '../../components/Buttons/SlideshowButton';
import UserInformationsCard from '../../components/UserInformationsCard';

const User = () => {
  return (
    <UserWrapper>
      <NavigationLeft />
      <UserContentWrapper>
        <Header />
        <UserMain>
          <MainTitle
            src="/assets/user-icon.svg"
            title="Profil : Nom + Prénom"
          />
          <ButtonsWrapper>
            <SlideShowButton text="Etape 1" backgroundColor="#304399" />
            <SlideShowButton text="Envoyer un mail" backgroundColor="#369C96" />
          </ButtonsWrapper>
          <UserSection>
            <UserInformationsCard />
          </UserSection>
        </UserMain>
      </UserContentWrapper>
    </UserWrapper>
  );
};

const UserWrapper = styled.div`
  display: flex;
`;

const UserContentWrapper = styled.div`
  background-color: #f4f8f6;
  width: 100%;
  margin: 30px 40px 0 40px;
`;

const UserMain = styled.main`
  margin: 30px 0 40px 0;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

const UserSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 30px 0;
`;

export default User;
