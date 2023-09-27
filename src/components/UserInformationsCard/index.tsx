import styled from 'styled-components';

import UsersCard from '../Cards/UsersCard';
import UserLabel from '../UserLabel';
import SecondaryTitle from '../SecondaryTitle';

const UserInformationsCard = () => {
  return (
    <UserInformationsWrapper>
      <UsersCard>
        <SecondaryTitle
          title="Informations personnelles"
          colorTitle="#000000"
          margin="0 0 24px 0"
        />
        <UserInformationsCardWrapper $gap="18px">
          <UserLabel
            label="Prénom"
            value="Charles"
            lineHeight="22.5px"
            color="#AFB2B6"
          />
          <UserLabel
            label="Nom"
            value="Dupont"
            lineHeight="22.5px"
            color="#AFB2B6"
          />
          <UserLabel
            label="Code postal"
            value={33400}
            lineHeight="22.5px"
            color="#AFB2B6"
          />
          <UserLabel
            label="Adresse"
            value="Place de la bourse, 33000 Bordeaux"
            lineHeight="22.5px"
            color="#AFB2B6"
          />
          <UserLabel
            label="E-mail"
            value="charles-dupont@gmail.com"
            lineHeight="22.5px"
            color="#AFB2B6"
            containAnIcon={true}
            src="/assets/mail-icon.svg"
          />
          <UserLabel
            label="Téléphone"
            value="0123456789"
            lineHeight="22.5px"
            color="#369C96"
            containAnIcon={true}
            src="/assets/phone-icon.svg"
          />
        </UserInformationsCardWrapper>
      </UsersCard>
      <UsersCard>
        <SecondaryTitle
          title="Réponses au questionnaire"
          colorTitle="#000000"
          margin="0 0 30px 0"
        />
        <UserInformationsCardWrapper $gap="16px">
          <FormAnswersDiv>
            <UserLabel
              label="Je vis dans"
              value="Un appartement"
              lineHeight="22.5px"
              color="#AFB2B6"
            />
            <UserLabel
              label="Ma place de parking"
              value="À l'intérieur"
              lineHeight="22.5px"
              color="#AFB2B6"
            />
            <UserLabel
              label="Je suis"
              value="Propriétaire"
              lineHeight="22.5px"
              color="#AFB2B6"
            />
          </FormAnswersDiv>
          <UserLabel
            label="Notification d'un refus de la part de votre copropriété ?"
            value="Non"
            lineHeight="22.5px"
            color="#AFB2B6"
          />
          <UserLabel
            label="Achat"
            value="J'ai commandé mon véhicule électrique mais je ne l'ai pas encore"
            lineHeight="22.5px"
            color="#AFB2B6"
          />
          <UserLabel
            label="Modèle"
            value="Mercedes-EQS-SUV-500-4MATIC"
            lineHeight="22.5px"
            color="#AFB2B6"
          />
          <FormAnswersDiv>
            <UserLabel
              label="Usage"
              value="Autoroute & ville"
              lineHeight="22.5px"
              color="#AFB2B6"
            />
            <UserLabel
              label="Capacité nominale de la batterie"
              value="118kWh"
              lineHeight="22.5px"
              color="#AFB2B6"
            />
          </FormAnswersDiv>
          <UserLabel
            label="Délais d'installation de la borne"
            value="3 mois"
            lineHeight="22.5px"
            color="#AFB2B6"
          />
          <UserLabel
            label="Avez-vous déjà contacté un installateur ?"
            value="Oui"
            lineHeight="22.5px"
            color="#AFB2B6"
          />
          <FormAnswersDiv>
            <UserLabel
              label="Le prix"
              value="##€"
              lineHeight="22.5px"
              color="#AFB2B6"
            />
            <UserLabel
              label="Installateur"
              value="Information ici"
              lineHeight="22.5px"
              color="#AFB2B6"
            />
            <UserLabel
              label="Modèle borne"
              value="Information ici"
              lineHeight="22.5px"
              color="#AFB2B6"
            />
            <UserLabel
              label="Marque borne"
              value="Information ici"
              lineHeight="22.5px"
              color="#AFB2B6"
            />
          </FormAnswersDiv>
        </UserInformationsCardWrapper>
      </UsersCard>
    </UserInformationsWrapper>
  );
};

const UserInformationsWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

const FormAnswersDiv = styled.div`
  display: flex;
  gap: 48px;
  align-items: center;
`;

const UserInformationsCardWrapper = styled.div<{
  $gap: string;
}>`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap};
`;

export default UserInformationsCard;
