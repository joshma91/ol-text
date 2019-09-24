import React, { useEffect, useRef } from "react";
import styled from "styled-components";

export default function Table({ fileInfo }) {
  useEffect(() => {
    if (fileInfo && fileInfo.counts)
      window.scrollTo({ behavior: "smooth", top: tableRef.current.offsetTop });
  }, [fileInfo]);

  const tableRef = useRef(null);

  return fileInfo && fileInfo.counts ? (
    <StyledTable ref={tableRef}>
      <thead>
        <tr>
          <th scope="col">Word/Character</th>
          <th scope="col">Count</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Total Words</td>
          <td>{fileInfo.totalCount}</td>
        </tr>
        {Object.keys(fileInfo.counts).map((key, i) => {
          const value = fileInfo.counts[key];
          return (
            <tr key={i}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  ) : null;
}

const StyledTable = styled.table`
  margin: 1rem auto 1rem auto;
  border-collapse: collapse;
  background-color: transparent;
  table-layout: fixed;
  color: ${props => props.theme.secondary};
  & th {
    text-align: inherit;
    padding: 0.75rem;
    border-bottom: 3px solid ${props => props.theme.background};
  }
  & td {
    max-width: 300px;
    min-width: 100px;
    word-wrap: break-word;
    padding: 0.75rem;
    vertical-align: middle;
    :nth-child(even) {
      border-radius: 0 8px 8px 0;
    }
    :nth-child(odd) {
      border-radius: 8px 0 0 8px;
    }
  }
  & tr {
    :nth-child(1) { font-weight: bold }
    :nth-child(even) {
      background-color: ${props => props.theme.secondary};
    }
    :nth-child(even) {
      color: ${props => props.theme.tertiary};
    }
    :nth-child(odd) {
      color: ${props => props.theme.secondary};
    }
  }
`;
