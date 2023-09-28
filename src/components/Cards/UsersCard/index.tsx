import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  borderRadius?: string;
}

const UsersCard = ({ children, borderRadius }: Props) => {
  return (
    <UserInformationsContent $borderRadius={borderRadius}>
      {children}
    </UserInformationsContent>
  );
};

const UserInformationsContent = styled.section<{ $borderRadius?: string }>`
  padding: 40px 40px;
  background: #ffffff;
  border-radius: ${({ $borderRadius }) => $borderRadius || '16px'};
  box-shadow: 0 4px 16px 0 rgba(176, 189, 189, 0.16);
`;

export default UsersCard;
