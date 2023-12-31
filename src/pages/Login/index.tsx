import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Form from '../../components/Form';
import Logo from '../../components/Logo';
import BasicButton from '../../components/Buttons/BasicButton';

interface LoginForm {
  email: string;
  password: string;
  isRememberMeChecked: boolean;
}

const Login = () => {
  const [formValues, setFormValue] = useState<LoginForm>({
    email: '',
    password: '',
    isRememberMeChecked: true,
  });

  const navigate = useNavigate();
  const ref = useRef(null);

  const handleForm = (event: React.FormEvent<HTMLInputElement>): void => {
    event.preventDefault();
    navigate('/dashboard');
  };

  return (
    <>
      <LoginHeader>
        <LoginNavigation>
          <LoginNavigationLink to="/" className="login_navigation_text">
            <LoginIcon src="/assets/left-arrow.svg" />
            <span>Retour vers la page d'accueil</span>
          </LoginNavigationLink>
          <Logo width="161px" height="35px" />
        </LoginNavigation>
      </LoginHeader>
      <main>
        <LoginDialog open>
          <LoginModalHeader>
            <LoginModalTitle>Se connecter</LoginModalTitle>
            <LoginModalIcon src="/assets/enter-arrow.svg" />
          </LoginModalHeader>
          <LoginModalText>
            Entrez vos identifiants pour accéder à votre espace personnel
          </LoginModalText>
          <form ref={ref}>
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
                gap="8px"
                marginBottom="0"
                lineHeight="21.6px"
                width="16px"
                height="16px"
                checked={formValues.isRememberMeChecked}
                onClick={() =>
                  setFormValue({
                    email: '',
                    password: '',
                    isRememberMeChecked: !formValues.isRememberMeChecked,
                  })
                }
                fontSize="16px"
              />
              <LoginForgotPassword to="#">
                Mot de passe oublié ?
              </LoginForgotPassword>
            </LoginRememberMeWrapper>
            <BasicButton
              onClick={handleForm}
              type="submit"
              text="Se connecter"
              textTransform="upperCase"
              padding="22px 50px"
              fontSize="18px"
              lineHeight="16.4px"
              marginTop="24px"
              backgroundColor="#369C96"
              width="100%"
            />
          </form>
        </LoginDialog>
      </main>
    </>
  );
};

const LoginHeader = styled.header`
  margin: 42px 56px;
`;

const LoginNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 780px) {
    flex-direction: column-reverse;
  }
`;

const LoginNavigationLink = styled(Link)`
  color: #369c96;
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LoginIcon = styled.img`
  width: 32px;
  height: 32px;
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
  @media (max-width: 860px) {
    padding: 24px;
    margin-top: 24px;
  }
`;

const LoginModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

const LoginModalTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 49.6px;
  margin: 0;
  @media (max-width: 860px) {
    font-size: 32px;
  }
`;

const LoginModalIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const LoginModalText = styled.p`
  color: #6a6a6a;
  font-weight: 400;
  size: 16px;
  line-height: 21.6px;
  flex-wrap: wrap;
  display: flex;
  width: 80%;
  margin-top: 8px 0 24px 0px;
`;

const LoginRememberMeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
`;

const LoginForgotPassword = styled(Link)`
  color: #369c96;
  font-size: 16px;
  font-weight: 400;
  line-height: 21.6px;
  text-decoration: none;
`;

export default Login;
