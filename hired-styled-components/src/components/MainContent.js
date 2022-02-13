import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  StyledMainContent,
  FormWrapper,
  Form,
  FormHeader,
  FormBottomContent,
  SocialLogin,
  SocialLoginHeader,
  SocialLoginLinks,
  FacebookSignIn,
  GithubSignIn,
  GoogleSignIn,
  FormField,
  Actions,
  UserRememberMe,
  ForgotPassword,
  Button,
  CreateAccount
} from '../styles/MainContent.styled';

library.add(fab);

export default function MainContent() {
  return (
    <>
      <StyledMainContent>
        <FormWrapper>
          <Form>
            <FormHeader>
              <h3>Log In</h3>
            </FormHeader>
            <FormBottomContent>
              <SocialLogin>
                <SocialLoginHeader>
                  <h5>Log in to Hired with...</h5>
                </SocialLoginHeader>
                <SocialLoginLinks>
                  <FacebookSignIn>
                    <a href="#">
                      <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                    </a>
                  </FacebookSignIn>
                  <GithubSignIn>
                    <a href="#">
                      <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                  </GithubSignIn>
                  <GoogleSignIn>
                    <a href="#">
                      <img alt="Google Sign In" src="./images/google.svg" />
                      <span>Google</span>
                    </a>
                  </GoogleSignIn>
                </SocialLoginLinks>
              </SocialLogin>
              <FormField>
                <label>Email</label>
                <input autocomplete="off" type="email" id="user-email" />
              </FormField>
              <FormField>
                <label>Password</label>
                <input autocomplete="off" type="password" id="user-password" />
              </FormField>
              <Actions>
                <UserRememberMe>
                  <input type="checkbox" value="1" id="user-remember-me" />
                  <label for="user-remember-me">Remember me</label>
                  <br />
                </UserRememberMe>
                <ForgotPassword>
                  <a href="#">Don't know your password?</a>
                </ForgotPassword>
              </Actions>
              <Button>Sign In</Button>
            </FormBottomContent>
          </Form>
          <CreateAccount>
            <span>Don't have an account? </span>
            <a href="#">Apply now!</a>
          </CreateAccount>
        </FormWrapper>
      </StyledMainContent>
    </>
  );
}
