import styled from 'styled-components';

export const StyledFooter = styled.div`
  background-color: #180c60;
  display: flex;
  justify-content: center;
`;
export const FooterContent = styled.div`
  width: 72rem;
  padding: 5.4rem 0 2.6rem 0;

  a {
    text-decoration: none;
    font-family: Roboto, sans-serif;
  }

  @media (min-width: 61.9375em) and (max-width: 74.9375em) {
    width: 60rem;
  }

  @media (max-width: 61.875em) {
    width: 46rem;
    margin-right: auto;
    margin-left: auto;
  }

  @media (max-width: 50em) {
    padding-left: 1.8rem;
    padding-right: 1.8rem;
  }

  @media (max-width: 47.9375em) {
    width: 100%;
  }
`;
export const FooterMenu = styled.div`
  display: flex;

  @media (max-width: 61.875em) {
    flex-wrap: wrap;
  }
`;
export const Column = styled.div`
  flex-basis: 20%;

  h4 {
    color: #6e5aea;
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
  }

  ul {
    margin-top: 1.1rem;
    a {
      color: #fff;
      font-size: 1rem;

      @media (max-width: 47.9375em) {
        font-size: 0.9rem;
      }
    }
    li:not(:first-child) {
      margin-top: 1.4rem;
    }
  }

  &:first-child {
    @media (max-width: 61.875em) {
      color: red;
      flex-basis: 100%;
      display: flex;
      margin-bottom: 3.1rem;
    }
  }

  @media (max-width: 61.875em) {
    flex-basis: 50%;
    margin-top: 2rem;
  }

  @media (max-width: 47.9375em) {
    margin-top: 2rem;
  }
`;
export const FooterBranding = styled.div`
  display: flex;
  img {
    max-width: 100%;
    font-style: italic;
    vertical-align: middle;
  }

  @media (max-width: 61.875em) {
    flex-basis: 50%;
  }
`;
export const FooterBrandingIcon = styled.div`
  height: 3rem;
  width: 3rem;
  border-right: solid 1px #47249b;
  padding-right: 0.6rem;
  margin-right: 0.6rem;
  display: flex;
  align-items: center;
`;
export const FooterLogo = styled.div`
  padding-top: 0.7rem;

  img {
    height: 1.5rem;
  }
`;
export const SocialLinks = styled.div`
  padding-top: 1.2rem;
  a {
    &:not(:first-child) {
      margin-left: 0.6rem;
    }
  }
`;
export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #180c60;
  margin-top: 8.6rem;
  color: #6e5aea;
  font-size: 0.8rem;
  font-family: Roboto, sans-serif;
  font-weight: 500;

  @media (max-width: 47.9375em) {
    margin-top: 5.1 rem;
  }
`;
export const Copyright = styled.div`
  display: flex;
  align-items: center;
`;
export const BottomRightLinks = styled.div`
  ul {
    display: flex;

    a {
      color: #6e5aea;
    }

    li:not(:first-child) {
      margin-left: 0.5rem;
    }
  }
`;
