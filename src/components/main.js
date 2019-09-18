import React, { useState } from "react";
import styled from "styled-components";
import useTypingEffect from "use-typing-effect";
import Dropzone from "./dropzone";
import SubmitButton from "./button";
import { sendFile } from "../utils"

const API_URL = "https://wordcount-api.dev.openlaw.io/api/wordcount/v1/upload"
export default function Main() {
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState(null)

  async function handleAnalyzeClicked() {
    setLoading(true);
    const fileInfo = await sendFile(API_URL, files[0])
    setLoading(false)
    console.log(fileInfo)
  }

  const headingText = useTypingEffect(["Texty Time"], {
    loop: true
  });

  return (
    <AppWrapper>
      <Header>{headingText}</Header>
      <Dropzone setFiles={setFiles}/>
      <SubmitButton
        text="Analyze"
        loadingText="Analyzing"
        onClick={() => {
          handleAnalyzeClicked();
        }}
        loading={loading ? 1 : 0}
      />
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
  font-size: 2.5em;
  font-family: monospace
  margin: auto;
  width: 100%;
  margin-bottom: 1rem;
`;
