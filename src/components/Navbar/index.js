import React, { useState, useEffect } from "react";
import { FaBars, FaAsterisk, FaRegMoon } from "react-icons/fa";
import { BsBrightnessHigh } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLeft,
  NavRight,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  ChangeColorMode,
} from "./NavbarElements";

const Navbar = ({ toggle, darkMode, setColorMode }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [robAvatar, setRobAvatar] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    // return () => {
    //   cleanup
    // }
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav
          scrollNav={scrollNav}
          className={darkMode ? "dark__mode" : "light__mode"}
        >
          <NavbarContainer>
            <NavLeft>
              <NavLogo
                to="/"
                onClick={toggleHome}
                onMouseEnter={(e) => setRobAvatar(true)}
                onMouseLeave={(e) => setRobAvatar(false)}
                className={darkMode ? " a__dark " : " a__light"}
              >
                {darkMode ? (
                  <FaAsterisk />
                ) : (
                  <FaAsterisk style={{ color: "#292929" }} />
                )}
              </NavLogo>
            </NavLeft>
            <NavRight>
              <ChangeColorMode>
                {darkMode ? (
                  <BsBrightnessHigh onClick={setColorMode} />
                ) : (
                  <FaRegMoon
                    style={{ color: "#0a0a0a" }}
                    onClick={setColorMode}
                  />
                )}
              </ChangeColorMode>
              <MobileIcon onClick={toggle}>
                {darkMode ? (
                  <FaBars />
                ) : (
                  <FaBars style={{ color: "#0a0a0a" }} />
                )}
              </MobileIcon>

              <NavMenu>
                <NavItem>
                  <NavLinks
                    to="project-1"
                    smooth={"true"}
                    duration={500}
                    spy={"true"}
                    exact="true"
                    offset={-80}
                    className={darkMode ? "a__dark" : "a__light"}
                  >
                    projects
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to="about"
                    smooth={"true"}
                    duration={1000}
                    spy={"true"}
                    exact="true"
                    offset={-80}
                    className={darkMode ? "a__dark" : "a__light"}
                  >
                    about
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to="contact"
                    smooth={"true"}
                    duration={1000}
                    spy={"true"}
                    exact="true"
                    offset={-80}
                    className={darkMode ? "a__dark" : "a__light"}
                  >
                    contact
                  </NavLinks>
                </NavItem>
              </NavMenu>
            </NavRight>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
