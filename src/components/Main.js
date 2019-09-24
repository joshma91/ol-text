import React, { useState } from "react";
import styled from "styled-components";
import Typed from "react-typed";
import Dropzone from "./Dropzone";
import SubmitButton from "./Button";
import Table from "./Table";
import Error from "./Error";
import { sendFile } from "../utils";

const API_URL = "https://wordcount-api.dev.openlaw.io/api/wordcount/v1/upload";

export default function Main() {
  // Hooks to manage state variables
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState(null);
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [fileInfo, setFileInfo] = useState(null);

  // Callback function to handle click, passed into Button
  async function handleAnalyzeClicked() {
    
    // Case where file hasn't been selected
    if (!files) {
      setError(true);
      setErrorMessage("Please select a file first");
    } else {
      try {
        // Upload file and make API call
        setLoading(true);
        const fileInfo = await sendFile(API_URL, files[0]);

        // Valid result with a wordcount in the response
        if (fileInfo.totalCount) {
          setError(false);
          setFileInfo(fileInfo);

          // Response returns a wordcount of 0
        } else {
          setError(true);
          setErrorMessage("Woops, your file appears to be empty");
        }

        // Handles server thrown errors
      } catch {
        setError(true);
        setErrorMessage("There seems to be a problem with reading your file");
      }
      setLoading(false);
    }
  }

  return (
    <AppWrapper>
      <Header>
        <Typed
          loop
          strings={["Texty Time"]}
          typeSpeed={70}
          backSpeed={50}
          startDelay={200}
          backDelay={1200}
        />
      </Header>
      <Dropzone setFiles={setFiles} />
      <SubmitButton onClick={() => handleAnalyzeClicked()} loading={loading} />
      <Error isError={isError} errorMessage={errorMessage} />
      <Table fileInfo={fileInfo} />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
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
