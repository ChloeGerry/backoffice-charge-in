import styled from 'styled-components';

interface Props {
  documentTitle?: string;
  documentName: string;
  gap?: string;
}

const DocumentLabel = ({ documentTitle, documentName, gap }: Props) => {
  return (
    <DocumentLabelWrapper $gap={gap}>
      {documentTitle && <DocumentTitle>{documentTitle}</DocumentTitle>}
      <DocumentName>{documentName}</DocumentName>
    </DocumentLabelWrapper>
  );
};

const DocumentLabelWrapper = styled.article<{ $gap?: string }>`
  display: flex;
  gap: ${({ $gap }) => $gap || '4px'};
  flex-direction: column;
`;

const DocumentTitle = styled.p`
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  margin: 0;
`;
const DocumentName = styled.p`
  font-size: 16px;
  line-height: 21.6px;
  font-weight: 400;
  color: #369c96;
  background-color: #f4f8f6;
  padding: 2px 8px;
  border-radius: 4px;
  margin: 0;
`;

export default DocumentLabel;
