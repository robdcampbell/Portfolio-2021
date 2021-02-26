import styled from "styled-components";

export const AboutContainer = styled.section`
  padding: 3rem;
  border-top: #757272 solid 1px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 900px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const AboutInnerWrapper = styled.div`
  max-width: 1200px;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AboutHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 900px) {
    justify-content: flex-start;
  }
`;

export const AboutBody = styled.div`
  display: flex;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const AboutCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  border-radius: 10px;

  transition: all 0.2s ease-in-out;
`;

export const AboutH2 = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 4rem;
  font-weight: 200;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const AboutH3 = styled.h3`
  font-size: 1.5rem;
  font-weight: 200;
  padding-bottom: 0.5rem;
  border-bottom: #555 solid 1px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const AboutP = styled.p`
  margin-top: 0.5rem;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
`;

// ****** IMAGE ****** //

export const ImgWrap = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3rem;
  border-radius: 0.5rem;
  max-width: 555px;
  @media screen and (max-width: 800px) {
    padding: 0;
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
export const Img = styled.img`
  margin: 0;
  max-height: 420px;
  padding-right: 0;
  border-radius: 0.5rem;
`;
