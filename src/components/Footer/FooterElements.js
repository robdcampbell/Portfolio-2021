import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterWrap = styled.div`
  border-top: #757272 solid 1px;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: baseline;

    * {
      margin-top: 0.5rem;
    }
  }
`;
export const FooterContainerRight = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;
export const FooterExternalLink = styled.a`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  padding-right: 2rem;
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
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const SocialIcons = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  font-size: 24px;
  padding-right: 1rem;
`;
