import React, { useState } from "react";
import styled from "styled-components";
import logo from "../logo.svg";
import Dropzone from "./dropzone"

export default function Main() {

  return (
    <AppWrapper>
        <Header>Texty Time</Header>
        <Dropzone/>

    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  width: 100vw;
  max-width: 640px;
  margin: 0px auto;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 20vh;
  overflow: scroll;
  overflow: hidden;
  height: 100%;
  text-align: center;
`;

const Header = styled.h1`
  color: ${props => props.theme.secondary};
  font-size: 2em;
  margin: auto;
  width: 100%;
  margin-bottom: 1rem;
`;
