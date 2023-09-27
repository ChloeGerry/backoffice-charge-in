import styled from 'styled-components';

import SecondaryTitle from '../SecondaryTitle';
import IconButton from '../Buttons/IconButton';

const Actions = () => {
  return (
    <section>
      <SecondaryTitle
        title="Actions "
        importantPart="rapides"
        colorTitle="#000000"
        colorImportantPart="#369C96"
      />
      <ButtonsWrapper>
        <IconButton
          src="/assets/person-icon-white.svg"
          text="Ajouter un installateur"
          backgroundColor="#304399"
        />
        <IconButton
          src="/assets/document-icon-button.svg"
          text="Ajouter une étude"
          backgroundColor="#369C96"
        />
        <IconButton
          src="/assets/charge-in-station-button.svg"
          text="Ajouter une borne"
          backgroundColor="#304399"
        />
        <IconButton
          src="/assets/car-icon-button.svg"
          text="Ajouter un véhicule"
          backgroundColor="#369C96"
        />
        <IconButton
          src="/assets/accessories-icon-button.svg"
          text="Ajouter un accessoire"
          backgroundColor="#304399"
        />
        <IconButton
          src="/assets/car-icon-button.svg"
          text="Ajouter un objectif"
          backgroundColor="#369C96"
        />
      </ButtonsWrapper>
    </section>
  );
};

const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 19px;
  margin: 24px 0 40px 0;
`;

export default Actions;
