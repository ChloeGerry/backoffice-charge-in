import styled from 'styled-components';

import SecondaryTitle from '../../components/SecondaryTitle';
import UsersCard from '../../components/Cards/UsersCard';
import DocumentLabel from '../../components/DocumentLabel';
import BasicButton from '../Buttons/BasicButton';

const UserDocuments = () => {
  return (
    <UsersCard>
      <SecondaryTitle title="Documents ajoutés" colorTitle="#000000" />
      <DocumentsWrapper>
        <DocumentsContainer>
          <DocumentLabel
            documentTitle="Titre du document"
            documentName="nomdufichier.png"
          />
          <DocumentLabel
            documentTitle="Titre du document"
            documentName="nomdufichier.png"
          />
        </DocumentsContainer>
        <DocumentsContainer>
          <DocumentLabel
            documentTitle="Titre du document"
            documentName="nomdufichier.png"
          />
          <DocumentLabel
            documentTitle="Titre du document"
            documentName="nomdufichier.png"
          />
        </DocumentsContainer>
        <DocumentsContainer>
          <DocumentLabel
            documentTitle="Titre du document"
            documentName="nomdufichier.png"
          />
          <DocumentLabel
            documentTitle="Titre du document"
            documentName="nomdufichier.png"
          />
        </DocumentsContainer>
      </DocumentsWrapper>
      <OthersDocumentsWrapper>
        <OthersDocumentsLabel>Autres documents</OthersDocumentsLabel>
        <DocumentLabel documentName="nomdufichier.png" gap="0" />
        <DocumentLabel documentName="nomdufichier.png" gap="0" />
        <DocumentLabel documentName="nomdufichier.png" gap="0" />
      </OthersDocumentsWrapper>
      <BasicButton
        type="button"
        text="Modifier les documents"
        fontSize="20px"
        lineHeight="25.2px"
        backgroundColor="#369C96"
        padding="10px 22px"
        marginTop="24px"
      />
    </UsersCard>
  );
};

const DocumentsWrapper = styled.div`
  display: flex;
  margin: 24px 0 48px 0;
  gap: 190px;
`;

const DocumentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const OthersDocumentsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const OthersDocumentsLabel = styled.p`
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  margin: 0;
`;

export default UserDocuments;
