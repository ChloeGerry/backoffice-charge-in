import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const UsersCard = ({ children }: Props) => {
  return <UserInformationsContent>{children}</UserInformationsContent>;
};

const UserInformationsContent = styled.section`
  padding: 40px 40px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 16px 0 rgba(176, 189, 189, 0.16);
`;

export default UsersCard;
