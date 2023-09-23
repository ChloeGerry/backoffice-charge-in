import styled from 'styled-components';
import { useState } from 'react';

import NavigationLink from '../NavigationLink';
import NavigationPart from '../NavigationPart';
import Logo from '../Logo';

interface LinksDropdown {
  houses: boolean;
  appartments: boolean;
  business: boolean;
}

const NavigationLeft = () => {
  const [isNavigationLinkCollapse, setNavigationLinkCollapse] =
    useState<LinksDropdown>({
      houses: false,
      appartments: false,
      business: false,
    });

  console.log('isNavigationLinkCollapse', isNavigationLinkCollapse);

  return (
    <NavigationWrapper>
      <Logo width="172px" height="36px" />
      <NavigationLink
        src="/assets/homePage-icon.svg"
        alt="Home page icon"
        linkName="Accueil"
        backgroundColor="rgba(0, 0, 0, 0.3)"
        margin="30px 0 12px 0"
        to="/dashboard"
      />
      <NavigationPart partTitle="Opportunités" />
      <NavigationLink
        src="/assets/house-icon.svg"
        alt="House icon"
        linkName="Maisons"
        subMenu={[
          { label: 'en cours', to: '/housesInProgress' },
          { label: 'archivé', to: '/housesArchived' },
        ]}
        to="/houses"
        onClick={() =>
          setNavigationLinkCollapse({
            houses: !isNavigationLinkCollapse.houses,
            appartments: isNavigationLinkCollapse.appartments,
            business: isNavigationLinkCollapse.business,
          })
        }
      />
      {isNavigationLinkCollapse.houses && (
        <NavigationDropdown>coucou</NavigationDropdown>
      )}
      <NavigationLink
        src="/assets/house-icon.svg"
        alt="House icon"
        linkName="Appartement"
        subMenu={[
          { label: 'en cours', to: '/appartmentsInProgress' },
          { label: 'archivé', to: '/appartmentsArchived' },
        ]}
        to="/appartments"
        onClick={() =>
          setNavigationLinkCollapse({
            houses: isNavigationLinkCollapse.houses,
            appartments: !isNavigationLinkCollapse.appartments,
            business: isNavigationLinkCollapse.business,
          })
        }
      />
      <NavigationLink
        src="/assets/business-icon.svg"
        alt="Business icon"
        linkName="Etudes"
        subMenu={[
          { label: 'en cours', to: '/businessProgress' },
          { label: 'archivé', to: '/businessArchived' },
        ]}
        to="/business"
        onClick={() =>
          setNavigationLinkCollapse({
            houses: isNavigationLinkCollapse.houses,
            appartments: isNavigationLinkCollapse.appartments,
            business: !isNavigationLinkCollapse.business,
          })
        }
      />
      <NavigationPart partTitle="Utilisateurs" />
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
      <NavigationPart partTitle="Données" />
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
  );
};

const NavigationWrapper = styled.nav`
  background-color: #0c354f;
  width: 300px;
  padding: 36px 24px 42px 24px;
`;

const NavigationDropdown = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  padding: 12px 4px 12px 4px;
`;

export default NavigationLeft;
