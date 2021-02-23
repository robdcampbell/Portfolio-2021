import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterWrap = styled.div`
  border-top: #757272 solid 1px;
  
  // background: linear-gradient(90deg, rgb(111, 8, 196), rgb(230, 22, 102));
  
  padding: 3rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-evenly;
  align-items: baseline;
  background: linear-gradient()
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    justify-content: flex-start;
    align-items: baseline;
  }
`;
export const FooterContainerRight = styled.div`
  display: flex;
  align-items: baseline;

  @media screen and (max-width: 800px) {
    display: block;
  }
`;
export const FooterExternalLink = styled.a`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  padding-right: 2rem;
  font-weight: 200;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: #c0c0c0;
    transition: 0.3s ease-out;
  }
`;

export const SocialLogo = styled(Link)`
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-weight: bold;
`;
export const FooterP = styled.p`
  font-size: 1rem;
  font-weight: 200;
  text-transform: uppercase;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 800px) {
    margin-top: 0.5rem;
    justify-content: space-between;
    width: 200px;
  }
`;

export const SocialIconLink = styled.a`
  font-size: 1.5rem;
`;
