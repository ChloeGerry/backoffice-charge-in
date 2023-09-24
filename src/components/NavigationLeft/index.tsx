import styled from 'styled-components';

import NavigationLink from '../NavigationLink';
import NavigationPartName from '../NavigationPartName';
import Logo from '../Logo';

const NavigationLeft = () => {
  return (
    <NavigationSectionWrapper>
      <Logo width="172px" height="36px" />
      <NavigationWrapper>
        <NavigationLink
          src="/assets/homePage-icon.svg"
          alt="Home page icon"
          linkName="Accueil"
          borderRadius="8px"
          to="/dashboard"
        />
        <NavigationPartName partTitle="Opportunités" />
        <NavigationLink
          src="/assets/house-icon.svg"
          alt="House icon"
          linkName="Maisons"
          subMenu={[
            { label: 'En cours', to: '/housesInProgress' },
            { label: 'Archivés', to: '/housesArchived' },
          ]}
        />
        <NavigationLink
          src="/assets/house-icon.svg"
          alt="House icon"
          linkName="Appartement"
          subMenu={[
            { label: 'En cours', to: '/appartmentsInProgress' },
            { label: 'Archivé', to: '/appartmentsArchived' },
          ]}
        />
        <NavigationLink
          src="/assets/business-icon.svg"
          alt="Business icon"
          linkName="Etudes"
          subMenu={[
            { label: 'En cours', to: '/businessProgress' },
            { label: 'Archivé', to: '/businessArchived' },
          ]}
        />
        <NavigationPartName partTitle="Utilisateurs" />
        <NavigationLink
          src="/assets/admin-icon.svg"
          alt="Administrator icon"
          linkName="CEO & Admins"
          to="/admins"
        />
        <NavigationLink
          src="/assets/person-icon.svg"
          alt="Person icon"
          linkName="Projects Managers"
          to="/projects"
        />
        <NavigationLink
          src="/assets/person-icon.svg"
          alt="Person icon"
          linkName="Installateurs"
          to="/installers"
        />
        <NavigationLink
          src="/assets/person-icon.svg"
          alt="Person icon"
          linkName="Clients B2C"
          to="/b2c-clients"
        />
        <NavigationPartName partTitle="Données" />
        <NavigationLink
          src="/assets/flash-icon.svg"
          alt="Flash icon"
          linkName="Bornes"
          to="/terminals"
        />
        <NavigationLink
          src="/assets/car-icon.svg"
          alt="Car icon"
          linkName="Véhicules"
          to="/cars"
        />
        <NavigationLink
          src="/assets/accessories-icon.svg"
          alt="Accessories icon"
          linkName="Accessoires"
          to="/accessories"
        />
        <NavigationLink
          src="/assets/goals-icon.svg"
          alt="Goals icon"
          linkName="Objectifs"
          to="/goals"
        />
      </NavigationWrapper>
    </NavigationSectionWrapper>
  );
};

const NavigationSectionWrapper = styled.section`
  background-color: #0c354f;
  width: 300px;
  padding: 36px 24px 42px 24px;
`;

const NavigationWrapper = styled.nav`
  margin-top: 30px;
`;

export default NavigationLeft;
