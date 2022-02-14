import {
  StyledFooter,
  FooterContent,
  FooterMenu,
  Column,
  FooterBranding,
  FooterBrandingIcon,
  FooterLogo,
  SocialLinks,
  FooterBottom,
  Copyright,
  BottomRightLinks
} from '../styles/Footer.styled';

export default function Footer() {
  return (
    <StyledFooter>
      <FooterContent>
        <FooterMenu>
          <Column>
            <FooterBranding>
              <FooterBrandingIcon>
                <img
                  alt="Footer Branding Icon"
                  src="./images/footer-branding-icon.svg"
                />
              </FooterBrandingIcon>
              <FooterLogo>
                <img alt="Hired Logo" src="./images/footer-logo.svg" />
              </FooterLogo>
            </FooterBranding>
            <SocialLinks>
              <a href="#">
                <img alt="Facebook" src="./images/footer-facebook-icon.svg" />
              </a>
              <a href="#">
                <img alt="Twitter" src="./images/footer-twitter-icon.svg" />
              </a>
              <a href="#">
                <img alt="Instagram" src="./images/footer-instagram-icon.svg" />
              </a>
              <a href="#">
                <img alt="LinkedIn" src="./images/footer-linkedin-icon.svg" />
              </a>
            </SocialLinks>
          </Column>
          <Column>
            <h4>Job-Seekers</h4>
            <ul>
              <li>
                <a href="#">How Hired Works</a>
              </li>
              <li>
                <a href="#">Refer a Friend</a>
              </li>
              <li>
                <a href="#">Candidate Sign Up</a>
              </li>
              <li>
                <a href="#">Partnerships</a>
              </li>
              <li>
                <a href="#">Salary Calculator</a>
              </li>
              <li>
                <a href="#">Success Stories</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </Column>
          <Column>
            <h4>Employers</h4>
            <ul>
              <li>
                <a href="#">Why Hired</a>
              </li>
              <li>
                <a href="#">Employer Sign Up</a>
              </li>
              <li>
                <a href="#">Partnerships</a>
              </li>
              <li>
                <a href="#">Success Stories</a>
              </li>
              <li>
                <a href="#">Talk Talent to Me</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </Column>
          <Column>
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#">Content Hub</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Company Directory</a>
              </li>
              <li>
                <a href="#">Skills Directory</a>
              </li>
              <li>
                <a href="#">Salaries Directory</a>
              </li>
              <li>
                <a href="#">Jobs Directory</a>
              </li>
              <li>
                <a href="#">Release Notes</a>
              </li>
            </ul>
          </Column>
          <Column>
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">About Hired</a>
              </li>
              <li>
                <a href="#">Diversity</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
            </ul>
          </Column>
        </FooterMenu>
        <FooterBottom>
          <Copyright>
            <span>&#169; 2022 Vettery, Inc. All Rights Reserved.</span>
          </Copyright>
          <BottomRightLinks>
            <ul>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </BottomRightLinks>
        </FooterBottom>
      </FooterContent>
    </StyledFooter>
  );
}
