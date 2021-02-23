import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  min-height: 690px;
  max-width: 1600px;
  margin-top: 3rem;
  position: relative;
  border-bottom: #757272 solid 1px;

  @media screen and (max-width: 480px) {
    min-height: 100vh;
    margin-top: 0;
  }
`;

export const HeroH1 = styled.h1`
  text-transform: uppercase;
  font-weight: 100;
  line-height: 0.9;
  font-size: 5rem;
  margin-bottom: 0.5rem;
  max-width: 500px;
  transition: 1s;

  &:hover {
    color: #c0c0c0;
  }

  @media screen and (max-width: 480px) {
    font-size: 3rem;
  }
`;

export const HeroP = styled.p`
  border-top: #555555 solid 1px;
  font-size: 24px;
  max-width: 500px;

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
  font-size: 1.25rem;
  margin-left: 0.5rem;
  margin-bottom: -0.2rem;
`;
