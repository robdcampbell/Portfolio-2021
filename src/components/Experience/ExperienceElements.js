import styled from "styled-components";

export const AboutContainer = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: #757272 solid 1px;
`;

export const AboutHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-bottom: 2rem;

  @media screen and (max-width: 900px) {
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0;
  }
`;

export const AboutBody = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  justify-content: center;
  grid-gap: 2rem;
  padding: 0 3.5rem;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    padding: 0;
    /* padding: 1rem; */
  }
`;

// MAKE ALL CONTAINERS SAME HEIGHT, NO MATTER WHAT CONTENT
export const AboutCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 1rem;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 900px) {
    margin-top: 2rem;
    padding: 0;
  }
`;

export const AboutH2 = styled.h2`
  font-weight: 200;
  text-transform: uppercase;
  font-size: 2.5rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    align-self: flex-start;
  }
`;
export const AboutH3 = styled.h3`
  font-weight: 200;
  text-transform: uppercase;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: #555 solid 1px;
`;

export const AboutH4 = styled.h4`
  /* border-top: #c0c0c0 solid 1px; */
`;

export const AboutP = styled.p`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: flex-end;
  margin-top: 0.5rem;

  font-size: 1rem;
  line-height: 1.5;
`;

export const A = styled.a`
  font-weight: 200;
  text-transform: uppercase;
  margin-left: 1rem;
  text-decoration: none;

  cursor: pointer;
`;
