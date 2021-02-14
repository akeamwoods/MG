import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-bottom:10px;

  td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #66929e;
    color: white;
  }
`;
