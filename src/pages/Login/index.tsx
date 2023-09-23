import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Form from '../../components/Form';
import Button from '../../components/Button';

interface LoginForm {
  email: string;
  password: string;
  isRememberMeChecked: boolean;
}

const Login = () => {
  const [formValues, setFormValue] = useState<LoginForm>({
    email: '',
    password: '',
    isRememberMeChecked: false,
  });
  const navigate = useNavigate();

  const handleForm = (event: React.FormEvent<HTMLInputElement>): void => {
    event.preventDefault();
    console.log('event', event.target);
    navigate('/dashboard');
  };

  return (
    <>
      <header>
        <LoginNavigation>
          <LoginNavigationLink to="/" className="login_navigation_text">
            <LoginIcon src="/assets/left-arrow.svg" />
            <span>Retour vers la page d'accueil</span>
          </LoginNavigationLink>
          <LoginNavigationLogo src="/assets/logo.svg" />
        </LoginNavigation>
      </header>
      <main>
        <LoginDialog open>
          <LoginModalHeader>
            <LoginModalTitle>Se connecter</LoginModalTitle>
            <LoginModalIcon src="/assets/enter-arrow.svg" />
          </LoginModalHeader>
          <LoginModalText>
            Entrez vos identifiants pour accéder à votre espace personnel
          </LoginModalText>
          <form>
            <Form
              htmlFor="email"
              label="Adresse mail"
              id="email"
              type="email"
              placeholder="adresse@email.com"
              isInputPassword={false}
            />
            <Form
              htmlFor="password"
              label="Mot de passe"
              id="password"
              type="password"
              placeholder="******"
              isInputPassword={true}
              src="/assets/eye-icon.svg"
            />
            <LoginRememberMeWrapper>
              <Form
                htmlFor="checkbox"
                label="Se souvenir de moi"
                id="checkbox"
                type="checkbox"
                placeholder=""
                isInputPassword={false}
                flexDirection="row-reverse"
                checked={true}
                fontSize="16px"
              />
              <LoginRememberMe>Mot de passe oublié ?</LoginRememberMe>
            </LoginRememberMeWrapper>
            <Button onClick={handleForm} type="submit" text="SE CONNECTER" />
          </form>
        </LoginDialog>
      </main>
    </>
  );
};

export default Login;

const LoginNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 42px 56px;
`;

const LoginNavigationLink = styled(Link)`
  color: #369c96;
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  display: flex;
  align-items: center;
`;

const LoginIcon = styled.img`
  padding-right: 10px;
  width: 32px;
  height: 32px;
`;

const LoginNavigationLogo = styled.img`
  width: 161px;
  height: 34.86px;
`;

const LoginDialog = styled.dialog`
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  margin: 0;
  border-radius: 8px;
  border: none;
  background-color: #ffffff;
  box-shadow: 0px 0px 16px rgba(167, 184, 186, 0.25);
  padding: 64px 56px;
`;

const LoginModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const LoginModalTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 49.6px;
  margin: 0;
`;

const LoginModalIcon = styled.img`
  width: 36px;
  height: 36px;
  padding-left: 8px;
`;

const LoginModalText = styled.p`
  color: #6a6a6a;
  font-weight: 400;
  size: 16px;
  line-height: 21.6px;
  flex-wrap: wrap;
  display: flex;
  width: 80%;
  margin: 10px auto 32px 0px;
`;

const LoginRememberMeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`;

const LoginRememberMe = styled.span`
  color: #369c96;
  font-size: 16px;
  font-weight: 400;
  line-height: 21.6px;
`;
