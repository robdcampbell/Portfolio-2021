import styled from "styled-components";
import { Link } from "react-scroll";

export const ButtonE = styled.a`
  border-radius: 50px;
  text-decoration: none;
  background: ${({ primary }) => (primary ? "#ccc" : "#ccc")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#000" : "#000")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  /* outline: none; */
  border: "#292929 solid 1px";
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #000;
    background: ${({ primary }) => (primary ? "#c0c0c0" : "#c0c0c0")};
  }
  @media screen and (max-width: 760px) {
    display: block;
    margin: 1rem;
    margin-bottom: 0;
  } ;
`;
