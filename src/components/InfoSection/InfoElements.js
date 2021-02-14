import styled from "styled-components";

export const InfoContainer = styled.div`
  border-top: #757272 solid 1px;
  padding: 5rem 2rem;

  @media screen and (max-width: 768px) {
    padding: 4rem 2rem;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;

  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  @media screen and (max-width: 800px) {
  }
`;

// FIX THIS ! ! !

// export const InfoRow = styled.div`
//   display: grid;
//   grid-template-columns: minmax(auto, 1fr);
//   align-items: center;

//   grid-template-areas: ${({ imgStart }) =>
//     imgStart ? `'col2 col1'` : `'col1 col2'`};

//   @media screen and (max-width: 760px) {
//     grid-template-areas: ${({ imgStart }) =>
//       imgStart ? `'col1' 'col2'` : `'col1' 'col2' `};
//   }
// `;

// export const Column1 = styled.div`
//   margin-bottom: 15px;
//   padding: 0 15px;
//   grid-area: col1;
// `;
// export const Column2 = styled.div`
//   margin-bottom: 15px;
//   padding: 0 15px;
//   grid-area: col2;
// `;

export const InfoRow = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1' 'col2' `};
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
`;
export const Column2 = styled.div`
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;
export const Heading = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 3.5rem;
  line-height: 1.1;
  font-weight: 600;

  @media screen and (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 2rem;
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  @media screen and (max-width: 760px) {
    display: block;
  } ;
`;

export const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  border-radius: 0.5rem;
  border: 1px solid #c0c0c0;
  max-height: 420px;
  max-width: 420px;
  padding: 2rem 1rem;
  @media screen and (max-width: 760px) {
    width: 80%;
    padding: 0;
  }
  @media screen and (max-width: 480px) {
    width: 80%;
    padding: 0rem;
  }
`;
export const Img = styled.img`
  width: 100%;
  max-height: 400px;
  margin: 0;
  padding-right: 0;
  border-radius: 0.5rem;
`;
