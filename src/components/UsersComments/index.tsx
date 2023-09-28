import styled from 'styled-components';

import UsersCard from '../Cards/UsersCard';
import SecondaryTitle from '../SecondaryTitle';
import BasicButton from '../Buttons/BasicButton';

const UsersComments = () => {
  return (
    <>
      <UsersCard borderRadius="16px 16px 0px 0px">
        <TitleWrapper>
          <SecondaryTitle
            title="Commentaires"
            colorTitle="#000000"
            titleNumber={9}
          />
        </TitleWrapper>
        <AddCommentWrapper>
          Ajoutez un commentaire...
          <img src="/assets/comment-arrow.svg" />
        </AddCommentWrapper>
      </UsersCard>
      <CommentPreview>
        <CommentPreviewHeader>
          <img src="/assets/icon-gradiant.svg" />
          <UserCommentName>
            Nabil <UserLastName>Lotfy</UserLastName>
          </UserCommentName>
          <CommentContent $color="#8fa2a2">
            Le 16/06/2023, à 18h28
          </CommentContent>
        </CommentPreviewHeader>
        <CommentContentWrapper>
          <CommentContent $color="#282828" $margin="8px 0 24px 0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sodales tempor semper. Morbi eu ipsum sed nisi hendrerit maximus
            quis id tortor. Praesent laoreet, justo in commodo elementum, ipsum
            nisl condimentum erat, vitae varius ligula ipsum semper urna.
          </CommentContent>
          <BasicButton
            type="button"
            text="Historique des commentaires"
            fontSize="16px"
            lineHeight="21.6px"
            backgroundColor="#369C96"
            padding="6px 12px"
          />
        </CommentContentWrapper>
      </CommentPreview>
    </>
  );
};

const TitleWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
`;

const AddCommentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 20px 64px 20px;
  background-color: #f4f8f6;
  border-radius: 8px;
`;

const CommentPreview = styled.section`
  border-top: 1px solid #e5e5e5;
  padding: 40px;
  margin-top: -30px;
  background-color: #ffffff;
  border-radius: 0 0 16px 16px;
`;

const CommentPreviewHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const UserCommentName = styled.p`
  font-size: 18px;
  line-height: 22.4px;
  font-weight: 600;
  margin: 0;
`;

const UserLastName = styled.strong`
  text-transform: uppercase;
`;

const CommentContentWrapper = styled.article`
  padding: 0 48px;
`;

const CommentContent = styled.p<{ $color: string; $margin?: string }>`
  color: ${({ $color }) => $color};
  margin: ${({ $margin }) => $margin || 0};
  font-size: 16px;
  line-height: 21.6px;
  font-weight: 400;
`;

export default UsersComments;
