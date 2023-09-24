import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <ErrorWrapper>
      <ErrorTitle>404</ErrorTitle>
      <div>Cette page n'existe pas...</div>
      <ErrorLink to="/dashboard">Retourner sur la page d'accueil</ErrorLink>
    </ErrorWrapper>
  );
};

const ErrorWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorTitle = styled.h1`
  color: #369c96;
  font-size: 100px;
`;

const ErrorLink = styled(Link)`
  color: #369c96;
  text-decoration: none;
  margin-top: 24px;
`;

export default Error;
