import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  min-height: 690px;
  max-width: 1200px;
  margin-top: 3rem;
  position: relative;

  @media screen and (max-width: 480px) {
    min-height: 100vh;
    margin-top: 0;
  }
`;

export const HeroH1 = styled.h1`
  /* text-transform: uppercase; */
  font-weight: 200;
  font-size: 5rem;
  /* letter-spacing: -0.4rem; */
  border-bottom: #555555 solid 1px;

  @media screen and (max-width: 480px) {
    font-size: 3rem;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  font-size: 24px;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: flex-start;
  /* flex-direction: column; */
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
