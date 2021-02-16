import styled from "styled-components";

export const ButtonE = styled.a`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#fff" : "#006bb6")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#292929" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: #292929 solid 1px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.1rem;
  /* transition: all 0.2s ease-in-out; */

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #000;
    background-color: rgba(255, 255, 255, 0.7);
  }
  @media screen and (max-width: 760px) {
    /* display: block; */
    margin-bottom: 0;
  } ;
`;

/*
export const ButtonE = styled.a`
  border-radius: 50px;
  text-decoration: none;

  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  background-color: rgba(255, 255, 255, 0.2);
  border: "red solid 1px";
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #000;
    background: #c0c0c0;
  }
  @media screen and (max-width: 760px) {
    display: block;
    margin: 1rem;
    margin-bottom: 0;
  } ;
`;

*/
