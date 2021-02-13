import React from "react";
import { FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";
import { BsArrow90DegUp } from "react-icons/bs";
import { animateScroll as scroll } from "react-scroll";

import {
  FooterWrap,
  FooterContainerRight,
  FooterExternalLink,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <FooterWrap id="contact">
        <SocialLogo
          to="/"
          onClick={toggleHome}
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          <BsArrow90DegUp className="text__primary" /> <p>to the top.</p>
        </SocialLogo>

        <FooterContainerRight>
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
        </FooterContainerRight>
      </FooterWrap>
    </>
  );
};

export default Footer;
