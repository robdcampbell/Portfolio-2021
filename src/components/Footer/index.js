import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaGithub,
  FaCodepen,
} from "react-icons/fa";
import { BsArrow90DegUp } from "react-icons/bs";
import { animateScroll as scroll } from "react-scroll";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterExternalLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <FooterContainer id="contact">
        <FooterWrap>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo
                to="/"
                onClick={toggleHome}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                <BsArrow90DegUp /> to the top.
              </SocialLogo>

              <FooterExternalLink href="mailto:rdeancampbell@gmail.com">
                rdeancampbell@gmail.com
              </FooterExternalLink>
              <SocialIcons>
                <SocialIconLink
                  href="https://github.com/robdcampbell"
                  target="_blank"
                  aria-label="Github"
                >
                  <FaGithub />
                </SocialIconLink>

                <SocialIconLink
                  href="https://www.linkedin.com/in/rob-campbell-a6354a75/"
                  target="_blank"
                  aria-label="Linkedin"
                >
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink
                  href="https://codepen.io/robdcampbell"
                  target="_blank"
                  aria-label="Codepen"
                >
                  <FaCodepen />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
