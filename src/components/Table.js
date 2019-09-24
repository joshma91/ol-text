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
  }
  & td {
    max-width: 250px;
    min-width: 100px;
    word-wrap: break-word;
    padding: 0.75rem;
    vertical-align: middle;
    border-top: 3px solid ${props => props.theme.background};
  }
`;
