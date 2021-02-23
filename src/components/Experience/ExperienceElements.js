import styled from "styled-components";

export const ExperienceContainer = styled.section`
  display: flex;
  justify-content: center;
  border-top: #757272 solid 1px;
`;
export const ExperienceInnerWrapper = styled.div`
  max-width: 1200px;
  padding: 3rem;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ExperienceHeader = styled.div`
  width: 100%;
  padding-bottom: 2rem;
`;

export const ExperienceBody = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  justify-content: center;
  grid-gap: 2rem;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    padding: 0;
  }
`;

export const ExperienceCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 900px) {
    margin-top: 2rem;
    padding: 0;
  }
`;

export const StackCard = styled.div`
  width: 100%;
  transition: all 0.2s ease-in-out;
  margin-left: 3rem;
  @media screen and (max-width: 900px) {
    margin-top: 2rem;
    margin-left: 0;
    padding: 0;
  }
`;

export const StackLanguages = styled.div`
  display: flex;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const LanguagesLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LanguagesRight = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4rem;
  @media screen and (max-width: 900px) {
    margin-left: 0;
  }
`;

export const ExperienceH2 = styled.h2`
  font-weight: 200;
  text-transform: uppercase;
  font-size: 2.5rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    /* align-self: flex-start; */
  }
`;
export const ExperienceH3 = styled.h3`
  font-weight: 200;
  text-transform: uppercase;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: #555 solid 1px;
`;

export const ExperienceH4 = styled.h4`
  margin-bottom: 1rem;
  font-weight: 400;
  text-transform: uppercase;
`;

export const ExperienceP = styled.p`
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
  text-decoration: none;
  cursor: pointer;
`;
