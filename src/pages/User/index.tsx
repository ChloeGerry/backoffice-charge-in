import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../utils/store';
import { useEffect } from 'react';

import NavigationLeft from '../../components/Navigation/NavigationLeft';
import NavigationProfile from '../../components/Navigation/NavigationProfile';
import Header from '../../components/layouts/Header';
import MainTitle from '../../components/MainTitle';
import SlideShowButton from '../../components/Buttons/SlideshowButton';
import UserInformationsCard from '../../components/UserInformationsCard';
import UsersCard from '../../components/Cards/UsersCard';
import SecondaryTitle from '../../components/SecondaryTitle';
import ModelsCard from '../../components/Cards/ModelsCard';
import List from '../../components/List';
import BasicButton from '../../components/Buttons/BasicButton';
import BorderButton from '../../components/Buttons/BorderButton';
import UsersComments from '../../components/UsersComments';
import UserDocuments from '../../components/UserDocuments';
import {
  selectUserProfile,
  fetchUserProfile,
} from '../../features/usersReducers';

const User = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  const usersProfiles = useSelector(selectUserProfile);

  console.log('usersProfiles', usersProfiles);

  return (
    <UserWrapper>
      <NavigationLeft />
      <UserContentWrapper>
        <Header />
        <UserMain>
          <NavigationProfile />
          <MainTitle
            src="/assets/user-icon.svg"
            title="Profil : Nom + Prénom"
          />
          <ButtonsWrapper>
            <SlideShowButton text="Etape 1" backgroundColor="#304399" />
            <RightButtonsWrapper>
              <BorderButton text="Status" />
              <SlideShowButton
                text="Envoyer un mail"
                backgroundColor="#369C96"
              />
            </RightButtonsWrapper>
          </ButtonsWrapper>
          <UserSection>
            <UserInformationsCard />
            <UsersComments />
            <UserDocuments />
            <UsersCard>
              <SecondaryTitle title="Borne choisie" colorTitle="#000000" />
              <ModelsCard
                src="/assets/terminal-exemple.svg"
                title="Pulsar Plus"
                price="2200.00€"
              >
                <List>
                  <li>
                    <ListText>
                      Puissance max pour votre installation: 22 kW
                    </ListText>
                  </li>
                  <li>
                    <ListText>Contrôle d'accès: RFID</ListText>
                  </li>

                  <li>
                    <ListText>Temps de charge: 6h30</ListText>
                  </li>
                  <li>
                    <ListText>Optimisation coût de recharge: Oui</ListText>
                  </li>

                  <li>
                    <ListText>Borne connectée</ListText>
                  </li>
                </List>
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
                <List>
                  <li>
                    <ListText>Chez vous à partir de [date]</ListText>
                  </li>
                  <li>
                    <ListText>
                      Votre installateur est à Xkm de chez vous
                    </ListText>
                  </li>

                  <li>
                    <ListText>Garantie : 2 ans</ListText>
                  </li>
                  <li>
                    <ListText>Installateur certifié</ListText>
                  </li>
                </List>
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
              <List
                display="flex"
                justifyContent="space-between"
                margin="24px 0 0 0 0"
              >
                <ListItemAccessories>
                  <li>
                    <ListText>
                      Nom de l'accessoire{' '}
                      <ListAccessoriesPrice>##€</ListAccessoriesPrice>
                    </ListText>
                  </li>
                  <li>
                    <ListText>
                      Nom de l'accessoire{' '}
                      <ListAccessoriesPrice>##€</ListAccessoriesPrice>
                    </ListText>
                  </li>
                </ListItemAccessories>
                <ListItemAccessories>
                  <li>
                    <ListText>
                      Nom de l'accessoire{' '}
                      <ListAccessoriesPrice>##€</ListAccessoriesPrice>
                    </ListText>
                  </li>
                  <li>
                    <ListText>
                      Nom de l'accessoire{' '}
                      <ListAccessoriesPrice>##€</ListAccessoriesPrice>
                    </ListText>
                  </li>
                </ListItemAccessories>
                <ListItemAccessories>
                  <li>
                    <ListText>
                      Nom de l'accessoire{' '}
                      <ListAccessoriesPrice>##€</ListAccessoriesPrice>
                    </ListText>
                  </li>
                </ListItemAccessories>
              </List>
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
          <NavigationProfile />
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

const RightButtonsWrapper = styled.div`
  display: flex;
  gap: 38px;
`;

const UserSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 30px 0;
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

const ListItemAccessories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ListText = styled.span`
  color: #000000;
`;

const ListAccessoriesPrice = styled.span`
  color: #369c96;
  padding-left: 16px;
`;

export default User;
