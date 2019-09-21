import React from "react";
import styled from "styled-components";

export default function Table({ fileInfo }) {
  return fileInfo && fileInfo.counts ? (
    <StyledTable>
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
  color: ${props => props.theme.secondary} 
  & th {
    text-align: inherit;
    padding: 0.75rem;
  }
  & td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 3px solid ${props => props.theme.background};
  }
`;
