import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

// styled components: exporting the variable = styled.TAGNAME
// followed up with backTicks, and the CSS properties added to that tag
export const Nav = styled.nav`
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100 px;
  @media screen and (max-width: 960px) {
    padding-left: 0;
  }
`;

export const NavRight = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

// Named like this because the "LinkR" will act as a logo link, and use router to send you to another page.
export const NavLogo = styled(LinkR)`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  /* padding: 2rem; */
  font-weight: bold;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #c0c0c0;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    color: #fff;
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ChangeColorMode = styled.p`
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    border-bottom: #fff;
  }
`;

export const NavItem = styled.li`
  /* height: 80px; */
  &:hover {
    transition: all 0.2s ease-in-out;
    border-bottom: #fff;
  }
`;
//&.active is the active underline at the Nav
export const NavLinks = styled(LinkS)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0rem 1rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #c0c0c0;
    border-bottom: #fff solid 1px;
  }
`;
