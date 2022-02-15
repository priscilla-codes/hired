import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
  StyledNavbar,
  CenteredNav,
  LeftNav,
  Logo,
  RightNav,
  RightNavItems,
  EmployerDropdown,
  JobseekerDropdown,
  LogInLink,
  NavbarToggle,
  SignUpLink
} from '../styles/Navbar.styled';

export default function Navbar() {
  return (
    <StyledNavbar>
      <CenteredNav>
        <LeftNav>
          <Logo alt="Hired" src="./images/logo.svg" />
        </LeftNav>
        <RightNav>
          <RightNavItems>
            <EmployerDropdown>
              <a href="#">
                <span>Hire Talent</span>
                <img alt="Hired" src="./images/toggle-icon.svg" />
              </a>
            </EmployerDropdown>
            <JobseekerDropdown>
              <a href="#">
                <span>Find a Job</span>
                <img alt="Hired" src="./images/toggle-icon.svg" />
              </a>
            </JobseekerDropdown>
            <LogInLink>
              <a href="#">Log In</a>
            </LogInLink>
            <SignUpLink>
              <a href="#">Get Started</a>
            </SignUpLink>
          </RightNavItems>
          <NavbarToggle>
            <FontAwesomeIcon icon={faBars} />
          </NavbarToggle>
        </RightNav>
      </CenteredNav>
    </StyledNavbar>
  );
}
