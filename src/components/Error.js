import React from "react";
import styled from "styled-components";

export default function Error({ isError, errorMessage }) {
  console.log(isError)
  return (
    <StyledError isError={isError}>{errorMessage}</StyledError>
  );
}

const StyledError = styled.h2`
  text-align: center;
  width: 100%;
  display: ${props => props.isError ? 'block' : 'none'}
  color: ${props => props.theme.primary}
`;
