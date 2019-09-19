import React from "react";
import styled from "styled-components";

export default function Table({ fileInfo }) {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th scope="col">Word/Character</th>
          <th scope="col">Count</th>
        </tr>
      </thead>
      <tbody>
        {fileInfo && (
            <tr>
                <td>Total Words</td>
                <td>{fileInfo.totalCount}</td>
            </tr>
        )}
        {fileInfo && Object.keys(fileInfo.counts).map(key => {
          const value = fileInfo.counts[key];
          return (
            <tr>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
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
