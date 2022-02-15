import styled, { css } from 'styled-components';
import { darken } from 'polished';

const socialLoginLink = css`
  flex-grow: 1;
  padding-bottom: 0.5rem;
  padding-top: 0.6rem;
  border-radius: 2px;

  a {
    text-decoration: none;
  }

  @media (max-width: 47.9375em) {
    padding-bottom: 0.3rem;
  }
`;

export const StyledMainContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
  @media (max-width: 47.9375em) {
    margin-top: 0;
  }
`;

export const FormWrapper = styled.div`
  width: 72rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f4f7;

  @media (min-width: 61.9375em) and (max-width: 74.9375em) {
    width: 60rem;
  }
`;

export const FormBottomContent = styled.div`
  padding: 0 4rem 2.3rem 4rem;

  @media (max-width: 47.9375em) {
    width: 100%;
    padding: 0 1.2rem 2.3rem 1.2rem;
  }
`;

export const Form = styled.div`
  width: 41%;
  background-color: #fff;
  border-radius: 8px;
  border: 2px solid #6e5aea;

  @media (min-width: 61.9375em) and (max-width: 74.9375em) {
    width: 48%;
  }

  @media (max-width: 61.875em) {
    width: 30rem;
  }

  @media (max-width: 47.9375em) {
    width: 100%;
  }
`;

export const FormHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 2.2rem 4rem 0.9rem 4rem;
  font-weight: bold;
  color: #0c0c0c;
  font-size: 1.5rem;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 47.9375em) {
    padding-top: 2rem;
  }
`;

export const SocialLogin = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.3rem;
`;

export const SocialLoginHeader = styled.div`
  font-size: 1rem;
  padding-bottom: 1.4rem;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 47.9375em) {
    padding-bottom: 1.3rem;
  }
`;

export const SocialLoginLinks = styled.div`
  width: 100%;
  display: flex;
`;

export const FacebookSignIn = styled.div`
  ${socialLoginLink}
  padding-right: 1.2rem;
  padding-left: 1.2rem;
  display: flex;
  justify-content: center;
  background-color: #43639a;
  border-color: #43639a;
  color: #fff;

  .fa-facebook-f {
    font-size: 1.6rem;
    color: #fff;
  }
`;

export const GithubSignIn = styled.div`
  ${socialLoginLink}
  padding-right: 1.2rem;
  padding-left: 1.2rem;
  display: flex;
  justify-content: center;
  margin: 0 0.7rem;
  background-color: #444454;
  border-color: #444454;
  color: #fff;

  .fa-github {
    font-size: 1.6rem;
    color: #fff;
    padding: 0;
  }
`;

export const GoogleSignIn = styled.div`
  ${socialLoginLink}
  background-color: #fff;
  font-family: 'Arimo', sans-serif;
  border: 0.1rem solid #c9cbce;

  img {
    padding-left: 1.3rem;
    padding-right: 0.9rem;
  }

  a {
    display: flex;
    align-items: center;
    padding-left: 1.5rem rem;
    min-width: 121px;
    background-color: #fff;
    border-color: #c9cbce;
    color: rgba(0, 0, 0, 0.54);
    font-weight: 500;
  }

  span {
    font-size: 1rem;
    padding: 0.5rem;
    letter-spacing: 0.02rem;

    @media (max-width: 47.9375em) {
      margin-left: auto;
      margin-right: auto;
      width: 38%;
      font-size: 0.9rem;
    }
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.3rem;
  font-family: 'Inter', sans-serif;

  input {
    padding: 0.8rem;
    background-color: #fff;
    color: #323241;
    border: 1px solid #737479;
    border-radius: 0.2rem;

    @include respond(max-767px) {
      padding: 0.7rem;
    }
  }

  label {
    color: #0c0c0c;
    font-size: 0.8rem;
    line-height: 1.3rem;
    font-weight: 400;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.4rem;
`;

export const UserRememberMe = styled.div`
  display: flex;
  align-items: center;

  input {
    &[type='checkbox'] {
      width: 14px;
      height: 14px;
      min-width: 22px;
      min-height: 22px;
      margin: 0.1rem 0.6rem 0.1rem 0;
      border: 1px solid #737479;
      border-radius: 0.2rem;
    }
  }

  label {
    color: #797676;
    font-size: 1rem;
    font-family: 'GFS Neohellenic', sans-serif;
  }
`;

export const ForgotPassword = styled.div`
  font-size: 0.7rem;
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  a {
    text-decoration: none;
    color: #6e5aea;
  }
`;

export const Button = styled.button`
  font-weight: 700;
  background-color: #6e5aea;
  border: 1px solid #6e5aea;
  border-radius: 9px;
  padding: 0.7rem 1.4rem;
  color: #fff;
`;

export const CreateAccount = styled.div`
  width: 41%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  font-size: 0.8rem;
  font-family: 'Inter', sans-serif;

  span {
    color: #595a60;
    font-weight: 300;
  }

  a {
    text-decoration: none;
    padding-left: 0.3rem;
    color: ${darken(0.05, '#3018c0')};
    font-weight: 400;
  }

  @media (min-width: 61.9375em) and (max-width: 74.9375em) {
    width: 48%;
  }

  @media (max-width: 47.9375em) {
    width: 100%;
  }
`;
