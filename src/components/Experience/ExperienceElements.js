import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0c0c0c;
  color: #fff;
  border-bottom: #757272 solid 1px;

  @media screen and (max-width: 900px) {
    height: 1500px;
  }
  @media screen and (max-width: 480px) {
    height: 1500px;
  }
`;

// IF YOU WANT LESS COLUMNS, CHANGE HERE (Grid-template-columns)

export const AboutWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 3rem;
  padding: 0 50px;

  /* 
    @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
  } */
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-gap: 5rem;
    padding: 0 20px;
  }
`;

// MAKE ALL CONTAINERS SAME HEIGHT, NO MATTER WHAT CONTENT
export const AboutCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* align-items: center; */
  border-radius: 10px;
  max-height: 340px;
  padding-left: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  /* &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  } */
  @media screen and (max-width: 800px) {
    margin-top: 5rem;
  }
`;

export const AboutIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-top: 10px;
`;
export const AboutH1 = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const AboutH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  padding-bottom: 0.5rem;
  border-bottom: #c0c0c0 solid 1px;
`;

export const AboutH3 = styled.h3`
  font-size: 1.5rem;
  margin: 1.5rem 0;
  margin-top: 1.5rem;
  margin-left: 1rem;
  padding-bottom: 1.5rem 0;
  cursor: pointer;
  /* border-top: #c0c0c0 solid 1px; */
`;
export const AboutH4 = styled.h4`
  color: #fff;

  /* border-top: #c0c0c0 solid 1px; */
`;

export const AboutP = styled.p`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: flex-end;
  margin-top: 0.5rem;
  color: #c0c0c0;
  font-size: 1rem;
  line-height: 1.5;
`;

/////////////////
///  IMAGE   ///
///////////////

export const ImgWrap = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  margin: 0 auto;
  border-radius: 0.5rem;
  max-width: 555px;
  padding: 2rem 1rem;
  @media screen and (max-width: 760px) {
    width: 90%;
    padding: 0;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 0rem;
  }
`;
export const Img = styled.img`
  width: 100%;
  margin: 0;
  padding-right: 0;
  border-radius: 0.5rem;
`;

export const A = styled.a`
  margin-left: 1rem;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
`;
