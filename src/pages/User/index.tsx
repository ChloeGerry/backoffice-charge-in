import styled from 'styled-components';

import NavigationLeft from '../../components/NavigationLeft';
import Header from '../../components/layouts/Header';
import MainTitle from '../../components/MainTitle';
import SlideShowButton from '../../components/Buttons/SlideshowButton';
import UserInformationsCard from '../../components/UserInformationsCard';
import UsersCard from '../../components/Cards/UsersCard';
import SecondaryTitle from '../../components/SecondaryTitle';
import ModelsCard from '../../components/Cards/ModelsCard';
import List from '../../components/List';
import BasicButton from '../../components/Buttons/BasicButton';

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
            <UsersCard>
              <TitleWrapper>
                <SecondaryTitle
                  title="Commentaires"
                  colorTitle="#000000"
                  titleNumber={9}
                />
              </TitleWrapper>
              <CommentsWrapper>
                Ajoutez un commentaire...
                <img src="/assets/comment-arrow.svg" />
              </CommentsWrapper>
            </UsersCard>

            <UsersCard>
              <SecondaryTitle title="Documents ajoutés" colorTitle="#000000" />
              <DocumentsWrapper>
                {/* <UserLabel
                  label="Titre du document"
                  value="nomdufichier.png"
                  color="#369C96"
                  backgroundColor="#F4F8F6"
                  padding="2px 8px"
                />
                <UserLabel
                  label="Titre du document"
                  value="nomdufichier.png"
                  color="#369C96"
                  backgroundColor="#F4F8F6"
                  padding="2px 8px"
                />
                <UserLabel
                  label="Titre du document"
                  value="nomdufichier.png"
                  color="#369C96"
                  backgroundColor="#F4F8F6"
                  padding="2px 8px"
                />
                <UserLabel
                  label="Titre du document"
                  value="nomdufichier.png"
                  color="#369C96"
                  backgroundColor="#F4F8F6"
                  padding="2px 8px"
                /> */}
              </DocumentsWrapper>
              <OthersDocumentsWrapper>
                <OthersDocumentsLabel> Autres documents</OthersDocumentsLabel>
                <p>nomdufichier.png</p>
                <p>nomdufichier.png</p>
                <p>nomdufichier.png</p>
              </OthersDocumentsWrapper>
            </UsersCard>
            <UsersCard>
              <SecondaryTitle title="Borne choisie" colorTitle="#000000" />
              <ModelsCard
                src="/assets/terminal-exemple.svg"
                title="Pulsar Plus"
                price="2200.00€"
              >
                <List />
              </ModelsCard>
              <BasicButton
                type="button"
                text="Modifier la borne"
                fontSize="20px"
                lineHeight="25.2px"
                backgroundColor="#369C96"
                padding="10px 22px"
              />
            </UsersCard>
            <UsersCard>
              <SecondaryTitle
                title="Installateur choisi"
                colorTitle="#000000"
              />
              <ModelsCard
                src="/assets/installer-exemple.svg"
                title="Pulsar Plus"
                price="2200.00€"
              >
                <List />
              </ModelsCard>
              <BasicButton
                type="button"
                text="Modifier l'installateur"
                fontSize="20px"
                lineHeight="25.2px"
                backgroundColor="#369C96"
                padding="10px 22px"
              />
            </UsersCard>
            <UsersCard>
              <SecondaryTitle title="Remise de prix" colorTitle="#000000" />
              <FormDiscountWrapper>
                <FormDiscountLabel htmlFor="discount">
                  Indiquez la remise à ajouter
                </FormDiscountLabel>
                <FormDiscountInput
                  id="discount"
                  type="number"
                  placeholder="000"
                />
                <BasicButton
                  type="button"
                  text="Enregistrer"
                  fontSize="20px"
                  lineHeight="25.2px"
                  backgroundColor="#369C96"
                  padding="10px 22px"
                  marginTop="14px"
                />
              </FormDiscountWrapper>
            </UsersCard>
            <UsersCard>
              <SecondaryTitle title="Accessoires" colorTitle="#000000" />
              <List />
              <BasicButton
                type="button"
                text="Modifier les accessoires"
                fontSize="20px"
                lineHeight="25.2px"
                backgroundColor="#369C96"
                padding="10px 22px"
                marginTop="24px"
              />
            </UsersCard>
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

const UserSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 30px 0;
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
`;

const CommentsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 20px 64px 20px;
  background-color: #f4f8f6;
  border-radius: 8px;
`;

const DocumentsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 18px;
`;

const OthersDocumentsWrapper = styled.div`
  display: flex;
`;

const OthersDocumentsLabel = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  line-height: 21.6px;
`;

const FormDiscountWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-top: 24px;
  gap: 10px;
`;

const FormDiscountLabel = styled.label`
  line-height: 25.31px;
  font-size: 18px;
  font-weight: 400;
`;

const FormDiscountInput = styled.input`
  border: 1px solid #dce6e5;
  border-radius: 3px;
`;

export default User;
