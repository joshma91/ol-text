import React, { useState } from "react";
import styled from "styled-components";
import useTypingEffect from "use-typing-effect";
import Dropzone from "./Dropzone";
import SubmitButton from "./Button";
import Table from "./Table";
import Error from "./Error";
import { sendFile } from "../utils";

const API_URL = "https://wordcount-api.dev.openlaw.io/api/wordcount/v1/upload";
export default function Main() {
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState(null);
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [fileInfo, setFileInfo] = useState(null);

  async function handleAnalyzeClicked() {
    if (!files) {
      setError(true);
      setErrorMessage("Please select a file first");
    } else {
      try {
        setLoading(true);
        const fileInfo = await sendFile(API_URL, files[0]);
        setError(false);
        setFileInfo(fileInfo);
      } catch {
        setError(true);
        setErrorMessage("There seems to be a problem with reading your file");
      }
      setLoading(false);
    }
  }

  const headingText = useTypingEffect(["Texty Time"], {
    loop: true
  });

  return (
    <AppWrapper>
      <Header>{headingText}</Header>
      <Dropzone setFiles={setFiles} />
      <SubmitButton
        onClick={() => {
          handleAnalyzeClicked();
        }}
        loading={loading}
      />
      <Error isError={isError} errorMessage={errorMessage} />
      <Table fileInfo={fileInfo} />
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
  color: ${props => props.theme.primary};
  font-size: 2.5em;
  font-family: monospace
  margin: auto;
  width: 100%;
  margin-bottom: 1rem;
`;
