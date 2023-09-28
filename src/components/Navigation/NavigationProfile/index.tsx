import styled from 'styled-components';

const NavigationProfile = () => {
  return (
    <NavigationProfileWrapper>
      <NavigationProfileDirection>
        <img src="/assets/left-icon.svg" alt="left icon" />
        <NavigationProfileTextWrapper>
          <NavigationProfileText $color="#8FA2A2">
            Précédent
          </NavigationProfileText>
          <NavigationProfileText>Prénom Nom</NavigationProfileText>
        </NavigationProfileTextWrapper>
      </NavigationProfileDirection>
      <NavigationProfileDirection>
        <div>
          <NavigationProfileText $color="#8FA2A2">
            Suivant
          </NavigationProfileText>
          <NavigationProfileText>Prénom Nom</NavigationProfileText>
        </div>
        <img src="/assets/right-icon.svg" alt="right icon" />
      </NavigationProfileDirection>
    </NavigationProfileWrapper>
  );
};

const NavigationProfileWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
`;

const NavigationProfileDirection = styled.div`
  display: flex;
  gap: 13px;
`;

const NavigationProfileTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const NavigationProfileText = styled.p<{ $color?: string }>`
  margin: 0;
  font-size: 16px;
  line-height: 21.6px;
  font-weight: 400;
  color: ${({ $color }) => $color || '#000000'};
`;

export default NavigationProfile;
