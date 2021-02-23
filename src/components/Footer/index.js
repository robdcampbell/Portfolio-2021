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
  FooterP,
} from "./FooterElements";

const Footer = ({ darkMode }) => {
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
          <BsArrow90DegUp className={darkMode ? " a__dark " : " a__light"} />
          <FooterP className={darkMode ? " a__dark " : " a__light"}>
            to the top.
          </FooterP>
        </SocialLogo>

        <FooterExternalLink
          href="mailto:rdeancampbell@gmail.com"
          className={darkMode ? " a__dark " : " a__light"}
        >
          rdeancampbell@gmail.com
        </FooterExternalLink>

        <FooterContainerRight>
          <SocialIcons>
            <SocialIconLink
              className={darkMode ? " a__dark " : " a__light"}
              href="https://github.com/robdcampbell"
              target="_blank"
              aria-label="Github"
            >
              <FaGithub />
            </SocialIconLink>

            <SocialIconLink
              className={darkMode ? " a__dark " : " a__light"}
              href="https://www.linkedin.com/in/rob-campbell-a6354a75/"
              target="_blank"
              aria-label="Linkedin"
            >
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink
              className={darkMode ? " a__dark " : " a__light"}
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
