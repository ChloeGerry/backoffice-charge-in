import styled from 'styled-components';

import Header from '../../components/layouts/Header';
import NavigationLeft from '../../components/NavigationLeft';
import MainTitle from '../../components/MainTitle';
import BasicButton from '../../components/Buttons/BasicButton';
import UserInformationsPreview from '../../components/UserInformationsPreview';

const Houses = () => {
  return (
    <HousesInProgressWrapper>
      <NavigationLeft />
      <HousesInProgressContentWrapper>
        <Header />
        <main>
          <HouseInProgressTitleWrapper>
            <MainTitle src="/assets/houses-icon-title.svg" title="Maisons" />
            <HousesInProgressButtonsWrapper>
              <BasicButton
                type="button"
                text="Ajoutez un utilisateur"
                backgroundColor="#369C96"
                padding="10px 22px 10px 16px"
                fontSize="18px"
                lineHeight="26px"
              />
              <BasicButton
                type="button"
                text="Supprimer un utilisateur"
                backgroundColor="#A94442"
                padding="10px 22px 10px 16px"
                fontSize="18px"
                lineHeight="26px"
              />
            </HousesInProgressButtonsWrapper>
          </HouseInProgressTitleWrapper>
          <HousesInProgressSection>
            <UserInformationsHeader>
              <UserInformationsResultsNumber>
                25 résultats
              </UserInformationsResultsNumber>
              <UserInformationsInputWrapper>
                <img
                  src="/assets/magnifying-glass-icon.svg"
                  alt="Magnifying glass icon"
                />
                <UserInformationsInput type="search" placeholder="Rechercher" />
              </UserInformationsInputWrapper>
              <UserInformationsInputWrapper>
                <UserInformationsSelect>
                  Trier par : Tous
                </UserInformationsSelect>
                <img src="/assets/down-arrow-icon-grey.svg" alt="Arrow icon" />
              </UserInformationsInputWrapper>
            </UserInformationsHeader>
            <UserInformationsPreviewLabel>
              <UserInformationsLabel>Nom</UserInformationsLabel>
              <UserInformationsLabel>Borne choisie</UserInformationsLabel>
              <UserInformationsLabel>Devis</UserInformationsLabel>
              <UserInformationsLabel>Étapes</UserInformationsLabel>
              <UserInformationsLabel>Actions</UserInformationsLabel>
            </UserInformationsPreviewLabel>
            <UserInformationsPreview
              name="Name"
              choosenChargin="Borne"
              estimate="###"
              step="Étape 1"
              color="#369C96"
              backgroundColor="#369C961A"
              padding="2px 8px"
              borderRadius="4px"
            />
          </HousesInProgressSection>
        </main>
      </HousesInProgressContentWrapper>
    </HousesInProgressWrapper>
  );
};

const HousesInProgressWrapper = styled.div`
  display: flex;
`;

const HousesInProgressContentWrapper = styled.div`
  background-color: #f4f8f6;
  width: 100%;
  margin: 30px 40px 0 40px;
`;

const HouseInProgressTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0 40px 0;
`;

const HousesInProgressButtonsWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

const HousesInProgressSection = styled.section`
  background-color: #ffffff;
  padding: 24px 24px 17px 24px;
  border-radius: 16px;
  box-shadow: 0 4px 16px 0 rgba(176, 189, 189, 0.16);
`;

const UserInformationsHeader = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

const UserInformationsResultsNumber = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 22.4px;
  margin: 0;
`;

const UserInformationsInputWrapper = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 6px 12px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const UserInformationsInput = styled.input`
  border: none;
  font-size: 16px;
  line-height: 21.6px;

  &::placeholder {
    color: #afb2b6;
  }
`;

const UserInformationsSelect = styled.div`
  font-size: 16px;
  line-height: 21.6px;
  color: #afb2b6;
`;

const UserInformationsPreviewLabel = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserInformationsLabel = styled.p`
  font-size: 13px;
  line-height: 24.6px;
  color: #8fa2a2;
  text-transform: uppercase;
`;

export default Houses;
