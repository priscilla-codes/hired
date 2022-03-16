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
  BottomRightLinks,
  ColumnHeader,
  ColumnList,
  ColumnListItem,
  BottomRightList,
  BottomRightListItem
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
            <ColumnHeader>Job-Seekers</ColumnHeader>
            <ColumnList>
              <ColumnListItem>
                <a href="#">How Hired Works</a>
              </ColumnListItem>
              <ColumnListItem>
                <a href="#">Refer a Friend</a>
              </ColumnListItem>
              <ColumnListItem>
                <a href="#">Candidate Sign Up</a>
              </ColumnListItem>
              <ColumnListItem>
                <a href="#">Partnerships</a>
              </ColumnListItem>
              <ColumnListItem>
                <a href="#">Salary Calculator</a>
              </ColumnListItem>
              <ColumnListItem>
                <a href="#">Success Stories</a>
              </ColumnListItem>
              <ColumnListItem>
                <a href="#">FAQ</a>
              </ColumnListItem>
            </ColumnList>
          </Column>
          <Column>
            <ColumnHeader>Employers</ColumnHeader>
            <ColumnList>
              <ColumnListItem>
                <a href="#">Why Hired</a>
              </ColumnListItem>
              <ColumnListItem>
                <a href="#">Pricing</a>
              </ColumnListItem>
              <ColumnListItem>
                <a href="#">Employer Sign Up</a>
              </ColumnListItem>
              <ColumnListItem>
                <a href="#">Partnerships</a>
              </ColumnListItem>
              <ColumnListItem>
                <a href="#">Success Stories</a>
              </ColumnListItem>
              <ColumnListItem>
                <a href="#">Talk Talent to Me</a>
              </ColumnListItem>
              <ColumnListItem>
                <a href="#">FAQ</a>
              </ColumnListItem>
            </ColumnList>
          </Column>
          <Column>
            <ColumnHeader>Resources</ColumnHeader>
            <ColumnList>
              <ColumnListItem>
                <a href="#">Content Hub</a>
              </ColumnListItem>
              <ColumnListItem>
                <a href="#">Blog</a>
              </ColumnListItem>
              <ColumnListItem>
                <a href="#">Company Directory</a>
              </ColumnListItem>
              <ColumnListItem>
                <a href="#">Skills Directory</a>
              </ColumnListItem>
              <ColumnListItem>
                <a href="#">Salaries Directory</a>
              </ColumnListItem>
              <ColumnListItem>
                <a href="#">Jobs Directory</a>
              </ColumnListItem>
              <ColumnListItem>
                <a href="#">Release Notes</a>
              </ColumnListItem>
            </ColumnList>
          </Column>
          <Column>
            <ColumnHeader>Company</ColumnHeader>
            <ColumnList>
              <ColumnListItem>
                <a href="#">Contact Us</a>
              </ColumnListItem>
              <ColumnListItem>
                <a href="#">About Hired</a>
              </ColumnListItem>
              <ColumnListItem>
                <a href="#">Diversity</a>
              </ColumnListItem>
              <ColumnListItem>
                <a href="#">Careers</a>
              </ColumnListItem>
              <ColumnListItem>
                <a href="#">Press</a>
              </ColumnListItem>
            </ColumnList>
          </Column>
        </FooterMenu>
        <FooterBottom>
          <Copyright>
            <span>&#169; 2022 Vettery, Inc. All Rights Reserved.</span>
          </Copyright>
          <BottomRightLinks>
            <BottomRightList>
              <BottomRightListItem>
                <a href="#">Privacy</a>
              </BottomRightListItem>
              <BottomRightListItem>
                <a href="#">Terms</a>
              </BottomRightListItem>
              <BottomRightListItem>
                <a href="#">Sitemap</a>
              </BottomRightListItem>
            </BottomRightList>
          </BottomRightLinks>
        </FooterBottom>
      </FooterContent>
    </StyledFooter>
  );
}
