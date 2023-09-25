import styled from 'styled-components';

import SecondaryTitle from '../SecondaryTitle';
import Button from '../Button';

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
        <Button
          type="button"
          $variant="secondary"
          $padding="10px 16px"
          $width="32.1%"
          $fontSize="16px"
          $lineHeight="24.6px"
          $display="flex"
          $alignItems="center"
          $justifyContent="center"
          $gap="10px"
          isButtonContainIcon="true"
          src="/assets/person-icon-button.svg"
          text="Ajouter un installateur"
        />
        <Button
          type="button"
          $variant="primary"
          $padding="10px 16px"
          $width="32.1%"
          $fontSize="16px"
          $lineHeight="24.6px"
          $display="flex"
          $alignItems="center"
          $justifyContent="center"
          $gap="10px"
          isButtonContainIcon="true"
          src="/assets/document-icon-button.svg"
          text="Ajouter une étude"
        />
        <Button
          type="button"
          $variant="secondary"
          $padding="10px 16px"
          $width="32.1%"
          $fontSize="16px"
          $lineHeight="24.6px"
          $display="flex"
          $alignItems="center"
          $justifyContent="center"
          $gap="10px"
          isButtonContainIcon="true"
          src="/assets/chargin-station-button.svg"
          text="Ajouter une borne"
        />
        <Button
          type="button"
          $variant="primary"
          $padding="10px 16px"
          $width="32.1%"
          $fontSize="16px"
          $lineHeight="24.6px"
          $display="flex"
          $alignItems="center"
          $justifyContent="center"
          $gap="10px"
          isButtonContainIcon="true"
          src="/assets/car-icon-button.svg"
          text="Ajouter un véhicule"
        />
        <Button
          type="button"
          $variant="secondary"
          $padding="10px 16px"
          $width="32.1%"
          $fontSize="16px"
          $lineHeight="24.6px"
          $display="flex"
          $alignItems="center"
          $justifyContent="center"
          $gap="10px"
          isButtonContainIcon="true"
          src="/assets/accessories-icon-button.svg"
          text="Ajouter un accessoire"
        />
        <Button
          type="button"
          $variant="primary"
          $padding="10px 16px"
          $width="32.1%"
          $fontSize="16px"
          $lineHeight="24.6px"
          $display="flex"
          $alignItems="center"
          $justifyContent="center"
          $gap="10px"
          isButtonContainIcon="true"
          src="/assets/car-icon-button.svg"
          text="Ajouter un objectif"
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
