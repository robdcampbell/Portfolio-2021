import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
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
  /* transition: all 0.2s ease-in-out; */

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #c0c0c0;
    background: ${({ primary }) => (primary ? "#fff" : "#74bbed")};
  }
  @media screen and (max-width: 760px) {
    display: block;
    margin-bottom: 0;
  } ;
`;
