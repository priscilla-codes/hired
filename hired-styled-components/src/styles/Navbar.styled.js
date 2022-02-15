import styled, { css } from 'styled-components';

const sharedStyle = css`
  span {
    color: #0c0c0c;
    padding-right: 5px;
    display: block;
  }
  img {
    width: auto;
  }
`;

export const StyledNavbar = styled.div`
  display: flex;
  justify-content: center;
  height: 4.5rem;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

  img {
    max-width: 100%;
    font-style: italic;
    vertical-align: middle;
  }

  @media (max-width: 61.875em) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const CenteredNav = styled.div`
  display: flex;
  width: 72rem;
  justify-content: space-between;
  transition: width 0.4s ease-in-out;
  align-items: center;

  @media (min-width: 61.9375em) and (max-width: 74.9375em) {
    width: 60rem;
  }
  @media (max-width: 61.875em) {
    width: 100%;
  }
`;

// Left Nav
export const LeftNav = styled.div`
  flex: 1 0;
`;

export const Logo = styled.img`
  width: 113px;
  height: 35px;
`;

// Right Nav
export const RightNav = styled.div``;

export const RightNavItems = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;

  li:not(:first-child) {
    margin: 0 0 0 40px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.6rem 0.5rem;
    color: #fff;

    &:link {
      text-decoration: none;
    }
  }

  @media (max-width: 61.875em) {
    display: none;
  }
`;
export const EmployerDropdown = styled.li`
  ${sharedStyle}
`;
export const JobseekerDropdown = styled.li`
  ${sharedStyle}
`;
export const LogInLink = styled.li`
  a {
    color: #6e5aea;
  }
`;
export const SignUpLink = styled.li`
  padding: 10px 35px;
  height: 50px;
  background-color: #6e5aea;
  border-radius: 0.5rem;
`;
export const NavbarToggle = styled.div`
  color: #514e4e;
  .fa-bars {
    font-size: 2.5rem;
  }

  @media (min-width: 61.9375em) {
    display: none;
  }
`;
