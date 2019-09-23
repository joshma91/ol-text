import React, { useState } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import { faPeopleCarry } from "@fortawesome/free-solid-svg-icons";

export default function StyledDropzone({ setFiles }) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles
  } = useDropzone({
    accept: "text/plain",
    maxSize: 1e7,
    multiple: false,
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file)));
    }
  });

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size / 1000} KB
    </li>
  ));

  return (
    <Container data-testid="dropzone" {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
      <div>
        <input  {...getInputProps()} />
        <p>Drag 'n' drop a file here, or click to select file</p>
        <p>(Text files only, 10 MB max)</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-bottom: 1rem;
  border-width: 2px;
  border-radius: 15px;
  height: 175px;
  border-color: ${props => getColor(props)};
  background-color: ${props => props.theme.background};
  border-width: ${props =>
    props.isDragAccept || props.isDragReject ? "3px" : "2px"};
  border-style: dashed;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

const getColor = props => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  return props.theme.tertiary;
};
