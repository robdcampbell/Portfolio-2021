import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <ErrorWrapper>
        <h1>Oh crap, we've 404'd</h1>
        <h1>
          let's go: <ReturnHome to="/">home.</ReturnHome>
        </h1>
      </ErrorWrapper>
    </>
  );
};

export default Error;

const ErrorWrapper = styled.main`
  padding-top: 3rem;
  text-align: center;
  background-color: #c0c0c0;
  color: #fff;
  height: 100vh;
`;

const ReturnHome = styled(Link)`
  text-decoration: none;
  color: lightblue;
`;
